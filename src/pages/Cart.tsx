
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, X, CreditCard, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Sample cart data
const initialCartItems = [
  {
    id: "ring-1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
    quantity: 1,
    size: "7",
  },
  {
    id: "necklace-2",
    name: "Pearl Necklace",
    price: 1295,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    quantity: 1,
    size: "18\"",
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 25;
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };
  
  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
      toast.success("Promo code applied successfully!");
    } else {
      toast.error("Invalid promo code");
    }
  };
  
  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
    // In a real app, this would navigate to the checkout page
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display mb-4">Your Shopping Cart</h1>
          <p className="text-jewelry-muted max-w-2xl mx-auto">
            Review your items below and proceed to checkout when you're ready.
          </p>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-jewelry-muted mb-8">Looks like you haven't added any jewelry to your cart yet.</p>
            <Link to="/collections">
              <Button className="bg-primary text-black hover:bg-primary/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-subtle">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-medium">Cart Items ({cartItems.length})</h2>
                </div>
                
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 border-b last:border-b-0 flex gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 rounded-md object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between mb-2">
                          <Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-primary">
                            {item.name}
                          </Link>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 p-0"
                          >
                            <X size={18} />
                          </Button>
                        </div>
                        
                        <div className="text-jewelry-muted mb-3">
                          Size: {item.size}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border rounded-md">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 px-2"
                            >
                              <MinusCircle size={16} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 px-2"
                            >
                              <PlusCircle size={16} />
                            </Button>
                          </div>
                          
                          <div className="font-medium">
                            ${(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-subtle sticky top-24">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toLocaleString()}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-4 font-medium text-lg flex justify-between">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo Code"
                        className="flex-grow px-3 py-2 border rounded-md"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button onClick={handlePromoCode}>Apply</Button>
                    </div>
                    <div className="text-xs mt-1 text-jewelry-muted">
                      Try "WELCOME10" for 10% off
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-black hover:bg-primary/90 mb-4"
                    size="lg"
                    onClick={handleCheckout}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Checkout Securely
                  </Button>
                  
                  <div className="text-center text-sm text-jewelry-muted">
                    <div className="flex justify-center gap-2 mb-2">
                      <CreditCard size={16} />
                      <span>Secure Payment</span>
                    </div>
                    <p>We accept all major credit cards, PayPal, and Apple Pay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
