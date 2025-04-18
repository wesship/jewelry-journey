
import { Layout } from "@/components/layout"
import { IntegrationList } from "@/components/integrations/IntegrationList"

export default function Integrations() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">Integrations</h1>
        <IntegrationList />
      </div>
    </Layout>
  )
}
