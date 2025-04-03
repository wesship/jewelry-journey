
import React, { useState, useMemo } from "react";
import { AlertCircle } from "lucide-react";
import { supplierApi } from "@/services/supplierApi";
import { SupplierConnectionCard } from "./SupplierConnectionCard";
import { SupplierFilterBar } from "./SupplierFilterBar";

export function SupplierConnectionPanel() {
  const suppliers = supplierApi.getSuppliers();
  const [filters, setFilters] = useState({ search: "", status: "all" });
  
  const handleConnect = (supplierId: string, apiKey: string) => {
    supplierApi.setApiKey(supplierId, apiKey);
  };

  const filteredSuppliers = useMemo(() => {
    return suppliers.filter(supplier => {
      // Filter by search term
      const matchesSearch = supplier.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           supplier.description.toLowerCase().includes(filters.search.toLowerCase());
      
      // Filter by connection status
      const matchesStatus = 
        filters.status === "all" || 
        (filters.status === "connected" && supplier.isConnected) ||
        (filters.status === "disconnected" && !supplier.isConnected);
      
      return matchesSearch && matchesStatus;
    });
  }, [suppliers, filters]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display mb-2">Connect to Suppliers</h2>
        <p className="text-jewelry-muted mb-6">
          Configure your API connections to start importing products and processing orders.
        </p>
      </div>
      
      <SupplierFilterBar onFilterChange={setFilters} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSuppliers.map((supplier) => (
          <SupplierConnectionCard
            key={supplier.id}
            supplier={supplier}
            onConnect={handleConnect}
          />
        ))}
      </div>
      
      <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
          <div>
            <h3 className="text-yellow-500 font-medium">Getting Started</h3>
            <p className="text-sm text-jewelry-muted">
              To obtain API keys, you'll need to register for developer accounts with each supplier.
              Visit their websites and look for API or Developer documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
