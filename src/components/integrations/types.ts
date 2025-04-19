
export type WebhookType = "slack" | "discord" | "zapier" | "custom"

export interface Webhook {
  id: string;
  name: string;
  type: WebhookType;
  url: string;
  headers: Record<string, string>;
  is_active: boolean;
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
