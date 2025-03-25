
import React from "react";
import { AlertCircle } from "lucide-react";

interface ProductsErrorStateProps {
  error: string;
}

export const ProductsErrorState = ({ error }: ProductsErrorStateProps) => {
  return (
    <div className="flex items-center justify-center p-8 border border-red-500/20 rounded-md bg-red-500/5">
      <div className="flex items-center text-red-500">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span>{error}</span>
      </div>
    </div>
  );
};
