
import React from "react";
import { Layout } from "@/components/layout";
import { SearchBar } from "@/components/search/SearchBar";
import { FilterPanel } from "@/components/search/FilterPanel";
import { ProductGrid } from "@/components/search/ProductGrid";
import { useProductFilter } from "@/hooks/useProductFilter";
import { allProducts } from "@/data/productData";

const Search = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    showFilters,
    setShowFilters,
    filteredProducts
  } = useProductFilter(allProducts);
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display mb-4">Search Our Collection</h1>
          <p className="text-jewelry-muted max-w-2xl mx-auto">
            Find the perfect piece of jewelry from our exclusive collection.
          </p>
        </div>
        
        <div className="mb-8">
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
        </div>
        
        <FilterPanel 
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
        
        <ProductGrid 
          products={allProducts}
          filteredProducts={filteredProducts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
          setSelectedPriceRange={setSelectedPriceRange}
        />
      </div>
    </Layout>
  );
};

export default Search;
