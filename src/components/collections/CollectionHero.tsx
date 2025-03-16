
import React from "react";

interface CollectionHeroProps {
  title: string;
  description: string;
  heroImage: string;
}

export function CollectionHero({ title, description, heroImage }: CollectionHeroProps) {
  return (
    <section className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
      <img 
        src={heroImage} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4 drop-shadow-sm">{title}</h1>
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg drop-shadow-sm">{description}</p>
      </div>
    </section>
  );
}
