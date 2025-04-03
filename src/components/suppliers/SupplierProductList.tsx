
import React, { useState } from "react";
import { SupplierProduct } from "@/services/supplierApi";
import { SupplierProductCard } from "./SupplierProductCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface SupplierProductListProps {
  products: SupplierProduct[];
  onRefresh: () => void;
}

export const SupplierProductList = ({ products, onRefresh }: SupplierProductListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  // Get unique categories from products
  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-8"
            />
          </div>
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-black border border-gold-light/20 rounded-md px-3 py-2 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-jewelry-muted text-sm">
            {filteredProducts.length} products found
          </span>
          <Button variant="outline" size="sm" onClick={onRefresh} className="ml-auto md:ml-0">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <SupplierProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border border-gold-light/10 rounded-md">
          <p className="text-jewelry-muted">No products match your search criteria.</p>
        </div>
      )}
    </>
  );
};
