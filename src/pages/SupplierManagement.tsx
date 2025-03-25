
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupplierConnectionPanel } from "@/components/suppliers/SupplierConnectionPanel";
import { SupplierProducts } from "@/components/suppliers/SupplierProducts";

const SupplierManagement = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display mb-4">Supplier Management</h1>
          <p className="text-jewelry-muted max-w-2xl mx-auto">
            Connect to dropshipping suppliers, browse their products, and manage your inventory.
          </p>
        </div>

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
