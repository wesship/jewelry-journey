
import React from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CustomDesignCTA } from "@/components/home/CustomDesignCTA";
import { SalesBanner } from "@/components/home/SalesBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { PersonalizedRecommendations } from "@/components/home/PersonalizedRecommendations";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SalesBanner />
      <CategorySection />
      <FeaturedProducts />
      <PersonalizedRecommendations />
      <CustomDesignCTA />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
