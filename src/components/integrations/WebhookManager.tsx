
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
import { WebhookErrorBoundary } from './WebhookErrorBoundary'

export function WebhookManager() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [showInactive, setShowInactive] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  })
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
      
      // Transform webhooks to add events from settings if needed
      return (data || []).map((webhook: any) => {
        return {
          ...webhook,
          events: webhook.settings?.events || []
        };
      }) as Webhook[];
    },
  })

  const filteredWebhooks = useMemo(() => {
    if (!webhooks) return []

    return webhooks.filter(webhook => {
      const matchesSearch = webhook.name.toLowerCase().includes(search.toLowerCase()) ||
                          webhook.url.toLowerCase().includes(search.toLowerCase())
      const matchesType = !typeFilter || webhook.type === typeFilter
      const matchesActive = showInactive || webhook.is_active
      const matchesDate = !dateRange.from || !dateRange.to || 
        (webhook.created_at && 
          new Date(webhook.created_at) >= dateRange.from &&
          new Date(webhook.created_at) <= dateRange.to)

      return matchesSearch && matchesType && matchesActive && matchesDate
    })
  }, [webhooks, search, typeFilter, showInactive, dateRange])

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
            testData: true,
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
    <WebhookErrorBoundary>
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
          showInactive={showInactive}
          onShowInactiveChange={setShowInactive}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        {showAddForm && (
          <WebhookAddForm onClose={() => setShowAddForm(false)} />
        )}

        <WebhookList 
          webhooks={paginatedWebhooks}
          onTestWebhook={(webhookId) => testWebhookMutation.mutate(webhookId)}
          isLoading={isLoading}
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
    </WebhookErrorBoundary>
  )
}
