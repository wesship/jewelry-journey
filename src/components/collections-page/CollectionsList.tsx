
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CollectionCard } from "./CollectionCard";

interface Collection {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CollectionsListProps {
  collections: Collection[];
}

export function CollectionsList({ collections }: CollectionsListProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          subtitle="Explore Our Jewelry"
          title="Collections"
          description="Discover our exquisite selection of handcrafted jewelry pieces, each created with meticulous attention to detail."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              name={collection.name}
              image={collection.image}
              description={collection.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
