
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { getProductById } from "@/utils/productUtils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  
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

  const goBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <Layout>
      {/* Back button and Breadcrumb */}
      <div className="bg-jewelry-background py-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <Button 
              variant="ghost" 
              className="inline-flex items-center text-primary hover:text-primary/80 self-start"
              onClick={goBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
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
      </div>
      
      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductImageGallery images={product.images} productName={product.name} />
            
            <ProductInfo 
              name={product.name}
              price={product.price}
              description={product.description}
              material={product.material}
              isNew={product.isNew}
              isBestseller={product.isBestseller}
              availableSizes={product.availableSizes}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          </div>
        </div>
      </section>
      
      <ProductDetails longDescription={product.longDescription} />
      
      <RelatedProducts products={product.relatedProducts} />
    </Layout>
  );
};

export default ProductDetail;
