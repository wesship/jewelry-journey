
import React from "react";
import { CollectionPageLayout, CollectionProduct } from "@/components/collections/CollectionPageLayout";

// Sample bracelet products
const braceletProducts: CollectionProduct[] = [
  {
    id: "bracelet-1",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    description: "A classic design featuring a continuous line of diamonds set in gold.",
    material: "18k Gold, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "bracelet-2",
    name: "Diamond Bangle",
    price: 5295,
    image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800",
    description: "A rigid bangle bracelet embellished with a row of sparkling diamonds.",
    material: "Platinum, Diamonds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "bracelet-3",
    name: "Sapphire and Diamond Bracelet",
    price: 4195,
    image: "https://images.unsplash.com/photo-1599459183204-a264ba3dd5d0?auto=format&q=80&w=800",
    description: "Alternating sapphires and diamonds create a stunning pattern in this elegant bracelet.",
    material: "18k White Gold, Sapphires, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "bracelet-4",
    name: "Pearl Strand Bracelet",
    price: 1295,
    image: "https://images.unsplash.com/photo-1615655368293-2a8b557344b0?auto=format&q=80&w=800",
    description: "Lustrous freshwater pearls on a delicate strand with a secure clasp.",
    material: "Freshwater Pearls, 14k Gold Clasp",
    isNew: false,
    isBestseller: true
  },
  {
    id: "bracelet-5",
    name: "Emerald Tennis Bracelet",
    price: 5895,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&q=80&w=800",
    description: "Rich green emeralds set in a continuous line for a luxurious statement.",
    material: "18k Gold, Emeralds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "bracelet-6",
    name: "Chain Link Bracelet",
    price: 1495,
    image: "https://images.unsplash.com/photo-1573408301819-c6f0e4d6e2a9?auto=format&q=80&w=800",
    description: "A versatile gold chain link bracelet that can be worn alone or layered.",
    material: "14k Gold",
    isNew: false,
    isBestseller: true
  },
  {
    id: "bracelet-7",
    name: "Ruby Cuff Bracelet",
    price: 3895,
    image: "https://images.unsplash.com/photo-1611591437268-1b394d2be225?auto=format&q=80&w=800",
    description: "A bold cuff bracelet featuring vibrant rubies in a modern design.",
    material: "18k Gold, Rubies",
    isNew: false,
    isBestseller: false
  },
  {
    id: "bracelet-8",
    name: "Diamond Charm Bracelet",
    price: 2695,
    image: "https://images.unsplash.com/photo-1618403080908-b3823b52f4ff?auto=format&q=80&w=800",
    description: "A delicate chain bracelet with diamond-set charms that move with you.",
    material: "18k White Gold, Diamonds",
    isNew: true,
    isBestseller: false
  }
];

const BraceletCollection: React.FC = () => {
  return (
    <CollectionPageLayout
      title="Bracelets"
      subtitle="Wrist Essentials"
      description="From tennis bracelets to elegant bangles, our collection offers timeless pieces that complement any style."
      heroImage="https://images.unsplash.com/photo-1573408301819-c6f0e4d6e2a9?auto=format&q=80&w=1200"
      products={braceletProducts}
      collectionType="Bracelets"
      craftingDescription="Our bracelet collection showcases the skill of our master craftspeople. Each piece is designed with careful attention to how it moves and sits on the wrist. From flexible tennis bracelets with secure clasps to rigid bangles with perfect proportions, we create pieces that are both comfortable and stunning."
      careInstructions="To preserve your bracelet's beauty, avoid wearing it during activities that could cause impact or exposure to harsh chemicals. Clean gently with a soft brush and mild soap solution, paying special attention to areas where debris might collect. Store flat in a jewelry box with individual compartments to prevent scratching or tangling."
    />
  );
};

export default BraceletCollection;
