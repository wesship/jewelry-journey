
import React from "react";
import { Link } from "react-router-dom";

interface CollectionCraftingProps {
  craftingDescription: string;
}

export function CollectionCrafting({ craftingDescription }: CollectionCraftingProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
              Craftsmanship
            </span>
            <h2 className="mb-6">Crafted With Precision</h2>
            <p className="text-jewelry-muted mb-6">
              {craftingDescription}
            </p>
            <Link
              to="/about/craftsmanship"
              className="btn-outline border-primary text-primary hover:bg-primary/5"
            >
              Learn About Our Process
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1627293620999-e9b5c2325dbd?auto=format&q=80&w=1200" 
              alt="Jeweler working on a piece" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
