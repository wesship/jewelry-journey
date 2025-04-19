
import React from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Diamond, Star, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/2dcdab95-697d-4290-9fe2-35cb40375373.png"
          alt="AI Application Showcase"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/50 via-black/50 to-black/80"></div>
      </div>
      
      <div className="container relative z-20 text-center mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BadgeDollarSign className="h-8 w-8 text-[#D946EF]" />
            <span className="text-[#D946EF] font-bold tracking-widest">$1 MILLION CHALLENGE</span>
          </div>
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-white font-display">
            TRANSFORM YOUR <span className="text-[#9b87f5] font-bold">AI IDEA</span> INTO REALITY
          </h1>
          <p className="text-white font-medium mb-3 uppercase tracking-widest text-sm">
            Limited Time Opportunity
          </p>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join the elite group of innovators competing for the $1 million prize pool
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/register"
              className="btn-primary bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-white hover:opacity-90 px-10 py-4 uppercase tracking-wider font-bold shadow-lg flex items-center gap-2 rounded-md"
            >
              <Sparkles className="h-5 w-5" />
              Enter Challenge
            </Link>
            <Link
              to="/learn-more"
              className="btn-outline border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 uppercase tracking-wider font-bold rounded-md"
            >
              View Details
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 text-[#D946EF]">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Early registration bonus available</span>
            <Star className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<BadgeDollarSign className="h-6 w-6 text-[#9b87f5]" />}
              title="$1M PRIZE POOL"
              description="Transform your AI innovation into success"
            />
            <FeatureCard 
              icon={<Diamond className="h-6 w-6 text-[#9b87f5]" />}
              title="EXPERT MENTORSHIP"
              description="Get guidance from industry leaders"
            />
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6 text-[#9b87f5]" />}
              title="GLOBAL EXPOSURE"
              description="Showcase your AI solution worldwide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#9b87f5]/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm text-center">{description}</p>
    </div>
  );
}
