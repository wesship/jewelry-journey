
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { CreditCard, Shield, Check } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Validation schemas for each step
const shippingSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  postalCode: z.string().min(3, { message: "Postal code is required" }),
  state: z.string().min(2, { message: "State/Province is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  phone: z.string().min(7, { message: "Valid phone number is required" }),
});

const paymentSchema = z.object({
  cardName: z.string().min(3, { message: "Name on card is required" }),
  cardNumber: z
    .string()
    .min(13, { message: "Card number must be between 13 and 19 digits" })
    .max(19, { message: "Card number must be between 13 and 19 digits" })
    .regex(/^[0-9]+$/, { message: "Card number must contain only digits" }),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiry date must be in MM/YY format" }),
  cvc: z
    .string()
    .min(3, { message: "CVC must be 3 or 4 digits" })
    .max(4, { message: "CVC must be 3 or 4 digits" })
    .regex(/^[0-9]+$/, { message: "CVC must contain only digits" }),
});

// Combine schemas for the final review step
const reviewSchema = z.object({});

type CheckoutFormProps = {
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

export function CheckoutForm({
  cartItems,
  subtotal,
  shipping,
  tax,
  total,
}: CheckoutFormProps) {
  const [step, setStep] = useState(1);
  
  const shippingForm = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
      phone: "",
    }
  });

  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    }
  });
  
  const reviewForm = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
  });
  
  // Shipping form submit handler
  const onShippingSubmit = (data: z.infer<typeof shippingSchema>) => {
    console.log("Shipping information:", data);
    setStep(2);
    window.scrollTo(0, 0);
  };
  
  // Payment form submit handler
  const onPaymentSubmit = (data: z.infer<typeof paymentSchema>) => {
    console.log("Payment information:", data);
    setStep(3);
    window.scrollTo(0, 0);
  };
  
  // Review form submit handler
  const onReviewSubmit = () => {
    // In a real application, this would submit all the data to a server
    console.log("Order submitted");
    toast.success("Order placed successfully! Thank you for your purchase.");
    // In a real app, this would redirect to a confirmation page
  };
  
  return (
    <>
      <Card className="mb-8">
        <CardContent className="p-6">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
              <Form {...shippingForm}>
                <form onSubmit={shippingForm.handleSubmit(onShippingSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={shippingForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={shippingForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={shippingForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={shippingForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={shippingForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={shippingForm.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={shippingForm.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State/Province</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={shippingForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={shippingForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit">Continue</Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-xl font-medium mb-6">Payment Information</h2>
              <Form {...paymentForm}>
                <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-6">
                  <FormField
                    control={paymentForm.control}
                    name="cardName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name on Card</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={paymentForm.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              {...field} 
                              className="pl-10" 
                              placeholder="•••• •••• •••• ••••"
                              onChange={(e) => {
                                // Only allow numeric input and format as user types
                                const value = e.target.value.replace(/\D/g, '');
                                field.onChange(value);
                              }}
                            />
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={paymentForm.control}
                      name="expiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="MM/YY"
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length > 0) {
                                  value = value.match(new RegExp('.{1,2}', 'g'))?.join('/') || '';
                                  if (value.length > 5) {
                                    value = value.substring(0, 5);
                                  }
                                }
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={paymentForm.control}
                      name="cvc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC/CVV</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="123"
                              maxLength={4}
                              onChange={(e) => {
                                // Only allow numeric input
                                const value = e.target.value.replace(/\D/g, '');
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>Your payment information is securely encrypted</span>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit">Continue</Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <h2 className="text-xl font-medium mb-6">Review Order</h2>
              <Form {...reviewForm}>
                <form onSubmit={reviewForm.handleSubmit(onReviewSubmit)} className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Shipping Address</h3>
                    <p className="text-gray-600">
                      {shippingForm.getValues().firstName} {shippingForm.getValues().lastName}<br />
                      {shippingForm.getValues().address}<br />
                      {shippingForm.getValues().city}, {shippingForm.getValues().state} {shippingForm.getValues().postalCode}<br />
                      {shippingForm.getValues().country}<br />
                      {shippingForm.getValues().phone}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <div className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      <span className="text-gray-600">
                        Card ending in {paymentForm.getValues().cardNumber.slice(-4)}
                      </span>
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
                  
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button type="submit" className="bg-primary text-black hover:bg-primary/90">
                      Place Order
                      <Check className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
