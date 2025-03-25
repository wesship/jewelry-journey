
import { useState, useMemo } from 'react';
import { priceRanges } from '@/components/search/FilterPanel';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const useProductFilter = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search query, category, and price range
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRanges[selectedPriceRange].min && 
                          product.price <= priceRanges[selectedPriceRange].max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, selectedPriceRange]);
  
  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    showFilters,
    setShowFilters,
    filteredProducts
  };
};
