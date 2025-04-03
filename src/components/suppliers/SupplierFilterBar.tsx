
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SupplierFilterBarProps {
  onFilterChange: (filters: { search: string; status: string }) => void;
}

export const SupplierFilterBar = ({ onFilterChange }: SupplierFilterBarProps) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, status });
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    onFilterChange({ search, status: newStatus });
  };

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center border border-gold-light/20 rounded-md bg-black pr-3">
        <Input
          placeholder="Search suppliers..."
          value={search}
          onChange={handleSearchChange}
          className="bg-transparent border-0 focus:ring-0 focus-visible:ring-0"
        />
        <Search className="h-5 w-5 text-jewelry-muted" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge 
          variant={status === "all" ? "default" : "outline"}
          className={`cursor-pointer ${status === "all" ? "bg-primary text-black" : "bg-transparent"}`}
          onClick={() => handleStatusChange("all")}
        >
          All Suppliers
        </Badge>
        <Badge 
          variant={status === "connected" ? "default" : "outline"}
          className={`cursor-pointer ${status === "connected" ? "bg-green-600" : "bg-transparent"}`}
          onClick={() => handleStatusChange("connected")}
        >
          Connected
        </Badge>
        <Badge 
          variant={status === "disconnected" ? "default" : "outline"}
          className={`cursor-pointer ${status === "disconnected" ? "bg-transparent"}`}
          onClick={() => handleStatusChange("disconnected")}
        >
          Not Connected
        </Badge>
      </div>
    </div>
  );
};
