
import React from 'react'
import { WebhookCard } from './WebhookCard'
import { Webhook } from './types'

interface WebhookListProps {
  webhooks: Webhook[];
  onTestWebhook: (webhookId: string) => void;
}

export function WebhookList({ webhooks, onTestWebhook }: WebhookListProps) {
  return (
    <div className="grid gap-4">
      {webhooks.map((webhook) => (
        <WebhookCard 
          key={webhook.id}
          webhook={webhook}
          onTest={onTestWebhook}
        />
      ))}
    </div>
  )
}
