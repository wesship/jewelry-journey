
import React from "react";
import { SupplierProduct } from "@/services/supplierApi";
import { SupplierProductCard } from "./SupplierProductCard";
import { Button } from "@/components/ui/button";

interface SupplierProductListProps {
  products: SupplierProduct[];
  onRefresh: () => void;
}

export const SupplierProductList = ({ products, onRefresh }: SupplierProductListProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <span className="text-jewelry-muted">
          {products.length} products found
        </span>
        <Button variant="outline" size="sm" onClick={onRefresh}>
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <SupplierProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
