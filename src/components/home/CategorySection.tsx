
import React from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategorySection() {
  return (
    <section className="section bg-jewelry-subtle">
      <div className="container">
        <SectionHeading
          subtitle="Our Collections"
          title="Explore by Category"
          description="Browse our carefully curated collections of exquisite jewelry pieces."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/collections/rings" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800"
              alt="Rings"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Rings</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
          <Link to="/collections/necklaces" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800"
              alt="Necklaces"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Necklaces</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
          <Link to="/collections/earrings" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800"
              alt="Earrings"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Earrings</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
          <Link to="/collections/bracelets" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800"
              alt="Bracelets"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Bracelets</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/collections/sapphire-earrings" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1627231893550-d5839add571a?auto=format&q=80&w=1200"
              alt="Sapphire Earrings"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Sapphire Earrings</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                View Collection
              </span>
            </div>
          </Link>
          <Link to="/custom" className="group relative overflow-hidden rounded-md h-80 flex items-center justify-center card-hover">
            <img
              src="https://images.unsplash.com/photo-1607703829739-c05b7beddf60?auto=format&q=80&w=800"
              alt="Custom Design"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-white text-2xl font-display font-medium mb-2">Custom Design</h3>
              <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                Create Your Own
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
