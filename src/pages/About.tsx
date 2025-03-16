
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            subtitle="Our Story"
            title="About LUXE Jewels"
            description="Founded in 1996, we've been crafting exceptional jewelry for over 25 years."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-display mb-4">Our Heritage</h3>
              <p className="mb-6 text-jewelry-muted">
                LUXE Jewels began as a small atelier in Milan, founded by master craftsman Alessandro Ricci. His vision was simple yet ambitious: to create jewelry that would transcend trends and become heirlooms, passed down through generations.
              </p>
              <p className="mb-6 text-jewelry-muted">
                Today, under the creative direction of Alessandro's daughter, Maria Ricci, LUXE Jewels has expanded globally while maintaining the meticulous standards and artisanal techniques that defined its founding.
              </p>
              <p className="text-jewelry-muted">
                Every piece that bears our name is still crafted by hand in our Milan workshop, combining traditional methods with innovative design to create jewelry that is both timeless and contemporary.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=1200" 
                alt="LUXE Jewels craftsman at work" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-jewelry-subtle rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Our Materials</h3>
              <p className="text-jewelry-muted">
                We source only the finest ethically-mined gemstones and metals for our creations. Each stone is personally selected for its exceptional quality and character.
              </p>
            </div>
            <div className="p-8 border border-border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Our Craftsmanship</h3>
              <p className="text-jewelry-muted">
                Our master jewelers train for a minimum of 10 years before being entrusted with creating a LUXE piece. Their expertise and attention to detail ensure unmatched quality.
              </p>
            </div>
            <div className="p-8 border border-border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Our Commitment</h3>
              <p className="text-jewelry-muted">
                We are dedicated to sustainable practices and ethical sourcing. Every step of our production process is carefully monitored to minimize environmental impact.
              </p>
            </div>
          </div>
          
          <div className="bg-jewelry-subtle rounded-lg p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display mb-6">"Beauty lies in the details. Excellence is found in precision."</h3>
              <p className="text-lg font-medium">— Alessandro Ricci, Founder</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1569397363916-e3c7a4888ab4?auto=format&q=80&w=1200" 
                alt="LUXE Jewels team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg z-[-1]"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-display mb-4">Meet Our Team</h3>
              <p className="mb-6 text-jewelry-muted">
                Behind every LUXE Jewels creation is a dedicated team of designers, gemologists, and craftspeople who share a passion for excellence and beauty.
              </p>
              <p className="mb-6 text-jewelry-muted">
                Led by Creative Director Maria Ricci, our design team draws inspiration from architecture, nature, and art history to create pieces that feel both contemporary and timeless.
              </p>
              <p className="text-jewelry-muted">
                Our workshop in Milan houses 35 master jewelers, each specializing in different techniques from traditional filigree to modern micro-pavé setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
