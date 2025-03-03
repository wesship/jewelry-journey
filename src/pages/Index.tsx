
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Link } from "react-router-dom";

// Sample data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "3",
    name: "Sapphire Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    category: "Earrings",
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    category: "Bracelets",
  },
];

// Sample testimonials data
const testimonials = [
  {
    name: "Sophia Chen",
    text: "The craftsmanship of my custom engagement ring exceeded all expectations. Every detail was perfect, and the customer service was exceptional throughout the process.",
    location: "New York, NY",
    rating: 5,
  },
  {
    name: "James Wilson",
    text: "I purchased a necklace for my wife's anniversary gift and she absolutely loves it. The quality is outstanding and the packaging was beautifully presented.",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    text: "Luxe Jewels created the most beautiful pair of earrings for my wedding day. They were attentive to my vision and delivered a piece that I will cherish forever.",
    location: "Chicago, IL",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Categories Section */}
      <section className="section bg-jewelry-subtle">
        <div className="container">
          <SectionHeading
            subtitle="Our Collections"
            title="Explore by Category"
            description="Browse our carefully curated collections of exquisite jewelry pieces."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                src="https://images.unsplash.com/photo-1635767798638-3665a0a107fc?auto=format&q=80&w=800"
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
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <SectionHeading
            subtitle="Curated Selection"
            title="Featured Pieces"
            description="Discover our most coveted pieces, handcrafted with exceptional attention to detail."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="btn-outline border-primary text-primary hover:bg-primary/5"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
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

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            subtitle="Client Stories"
            title="What Our Clients Say"
            description="Read about the experiences of our valued clients and their journey with LUXE Jewels."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                location={testimonial.location}
                rating={testimonial.rating as 1 | 2 | 3 | 4 | 5}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="btn-outline border-primary text-primary hover:bg-primary/5"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
    </Layout>
  );
};

export default Index;
