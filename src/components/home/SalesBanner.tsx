
import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export function SalesBanner() {
  return (
    <section className="bg-primary text-black py-8 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6" strokeWidth={2.5} />
            <h3 className="text-xl font-bold">
              Limited Time Offer: 25% Off Selected Items
            </h3>
          </div>
          <p className="text-black text-lg">Use code <span className="font-bold bg-black/10 px-2 py-1 rounded">LUXURY25</span> at checkout</p>
          <Link
            to="/collections"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-black/80 transition-colors font-bold text-base shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
