import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus, RefreshCw, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { Database } from '@/integrations/supabase/types'
import { WebhookLogViewer } from './WebhookLogViewer'
import { EditWebhookForm } from './EditWebhookForm'

type WebhookType = Database['public']['Enums']['webhook_type']

export function WebhookManager() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedWebhook, setSelectedWebhook] = useState<string | null>(null)
  const [editingWebhook, setEditingWebhook] = useState<string | null>(null)
  const [newWebhook, setNewWebhook] = useState<{
    name: string;
    type: WebhookType;
    url: string;
    headers: Record<string, string>;
  }>({
    name: '',
    type: 'custom',
    url: '',
    headers: {},
  })

  const queryClient = useQueryClient()

  const { data: webhooks, isLoading } = useQuery({
    queryKey: ['webhooks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('webhooks')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    },
  })

  const addWebhookMutation = useMutation({
    mutationFn: async (webhook: typeof newWebhook) => {
      const { error } = await supabase
        .from('webhooks')
        .insert([webhook])
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhooks'] })
      setShowAddForm(false)
      setNewWebhook({ name: '', type: 'custom', url: '', headers: {} })
      toast.success('Webhook added successfully')
    },
    onError: (error) => {
      toast.error('Failed to add webhook: ' + error.message)
    },
  })

  const toggleWebhookMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
      const { error } = await supabase
        .from('webhooks')
        .update({ is_active: isActive })
        .eq('id', id)
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhooks'] })
    },
    onError: (error) => {
      toast.error('Failed to update webhook: ' + error.message)
    },
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addWebhookMutation.mutate(newWebhook)
  }

  const handleTestWebhook = (webhookId: string) => {
    testWebhookMutation.mutate(webhookId)
  }

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

      {showAddForm && (
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
      )}

      <div className="grid gap-4">
        {webhooks?.map((webhook) => (
          <Card key={webhook.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <CardTitle>{webhook.name}</CardTitle>
                  <Switch
                    checked={webhook.is_active}
                    onCheckedChange={(checked) => 
                      toggleWebhookMutation.mutate({ id: webhook.id, isActive: checked })
                    }
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleTestWebhook(webhook.id)}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Test
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingWebhook(webhook.id)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div>Type: <span className="capitalize">{webhook.type}</span></div>
                  <div className="text-sm text-muted-foreground break-all">
                    URL: {webhook.url}
                  </div>
                  {webhook.last_triggered_at && (
                    <div className="text-sm text-muted-foreground">
                      Last triggered: {new Date(webhook.last_triggered_at).toLocaleString()}
                    </div>
                  )}
                </div>

                {editingWebhook === webhook.id && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Edit Webhook</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <EditWebhookForm 
                        webhook={webhook}
                        onClose={() => setEditingWebhook(null)}
                      />
                    </CardContent>
                  </Card>
                )}

                {selectedWebhook === webhook.id && (
                  <WebhookLogViewer webhookId={webhook.id} />
                )}

                <Button
                  variant="outline"
                  onClick={() => setSelectedWebhook(selectedWebhook === webhook.id ? null : webhook.id)}
                >
                  {selectedWebhook === webhook.id ? 'Hide Logs' : 'View Logs'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
