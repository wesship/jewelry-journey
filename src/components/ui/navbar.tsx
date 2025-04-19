import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Package, Settings, Link2, Crown } from "lucide-react";

const NAV_LINKS = [
  { name: "COLLECTIONS", path: "/collections" },
  { name: "DIAMOND", path: "/collections/rings" },
  { name: "YOURS NOW", path: "/custom" },
  { name: "MOSER", path: "/about" },
  { name: "STOR", path: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black shadow-md py-3"
          : "bg-black/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-2xl font-bold relative"
          aria-label="Mile High Golden Elevation - Home"
        >
          <span className="text-primary">MILE HIGH</span>
          <div className="absolute -top-1 -right-3 flex items-center gap-1 text-xs text-primary/80">
            <Crown className="h-3 w-3" />
            <span className="font-normal tracking-wide">ELITE</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-widest hover:text-primary transition-colors ${
                location.pathname === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link 
            to="/search" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={22} strokeWidth={2} />
          </Link>
          <Link 
            to="/suppliers" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Supplier Management"
          >
            <Package size={22} strokeWidth={2} />
          </Link>
          <Link 
            to="/integrations" 
            className="p-2 text-white hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Integrations"
          >
            <Link2 size={22} strokeWidth={2} />
            <span className="hidden lg:inline-block text-sm">Integrations</span>
          </Link>
          <Link 
            to="/account" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Account"
          >
            <User size={22} strokeWidth={2} />
          </Link>
          <Link 
            to="/cart" 
            className="p-2 text-white hover:text-primary transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart size={22} strokeWidth={2} />
            <span className="absolute -top-1 -right-1 bg-primary text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold-light to-transparent"></div>
    </header>
  );
}
