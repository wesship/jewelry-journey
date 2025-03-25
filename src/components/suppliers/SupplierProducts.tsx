
import React, { useState, useEffect } from "react";
import { supplierApi, SupplierProduct } from "@/services/supplierApi";
import { ProductsLoadingState } from "./ProductsLoadingState";
import { ProductsErrorState } from "./ProductsErrorState";
import { EmptyProductState } from "./EmptyProductState";
import { SupplierProductList } from "./SupplierProductList";

export function SupplierProducts() {
  const [products, setProducts] = useState<SupplierProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const allProducts = await supplierApi.getAllProducts();
      setProducts(allProducts);
    } catch (err) {
      console.error("Error loading products:", err);
      setError("Failed to load products from suppliers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display mb-2">Supplier Products</h2>
        <p className="text-jewelry-muted mb-6">
          Browse and import products from your connected suppliers.
        </p>
      </div>

      {loading ? (
        <ProductsLoadingState />
      ) : error ? (
        <ProductsErrorState error={error} />
      ) : products.length === 0 ? (
        <EmptyProductState onRefresh={loadProducts} />
      ) : (
        <SupplierProductList products={products} onRefresh={loadProducts} />
      )}
    </div>
  );
}
