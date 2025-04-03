
import React from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CustomDesignCTA } from "@/components/home/CustomDesignCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <ProductShowcase />
      <CustomDesignCTA />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
