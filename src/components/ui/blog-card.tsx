
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  className?: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  className = "",
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-md mb-4 card-hover image-shine">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider font-medium text-primary px-2 py-1 bg-primary/10 rounded">
            {category}
          </span>
          <span className="text-sm text-jewelry-muted">{date}</span>
        </div>
        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-jewelry-muted line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}
