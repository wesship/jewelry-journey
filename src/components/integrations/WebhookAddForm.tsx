
import React, { useState, useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { WebhookType, WebhookEventConfig } from './types'
import { webhookTemplates } from './WebhookTemplates'
import { WebhookEventConfig as WebhookEventSelector } from './WebhookEventConfig'
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface WebhookAddFormProps {
  onClose: () => void;
}

export function WebhookAddForm({ onClose }: WebhookAddFormProps) {
  const [newWebhook, setNewWebhook] = useState({
    name: '',
    type: 'custom' as WebhookType,
    url: '',
    headers: {},
    events: [] as WebhookEventConfig[],
  })
  const [selectedTab, setSelectedTab] = useState('custom');

  const queryClient = useQueryClient()

  // Update form when template is selected
  useEffect(() => {
    if (selectedTab !== 'custom') {
      const template = webhookTemplates[selectedTab];
      setNewWebhook({
        ...newWebhook,
        type: template.type,
        headers: template.defaultHeaders,
        events: template.defaultEvents || [],
        // Don't override name and URL if they're already set
        name: newWebhook.name || template.name,
        url: newWebhook.url || template.urlPattern,
      });
    }
  }, [selectedTab]);

  const addWebhookMutation = useMutation({
    mutationFn: async (webhook: typeof newWebhook) => {
      // Create a serializable version of the data
      const webhookData = {
        name: webhook.name,
        type: webhook.type,
        url: webhook.url,
        headers: webhook.headers,
        settings: JSON.parse(JSON.stringify({ events: webhook.events }))
      };
      
      const { error } = await supabase
        .from('webhooks')
        .insert([webhookData])
      
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
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="custom">Custom</TabsTrigger>
            <TabsTrigger value="slack">Slack</TabsTrigger>
            <TabsTrigger value="discord">Discord</TabsTrigger>
            <TabsTrigger value="zapier">Zapier</TabsTrigger>
          </TabsList>
        </Tabs>

        {selectedTab !== 'custom' && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Setup Instructions</AlertTitle>
            <AlertDescription>
              {webhookTemplates[selectedTab].instructions}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={newWebhook.name}
              onChange={(e) => setNewWebhook({ ...newWebhook, name: e.target.value })}
              required
              placeholder={selectedTab !== 'custom' ? webhookTemplates[selectedTab].name : 'My Webhook'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="url">Webhook URL</Label>
            <Input
              id="url"
              type="url"
              value={newWebhook.url}
              onChange={(e) => setNewWebhook({ ...newWebhook, url: e.target.value })}
              required
              placeholder={selectedTab !== 'custom' ? webhookTemplates[selectedTab].urlPattern : 'https://'}
            />
          </div>

          <WebhookEventSelector 
            events={newWebhook.events} 
            onChange={(events) => setNewWebhook({ ...newWebhook, events })}
          />
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Add Webhook</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
