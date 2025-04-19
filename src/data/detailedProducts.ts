import { DetailedProduct } from "@/types/product";

export const productDetails: Record<string, DetailedProduct> = {
  "ring-1": {
    id: "ring-1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1602751584553-8ba597ba0faa?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&q=80&w=800"
    ],
    category: "Rings",
    material: "Platinum, Diamond",
    description: "This timeless diamond solitaire ring features a stunning round brilliant cut diamond set in a classic 4-prong setting. The platinum band provides durability and a luxurious feel.",
    longDescription: "Our Diamond Solitaire Ring represents the epitome of classic elegance. This stunning piece features a 1.2 carat round brilliant diamond of exceptional clarity (VS1) and color (G), perfectly positioned to catch the light from every angle. The diamond is securely held in a timeless 4-prong setting that allows maximum light exposure, enhancing its natural brilliance and fire. \n\nThe band is crafted from 950 platinum, known for its durability and naturally white sheen that will never fade or tarnish. With its 2mm width, the band provides a comfortable fit while maintaining a delicate appearance that won't overshadow the center stone. \n\nThis ring is ideal as an engagement ring or a special gift to mark a momentous occasion. Each ring is custom sized to ensure a perfect fit and comes with a certificate of authenticity.",
    availableSizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
    isNew: true,
    isBestseller: true,
    relatedProducts: [
      {
        id: "ring-2",
        name: "Emerald Halo Ring",
        price: 3895,
        image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800"
      },
      {
        id: "ring-3",
        name: "Vintage Ruby Ring",
        price: 3150,
        image: "https://images.unsplash.com/photo-1551408531-4b363f24f50a?auto=format&q=80&w=800"
      },
      {
        id: "necklace-1",
        name: "Pearl Necklace",
        price: 1295,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800"
      },
      {
        id: "earring-1",
        name: "Sapphire Earrings",
        price: 1895,
        image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800"
      }
    ]
  },
  "ring-2": {
    id: "ring-2",
    name: "Emerald Halo Ring",
    price: 3895,
    images: [
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1604177052603-c2b4cff228db?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1633810523585-beeeead3db96?auto=format&q=80&w=800"
    ],
    category: "Rings",
    material: "White Gold, Emerald, Diamond",
    description: "A stunning emerald center stone surrounded by a halo of brilliant diamonds. Set in 18k white gold, this ring makes a bold statement.",
    longDescription: "Our Emerald Halo Ring showcases a vibrant 1.5 carat emerald-cut emerald of AAA quality. The rich green of this Colombian emerald is accentuated by a surrounding halo of 24 round brilliant diamonds totaling 0.75 carats (G color, VS clarity). \n\nThe setting is crafted from 18k white gold, providing a bright, contemporary look that highlights the gemstones. The band features an intricate design with small pavé diamonds extending halfway around for added sparkle from every angle. \n\nEmeralds symbolize rebirth and love, making this ring a perfect choice for those born in May or celebrating a 20th or 35th anniversary. Each emerald is carefully selected for its rich color and clarity, ensuring a truly exceptional piece of jewelry that will be treasured for generations.",
    availableSizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
    isNew: false,
    isBestseller: true,
    relatedProducts: [
      {
        id: "ring-1",
        name: "Diamond Solitaire Ring",
        price: 2495,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800"
      },
      {
        id: "ring-3",
        name: "Vintage Ruby Ring",
        price: 3150,
        image: "https://images.unsplash.com/photo-1551408531-4b363f24f50a?auto=format&q=80&w=800"
      },
      {
        id: "necklace-2",
        name: "Diamond Pendant",
        price: 2195,
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800"
      },
      {
        id: "earring-1",
        name: "Sapphire Earrings",
        price: 1895,
        image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800"
      }
    ]
  },
  "necklace-1": {
    id: "necklace-1",
    name: "Pearl Necklace",
    price: 1295,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1631982690223-8aa5bd3eec3b?auto=format&q=80&w=800"
    ],
    category: "Necklaces",
    material: "Gold, Pearl",
    description: "An elegant strand of cultured Akoya pearls with a 14k gold clasp. These luminous pearls create a sophisticated look for any occasion.",
    longDescription: "Our Pearl Necklace features 35 perfectly matched, AAA quality Akoya cultured pearls measuring 7-7.5mm in diameter. These pearls are known for their exceptional luster and consistently round shape, creating a classic necklace that epitomizes timeless elegance. \n\nEach pearl has been carefully selected for its smooth surface, rich luster, and clean white color with subtle rose overtones. The necklace is hand-knotted on silk thread for security and proper spacing between each pearl. \n\nThe 18-inch length is secured with a 14k gold ball clasp that is both secure and easy to operate. The necklace arrives in a beautiful presentation box, making it an ideal gift for yourself or someone special. Pearls are the traditional gift for a 30th anniversary and represent wisdom, integrity, and purity.",
    isNew: false,
    isBestseller: true,
    relatedProducts: [
      {
        id: "necklace-2",
        name: "Diamond Pendant",
        price: 2195,
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800"
      },
      {
        id: "earring-2",
        name: "Gold Hoop Earrings",
        price: 995,
        image: "https://images.unsplash.com/photo-1630019925419-5c83937a6cf0?auto=format&q=80&w=800"
      },
      {
        id: "ring-1",
        name: "Diamond Solitaire Ring",
        price: 2495,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800"
      },
      {
        id: "bracelet-1",
        name: "Gold Tennis Bracelet",
        price: 3295,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800"
      }
    ]
  },
  // Add more products with detailed information as needed
};
