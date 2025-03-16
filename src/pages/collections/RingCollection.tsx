
import React from "react";
import { CollectionPageLayout, CollectionProduct } from "@/components/collections/CollectionPageLayout";

// Sample ring products
const ringProducts: CollectionProduct[] = [
  {
    id: "ring-1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    description: "A timeless classic featuring a stunning round brilliant diamond set in platinum.",
    material: "Platinum, Diamond",
    isNew: false,
    isBestseller: true
  },
  {
    id: "ring-2",
    name: "Emerald Halo Ring",
    price: 3895,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
    description: "A luxurious emerald surrounded by a halo of brilliant diamonds.",
    material: "18k Gold, Emerald, Diamonds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "ring-3",
    name: "Sapphire Three-Stone Ring",
    price: 4250,
    image: "https://images.unsplash.com/photo-1586878341523-7c90913c807b?auto=format&q=80&w=800",
    description: "An elegant arrangement of a center blue sapphire flanked by two diamonds.",
    material: "18k White Gold, Sapphire, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "ring-4",
    name: "Vintage Ruby Ring",
    price: 3150,
    image: "https://images.unsplash.com/photo-1551408531-4b363f24f50a?auto=format&q=80&w=800",
    description: "A vintage-inspired design featuring a deep red ruby surrounded by intricate metalwork.",
    material: "14k Rose Gold, Ruby, Diamonds",
    isNew: false,
    isBestseller: false
  },
  {
    id: "ring-5",
    name: "Diamond Eternity Band",
    price: 1895,
    image: "https://images.unsplash.com/photo-1606293459339-aa5a4c5f9d94?auto=format&q=80&w=800",
    description: "A circle of diamonds that represents never-ending love.",
    material: "Platinum, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "ring-6",
    name: "Twisted Pave Band",
    price: 1295,
    image: "https://images.unsplash.com/photo-1603561594321-e3fbad1282a4?auto=format&q=80&w=800",
    description: "A gracefully twisted band adorned with pave-set diamonds.",
    material: "18k White Gold, Diamonds",
    isNew: true,
    isBestseller: false
  },
  {
    id: "ring-7",
    name: "Cushion Cut Halo Ring",
    price: 3750,
    image: "https://images.unsplash.com/photo-1571938933407-598440d7e349?auto=format&q=80&w=800",
    description: "A dazzling cushion cut diamond surrounded by a halo of smaller stones.",
    material: "Platinum, Diamonds",
    isNew: false,
    isBestseller: true
  },
  {
    id: "ring-8",
    name: "Art Deco Inspired Ring",
    price: 2950,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfbfc8?auto=format&q=80&w=800",
    description: "Geometric patterns and milgrain details inspired by the Art Deco era.",
    material: "18k Gold, Diamonds, Sapphires",
    isNew: false,
    isBestseller: false
  },
  {
    id: "ring-9",
    name: "Minimalist Gold Band",
    price: 895,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&q=80&w=800",
    description: "A simple, elegant band crafted from solid gold.",
    material: "14k Gold",
    isNew: false,
    isBestseller: false
  }
];

const RingCollection: React.FC = () => {
  return (
    <CollectionPageLayout
      title="Rings"
      subtitle="Elegant Designs"
      description="From statement pieces to subtle elegance, our ring collection features handcrafted designs for every occasion."
      heroImage="https://images.unsplash.com/photo-1568944117260-fff397c389a6?auto=format&q=80&w=1200"
      products={ringProducts}
      collectionType="Rings"
      craftingDescription="Each ring in our collection is meticulously crafted by our master jewelers. Starting with the finest ethically sourced materials, we use a combination of traditional techniques and modern technology to create rings of exceptional quality and beauty. Every stone is carefully selected and set to ensure maximum brilliance."
      careInstructions="To keep your ring looking its best, avoid wearing it during activities that could damage the setting or stones. Clean your ring regularly with a gentle jewelry cleaner or warm soapy water and a soft brush. Have your ring professionally checked and cleaned every 6-12 months to ensure the setting remains secure."
    />
  );
};

export default RingCollection;
