
import React from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80"
          alt="Luxury jewelry showcase"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container relative z-10 animate-fade-up">
        <div className="max-w-3xl text-white">
          <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            Timeless Elegance
          </span>
          <h1 className="mb-6 text-balance">
            Exquisite Jewelry <br />
            Crafted with Precision
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-xl">
            Discover our collection of handcrafted jewelry pieces, designed with meticulous attention to detail and using only the finest materials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="btn-primary bg-white/90 text-foreground hover:bg-white"
            >
              Explore Collections
            </Link>
            <Link
              to="/custom"
              className="btn-outline text-white border-white/60 hover:bg-white/20 hover:border-white"
            >
              Custom Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
