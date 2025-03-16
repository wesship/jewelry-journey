
import React from "react";
import { Search } from "lucide-react";

interface BlogSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export const BlogSearch = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}: BlogSearchProps) => {
  return (
    <section className="py-8 bg-jewelry-subtle">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="relative w-full md:w-auto flex-grow max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jewelry-muted h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "" ? "bg-primary text-white" : "bg-white hover:bg-jewelry-subtle"
              }`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-white hover:bg-jewelry-subtle"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
