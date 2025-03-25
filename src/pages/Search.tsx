
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/ui/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter } from "lucide-react";

// Sample search results
const allProducts = [
  {
    id: "ring-1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "ring-2",
    name: "Emerald Halo Ring",
    price: 3895,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "necklace-1",
    name: "Pearl Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "earring-1",
    name: "Sapphire Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    category: "Earrings",
  },
  {
    id: "bracelet-1",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    category: "Bracelets",
  },
  {
    id: "ring-3",
    name: "Vintage Ruby Ring",
    price: 3150,
    image: "https://images.unsplash.com/photo-1551408531-4b363f24f50a?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "necklace-2",
    name: "Diamond Pendant",
    price: 2195,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "earring-2",
    name: "Gold Hoop Earrings",
    price: 995,
    image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800",
    category: "Earrings",
  }
];

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

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search query, category, and price range
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRanges[selectedPriceRange].min && 
                         product.price <= priceRanges[selectedPriceRange].max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
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
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search for jewelry..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
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
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedPriceRange(0);
                }}
              >
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
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
