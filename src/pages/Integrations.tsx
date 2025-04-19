
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { IntegrationList } from "@/components/integrations/IntegrationList";
import { CRMConfig } from "@/components/integrations/CRMConfig";
import { ARTryOn } from "@/components/ar/ARTryOn";
import { WebhookManager } from "@/components/integrations/WebhookManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function Integrations() {
  const [activeTab, setActiveTab] = useState("webhooks");

  return (
    <Layout>
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-3xl font-bold text-white mb-4">Integrations</h1>
        <p className="text-gray-300 mb-8">
          Connect external services and set up webhooks to extend your application functionality
        </p>
        
        <Tabs 
          defaultValue={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid grid-cols-4 w-fit">
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              <TabsTrigger value="crm">CRM</TabsTrigger>
              <TabsTrigger value="ar">Virtual Try-On</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="webhooks" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Webhook Management</CardTitle>
                <CardDescription>
                  Create, configure and monitor webhooks to connect with external services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WebhookManager />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crm" className="space-y-6">
            <CRMConfig />
          </TabsContent>
          
          <TabsContent value="ar" className="space-y-6">
            <ARTryOn />
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>External Services</CardTitle>
                <CardDescription>
                  Manage connections to third-party services and APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IntegrationList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
