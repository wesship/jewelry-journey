
import { WebhookTemplate } from './types';

export const webhookTemplates: Record<string, WebhookTemplate> = {
  slack: {
    name: 'Slack',
    type: 'slack',
    description: 'Send notifications to a Slack channel',
    urlPattern: 'https://hooks.slack.com/services/...',
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    defaultEvents: [
      { eventType: 'order.created', enabled: true },
      { eventType: 'order.fulfilled', enabled: true }
    ],
    instructions: 'Create a webhook in your Slack workspace settings and paste the URL here.'
  },
  discord: {
    name: 'Discord',
    type: 'discord',
    description: 'Send notifications to a Discord channel',
    urlPattern: 'https://discord.com/api/webhooks/...',
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    defaultEvents: [
      { eventType: 'order.created', enabled: true },
      { eventType: 'product.created', enabled: true }
    ],
    instructions: 'In Discord, go to channel settings > Integrations > Create Webhook and copy the URL.'
  },
  zapier: {
    name: 'Zapier',
    type: 'zapier',
    description: 'Connect to Zapier automations',
    urlPattern: 'https://hooks.zapier.com/hooks/catch/...',
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    defaultEvents: [
      { eventType: 'customer.created', enabled: true },
      { eventType: 'order.created', enabled: true }
    ],
    instructions: 'Create a webhook trigger in Zapier and paste the webhook URL here.'
  },
  custom: {
    name: 'Custom',
    type: 'custom',
    description: 'Configure a custom webhook endpoint',
    urlPattern: 'https://',
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    instructions: 'Enter the URL of your custom webhook endpoint.'
  }
};
