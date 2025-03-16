
import React from "react";
import { CollectionPageLayout, CollectionProduct } from "@/components/collections/CollectionPageLayout";

// Sample necklace products
const necklaceProducts: CollectionProduct[] = [
  {
    id: "necklace-1",
    name: "Pearl Strand Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    description: "A classic strand of perfectly matched freshwater pearls.",
    material: "Freshwater Pearls, 14k Gold Clasp",
    isNew: false,
    isBestseller: true
  },
  {
    id: "necklace-2",
    name: "Diamond Pendant Necklace",
    price: 1850,
    image: "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&q=80&w=800",
    description: "A brilliant round diamond set in a simple pendant that catches the light with every movement.",
    material: "18k White Gold, Diamond",
    isNew: true,
    isBestseller: false
  },
  {
    id: "necklace-3",
    name: "Gold Chain Necklace",
    price: 1795,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800",
    description: "A versatile and elegant gold chain that pairs beautifully with any pendant.",
    material: "18k Gold",
    isNew: false,
    isBestseller: true
  },
  {
    id: "necklace-4",
    name: "Emerald Drop Necklace",
    price: 2895,
    image: "https://images.unsplash.com/photo-1599459183139-e7a107e4ee75?auto=format&q=80&w=800",
    description: "A stunning emerald surrounded by diamonds on a delicate chain.",
    material: "18k White Gold, Emerald, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "necklace-5",
    name: "Sapphire Pendant Necklace",
    price: 2450,
    image: "https://images.unsplash.com/photo-1630018548696-e1900d9d1458?auto=format&q=80&w=800",
    description: "A vibrant blue sapphire in a contemporary setting.",
    material: "Platinum, Sapphire",
    isNew: true,
    isBestseller: false
  },
  {
    id: "necklace-6",
    name: "Layered Gold Necklace",
    price: 1395,
    image: "https://images.unsplash.com/photo-1626784215021-2f30bed03cca?auto=format&q=80&w=800",
    description: "A set of delicate gold chains designed to be worn together for a layered look.",
    material: "14k Gold",
    isNew: false,
    isBestseller: true
  },
  {
    id: "necklace-7",
    name: "Diamond Tennis Necklace",
    price: 5895,
    image: "https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&q=80&w=800",
    description: "A stunning row of brilliant diamonds for unparalleled sparkle.",
    material: "18k White Gold, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "necklace-8",
    name: "Ruby Heart Pendant",
    price: 2195,
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?auto=format&q=80&w=800",
    description: "A romantic heart-shaped ruby pendant on a fine gold chain.",
    material: "18k Rose Gold, Ruby",
    isNew: false,
    isBestseller: false
  }
];

const NecklaceCollection: React.FC = () => {
  return (
    <CollectionPageLayout
      title="Necklaces"
      subtitle="Timeless Elegance"
      description="From delicate pendants to statement pieces, our necklace collection adds the perfect finishing touch to any ensemble."
      heroImage="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=1200"
      products={necklaceProducts}
      collectionType="Necklaces"
      craftingDescription="Our necklaces embody the perfect balance of artistry and precision. Each chain link is carefully created and joined to ensure both beauty and durability. Pendants are designed to sit perfectly, with stones secured in settings that maximize their natural beauty while providing everyday wearability."
      careInstructions="To maintain your necklace's beauty, store it flat or hanging to prevent tangling. Clean with a soft jewelry cloth to restore shine, and avoid exposing it to harsh chemicals, perfumes, or excessive moisture. For pearl necklaces, wipe with a soft, damp cloth after wearing to remove oils that can damage the pearls over time."
    />
  );
};

export default NecklaceCollection;
