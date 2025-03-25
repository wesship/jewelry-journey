
import React from "react";
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupplierConnectionPanel } from "@/components/suppliers/SupplierConnectionPanel";
import { SupplierProducts } from "@/components/suppliers/SupplierProducts";
import { SupplierHeader } from "@/components/suppliers/SupplierHeader";

const SupplierManagement = () => {
  return (
    <Layout>
      <div className="container py-12">
        <SupplierHeader />
        
        <Tabs defaultValue="connections" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connections" className="space-y-6">
            <SupplierConnectionPanel />
          </TabsContent>
          
          <TabsContent value="products" className="space-y-6">
            <SupplierProducts />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SupplierManagement;
