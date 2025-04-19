
import { Layout } from "@/components/layout";
import { IntegrationList } from "@/components/integrations/IntegrationList";
import { CRMConfig } from "@/components/integrations/CRMConfig";
import { ARTryOn } from "@/components/ar/ARTryOn";

export default function Integrations() {
  return (
    <Layout>
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-3xl font-bold text-white mb-8">Integrations</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">CRM Configuration</h2>
          <CRMConfig />
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Virtual Try-On</h2>
          <ARTryOn />
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Other Integrations</h2>
          <IntegrationList />
        </section>
      </div>
    </Layout>
  );
}
