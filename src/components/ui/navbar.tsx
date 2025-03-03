
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Custom Design", path: "/custom" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-subtle py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-2xl font-semibold"
          aria-label="Luxe Jewels - Home"
        >
          <span className="gold-text">LUXE</span>
          <span className="font-light ml-1">Jewels</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "text-foreground after:w-full" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </button>
          <button 
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            className="p-2 text-foreground/80 hover:text-foreground transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="font-display text-2xl font-semibold">
              <span className="gold-text">LUXE</span>
              <span className="font-light ml-1">Jewels</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl ${
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <div className="flex items-center space-x-6 mb-4">
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Search size={24} />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <User size={24} />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <ShoppingCart size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
