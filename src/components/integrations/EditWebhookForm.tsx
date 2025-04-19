
import React, { useState, useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { WebhookEventConfig as WebhookEventSelector } from './WebhookEventConfig'
import { Webhook, WebhookEventConfig, WebhookType } from './types'

interface EditWebhookFormProps {
  webhook: Webhook;
  onClose: () => void;
}

export function EditWebhookForm({ webhook, onClose }: EditWebhookFormProps) {
  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    type: WebhookType;
    url: string;
    headers: Record<string, string>;
    events: WebhookEventConfig[];
  }>({
    ...webhook,
    events: webhook.events || (webhook.settings as any)?.events || []
  })
  
  const queryClient = useQueryClient()

  const updateWebhookMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase
        .from('webhooks')
        .update({
          name: data.name,
          type: data.type,
          url: data.url,
          headers: data.headers,
          settings: { 
            ...((webhook.settings as any) || {}),
            events: data.events 
          }
        })
        .eq('id', data.id)

      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhooks'] })
      toast.success('Webhook updated successfully')
      onClose()
    },
    onError: (error) => {
      toast.error('Failed to update webhook: ' + error.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateWebhookMutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Select
          value={formData.type}
          onValueChange={(value: WebhookType) => setFormData({ ...formData, type: value })}
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
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          required
        />
      </div>
      
      <WebhookEventSelector 
        events={formData.events}
        onChange={(events) => setFormData({ ...formData, events })}
      />

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Update Webhook</Button>
      </div>
    </form>
  )
}
