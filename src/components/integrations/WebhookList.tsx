
import React from 'react'
import { WebhookCard } from './WebhookCard'
import { WebhookLoadingSkeleton } from './WebhookLoadingSkeleton'
import { WebhookErrorBoundary } from './WebhookErrorBoundary'
import { Webhook } from './types'

interface WebhookListProps {
  webhooks: Webhook[];
  onTestWebhook: (webhookId: string) => void;
  isLoading?: boolean;
}

export function WebhookList({ webhooks, onTestWebhook, isLoading }: WebhookListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4">
        {[...Array(3)].map((_, index) => (
          <WebhookLoadingSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <WebhookErrorBoundary>
      <div className="grid gap-4">
        {webhooks.map((webhook) => (
          <WebhookCard 
            key={webhook.id}
            webhook={webhook}
            onTest={onTestWebhook}
          />
        ))}
      </div>
    </WebhookErrorBoundary>
  )
}
