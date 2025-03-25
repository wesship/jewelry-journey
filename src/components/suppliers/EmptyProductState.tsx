
import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyProductStateProps {
  onRefresh: () => void;
}

export const EmptyProductState = ({ onRefresh }: EmptyProductStateProps) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">No Products Found</h3>
      <p className="text-jewelry-muted mb-6">
        Connect to suppliers to start browsing their product catalogs.
      </p>
      <Button onClick={onRefresh}>Refresh Products</Button>
    </div>
  );
};
