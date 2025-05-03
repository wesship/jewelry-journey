
import React from "react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Timer, Sparkles, Award, ChevronRight, Star, RocketIcon, Gift } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ARViewer } from "@/components/ar/ARViewer";

export default function MillionChallenge() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/2dcdab95-697d-4290-9fe2-35cb40375373.png"
            alt="$1 Million AI Challenge Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/50 via-black/50 to-black/80"></div>
        </div>
        
        <div className="container relative z-20 mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BadgeDollarSign className="h-10 w-10 text-[#D946EF]" />
              <span className="text-[#D946EF] font-bold tracking-widest text-lg">$1 MILLION CHALLENGE</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-white font-display text-center">
              TRANSFORM YOUR <span className="text-[#9b87f5] font-bold">AI IDEA</span> INTO REALITY
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Timer className="h-5 w-5 text-primary" />
                <span className="font-mono font-bold text-white">Early Bird Registration Ends In: 23:59:59</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/register"
                className="btn-primary bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-white hover:opacity-90 px-10 py-4 uppercase tracking-wider font-bold shadow-lg flex items-center gap-2 rounded-md"
              >
                <Sparkles className="h-5 w-5" />
                Enter Challenge
              </Link>
              <a
                href="#details"
                className="btn-outline border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 uppercase tracking-wider font-bold rounded-md"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-16 bg-black" id="details">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="PRIZE CATEGORIES"
            title="$1 MILLION IN AWARDS"
            description="The challenge is divided into multiple categories, each with substantial prizes. Showcase your AI innovation in any of these fields."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AwardCategory 
              icon={<Award className="h-12 w-12 text-primary" />}
              title="AI Innovation"
              amount="$300,000"
              description="For the most groundbreaking application of AI technology with real-world impact."
            />
            <AwardCategory 
              icon={<BadgeDollarSign className="h-12 w-12 text-primary" />}
              title="Financial Tech"
              amount="$250,000"
              description="For transformative AI solutions in financial services and commerce."
            />
            <AwardCategory 
              icon={<RocketIcon className="h-12 w-12 text-primary" />}
              title="Startup Accelerator"
              amount="$200,000"
              description="For early-stage companies with promising AI applications."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <AwardCategory 
              icon={<Star className="h-12 w-12 text-primary" />}
              title="Social Impact"
              amount="$150,000"
              description="For AI solutions addressing critical social challenges."
            />
            <AwardCategory 
              icon={<Gift className="h-12 w-12 text-primary" />}
              title="People's Choice"
              amount="$100,000"
              description="Decided by public vote during the final showcase event."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-[#1A1F2C] to-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="PROCESS"
            title="HOW THE CHALLENGE WORKS"
            description="A simple three-stage process designed to identify and reward the most promising AI innovations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <StageCard 
              number="01"
              title="Submit Your Idea"
              description="Register and submit your AI concept with a brief explanation of its potential impact."
            />
            <StageCard 
              number="02"
              title="Development & Mentorship"
              description="Selected participants receive funding and mentorship to develop a prototype."
            />
            <StageCard 
              number="03"
              title="Final Showcase"
              description="Present your solution to a panel of industry experts and investors at our global event."
            />
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/register"
              className="flex items-center gap-2 bg-white px-8 py-4 rounded-md text-[#1A1F2C] font-bold hover:bg-white/90 transition-colors"
            >
              Register Now
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AR Preview Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="INNOVATION PREVIEW"
            title="VISUALIZE YOUR AI SOLUTION"
            description="Use our AR technology to visualize how your AI solution might look in real-world applications."
          />

          <div className="max-w-2xl mx-auto mt-8">
            <ARViewer jewelryType="ring" modelQuality="medium" isRotating={true} />
            <p className="text-center text-white/70 mt-4">
              This is just an example of how AR can be integrated with AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Bonus Promo Widget */}
      <section className="py-12 bg-gradient-to-r from-[#9b87f5] to-[#D946EF]">
        <div className="container mx-auto px-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">BONUS: AI Training Package</h3>
                <p className="text-white/80 mb-4">
                  Register before the deadline and receive our exclusive AI training package worth $5,000.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                    <Timer className="h-4 w-4 text-white" />
                    <span className="font-mono font-bold text-white">23:59:59</span>
                  </div>
                  <span className="text-white/70">remaining</span>
                </div>
              </div>
              <Link
                to="/register"
                className="btn-primary bg-white text-[#9b87f5] px-10 py-4 uppercase tracking-wider font-bold shadow-lg flex items-center gap-2 rounded-md whitespace-nowrap"
              >
                <Sparkles className="h-5 w-5" />
                Claim Bonus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface AwardCategoryProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  description: string;
}

function AwardCategory({ icon, title, amount, description }: AwardCategoryProps) {
  return (
    <div className="bg-black/40 border border-[#9b87f5]/20 p-8 rounded-lg transition-all hover:border-primary/40 hover:bg-black/50">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <div className="text-primary text-2xl font-mono font-bold mb-3">{amount}</div>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

interface StageCardProps {
  number: string;
  title: string;
  description: string;
}

function StageCard({ number, title, description }: StageCardProps) {
  return (
    <div className="relative">
      <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="bg-black/40 border border-white/10 p-8 pt-10 rounded-lg">
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
