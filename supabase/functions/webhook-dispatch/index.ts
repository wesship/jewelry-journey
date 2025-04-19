
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { webhookId, payload } = await req.json()
    
    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get webhook configuration
    const { data: webhook, error: webhookError } = await supabase
      .from('webhooks')
      .select('*')
      .eq('id', webhookId)
      .single()

    if (webhookError || !webhook) {
      throw new Error('Webhook not found')
    }

    if (!webhook.is_active) {
      throw new Error('Webhook is not active')
    }

    // Make the webhook call
    const response = await fetch(webhook.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...webhook.headers,
      },
      body: JSON.stringify(payload),
    })

    const responseData = await response.json().catch(() => null)

    // Log the webhook call
    await supabase.from('webhook_logs').insert({
      webhook_id: webhookId,
      status: response.status.toString(),
      request_data: payload,
      response_data: responseData,
    })

    // Update last triggered timestamp
    await supabase
      .from('webhooks')
      .update({ last_triggered_at: new Date().toISOString() })
      .eq('id', webhookId)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
