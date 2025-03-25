
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gold-light/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="inline-block font-display text-2xl font-semibold mb-6">
              <span className="text-primary">MILE HIGH</span>
              <span className="text-white ml-2">GOLDEN ELEVATION</span>
            </Link>
            <p className="text-white/60 mb-6">
              Crafting exquisite luxury jewelry with precision and passion since 1996.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-light/30 hover:border-primary text-white/80 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-light/30 hover:border-primary text-white/80 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-light/30 hover:border-primary text-white/80 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-light/30 hover:border-primary text-white/80 hover:text-primary transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8"/><path d="M12 8v8"/><circle cx="12" cy="12" r="10"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-6 text-white">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/collections" className="text-white/60 hover:text-primary transition-colors">Collections</Link></li>
              <li><Link to="/collections/rings" className="text-white/60 hover:text-primary transition-colors">Rings</Link></li>
              <li><Link to="/collections/necklaces" className="text-white/60 hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/earrings" className="text-white/60 hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collections/bracelets" className="text-white/60 hover:text-primary transition-colors">Bracelets</Link></li>
              <li><Link to="/custom" className="text-white/60 hover:text-primary transition-colors">Custom Designs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-6 text-white">About</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/testimonials" className="text-white/60 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/about/ethics" className="text-white/60 hover:text-primary transition-colors">Ethics & Sustainability</Link></li>
              <li><Link to="/about/craftsmanship" className="text-white/60 hover:text-primary transition-colors">Craftsmanship</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-6 text-white">Customer Care</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/60 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-white/60 hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-white/60 hover:text-primary transition-colors">Warranty</Link></li>
              <li><Link to="/care" className="text-white/60 hover:text-primary transition-colors">Care Instructions</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gold-light/20 text-center text-white/60 text-sm">
          <p className="mb-4">
            © {new Date().getFullYear()} Mile High Golden Elevation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
