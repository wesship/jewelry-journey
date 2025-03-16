
import React from "react";

interface BlogHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const BlogHero = ({ title, description, imageUrl }: BlogHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <img 
        src={imageUrl} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-4">{title}</h1>
        <p className="text-white/90 max-w-xl mx-auto text-base md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};
