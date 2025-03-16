
import React from "react";
import { Link } from "react-router-dom";

export function CustomDesignCTA() {
  return (
    <section className="py-16">
      <div className="container text-center">
        <h2 className="mb-8">Looking for Something Special?</h2>
        <p className="text-jewelry-muted max-w-2xl mx-auto mb-8">
          If you can't find exactly what you're looking for in our collections, consider our custom design service. Work with our designers to create a piece that's uniquely yours.
        </p>
        <Link
          to="/custom"
          className="btn-primary"
        >
          Explore Custom Design
        </Link>
      </div>
    </section>
  );
}
