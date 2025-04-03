
import React from "react";
import { supplierApi } from "@/services/supplierApi";

export const SupplierHeader = () => {
  const suppliers = supplierApi.getSuppliers();
  const connectedSuppliers = suppliers.filter(s => s.isConnected).length;
  const totalSuppliers = suppliers.length;
  
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-display mb-4">Supplier Management</h1>
      <p className="text-jewelry-muted max-w-2xl mx-auto mb-6">
        Connect to dropshipping suppliers, browse their products, and manage your inventory.
      </p>
      
      <div className="flex justify-center gap-6 mt-8">
        <div className="text-center px-6 py-4 bg-black border border-gold-light/20 rounded-lg">
          <p className="text-3xl font-display text-primary">{connectedSuppliers}</p>
          <p className="text-sm text-jewelry-muted">Connected</p>
        </div>
        <div className="text-center px-6 py-4 bg-black border border-gold-light/20 rounded-lg">
          <p className="text-3xl font-display">{totalSuppliers}</p>
          <p className="text-sm text-jewelry-muted">Total Suppliers</p>
        </div>
        <div className="text-center px-6 py-4 bg-black border border-gold-light/20 rounded-lg">
          <p className="text-3xl font-display text-green-500">{connectedSuppliers > 0 ? "Active" : "Inactive"}</p>
          <p className="text-sm text-jewelry-muted">Dropshipping Status</p>
        </div>
      </div>
    </div>
  );
};
