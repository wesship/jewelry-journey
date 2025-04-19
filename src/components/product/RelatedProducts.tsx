
import React from 'react';
import { Link } from "react-router-dom";

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-display mb-8 text-center">You May Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative overflow-hidden rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <span className="block mt-1 text-primary font-medium">${product.price.toLocaleString()}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
