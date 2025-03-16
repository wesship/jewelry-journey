
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/product-card";

// Sample collection categories
const collections = [
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    description: "From statement rings to elegant solitaires, discover our handcrafted ring collection.",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    description: "Pendants, chains, and statement pieces designed to elevate any look.",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    description: "From subtle studs to dramatic drops, find the perfect pair for any occasion.",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    description: "Elegant tennis bracelets, bangles, and cuffs crafted with exceptional detail.",
  },
];

// Featured products across all collections
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
  {
    id: "5",
    name: "Emerald Halo Ring",
    price: 3895,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "6",
    name: "Diamond Drop Earrings",
    price: 4295,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&q=80&w=800",
    category: "Earrings",
  },
  {
    id: "7",
    name: "Gold Chain Necklace",
    price: 1795,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "8",
    name: "Diamond Bangle",
    price: 5295,
    image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800",
    category: "Bracelets",
  },
];

const Collections = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            subtitle="Explore Our Jewelry"
            title="Collections"
            description="Discover our exquisite selection of handcrafted jewelry pieces, each created with meticulous attention to detail."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.id}`}
                className="group relative overflow-hidden rounded-lg h-80 flex items-center justify-center card-hover"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="relative z-10 text-center max-w-xs px-6">
                  <h3 className="text-white text-2xl font-display font-medium mb-2">{collection.name}</h3>
                  <p className="text-white/80 mb-4 hidden md:block">{collection.description}</p>
                  <span className="inline-block text-white/90 text-sm border-b border-white/60 pb-0.5 transition-all group-hover:border-white">
                    View Collection
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <SectionHeading
            subtitle="Bestsellers"
            title="Our Most Popular Pieces"
            description="Discover our clients' favorite pieces from across all collections."
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
        </div>
      </section>
      
      <section className="py-16 bg-jewelry-subtle">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
                Craftsmanship
              </span>
              <h2 className="mb-6">Created With Passion</h2>
              <p className="text-jewelry-muted mb-6">
                Each piece in our collections is meticulously crafted by our skilled artisans, combining traditional techniques with modern innovations. We select only the finest materials, from ethically sourced gemstones to responsibly mined precious metals.
              </p>
              <p className="text-jewelry-muted mb-8">
                Our commitment to quality means that every detail is carefully considered, from the initial design sketches to the final polish. The result is jewelry that is not only beautiful but built to last for generations.
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
    </Layout>
  );
};

export default Collections;
