
import React from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CustomDesignCTA } from "@/components/home/CustomDesignCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { PersonalizedRecommendations } from "@/components/home/PersonalizedRecommendations";
import { VIPBenefits } from "@/components/home/VIPBenefits";
import { GamificationPreview } from "@/components/home/GamificationPreview";
import { VIPAccessModal } from "@/components/home/VIPAccessModal";
import { AchievementBadges } from "@/components/home/AchievementBadges";
import { ChallengePromoWidget } from "@/components/home/ChallengePromoWidget";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <ChallengePromoWidget />
      <VIPBenefits />
      <FeaturedProducts />
      <GamificationPreview />
      <AchievementBadges />
      <PersonalizedRecommendations />
      <CustomDesignCTA />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <div className="fixed bottom-4 right-4 z-50">
        <VIPAccessModal />
      </div>
    </Layout>
  );
};

export default Index;
