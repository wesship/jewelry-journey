
import React from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Sparkles, ChevronRight } from "lucide-react";

export function ChallengePromoWidget() {
  return (
    <section className="py-10 bg-gradient-to-r from-black to-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#9b87f5]/10 to-[#D946EF]/10 border border-[#9b87f5]/20 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <BadgeDollarSign className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-primary">$1 MILLION AI CHALLENGE</h3>
              </div>
              <p className="text-white text-2xl font-bold mb-4">Transform Your AI Ideas Into Reality</p>
              <p className="text-white/70 mb-4">
                Join our global competition to showcase your innovative AI solutions and win 
                from our $1 million prize pool. Expert mentorship, investor access, and global 
                recognition await.
              </p>
              <div className="bg-white/10 inline-block px-4 py-2 rounded-full mb-4">
                <span className="text-white font-medium">Early Bird Registration Open</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/million-challenge"
                className="px-6 py-3 bg-primary text-black font-bold rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Learn More 
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/million-challenge#details"
                className="px-6 py-3 bg-black/40 text-white border border-primary/20 font-bold rounded-md flex items-center justify-center gap-2 hover:bg-black/60 transition-colors"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                View Prizes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
