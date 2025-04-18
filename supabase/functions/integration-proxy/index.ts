
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
    const { integration, endpoint, method = 'GET', data } = await req.json()
    
    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get integration configuration
    const { data: integrationConfig } = await supabase
      .from('integrations')
      .select('*')
      .eq('name', integration)
      .single()

    if (!integrationConfig || !integrationConfig.api_key) {
      throw new Error(`Integration ${integration} not configured`)
    }

    // Make the API call
    const response = await fetch(`${integrationConfig.base_url}${endpoint}`, {
      method,
      headers: {
        'Authorization': `Bearer ${integrationConfig.api_key}`,
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    })

    const responseData = await response.json()

    // Log the API call
    await supabase.from('integration_logs').insert({
      integration_name: integration,
      endpoint,
      request_data: data,
      response_data: responseData,
      status: response.status.toString(),
    })

    return new Response(JSON.stringify(responseData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: response.status,
    })

  } catch (error) {
    console.error('Error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
