
import React from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CustomDesignCTA } from "@/components/home/CustomDesignCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <CustomDesignCTA />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
