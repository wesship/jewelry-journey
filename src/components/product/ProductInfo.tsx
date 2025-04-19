import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { ShareProduct } from "./ShareProduct";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
  material: string;
  isNew: boolean;
  isBestseller: boolean;
  availableSizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

export function ProductInfo({ 
  name, 
  price, 
  description, 
  material,
  isNew,
  isBestseller,
  availableSizes,
  selectedSize,
  onSizeSelect,
  onAddToCart,
  onAddToWishlist
}: ProductInfoProps) {
  const productUrl = window.location.href;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-display mb-2">{name}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-xl text-primary font-medium">${price.toLocaleString()}</span>
          {isNew && (
            <span className="text-sm bg-primary text-white px-2 py-1 rounded-full">New</span>
          )}
          {isBestseller && (
            <span className="text-sm bg-black text-white px-2 py-1 rounded-full">Bestseller</span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="py-4 border-t border-b border-gray-200">
        <h3 className="font-medium mb-2">Material</h3>
        <p className="text-gray-600">{material}</p>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Select Size</h3>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedSize === size 
                  ? 'bg-primary text-black border-primary' 
                  : 'bg-white text-gray-800 border border-gray-300 hover:border-primary'
              }`}
              onClick={() => onSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-3 pt-6">
        <Button 
          className="w-full bg-primary text-black hover:bg-primary/90" 
          size="lg"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
        
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1 border-primary text-primary hover:bg-primary/5"
            onClick={onAddToWishlist}
          >
            <Heart className="mr-2 h-4 w-4" />
            Add to Wishlist
          </Button>
          
          <ShareProduct productName={name} productUrl={productUrl} />
        </div>
      </div>
    </div>
  );
}
