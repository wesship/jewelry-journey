import { allProducts } from "@/data/basicProducts";
import { productDetails } from "@/data/detailedProducts";
import type { DetailedProduct } from "@/types/product";

export const getProductById = (id: string): DetailedProduct => {
  // First check if we have detailed product info
  if (id in productDetails) {
    return productDetails[id];
  }
  
  // Otherwise return basic product info with default detailed fields
  const product = allProducts.find(product => product.id === id);
  
  if (!product) {
    // If product is not found, return a default product
    return {
      id: "not-found",
      name: "Product Not Found",
      price: 0,
      images: ["/placeholder.svg"],
      category: "Unknown",
      material: "Unknown",
      description: "This product could not be found.",
      longDescription: "We're sorry, but the product you're looking for is not available. Please check the product ID and try again, or browse our collections for other beautiful jewelry pieces.",
      availableSizes: ["One Size"],
      isNew: false,
      isBestseller: false,
      relatedProducts: allProducts.slice(0, 4).map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image
      }))
    };
  }
  
  // For products without detailed information, create a default structure
  return {
    ...product,
    images: [product.image, product.image, product.image, product.image],
    description: `Beautiful ${product.name} crafted with ${product.material}.`,
    longDescription: `This exquisite ${product.name} showcases the finest craftsmanship and materials. Made with ${product.material}, this piece embodies elegance and sophistication. Perfect for special occasions or as a treasured gift.`,
    availableSizes: ["One Size"],
    isNew: false,
    isBestseller: false,
    relatedProducts: allProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image
    }))
  };
};
