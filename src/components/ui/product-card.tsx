
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  className?: string;
  loading?: "eager" | "lazy";
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew, 
  isBestseller,
  className = "",
  loading = "eager"
}: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <Link to={`/product/${id}`} className={cn(`group block`, className)}>
      <div className="relative overflow-hidden rounded-md mb-4 card-hover image-shine">
        {!imageLoaded && !imageError && (
          <Skeleton className="w-full h-80 absolute inset-0" />
        )}
        <img
          src={imageError ? "/placeholder.svg" : image}
          alt={name}
          className={cn(
            "w-full h-80 object-cover object-center transform transition-transform duration-700 group-hover:scale-105",
            !imageLoaded && "opacity-0",
            imageLoaded && "opacity-100"
          )}
          loading={loading}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
        
        {/* Badges for New or Bestseller */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <Badge variant="outline" className="bg-primary text-white border-0">
              New
            </Badge>
          )}
          {isBestseller && (
            <Badge variant="outline" className="bg-black text-white border-0">
              Bestseller
            </Badge>
          )}
        </div>
      </div>
      <div>
        <span className="text-sm text-jewelry-muted block mb-1">{category}</span>
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="block mt-1 text-primary font-medium">${price.toLocaleString()}</span>
      </div>
    </Link>
  );
}
