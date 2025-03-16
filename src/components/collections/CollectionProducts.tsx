
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { CollectionProduct } from "./CollectionPageLayout";

interface CollectionProductsProps {
  title: string;
  subtitle: string;
  collectionType: string;
  products: CollectionProduct[];
}

export function CollectionProducts({ title, subtitle, collectionType, products }: CollectionProductsProps) {
  return (
    <section className="py-16 md:py-24 bg-jewelry-background">
      <div className="container">
        <SectionHeading
          subtitle={subtitle}
          title={`Explore Our ${title}`}
          description={`Discover our exquisite selection of handcrafted ${collectionType}, each created with meticulous attention to detail.`}
        />

        {/* Filter and Sort Options */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-jewelry-muted">{products.length} Products</span>
          </div>
          <div className="flex gap-4">
            <select className="bg-white border border-gray-200 rounded px-3 py-1 text-sm">
              <option>Sort By: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mb-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={collectionType}
              isNew={product.isNew}
              isBestseller={product.isBestseller}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
