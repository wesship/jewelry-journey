
import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

// Sample data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
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

export function FeaturedProducts() {
  return (
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
  );
}
