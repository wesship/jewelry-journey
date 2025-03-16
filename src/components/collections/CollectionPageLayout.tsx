
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export interface CollectionProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  material?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface CollectionPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  products: CollectionProduct[];
  collectionType: string;
  craftingDescription?: string;
  careInstructions?: string;
}

export function CollectionPageLayout({
  title,
  subtitle,
  description,
  heroImage,
  products,
  collectionType,
  craftingDescription,
  careInstructions
}: CollectionPageLayoutProps) {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-jewelry-background py-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <Home className="h-4 w-4" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/collections">Collections</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
        <img 
          src={heroImage} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">{title}</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg">{description}</p>
        </div>
      </section>

      {/* Collection Main Content */}
      <section className="py-16 md:py-24 bg-jewelry-background">
        <div className="container">
          <SectionHeading
            subtitle={subtitle}
            title={`Explore Our ${title}`}
            description={`Discover our exquisite selection of handcrafted ${collectionType}, each created with meticulous attention to detail.`}
          />

          {/* Filter and Sort Options (placeholder) */}
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

          {/* Products */}
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

      {/* Crafting Process */}
      {craftingDescription && (
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
                  Craftsmanship
                </span>
                <h2 className="mb-6">Crafted With Precision</h2>
                <p className="text-jewelry-muted mb-6">
                  {craftingDescription}
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
      )}

      {/* Care Instructions */}
      {careInstructions && (
        <section className="py-16 bg-jewelry-subtle">
          <div className="container">
            <SectionHeading
              subtitle="Care Guide"
              title={`Caring For Your ${title}`}
              description="Follow these recommendations to keep your jewelry looking beautiful for years to come."
            />
            <div className="max-w-3xl mx-auto">
              <p className="text-jewelry-muted mb-6">
                {careInstructions}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-subtle">
                  <h3 className="text-lg font-medium mb-2">Store Properly</h3>
                  <p className="text-jewelry-muted text-sm">Keep pieces separated in a jewelry box with individual compartments to prevent scratches.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-subtle">
                  <h3 className="text-lg font-medium mb-2">Clean Regularly</h3>
                  <p className="text-jewelry-muted text-sm">Gently polish with a soft cloth to maintain shine and remove oils from daily wear.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-subtle">
                  <h3 className="text-lg font-medium mb-2">Avoid Chemicals</h3>
                  <p className="text-jewelry-muted text-sm">Remove jewelry before swimming, showering, or applying cosmetics and perfumes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
