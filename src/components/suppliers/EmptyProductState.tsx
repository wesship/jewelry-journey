
import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Box, RefreshCw } from "lucide-react";

interface EmptyProductStateProps {
  onRefresh: () => void;
}

export const EmptyProductState = ({ onRefresh }: EmptyProductStateProps) => {
  return (
    <div className="text-center py-12 border border-gold-light/10 rounded-md bg-black">
      <Box className="h-12 w-12 mx-auto text-jewelry-muted mb-4" />
      <h3 className="text-xl font-medium mb-2">No Products Found</h3>
      <p className="text-jewelry-muted mb-6 max-w-md mx-auto">
        Connect to suppliers to start browsing their product catalogs, or check your connection status if you're already connected.
      </p>
      
      <div className="space-x-4">
        <Button onClick={onRefresh} className="inline-flex items-center">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Products
        </Button>
      </div>
      
      <div className="mt-8 p-4 max-w-md mx-auto border border-yellow-500/20 bg-yellow-500/10 rounded-md">
        <div className="flex text-left">
          <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
          <p className="text-sm text-jewelry-muted">
            If you're seeing this message and have connected suppliers, there might be an issue with your API key or connection. Try reconnecting or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};
