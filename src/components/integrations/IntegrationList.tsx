
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/integrations/supabase/client"
import { IntegrationCard } from "./IntegrationCard"
import { RefreshCw } from "lucide-react"
import { toast } from "sonner"

export function IntegrationList() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  
  const { data: integrations, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['integrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('integrations')
        .select('*')
      
      if (error) throw error
      return data
    },
  })

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await refetch()
      toast.success("Integrations refreshed successfully")
    } catch (error) {
      toast.error("Failed to refresh integrations")
      console.error(error)
    } finally {
      setIsRefreshing(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Error loading integrations</h3>
        <p className="mb-4">{error instanceof Error ? error.message : "Unknown error occurred"}</p>
        <button 
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition-colors"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    )
  }

  if (!integrations || integrations.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-center">
        <h3 className="text-lg font-medium mb-2">No integrations found</h3>
        <p className="text-gray-500 mb-6">Get started by adding your first integration</p>
        <button 
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors"
          disabled={isRefreshing}
        >
          <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button 
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          disabled={isRefreshing}
        >
          <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
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
    </div>
  )
}
