
export type WebhookType = "slack" | "discord" | "zapier" | "custom"

export type WebhookEventType = 
  | "order.created" 
  | "order.updated" 
  | "order.fulfilled" 
  | "product.created" 
  | "product.updated" 
  | "customer.created" 
  | "customer.updated" 
  | "custom"

export interface WebhookEventConfig {
  eventType: WebhookEventType;
  enabled: boolean;
  customPayload?: Record<string, any>;
}

export interface Webhook {
  id: string;
  name: string;
  type: WebhookType;
  url: string;
  headers: Record<string, string>;
  is_active: boolean;
  events?: WebhookEventConfig[];
  settings?: Record<string, any>;
  last_triggered_at?: string;
  created_at?: string;
}

export interface WebhookLog {
  id: string;
  webhook_id: string;
  status: string;
  request_data: any;
  response_data: any;
  created_at: string;
}

export interface WebhookTemplate {
  name: string;
  type: WebhookType;
  description: string;
  urlPattern: string;
  defaultHeaders: Record<string, string>;
  defaultEvents?: WebhookEventConfig[];
  instructions?: string;
}
