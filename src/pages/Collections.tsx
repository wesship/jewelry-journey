
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";

// Sample product data
const products = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=800",
    category: "Rings",
    metal: "White Gold",
    stone: "Diamond",
    featured: true,
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    category: "Necklaces",
    metal: "Silver",
    stone: "Pearl",
    featured: true,
  },
  {
    id: "3",
    name: "Sapphire Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    category: "Earrings",
    metal: "White Gold",
    stone: "Sapphire",
    featured: false,
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    category: "Bracelets",
    metal: "Gold",
    stone: "Diamond",
    featured: true,
  },
  {
    id: "5",
    name: "Emerald Halo Ring",
    price: 2795,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    category: "Rings",
    metal: "Yellow Gold",
    stone: "Emerald",
    featured: false,
  },
  {
    id: "6",
    name: "Vintage Ruby Pendant",
    price: 1795,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
    category: "Necklaces",
    metal: "Rose Gold",
    stone: "Ruby",
    featured: false,
  },
  {
    id: "7",
    name: "Platinum Diamond Stud Earrings",
    price: 1595,
    image: "https://images.unsplash.com/photo-1608307069951-a5bfebfe858a?auto=format&q=80&w=800",
    category: "Earrings",
    metal: "Platinum",
    stone: "Diamond",
    featured: true,
  },
  {
    id: "8",
    name: "Pearl and Diamond Bracelet",
    price: 2195,
    image: "https://images.unsplash.com/photo-1599054228902-d8c981821821?auto=format&q=80&w=800",
    category: "Bracelets",
    metal: "Silver",
    stone: "Pearl",
    featured: false,
  },
];

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];
const metals = ["All", "Gold", "White Gold", "Rose Gold", "Silver", "Platinum"];
const stones = ["All", "Diamond", "Ruby", "Emerald", "Sapphire", "Pearl"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMetal, setSelectedMetal] = useState("All");
  const [selectedStone, setSelectedStone] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedMetal === "All" || product.metal === selectedMetal) &&
      (selectedStone === "All" || product.stone === selectedStone) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-jewelry-subtle py-16 md:py-24">
        <div className="container">
          <SectionHeading
            subtitle="Browse Our Selection"
            title="Jewelry Collections"
            description="Explore our curated collections of fine jewelry, each piece crafted with precision and care."
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-xl font-medium mb-6">Filters</h3>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2 h-4 w-4 text-primary"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Metal</h4>
                  <div className="space-y-2">
                    {metals.map((metal) => (
                      <label key={metal} className="flex items-center">
                        <input
                          type="radio"
                          name="metal"
                          checked={selectedMetal === metal}
                          onChange={() => setSelectedMetal(metal)}
                          className="mr-2 h-4 w-4 text-primary"
                        />
                        {metal}
                      </label>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Stone</h4>
                  <div className="space-y-2">
                    {stones.map((stone) => (
                      <label key={stone} className="flex items-center">
                        <input
                          type="radio"
                          name="stone"
                          checked={selectedStone === stone}
                          onChange={() => setSelectedStone(stone)}
                          className="mr-2 h-4 w-4 text-primary"
                        />
                        {stone}
                      </label>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedMetal("All");
                    setSelectedStone("All");
                    setPriceRange([0, 5000]);
                  }}
                  className="mt-8 w-full py-2 text-sm font-medium text-jewelry-muted border border-border rounded hover:text-primary hover:border-primary transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filters Toggle & Sort */}
              <div className="flex justify-between items-center mb-8 lg:hidden">
                <button
                  onClick={toggleFilters}
                  className="px-4 py-2 border border-border rounded text-sm font-medium"
                >
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </button>
                
                <div className="flex items-center">
                  <label htmlFor="mobile-sort" className="text-sm mr-2">Sort:</label>
                  <select
                    id="mobile-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-border rounded text-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="mb-8 p-4 border border-border rounded-md lg:hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <div className="space-y-1">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center">
                            <input
                              type="radio"
                              name="category"
                              checked={selectedCategory === category}
                              onChange={() => setSelectedCategory(category)}
                              className="mr-2 h-4 w-4 text-primary"
                            />
                            <span className="text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Metal</h4>
                      <div className="space-y-1">
                        {metals.map((metal) => (
                          <label key={metal} className="flex items-center">
                            <input
                              type="radio"
                              name="metal"
                              checked={selectedMetal === metal}
                              onChange={() => setSelectedMetal(metal)}
                              className="mr-2 h-4 w-4 text-primary"
                            />
                            <span className="text-sm">{metal}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Stone</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {stones.map((stone) => (
                        <label key={stone} className="flex items-center">
                          <input
                            type="radio"
                            name="stone"
                            checked={selectedStone === stone}
                            onChange={() => setSelectedStone(stone)}
                            className="mr-2 h-4 w-4 text-primary"
                          />
                          <span className="text-sm">{stone}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">${priceRange[0]}</span>
                        <span className="text-sm">${priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedMetal("All");
                      setSelectedStone("All");
                      setPriceRange([0, 5000]);
                    }}
                    className="mt-4 w-full py-2 text-sm font-medium text-jewelry-muted border border-border rounded hover:text-primary hover:border-primary transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {/* Sort - Desktop */}
              <div className="hidden lg:flex justify-between items-center mb-8">
                <p className="text-jewelry-muted">
                  Showing {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"}
                </p>
                
                <div className="flex items-center">
                  <label htmlFor="desktop-sort" className="text-sm mr-2">Sort by:</label>
                  <select
                    id="desktop-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-border rounded text-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Product Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                      className="animate-fade-up"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-jewelry-muted">Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
