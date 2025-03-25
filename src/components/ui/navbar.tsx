
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

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
          ? "bg-black/95 backdrop-blur-sm shadow-subtle py-3"
          : "bg-black/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-2xl font-semibold"
          aria-label="Mile High Golden Elevation - Home"
        >
          <span className="text-primary">MILE HIGH</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest hover:text-primary transition-colors ${
                location.pathname === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <Link 
            to="/search" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </Link>
          <Link 
            to="/account" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          <Link 
            to="/cart" 
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </Link>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-light to-transparent"></div>
    </header>
  );
}
