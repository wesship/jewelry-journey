
import React from "react";

export function NewsletterSection() {
  return (
    <section className="section bg-jewelry-subtle">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
            Stay Connected
          </span>
          <h2 className="mb-4">Join Our Newsletter</h2>
          <p className="text-jewelry-muted">
            Subscribe to receive updates on new collections, exclusive offers, and jewelry care tips.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
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
    </section>
  );
}
