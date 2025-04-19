
import { Layout } from "@/components/layout"
import { IntegrationList } from "@/components/integrations/IntegrationList"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddIntegrationDialog } from "@/components/integrations/AddIntegrationDialog"

export default function Integrations() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">External Integrations</h1>
            <p className="text-gray-600">
              Connect your store to external services and APIs to enhance your business capabilities.
            </p>
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center gap-2"
          >
            <Plus size={18} />
            Add Integration
          </Button>
        </div>
        
        <div className="grid gap-6 mb-6">
          <div className="bg-black/5 p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Integration Dashboard</h2>
            <p className="mb-4">Connect your jewelry business with payment processors, AI services, shipping providers, and more.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <div className="font-medium">Connected Services</div>
                <div className="text-2xl font-bold mt-1">3</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <div className="font-medium">API Requests (24h)</div>
                <div className="text-2xl font-bold mt-1">127</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <div className="font-medium">Status</div>
                <div className="text-2xl font-bold mt-1 text-green-500">Healthy</div>
              </div>
            </div>
          </div>
        </div>
        
        <IntegrationList />
        
        <AddIntegrationDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen} 
        />
      </div>
    </Layout>
  )
}
