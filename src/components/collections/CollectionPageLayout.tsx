
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
  isBestseller?: boolean;
  isNew?: boolean;
}

interface CollectionPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  collectionType: string;
  heroImage: string;
  products: CollectionProduct[];
}

export function CollectionPageLayout({
  title,
  subtitle,
  description,
  collectionType,
  heroImage,
  products
}: CollectionPageLayoutProps) {
  return (
    <Layout>
      <CollectionBreadcrumb collectionName={title} />
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
      <CollectionCrafting collectionType={collectionType} />
      <CollectionCare collectionType={collectionType} />
    </Layout>
  );
}
