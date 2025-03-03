
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { useParams, Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample product data
const products = [
  {
    id: "1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1633555774881-ee1a124b19ef?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1604803089816-9fb8ff78b581?auto=format&q=80&w=800",
    ],
    category: "Rings",
    metal: "White Gold",
    stone: "Diamond",
    description: "This elegant solitaire ring features a brilliant-cut diamond set in 18k white gold. The minimalist design allows the 1-carat diamond to take center stage, creating a timeless piece that will never go out of style. Perfect as an engagement ring or a special occasion gift.",
    details: [
      "1-carat brilliant-cut diamond (G color, VS1 clarity)",
      "18k white gold band",
      "Prong setting",
      "Band width: 2mm",
      "Handcrafted in our atelier",
    ],
    care: "To maintain the brilliance of your diamond ring, clean it regularly with a soft brush and mild soap in warm water. Store separately to prevent scratches, and have it professionally inspected and cleaned annually.",
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 1295,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1620656798932-902d3a8fbddc?auto=format&q=80&w=800",
    ],
    category: "Necklaces",
    metal: "Silver",
    stone: "Pearl",
    description: "This timeless pearl necklace features a strand of perfectly matched freshwater pearls, each carefully selected for its luster and shape. The sterling silver clasp adds a modern touch to this classic piece, making it versatile enough for both formal occasions and everyday elegance.",
    details: [
      "8-9mm freshwater cultured pearls",
      "Sterling silver clasp",
      "18-inch length",
      "Hand-knotted between each pearl",
      "Comes with a branded jewelry box",
    ],
    care: "Pearls are organic gems and require special care. Wipe with a soft cloth after wearing to remove oils and perfume. Store in a soft pouch, away from other jewelry to prevent scratches. Avoid contact with cosmetics, perfume, and hairspray.",
  },
];

// Sample related products
const relatedProducts = [
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
    price: 2795,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    category: "Rings",
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h2 className="mb-4">Product Not Found</h2>
          <p className="text-jewelry-muted mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link to="/collections" className="btn-primary">
            Back to Collections
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-4 text-sm text-jewelry-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          {" / "}
          <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
          {" / "}
          <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</Link>
          {" / "}
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-md aspect-square ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-border hover:ring-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-display font-medium mb-2">{product.name}</h1>
            <p className="text-2xl text-primary font-medium mb-6">${product.price.toLocaleString()}</p>
            
            <p className="text-jewelry-muted mb-8">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm uppercase font-medium text-jewelry-muted">Category</span>
                <p>{product.category}</p>
              </div>
              <div>
                <span className="text-sm uppercase font-medium text-jewelry-muted">Metal</span>
                <p>{product.metal}</p>
              </div>
              <div>
                <span className="text-sm uppercase font-medium text-jewelry-muted">Stone</span>
                <p>{product.stone}</p>
              </div>
              <div>
                <span className="text-sm uppercase font-medium text-jewelry-muted">Availability</span>
                <p className="text-emerald-600">In Stock</p>
              </div>
            </div>
            
            <Separator className="mb-6" />
            
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm uppercase font-medium text-jewelry-muted mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-l-md"
                  disabled={quantity <= 1}
                >
                  <span className="sr-only">Decrease</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border-y border-border text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-r-md"
                >
                  <span className="sr-only">Increase</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button className="btn-primary py-4">Add to Cart</button>
              <button className="btn-outline border-primary text-primary hover:bg-primary/5 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                Add to Wishlist
              </button>
            </div>
            
            <div className="bg-jewelry-subtle p-4 rounded-md mb-6">
              <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5"><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 8h12"></path><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"></path><path d="M9.9 17.5H4a2 2 0 0 0-2 2V22"></path><path d="M9.9 12H6a2 2 0 0 0-2 2v3.5"></path></svg>
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-jewelry-muted">On all orders over $500</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-jewelry-muted">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="M16 6c0 6-8 4-8 10"></path><path d="M12 10a1 1 0 0 0 0-2"></path><path d="M12 22a1 1 0 0 0 0-2"></path></svg>
                <div>
                  <h4 className="font-medium">Authenticity Guaranteed</h4>
                  <p className="text-sm text-jewelry-muted">Each piece comes with a certificate of authenticity</p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="details" className="mt-auto">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-jewelry-muted">
                <ul className="list-disc list-inside space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="care" className="text-jewelry-muted">
                <p>{product.care}</p>
              </TabsContent>
              <TabsContent value="shipping" className="text-jewelry-muted">
                <p>We offer free shipping on all orders over $500. Standard shipping takes 3-5 business days. Express shipping is available at checkout for an additional fee.</p>
                <p className="mt-2">All orders are fully insured and require a signature upon delivery.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-display font-medium mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
