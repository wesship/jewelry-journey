
import React from "react";
import { Link } from "react-router-dom";

interface CollectionCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export function CollectionCard({ id, name, image, description }: CollectionCardProps) {
  return (
    <Link
      to={`/collections/${id}`}
      className="group relative overflow-hidden rounded-lg h-80 flex items-center justify-center card-hover"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
      <div className="relative z-10 text-center max-w-xs px-6">
        <h3 className="text-white text-2xl font-display font-medium mb-2">{name}</h3>
        <p className="text-white/80 mb-4 hidden md:block">{description}</p>
        <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
          View Collection
        </span>
      </div>
    </Link>
  );
}
