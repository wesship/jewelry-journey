
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

const CustomDesign = () => {
  return (
    <Layout>
      <section className="relative py-20 bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1627293620999-e9b5c2325dbd?auto=format&q=80"
            alt="Jeweler working on custom piece"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              Bespoke Creations
            </span>
            <h1 className="mb-6">
              Custom Designed <br />
              Just For You
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-xl">
              Work with our master craftsmen to create a bespoke piece that tells your unique story. From concept to creation, we'll guide you through every step of the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <SectionHeading
            subtitle="Our Process"
            title="Creating Your Custom Jewelry"
            description="From initial consultation to the final masterpiece, we guide you through each step of creating your bespoke jewelry piece."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display text-primary">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Consultation</h3>
              <p className="text-jewelry-muted">
                Meet with our design team to discuss your vision, preferences, and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display text-primary">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Design</h3>
              <p className="text-jewelry-muted">
                Our designers create detailed sketches and 3D renderings for your approval.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display text-primary">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Crafting</h3>
              <p className="text-jewelry-muted">
                Our master jewelers bring your design to life with meticulous craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display text-primary">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Delivery</h3>
              <p className="text-jewelry-muted">
                Receive your one-of-a-kind creation, complete with certification and care instructions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-display mb-4">Design Expertise</h3>
              <p className="mb-6 text-jewelry-muted">
                Our team of award-winning designers brings decades of experience to your project. Whether you have a clear vision or just a general idea, we'll help refine and elevate your concept.
              </p>
              <p className="mb-6 text-jewelry-muted">
                Using the latest CAD technology alongside traditional hand-sketching techniques, we'll provide you with detailed visualizations before any crafting begins.
              </p>
              <ul className="space-y-3 text-jewelry-muted">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span> 
                  Detailed hand sketches and 3D digital renderings
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span> 
                  Material and gemstone recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span> 
                  Multiple design iterations until perfect
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=1200" 
                alt="Custom jewelry design process" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-jewelry-subtle rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="bg-jewelry-subtle rounded-lg p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-3">Engagement Rings</h4>
                <p className="text-jewelry-muted mb-4">
                  Create a ring as unique as your love story, with personalized details and your choice of ethically sourced diamonds or gemstones.
                </p>
                <p className="text-primary font-medium">Starting from $3,500</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Family Heirlooms</h4>
                <p className="text-jewelry-muted mb-4">
                  Transform family gemstones into contemporary pieces that honor your heritage while suiting your personal style.
                </p>
                <p className="text-primary font-medium">Starting from $2,800</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Statement Pieces</h4>
                <p className="text-jewelry-muted mb-4">
                  Commission a one-of-a-kind creation for special occasions or to express your individual aesthetic.
                </p>
                <p className="text-primary font-medium">Starting from $5,000</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-display mb-6">Ready to Begin Your Custom Journey?</h3>
            <p className="text-jewelry-muted max-w-2xl mx-auto mb-8">
              Schedule a consultation with our design team to discuss your vision. In-person and virtual appointments are available.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomDesign;
