
import React from "react";

interface TestimonialCardProps {
  name: string;
  image?: string;
  text: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: React.CSSProperties;
}

export function TestimonialCard({
  name,
  image,
  text,
  location,
  rating,
  className = "",
  style,
}: TestimonialCardProps) {
  return (
    <div 
      className={`p-8 rounded-lg bg-white border border-border shadow-subtle ${className}`}
      style={style}
    >
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#d4af37"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <p className="italic mb-6">{text}</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-jewelry-subtle flex items-center justify-center text-primary mr-4">
            {name.substring(0, 1)}
          </div>
        )}
        <div>
          <p className="font-medium">{name}</p>
          {location && <p className="text-sm text-jewelry-muted">{location}</p>}
        </div>
      </div>
    </div>
  );
}
