
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// This would be fetched from a real API in a production app
const getProductById = (id: string) => {
  // Sample product data - in a real application, this would be fetched from a database
  const product = {
    id,
    name: "Diamond Solitaire Ring",
    price: 2495,
    description: "A timeless classic featuring a stunning round brilliant diamond set in platinum. This elegant piece symbolizes eternal love with its dazzling center stone and minimalist design.",
    longDescription: "This exquisite ring features a 1.2 carat round brilliant diamond, carefully selected for its exceptional cut, clarity, and color. The center stone is securely held in a classic four-prong setting, allowing maximum light to enter the diamond for superior brilliance. Crafted from 950 platinum, known for its durability and naturally white sheen that will never fade or tarnish.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1586878341523-7c90913c807b?auto=format&q=80&w=800"
    ],
    category: "Rings",
    material: "Platinum, Diamond",
    isNew: false,
    isBestseller: true,
    availableSizes: ["5", "6", "7", "8"],
    relatedProducts: [
      {
        id: "ring-2",
        name: "Emerald Halo Ring",
        price: 3895,
        image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
      },
      {
        id: "ring-3",
        name: "Sapphire Three-Stone Ring",
        price: 4250,
        image: "https://images.unsplash.com/photo-1586878341523-7c90913c807b?auto=format&q=80&w=800",
      }
    ]
  };
  
  return product;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  
  // In a real app, you would handle loading states and errors
  const product = getProductById(id || "");
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    toast.success(`${product.name} added to your cart`);
    // In a real app, this would add the product to the cart state/API
  };
  
  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to your wishlist`);
    // In a real app, this would add the product to the wishlist state/API
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-jewelry-background py-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <Home className="h-4 w-4" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/collections">Collections</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/collections/${product.category.toLowerCase()}`}>{product.category}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name} 
                  className="w-full h-[500px] object-cover object-center"
                />
              </div>
              
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`rounded-md overflow-hidden border-2 ${index === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-20 h-20 object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-display mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xl text-primary font-medium">${product.price.toLocaleString()}</span>
                  {product.isNew && (
                    <span className="text-sm bg-primary text-white px-2 py-1 rounded-full">New</span>
                  )}
                  {product.isBestseller && (
                    <span className="text-sm bg-black text-white px-2 py-1 rounded-full">Bestseller</span>
                  )}
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="py-4 border-t border-b border-gray-200">
                <h3 className="font-medium mb-2">Material</h3>
                <p className="text-gray-600">{product.material}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedSize === size 
                          ? 'bg-primary text-black border-primary' 
                          : 'bg-white text-gray-800 border border-gray-300 hover:border-primary'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 pt-6">
                <Button 
                  className="w-full bg-primary text-black hover:bg-primary/90" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary/5"
                    onClick={handleAddToWishlist}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary/5"
                    onClick={() => toast.success("Share link copied!")}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details & Specifications */}
      <section className="py-12 bg-jewelry-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display mb-6 text-center">Product Details</h2>
            <div className="prose max-w-none">
              <p>{product.longDescription}</p>
              
              <h3>Specifications</h3>
              <ul>
                <li>Center Stone: 1.2 carat round brilliant diamond</li>
                <li>Diamond Grade: G color, VS1 clarity</li>
                <li>Setting: 4-prong platinum setting</li>
                <li>Metal: 950 Platinum</li>
                <li>Band Width: 2mm</li>
              </ul>
              
              <h3>Craftsmanship</h3>
              <p>Each piece is meticulously crafted by our master jewelers using traditional techniques passed down through generations. After the design is finalized, our artisans carefully select the gemstones and precious metals needed for your piece.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-display mb-8 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group block">
                <div className="relative overflow-hidden rounded-md mb-4">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-64 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">{related.name}</h3>
                <span className="block mt-1 text-primary font-medium">${related.price.toLocaleString()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
