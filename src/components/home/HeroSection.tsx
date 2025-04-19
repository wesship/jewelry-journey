import React from "react";
import { Link } from "react-router-dom";
import { Crown, Diamond, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/2dcdab95-697d-4290-9fe2-35cb40375373.png"
          alt="Luxury jewelry showcase"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container relative z-20 text-center mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="h-6 w-6 text-primary" />
            <span className="text-primary font-bold tracking-widest">EXCLUSIVE COLLECTION</span>
          </div>
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl text-white font-display drop-shadow-lg">
            MILE HIGH <span className="text-primary font-bold">GOLDEN</span> ELEVATION
          </h1>
          <p className="text-white font-medium mb-3 uppercase tracking-widest text-sm">
            LIMITED TIME LUXURY ACCESS
          </p>
          <p className="text-xl mb-10 text-white max-w-xl mx-auto">
            Join our elite collectors and unlock exclusive designs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/collections"
              className="btn-primary bg-primary text-black hover:bg-primary/90 px-10 py-3 uppercase tracking-wider font-bold shadow-lg flex items-center gap-2"
            >
              <Diamond className="h-5 w-5" />
              SHOP ELITE
            </Link>
            <Link
              to="/custom"
              className="btn-outline border-2 border-white/20 text-white hover:bg-white/10 px-10 py-3 uppercase tracking-wider font-bold"
            >
              CUSTOM DESIGN
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 text-primary/80">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Members receive priority access</span>
            <Star className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductFeature 
              image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800"
              title="PRODUCT GALLERY"
              description="Masterpieces with artisanal craft techniques"
            />
            <ProductFeature 
              image="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800" 
              title="CUSTOMER TESTIMONIALS"
              description="Elegant, luxury, comfort, perfect elegance"
            />
            <ProductFeature 
              image="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800" 
              title="CUSTOM DESIGNS"
              description="Style, trend, elite, classic, elite elegance"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProductFeatureProps {
  image: string;
  title: string;
  description: string;
}

function ProductFeature({ image, title, description }: ProductFeatureProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-gold-light shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-white text-sm bg-black/40 px-3 py-1 rounded-md">{description}</p>
    </div>
  );
}
