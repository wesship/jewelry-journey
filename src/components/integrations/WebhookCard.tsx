
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Settings, RefreshCw, Bell, BarChart2 } from "lucide-react"
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'
import { WebhookLogViewer } from './WebhookLogViewer'
import { WebhookActivityChart } from './WebhookActivityChart'
import { EditWebhookForm } from './EditWebhookForm'
import { Webhook, WebhookEventConfig } from './types'
import { Badge } from "@/components/ui/badge"

interface WebhookCardProps {
  webhook: Webhook;
  onTest: (webhookId: string) => void;
}

export function WebhookCard({ webhook, onTest }: WebhookCardProps) {
  const [showLogs, setShowLogs] = React.useState(false)
  const [showActivity, setShowActivity] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const queryClient = useQueryClient()

  // Extract events from webhook settings or use empty array
  const events: WebhookEventConfig[] = 
    webhook.events || 
    (webhook.settings?.events as WebhookEventConfig[] || []);

  const enabledEvents = events.filter(event => event.enabled);

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

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold">{webhook.name}</h3>
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
              onClick={() => onTest(webhook.id)}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Test
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowActivity(!showActivity)}
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Activity
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
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

          {enabledEvents.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center text-sm font-medium">
                <Bell className="h-4 w-4 mr-2" />
                Configured Events:
              </div>
              <div className="flex flex-wrap gap-2">
                {enabledEvents.map(event => (
                  <Badge key={event.eventType} variant="secondary">
                    {event.eventType}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {showActivity && (
            <WebhookActivityChart webhookId={webhook.id} />
          )}

          {isEditing && (
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Edit Webhook</h3>
              </CardHeader>
              <CardContent>
                <EditWebhookForm 
                  webhook={webhook}
                  onClose={() => setIsEditing(false)}
                />
              </CardContent>
            </Card>
          )}

          {showLogs && (
            <WebhookLogViewer webhookId={webhook.id} />
          )}

          <Button
            variant="outline"
            onClick={() => setShowLogs(!showLogs)}
          >
            {showLogs ? 'Hide Logs' : 'View Logs'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
