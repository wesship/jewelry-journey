
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

// Categories for filtering
const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

// Materials for filtering
const materials = ["Gold", "Silver", "Platinum", "Rose Gold", "White Gold"];

// Price ranges for filtering
export const priceRanges = [
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
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
  customPriceRange: [number, number];
  setCustomPriceRange: (range: [number, number]) => void;
  clearAllFilters: () => void;
  activeFilterCount: number;
}

export const FilterPanel = ({ 
  showFilters, 
  setShowFilters, 
  selectedCategory, 
  setSelectedCategory, 
  selectedPriceRange, 
  setSelectedPriceRange,
  selectedMaterials,
  setSelectedMaterials,
  customPriceRange,
  setCustomPriceRange,
  clearAllFilters,
  activeFilterCount
}: FilterPanelProps) => {
  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <Button 
          variant="outline" 
          className="flex items-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
        
        {activeFilterCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={clearAllFilters}
            className="text-jewelry-muted hover:text-white"
          >
            <X className="mr-1 h-4 w-4" />
            Clear all filters
          </Button>
        )}
      </div>
      
      {activeFilterCount > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {selectedCategory}
              <button 
                className="ml-1 hover:text-primary/70"
                onClick={() => setSelectedCategory("All")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          
          {selectedMaterials.map(material => (
            <Badge key={material} variant="secondary" className="bg-primary/20 text-primary">
              {material}
              <button 
                className="ml-1 hover:text-primary/70"
                onClick={() => toggleMaterial(material)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          
          {selectedPriceRange !== 0 && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {priceRanges[selectedPriceRange].label}
              <button 
                className="ml-1 hover:text-primary/70"
                onClick={() => setSelectedPriceRange(0)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
      
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
              
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-jewelry-muted">${customPriceRange[0]}</span>
                  <span className="text-sm text-jewelry-muted">${customPriceRange[1] === 10000 ? '10,000+' : customPriceRange[1]}</span>
                </div>
                <Slider
                  defaultValue={[0, 10000]}
                  value={customPriceRange}
                  min={0}
                  max={10000}
                  step={100}
                  onValueChange={(value) => setCustomPriceRange(value as [number, number])}
                  className="my-4"
                />
                <div className="text-xs text-center text-jewelry-muted">
                  Drag sliders to set custom price range
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Materials</h3>
              <div className="grid grid-cols-2 gap-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`material-${material}`} 
                      checked={selectedMaterials.includes(material)}
                      onCheckedChange={() => toggleMaterial(material)}
                    />
                    <label
                      htmlFor={`material-${material}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {material}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
