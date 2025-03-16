
import React from "react";
import { Layout } from "@/components/layout";
import { CollectionBreadcrumb } from "./CollectionBreadcrumb";
import { CollectionHero } from "./CollectionHero";
import { CollectionProducts } from "./CollectionProducts";
import { CollectionCrafting } from "./CollectionCrafting";
import { CollectionCare } from "./CollectionCare";

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
      <CollectionBreadcrumb title={title} />
      <CollectionHero 
        title={title} 
        description={description} 
        heroImage={heroImage} 
      />
      <CollectionProducts 
        title={title}
        subtitle={subtitle}
        collectionType={collectionType}
        products={products}
      />
      {craftingDescription && (
        <CollectionCrafting craftingDescription={craftingDescription} />
      )}
      {careInstructions && (
        <CollectionCare title={title} careInstructions={careInstructions} />
      )}
    </Layout>
  );
}
