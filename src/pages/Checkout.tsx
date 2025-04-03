
import React from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

// Sample cart data for order summary
const cartItems = [
  {
    id: "ring-1",
    name: "Diamond Solitaire Ring",
    price: 2495,
    quantity: 1,
  },
  {
    id: "necklace-2",
    name: "Pearl Necklace",
    price: 1295,
    quantity: 1,
  }
];

const Checkout = () => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = Math.round(subtotal * 0.07);
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display mb-4">Checkout</h1>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-black">
              1
            </div>
            <div className="flex-grow h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
              2
            </div>
            <div className="flex-grow h-1 bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
              3
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <CheckoutForm
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
