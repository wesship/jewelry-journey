
import React, { useState, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { WebhookFilterBar } from './WebhookFilterBar'
import { WebhookPagination } from './WebhookPagination'
import { WebhookList } from './WebhookList'
import { WebhookAddForm } from './WebhookAddForm'
import { Webhook } from './types'

export function WebhookManager() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const queryClient = useQueryClient()

  const { data: webhooks, isLoading } = useQuery({
    queryKey: ['webhooks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('webhooks')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data as Webhook[]
    },
  })

  const filteredWebhooks = useMemo(() => {
    if (!webhooks) return []

    return webhooks.filter(webhook => {
      const matchesSearch = webhook.name.toLowerCase().includes(search.toLowerCase()) ||
                          webhook.url.toLowerCase().includes(search.toLowerCase())
      const matchesType = !typeFilter || webhook.type === typeFilter

      return matchesSearch && matchesType
    })
  }, [webhooks, search, typeFilter])

  const paginatedWebhooks = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredWebhooks.slice(start, end)
  }, [filteredWebhooks, currentPage, pageSize])

  const totalPages = Math.ceil((filteredWebhooks?.length || 0) / pageSize)

  const testWebhookMutation = useMutation({
    mutationFn: async (webhookId: string) => {
      const response = await supabase.functions.invoke('webhook-dispatch', {
        body: {
          webhookId,
          payload: {
            event: 'test',
            timestamp: new Date().toISOString(),
          },
        },
      })
      
      if (response.error) throw response.error
      return response.data
    },
    onSuccess: () => {
      toast.success('Webhook tested successfully')
      queryClient.invalidateQueries({ queryKey: ['webhook-logs'] })
    },
    onError: (error) => {
      toast.error('Failed to test webhook: ' + error.message)
    },
  })

  if (isLoading) {
    return <div>Loading webhooks...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Webhooks</h2>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Webhook
        </Button>
      </div>

      <WebhookFilterBar
        search={search}
        onSearchChange={setSearch}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
      />

      {showAddForm && (
        <WebhookAddForm onClose={() => setShowAddForm(false)} />
      )}

      <WebhookList 
        webhooks={paginatedWebhooks}
        onTestWebhook={(webhookId) => testWebhookMutation.mutate(webhookId)}
      />

      <WebhookPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setCurrentPage(1)
        }}
      />
    </div>
  )
}
