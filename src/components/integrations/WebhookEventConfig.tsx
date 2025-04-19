
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { WebhookEventConfig, WebhookEventType } from './types'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

interface WebhookEventConfigProps {
  events: WebhookEventConfig[];
  onChange: (events: WebhookEventConfig[]) => void;
}

const availableEvents: { value: WebhookEventType; label: string }[] = [
  { value: 'order.created', label: 'Order Created' },
  { value: 'order.updated', label: 'Order Updated' },
  { value: 'order.fulfilled', label: 'Order Fulfilled' },
  { value: 'product.created', label: 'Product Created' },
  { value: 'product.updated', label: 'Product Updated' },
  { value: 'customer.created', label: 'Customer Created' },
  { value: 'customer.updated', label: 'Customer Updated' },
  { value: 'custom', label: 'Custom Event' }
];

export function WebhookEventConfig({ events, onChange }: WebhookEventConfigProps) {
  const toggleEvent = (eventType: WebhookEventType, enabled: boolean) => {
    const updatedEvents = [...events];
    const existingIndex = updatedEvents.findIndex(e => e.eventType === eventType);
    
    if (existingIndex >= 0) {
      updatedEvents[existingIndex].enabled = enabled;
    } else {
      updatedEvents.push({ eventType, enabled });
    }
    
    onChange(updatedEvents);
  };

  const updateCustomPayload = (eventType: WebhookEventType, payload: Record<string, any>) => {
    const updatedEvents = [...events];
    const existingIndex = updatedEvents.findIndex(e => e.eventType === eventType);
    
    if (existingIndex >= 0) {
      updatedEvents[existingIndex].customPayload = payload;
    }
    
    onChange(updatedEvents);
  };

  const isEventEnabled = (eventType: WebhookEventType) => {
    return events.some(e => e.eventType === eventType && e.enabled);
  };

  const getCustomPayload = (eventType: WebhookEventType) => {
    const event = events.find(e => e.eventType === eventType);
    return event?.customPayload || {};
  };

  return (
    <div className="space-y-4">
      <div className="text-sm font-medium mb-2">Trigger webhook on these events:</div>
      
      <div className="space-y-2">
        {availableEvents.map((event) => (
          <div key={event.value}>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id={`event-${event.value}`}
                checked={isEventEnabled(event.value)}
                onCheckedChange={(checked) => 
                  toggleEvent(event.value, checked === true)
                }
              />
              <Label htmlFor={`event-${event.value}`}>{event.label}</Label>
            </div>
            
            {isEventEnabled(event.value) && (
              <Accordion type="single" collapsible className="mt-2 mb-4">
                <AccordionItem value="custom-payload">
                  <AccordionTrigger className="text-xs">
                    Customize payload
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Label htmlFor={`payload-${event.value}`}>Custom Payload (JSON)</Label>
                      <Textarea
                        id={`payload-${event.value}`}
                        value={JSON.stringify(getCustomPayload(event.value), null, 2)}
                        onChange={(e) => {
                          try {
                            const payload = JSON.parse(e.target.value);
                            updateCustomPayload(event.value, payload);
                          } catch (error) {
                            // Invalid JSON, don't update
                          }
                        }}
                        placeholder={`{\n  "event": "${event.value}",\n  "data": {}\n}`}
                        className="font-mono text-xs h-36"
                      />
                      <div className="text-xs text-muted-foreground">
                        Enter a valid JSON object to customize the payload for this event.
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
