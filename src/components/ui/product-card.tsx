
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

export function ProductCard({ id, name, price, image, category, className = "" }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-md mb-4 card-hover image-shine">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
      </div>
      <div>
        <span className="text-sm text-jewelry-muted block mb-1">{category}</span>
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="block mt-1 text-primary font-medium">${price.toLocaleString()}</span>
      </div>
    </Link>
  );
}
