
import React from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { priceRanges } from "./FilterPanel";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material?: string;
}

interface ProductGridProps {
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedPriceRange: (range: number) => void;
  isLoading?: boolean;
}

export const ProductGrid = ({ 
  products,
  filteredProducts, 
  searchQuery, 
  setSearchQuery,
  setSelectedCategory,
  setSelectedPriceRange,
  isLoading = false
}: ProductGridProps) => {
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPriceRange(0);
  };

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
        <p className="text-jewelry-muted">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-4 text-jewelry-muted">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
      </p>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No results found</h2>
          <p className="text-jewelry-muted mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};
