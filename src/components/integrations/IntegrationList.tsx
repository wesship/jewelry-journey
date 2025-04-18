
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/integrations/supabase/client"
import { IntegrationCard } from "./IntegrationCard"

export function IntegrationList() {
  const { data: integrations, refetch } = useQuery({
    queryKey: ['integrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('integrations')
        .select('*')
      
      if (error) throw error
      return data
    },
  })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {integrations?.map((integration) => (
        <IntegrationCard
          key={integration.id}
          name={integration.name}
          baseUrl={integration.base_url}
          isActive={integration.is_active}
          apiKey={integration.api_key}
          onUpdate={refetch}
        />
      ))}
    </div>
  )
}
