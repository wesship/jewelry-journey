
import React from "react";
import { Crown, Diamond, Star, Gift, Shield, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function VIPBenefits() {
  const benefits = [
    {
      icon: <Crown className="h-6 w-6 text-primary" />,
      title: "Elite Access",
      description: "Preview collections before public release",
    },
    {
      icon: <Diamond className="h-6 w-6 text-primary" />,
      title: "VIP Pricing",
      description: "Exclusive member-only discounts",
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Priority Support",
      description: "24/7 dedicated concierge service",
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: "Special Rewards",
      description: "Earn points on every purchase",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Limited Editions",
      description: "Access to rare collections",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Early Access",
      description: "Shop new arrivals first",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            ELITE MEMBERSHIP
          </Badge>
          <h2 className="text-4xl font-display mb-6 text-white">
            Exclusive VIP Benefits
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join our elite circle and unlock a world of luxury privileges designed for the most discerning collectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                {benefit.icon}
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
