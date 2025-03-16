
import React from "react";
import { Layout } from "@/components/layout";
import { CollectionsList } from "@/components/collections-page/CollectionsList";
import { FeaturedProducts } from "@/components/collections-page/FeaturedProducts";
import { CraftsmanshipSection } from "@/components/collections-page/CraftsmanshipSection";
import { CustomDesignCTA } from "@/components/collections-page/CustomDesignCTA";

// Sample collection categories
const collections = [
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    description: "From statement rings to elegant solitaires, discover our handcrafted ring collection.",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    description: "Pendants, chains, and statement pieces designed to elevate any look.",
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    description: "From subtle studs to dramatic drops, find the perfect pair for any occasion.",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    description: "Elegant tennis bracelets, bangles, and cuffs crafted with exceptional detail.",
  },
];

// Featured products across all collections
const featuredProducts = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "3",
    name: "Sapphire Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    category: "Earrings",
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    category: "Bracelets",
  },
  {
    id: "5",
    name: "Emerald Halo Ring",
    price: 3895,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
    category: "Rings",
  },
  {
    id: "6",
    name: "Diamond Drop Earrings",
    price: 4295,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&q=80&w=800",
    category: "Earrings",
  },
  {
    id: "7",
    name: "Gold Chain Necklace",
    price: 1795,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800",
    category: "Necklaces",
  },
  {
    id: "8",
    name: "Diamond Bangle",
    price: 5295,
    image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800",
    category: "Bracelets",
  },
];

const Collections = () => {
  return (
    <Layout>
      <CollectionsList collections={collections} />
      <FeaturedProducts products={featuredProducts} />
      <CraftsmanshipSection />
      <CustomDesignCTA />
    </Layout>
  );
};

export default Collections;
