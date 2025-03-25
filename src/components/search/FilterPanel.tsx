
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Categories for filtering
const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

// Price ranges for filtering
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $1000", min: 0, max: 1000 },
  { label: "$1000 - $2000", min: 1000, max: 2000 },
  { label: "$2000 - $3000", min: 2000, max: 3000 },
  { label: "Over $3000", min: 3000, max: Infinity }
];

interface FilterPanelProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedPriceRange: number;
  setSelectedPriceRange: (range: number) => void;
}

export const FilterPanel = ({ 
  showFilters, 
  setShowFilters, 
  selectedCategory, 
  setSelectedCategory, 
  selectedPriceRange, 
  setSelectedPriceRange 
}: FilterPanelProps) => {
  return (
    <>
      <div className="mb-8">
        <Button 
          variant="outline" 
          className="flex items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      
      {showFilters && (
        <div className="mb-10 p-6 border rounded-lg bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-primary text-black" : ""}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range, index) => (
                  <Button
                    key={range.label}
                    variant={selectedPriceRange === index ? "default" : "outline"}
                    className={selectedPriceRange === index ? "bg-primary text-black" : ""}
                    onClick={() => setSelectedPriceRange(index)}
                    size="sm"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { priceRanges };
