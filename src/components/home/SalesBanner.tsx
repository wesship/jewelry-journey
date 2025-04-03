
import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export function SalesBanner() {
  return (
    <section className="bg-primary text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <h3 className="text-lg font-medium">
              Limited Time Offer: 20% Off Selected Items
            </h3>
          </div>
          <p className="text-black/80">Use code <span className="font-bold">LUXURY20</span> at checkout</p>
          <Link
            to="/collections"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-black/80 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
