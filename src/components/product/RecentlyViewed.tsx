
import React from 'react';
import { ProductCard } from "@/components/ui/product-card";
import { BasicProduct } from '@/types/product';

interface RecentlyViewedProps {
  products: BasicProduct[];
}

export function RecentlyViewed({ products }: RecentlyViewedProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-jewelry-background">
      <div className="container">
        <h2 className="text-2xl font-display mb-8">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
