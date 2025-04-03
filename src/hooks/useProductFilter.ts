
import { useState, useMemo, useEffect } from 'react';
import { priceRanges } from '@/components/search/FilterPanel';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material?: string;
}

export const useProductFilter = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [customPriceRange, setCustomPriceRange] = useState<[number, number]>([0, 10000]);
  const [activeFilterCount, setActiveFilterCount] = useState(0);
  
  // Update active filter count when filters change
  useEffect(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (selectedMaterials.length > 0) count += selectedMaterials.length;
    if (selectedPriceRange !== 0) count++;
    if (customPriceRange[0] > 0 || customPriceRange[1] < 10000) count++;
    
    setActiveFilterCount(count);
  }, [selectedCategory, selectedMaterials, selectedPriceRange, customPriceRange]);
  
  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPriceRange(0);
    setSelectedMaterials([]);
    setCustomPriceRange([0, 10000]);
  };
  
  // Filter products based on search query, category, materials, and price ranges
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      // Material filtering - if no materials are selected, show all products
      const matchesMaterial = selectedMaterials.length === 0 || 
        (product.material && selectedMaterials.some(m => product.material?.includes(m)));
      
      // Price filtering - use custom range or predefined range
      let matchesPrice = true;
      
      if (customPriceRange[0] > 0 || customPriceRange[1] < 10000) {
        // Use custom price range if it's been modified
        matchesPrice = product.price >= customPriceRange[0] && product.price <= customPriceRange[1];
      } else if (selectedPriceRange > 0) {
        // Use predefined range if a non-default one is selected
        matchesPrice = product.price >= priceRanges[selectedPriceRange].min && 
                      product.price <= priceRanges[selectedPriceRange].max;
      }
      
      return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, selectedPriceRange, selectedMaterials, customPriceRange]);
  
  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    showFilters,
    setShowFilters,
    filteredProducts,
    selectedMaterials,
    setSelectedMaterials,
    customPriceRange,
    setCustomPriceRange,
    clearAllFilters,
    activeFilterCount
  };
};
