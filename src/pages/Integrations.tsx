
import { Layout } from "@/components/layout"
import { IntegrationList } from "@/components/integrations/IntegrationList"

export default function Integrations() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">External Integrations</h1>
          <p className="text-gray-600">
            Manage connections to external services and APIs for your store.
          </p>
        </div>
        <IntegrationList />
      </div>
    </Layout>
  )
}
