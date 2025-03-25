
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

// Sample data for featured products
const showcaseProducts = [
  {
    id: "1",
    name: "Diamond Solitaire",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "2",
    name: "Gold Band",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "3",
    name: "Diamond Necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "4",
    name: "Diamond Bracelet",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    category: "Bracelets",
  },
  {
    id: "5",
    name: "Luxury Diamond Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    category: "Rings",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {showcaseProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
}

function ProductCard({ id, name, image, category }: ProductCardProps) {
  return (
    <Link to={`/collections/${category.toLowerCase()}/${id}`}>
      <Card className="overflow-hidden rounded-3xl border-gold-light/30 bg-black hover:border-gold-light transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-gold-light/80 text-sm">{category}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
