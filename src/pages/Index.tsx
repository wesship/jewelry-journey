
import React from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductShowcase />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
