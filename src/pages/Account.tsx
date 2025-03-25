
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Package, CreditCard, Heart, User, LogOut } from "lucide-react";
import { toast } from "sonner";

// Sample order data
const orders = [
  {
    id: "ORD-5823",
    date: "June 15, 2023",
    total: 2495,
    status: "Delivered",
    items: [
      { name: "Diamond Solitaire Ring", price: 2495 }
    ],
  },
  {
    id: "ORD-4291",
    date: "May 3, 2023",
    total: 1295,
    status: "Processing",
    items: [
      { name: "Pearl Necklace", price: 1295 }
    ],
  }
];

// Sample wishlist data
const wishlistItems = [
  {
    id: "product-1",
    name: "Emerald Halo Ring",
    price: 3895,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&q=80&w=800",
  },
  {
    id: "product-2",
    name: "Sapphire Earrings",
    price: 1895,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
  },
  {
    id: "product-3",
    name: "Gold Tennis Bracelet",
    price: 3295,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
  }
];

const Account = () => {
  const [activeTab, setActiveTab] = useState("orders");
  
  const handleUpdateProfile = () => {
    toast.success("Profile updated successfully");
  };
  
  const handleUpdatePassword = () => {
    toast.success("Password updated successfully");
  };
  
  const handleRemoveWishlistItem = (id: string) => {
    toast.success("Item removed from wishlist");
    // In a real app, this would remove the item from the wishlist
  };
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    // In a real app, this would log the user out
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="font-medium">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
                
                <Separator className="my-4" />
                
                <nav className="space-y-1">
                  <Button 
                    variant={activeTab === "orders" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "orders" ? "bg-primary text-black" : ""}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button 
                    variant={activeTab === "wishlist" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "wishlist" ? "bg-primary text-black" : ""}`}
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button 
                    variant={activeTab === "payments" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "payments" ? "bg-primary text-black" : ""}`}
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "profile" ? "bg-primary text-black" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </nav>
                
                <Separator className="my-4" />
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-gray-500"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </aside>
          
          <div className="flex-grow">
            <Card>
              <CardContent className="p-6">
                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Your Orders</h2>
                    
                    {orders.length === 0 ? (
                      <p className="text-gray-500">You haven't placed any orders yet.</p>
                    ) : (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="border rounded-lg p-4">
                            <div className="flex flex-wrap justify-between items-center mb-4">
                              <div>
                                <span className="font-medium">Order {order.id}</span>
                                <span className="text-sm text-gray-500 ml-4">{order.date}</span>
                              </div>
                              <div>
                                <span className={`px-3 py-1 rounded-full text-xs ${
                                  order.status === "Delivered" 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-blue-100 text-blue-800"
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                  <span>{item.name}</span>
                                  <span>${item.price.toLocaleString()}</span>
                                </div>
                              ))}
                            </div>
                            
                            <Separator className="my-3" />
                            
                            <div className="flex justify-between font-medium">
                              <span>Total</span>
                              <span>${order.total.toLocaleString()}</span>
                            </div>
                            
                            <div className="mt-4 flex gap-2">
                              <Button variant="outline" size="sm">Track Order</Button>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "wishlist" && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Your Wishlist</h2>
                    
                    {wishlistItems.length === 0 ? (
                      <p className="text-gray-500">Your wishlist is empty.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {wishlistItems.map((item) => (
                          <div key={item.id} className="flex gap-4 border rounded-lg p-4">
                            <div className="w-24 h-24 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            
                            <div className="flex-grow">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-primary">${item.price.toLocaleString()}</p>
                              
                              <div className="mt-4 flex gap-2">
                                <Button variant="default" size="sm" className="bg-primary text-black hover:bg-primary/90">
                                  Add to Cart
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleRemoveWishlistItem(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "payments" && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Payment Methods</h2>
                    
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CreditCard className="h-6 w-6 mr-3 text-gray-500" />
                          <div>
                            <h3 className="font-medium">Visa ending in 4242</h3>
                            <p className="text-sm text-gray-500">Expires 06/25</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                    
                    <Button variant="outline">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                )}
                
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Your Profile</h2>
                    
                    <Tabs defaultValue="personal">
                      <TabsList className="mb-6">
                        <TabsTrigger value="personal">Personal Info</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="personal">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" defaultValue="John" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" defaultValue="Doe" className="mt-1" />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" defaultValue="(555) 123-4567" className="mt-1" />
                          </div>
                          
                          <Button 
                            className="bg-primary text-black hover:bg-primary/90"
                            onClick={handleUpdateProfile}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="password">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input id="currentPassword" type="password" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" className="mt-1" />
                          </div>
                          
                          <Button 
                            className="bg-primary text-black hover:bg-primary/90"
                            onClick={handleUpdatePassword}
                          >
                            Update Password
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
