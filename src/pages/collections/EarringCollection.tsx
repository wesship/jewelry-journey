
import React from "react";
import { CollectionPageLayout, CollectionProduct } from "@/components/collections/CollectionPageLayout";

// Sample earring products
const earringProducts: CollectionProduct[] = [
  {
    id: "earring-1",
    name: "Sapphire Stud Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    description: "Classic round sapphire studs set in white gold with secure backings.",
    material: "18k White Gold, Sapphires",
    isNew: false,
    isBestseller: true
  },
  {
    id: "earring-2",
    name: "Diamond Drop Earrings",
    price: 4295,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&q=80&w=800",
    description: "Elegant drop earrings featuring pear-shaped diamonds that catch and reflect light beautifully.",
    material: "Platinum, Diamonds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "earring-3",
    name: "Pearl and Diamond Earrings",
    price: 2450,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    description: "Freshwater pearls topped with a brilliant diamond in a classic design.",
    material: "18k Gold, Freshwater Pearls, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "earring-4",
    name: "Ruby Hoop Earrings",
    price: 3195,
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&q=80&w=800",
    description: "Modern gold hoops embellished with rich red rubies.",
    material: "14k Gold, Rubies",
    isNew: true,
    isBestseller: false
  },
  {
    id: "earring-5",
    name: "Emerald Chandelier Earrings",
    price: 5295,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=800",
    description: "Statement chandelier earrings featuring emeralds and diamonds in an intricate design.",
    material: "18k White Gold, Emeralds, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "earring-6",
    name: "Diamond Stud Earrings",
    price: 1995,
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&q=80&w=800",
    description: "Essential diamond studs that elevate any look with their timeless sparkle.",
    material: "Platinum, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "earring-7",
    name: "Gold Geometric Earrings",
    price: 1295,
    image: "https://images.unsplash.com/photo-1615655114865-4cc1890a9d3a?auto=format&q=80&w=800",
    description: "Modern geometric designs crafted in polished gold for a contemporary statement.",
    material: "18k Gold",
    isNew: true,
    isBestseller: false
  },
  {
    id: "earring-8",
    name: "Aquamarine Teardrop Earrings",
    price: 2895,
    image: "https://images.unsplash.com/photo-1574948564583-71507663380f?auto=format&q=80&w=800",
    description: "Serene blue aquamarine stones in a teardrop setting with diamond accents.",
    material: "18k White Gold, Aquamarine, Diamonds",
    isNew: false,
    isBestseller: false
  }
];

const EarringCollection: React.FC = () => {
  return (
    <CollectionPageLayout
      title="Earrings"
      subtitle="Everyday Luxury"
      description="From subtle studs to dramatic drops, our earring collection offers something for every style and occasion."
      heroImage="https://images.unsplash.com/photo-1627231893550-d5839add571a?auto=format&q=80&w=1200"
      products={earringProducts}
      collectionType="Earrings"
      craftingDescription="Our earrings are designed with both style and comfort in mind. We carefully balance the weight and proportion of each piece to ensure they sit perfectly on the ear. Every setting is crafted to securely hold stones while maximizing their brilliance, whether in a simple stud or an elaborate chandelier design."
      careInstructions="To keep your earrings in perfect condition, clean them regularly with a soft brush and mild soap solution, taking care to remove any buildup in intricate designs. Store each pair separately to prevent tangling or scratching. Remove earrings before swimming, applying cosmetics, or using hair products to avoid damage."
    />
  );
};

export default EarringCollection;
