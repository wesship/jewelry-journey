
import React from "react";
import { CollectionPageLayout, CollectionProduct } from "@/components/collections/CollectionPageLayout";

// Sample sapphire earring products
const sapphireEarringProducts: CollectionProduct[] = [
  {
    id: "sapphire-earring-1",
    name: "Classic Sapphire Studs",
    price: 1895,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    description: "Timeless sapphire studs set in white gold with secure backings.",
    material: "18k White Gold, Sapphires",
    isNew: false,
    isBestseller: true
  },
  {
    id: "sapphire-earring-2",
    name: "Sapphire Drop Earrings",
    price: 3295,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=800",
    description: "Elegant drop earrings featuring sapphires that catch and reflect light beautifully.",
    material: "Platinum, Sapphires, Diamonds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "sapphire-earring-3",
    name: "Sapphire and Diamond Hoops",
    price: 2450,
    image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800",
    description: "Modern gold hoops adorned with sapphires and accented with diamonds.",
    material: "18k Gold, Sapphires, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "sapphire-earring-4",
    name: "Sapphire Chandelier Earrings",
    price: 4195,
    image: "https://images.unsplash.com/photo-1627231893550-d5839add571a?auto=format&q=80&w=800",
    description: "Statement chandelier earrings with cascading sapphires in varying shades of blue.",
    material: "14k White Gold, Sapphires",
    isNew: true,
    isBestseller: false
  },
  {
    id: "sapphire-earring-5",
    name: "Sapphire Halo Earrings",
    price: 3295,
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    description: "Brilliant sapphires surrounded by a halo of diamonds in an intricate design.",
    material: "18k White Gold, Sapphires, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "sapphire-earring-6",
    name: "Vintage Sapphire Earrings",
    price: 1995,
    image: "https://images.unsplash.com/photo-1615655114865-4cc1890a9d3a?auto=format&q=80&w=800",
    description: "Vintage-inspired sapphire earrings with intricate filigree work.",
    material: "Platinum, Sapphires",
    isNew: false,
    isBestseller: true
  },
  {
    id: "sapphire-earring-7",
    name: "Sapphire Geometric Studs",
    price: 1295,
    image: "https://images.unsplash.com/photo-1574948564583-71507663380f?auto=format&q=80&w=800",
    description: "Modern geometric designs with vibrant blue sapphires.",
    material: "18k Gold, Sapphires",
    isNew: true,
    isBestseller: false
  },
  {
    id: "sapphire-earring-8",
    name: "Blue Ombre Sapphire Earrings",
    price: 2895,
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&q=80&w=800",
    description: "Stunning earrings featuring sapphires in gradient blue shades.",
    material: "18k White Gold, Blue Sapphires",
    isNew: false,
    isBestseller: false
  }
];

const SapphireEarringsCollection: React.FC = () => {
  return (
    <CollectionPageLayout
      title="Sapphire Earrings"
      subtitle="Classic Blue Elegance"
      description="Our sapphire earring collection showcases the timeless beauty of this precious gemstone, from brilliant blue studs to elaborate chandelier designs."
      heroImage="https://images.unsplash.com/photo-1627231893550-d5839add571a?auto=format&q=80&w=1200"
      products={sapphireEarringProducts}
      collectionType="Sapphire Earrings"
      craftingDescription="Each sapphire earring in our collection is carefully crafted to highlight the natural beauty of these precious gemstones. We source only the finest sapphires with exceptional color and clarity, setting them in designs that emphasize their rich blue hues. Our master jewelers use precision techniques to ensure each stone is secure while maximizing its brilliance."
      careInstructions="To maintain the beauty of your sapphire earrings, clean them gently with a soft brush and mild soap solution. Store separately in a soft pouch to prevent scratching. Sapphires are quite durable, but should be removed before swimming, applying cosmetics, or using hair products to maintain their luster over time."
    />
  );
};

export default SapphireEarringsCollection;
