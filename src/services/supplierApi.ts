
import { toast } from "@/hooks/use-toast";

// Types for supplier data
export interface SupplierProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  supplier: string;
  variants?: {
    id: string;
    name: string;
    price?: number;
    options: string[];
  }[];
  inStock: boolean;
  shippingTime?: string;
}

export interface SupplierInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  isConnected: boolean;
}

// List of supported suppliers
export const suppliers: SupplierInfo[] = [
  {
    id: "nihao",
    name: "Nihao Jewelry",
    logo: "https://www.nihaojewelry.com/static/images/PC/logoPC.png",
    description: "Wholesale fashion jewelry with low prices and trendy designs.",
    website: "https://www.nihaojewelry.com",
    isConnected: false
  },
  {
    id: "cj",
    name: "CJ Dropshipping",
    logo: "https://cjdropshipping.com/static/img/logo.png",
    description: "Factory-direct prices with global warehouses and fulfillment.",
    website: "https://cjdropshipping.com",
    isConnected: false
  },
  {
    id: "trendsi",
    name: "Trendsi",
    logo: "https://trendsi.com/assets/logo/logo.svg",
    description: "Fashion-forward jewelry with no upfront inventory costs.",
    website: "https://trendsi.com",
    isConnected: false
  },
  {
    id: "aliexpress",
    name: "AliExpress",
    logo: "https://ae01.alicdn.com/kf/H89cc1bc9a0d0440283e8bd5d97726d8e9.png",
    description: "Wide selection of jewelry from various manufacturers.",
    website: "https://aliexpress.com",
    isConnected: false
  },
  {
    id: "brandsgateway",
    name: "BrandsGateway",
    logo: "https://brandsgateway.com/wp-content/uploads/2020/08/BG-logo-04.svg",
    description: "Luxury and designer jewelry options for high-ticket sales.",
    website: "https://brandsgateway.com",
    isConnected: false
  }
];

// Sample products for demo purposes
const sampleProducts: SupplierProduct[] = [
  {
    id: "nh-001",
    name: "Gold Chain Necklace",
    description: "Elegant 18K gold plated chain necklace, perfect for everyday wear.",
    price: 12.99,
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&q=80&w=800"],
    category: "Necklaces",
    supplier: "nihao",
    variants: [
      {
        id: "length",
        name: "Length",
        options: ["16 inch", "18 inch", "20 inch"]
      }
    ],
    inStock: true,
    shippingTime: "7-14 days"
  },
  {
    id: "cj-001",
    name: "Diamond Stud Earrings",
    description: "Cubic zirconia diamond studs with sterling silver posts.",
    price: 15.50,
    images: ["https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800"],
    category: "Earrings",
    supplier: "cj",
    inStock: true,
    shippingTime: "5-10 days"
  },
  {
    id: "ts-001",
    name: "Minimalist Gold Ring",
    description: "Thin gold-plated band with a subtle geometric design.",
    price: 8.75,
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800"],
    category: "Rings",
    supplier: "trendsi",
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["5", "6", "7", "8", "9"]
      }
    ],
    inStock: true,
    shippingTime: "3-5 days"
  },
  {
    id: "ali-001",
    name: "Crystal Tennis Bracelet",
    description: "Stunning crystal bracelet with adjustable clasp.",
    price: 21.99,
    images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800"],
    category: "Bracelets",
    supplier: "aliexpress",
    inStock: true,
    shippingTime: "14-21 days"
  },
  {
    id: "bg-001",
    name: "Designer Pendant Necklace",
    description: "Luxurious pendant necklace with premium materials.",
    price: 89.95,
    images: ["https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=800"],
    category: "Necklaces",
    supplier: "brandsgateway",
    inStock: true,
    shippingTime: "7-10 days"
  }
];

// Class to manage supplier connections and API calls
class SupplierApiService {
  private apiKeys: Record<string, string> = {};
  
  // Configure API key for a supplier
  setApiKey(supplierId: string, apiKey: string): void {
    this.apiKeys[supplierId] = apiKey;
    
    // In a real app, we would validate the API key here
    // For now, we'll just assume it's valid
    this.updateSupplierConnectionStatus(supplierId, true);
    
    toast({
      title: "API Key Saved",
      description: `Your ${this.getSupplierName(supplierId)} API key has been saved.`,
    });
  }
  
  // Check if we have an API key for this supplier
  hasApiKey(supplierId: string): boolean {
    return Boolean(this.apiKeys[supplierId]);
  }
  
  // Update the connection status for a supplier
  private updateSupplierConnectionStatus(supplierId: string, isConnected: boolean): void {
    const supplierIndex = suppliers.findIndex(s => s.id === supplierId);
    if (supplierIndex >= 0) {
      suppliers[supplierIndex].isConnected = isConnected;
    }
  }
  
  // Get supplier name by ID
  private getSupplierName(supplierId: string): string {
    const supplier = suppliers.find(s => s.id === supplierId);
    return supplier ? supplier.name : supplierId;
  }
  
  // Get list of products from a specific supplier
  // In a real app, this would make an API call to the supplier
  async getProducts(supplierId: string): Promise<SupplierProduct[]> {
    // Check if we have an API key for this supplier
    if (!this.hasApiKey(supplierId)) {
      throw new Error(`No API key configured for ${this.getSupplierName(supplierId)}`);
    }
    
    // Mock API call for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return filtered sample products for the specified supplier
    return sampleProducts.filter(product => product.supplier === supplierId);
  }
  
  // Get all products from all connected suppliers
  async getAllProducts(): Promise<SupplierProduct[]> {
    const connectedSuppliers = suppliers.filter(s => s.isConnected).map(s => s.id);
    
    if (connectedSuppliers.length === 0) {
      // Return sample data for demo if no suppliers are connected
      return sampleProducts;
    }
    
    // In a real app, we would make parallel API calls to each supplier
    const productPromises = connectedSuppliers.map(supplierId => this.getProducts(supplierId));
    const productsArrays = await Promise.all(productPromises);
    
    // Flatten the array of arrays
    return productsArrays.flat();
  }
  
  // Place an order with a supplier
  async placeOrder(
    supplierId: string, 
    productId: string, 
    quantity: number, 
    variantSelections?: Record<string, string>,
    shippingAddress?: any
  ): Promise<{ orderId: string; status: string }> {
    // Check if we have an API key for this supplier
    if (!this.hasApiKey(supplierId)) {
      throw new Error(`No API key configured for ${this.getSupplierName(supplierId)}`);
    }
    
    // Mock API call for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Return mock order confirmation
    return {
      orderId: `ORD-${Date.now()}`,
      status: "pending"
    };
  }
  
  // Get all suppliers
  getSuppliers(): SupplierInfo[] {
    return suppliers;
  }
}

// Export a singleton instance
export const supplierApi = new SupplierApiService();
