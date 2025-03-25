
import React from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input 
        placeholder="Search for jewelry..." 
        className="pl-10"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
