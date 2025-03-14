
import React from "react";
import { Link } from "react-router-dom";

export function CustomDesignCTA() {
  return (
    <section className="relative py-20 bg-fixed bg-cover bg-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1627293620999-e9b5c2325dbd?auto=format&q=80"
          alt="Jeweler working on custom piece"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-2xl ml-auto text-white">
          <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            Bespoke Creations
          </span>
          <h2 className="mb-6">
            Custom Designed <br />
            Just For You
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Work with our master craftsmen to create a bespoke piece that tells your unique story. From concept to creation, we'll guide you through every step of the journey.
          </p>
          <Link
            to="/custom"
            className="btn-primary bg-white/90 text-foreground hover:bg-white"
          >
            Start Your Custom Design
          </Link>
        </div>
      </div>
    </section>
  );
}
