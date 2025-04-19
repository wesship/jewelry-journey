
import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { WebhookType } from './types'

interface WebhookAddFormProps {
  onClose: () => void;
}

export function WebhookAddForm({ onClose }: WebhookAddFormProps) {
  const [newWebhook, setNewWebhook] = useState({
    name: '',
    type: 'custom' as WebhookType,
    url: '',
    headers: {},
  })

  const queryClient = useQueryClient()

  const addWebhookMutation = useMutation({
    mutationFn: async (webhook: typeof newWebhook) => {
      const { error } = await supabase
        .from('webhooks')
        .insert([webhook])
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhooks'] })
      onClose()
      toast.success('Webhook added successfully')
    },
    onError: (error) => {
      toast.error('Failed to add webhook: ' + error.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addWebhookMutation.mutate(newWebhook)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Webhook</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={newWebhook.name}
              onChange={(e) => setNewWebhook({ ...newWebhook, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={newWebhook.type}
              onValueChange={(value: WebhookType) => 
                setNewWebhook({ ...newWebhook, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slack">Slack</SelectItem>
                <SelectItem value="discord">Discord</SelectItem>
                <SelectItem value="zapier">Zapier</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">Webhook URL</Label>
            <Input
              id="url"
              type="url"
              value={newWebhook.url}
              onChange={(e) => setNewWebhook({ ...newWebhook, url: e.target.value })}
              required
            />
          </div>
          <Button type="submit">Add Webhook</Button>
        </form>
      </CardContent>
    </Card>
  )
}
