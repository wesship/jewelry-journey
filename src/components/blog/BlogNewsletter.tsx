
import React from "react";

export const BlogNewsletter = () => {
  return (
    <section className="py-16 bg-jewelry-subtle">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
              Subscribe To Our Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-display mb-4">Get Jewelry Insights</h2>
            <p className="text-jewelry-muted mb-6">
              Join our mailing list to receive new articles, exclusive offers, and invitations to special events. Be the first to know about new collections and limited edition pieces.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1616750819459-6912d19b3b9b?auto=format&q=80&w=1200" 
              alt="Jewelry article preview" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
