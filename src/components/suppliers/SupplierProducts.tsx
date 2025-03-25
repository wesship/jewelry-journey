
import React, { useState, useEffect } from "react";
import { supplierApi, SupplierProduct } from "@/services/supplierApi";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

  const handleImport = (product: SupplierProduct) => {
    // In a real app, this would add the product to your store
    toast({
      title: "Product Imported",
      description: `${product.name} has been added to your store.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display mb-2">Supplier Products</h2>
        <p className="text-jewelry-muted mb-6">
          Browse and import products from your connected suppliers.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-80 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="flex items-center justify-center p-8 border border-red-500/20 rounded-md bg-red-500/5">
          <div className="flex items-center text-red-500">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No Products Found</h3>
          <p className="text-jewelry-muted mb-6">
            Connect to suppliers to start browsing their product catalogs.
          </p>
          <Button onClick={() => loadProducts()}>Refresh Products</Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <span className="text-jewelry-muted">
              {products.length} products found
            </span>
            <Button variant="outline" size="sm" onClick={() => loadProducts()}>
              Refresh
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleImport(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Import Product
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
