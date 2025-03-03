
import React from "react";
import { Navbar } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
