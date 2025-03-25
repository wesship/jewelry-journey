
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CreditCard, Shield, Check } from "lucide-react";

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
  const [step, setStep] = useState(1);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 25;
  const tax = Math.round(subtotal * 0.07);
  const total = subtotal + shipping + tax;
  
  const handleProceed = () => {
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      toast.success("Order placed successfully! Thank you for your purchase.");
      // In a real app, this would submit the order and redirect to a confirmation page
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display mb-4">Checkout</h1>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className={`flex-grow h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <div className={`flex-grow h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Payment Information</h2>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" className="mt-1 pl-10" placeholder="•••• •••• •••• ••••" />
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" className="mt-1" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC/CVV</Label>
                          <Input id="cvc" className="mt-1" placeholder="123" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" />
                        <span>Your payment information is securely encrypted</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Review Order</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Shipping Address</h3>
                        <p className="text-gray-600">
                          John Doe<br />
                          123 Main Street<br />
                          Denver, CO 80202<br />
                          United States<br />
                          (555) 123-4567
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium mb-2">Payment Method</h3>
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          <span className="text-gray-600">Visa ending in 4242</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium mb-2">Order Items</h3>
                        <ul className="space-y-3">
                          {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between">
                              <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-gray-500 ml-2">x{item.quantity}</span>
                              </div>
                              <span>${item.price.toLocaleString()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              )}
              <Button 
                className="ml-auto bg-primary text-black hover:bg-primary/90"
                onClick={handleProceed}
              >
                {step < 3 ? 'Continue' : 'Place Order'}
                {step === 3 && <Check className="ml-2 h-4 w-4" />}
              </Button>
            </div>
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
