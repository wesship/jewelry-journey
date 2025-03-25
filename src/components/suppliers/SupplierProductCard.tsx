
import React from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { SupplierProduct } from "@/services/supplierApi";
import { toast } from "@/hooks/use-toast";

interface SupplierProductCardProps {
  product: SupplierProduct;
}

export const SupplierProductCard = ({ product }: SupplierProductCardProps) => {
  const handleImport = (product: SupplierProduct) => {
    // In a real app, this would add the product to your store
    toast({
      title: "Product Imported",
      description: `${product.name} has been added to your store.`,
    });
  };

  return (
    <div className="group relative">
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
  );
};
