
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <SectionHeading
          subtitle="Bestsellers"
          title="Our Most Popular Pieces"
          description="Discover our clients' favorite pieces from across all collections."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
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
  );
}
