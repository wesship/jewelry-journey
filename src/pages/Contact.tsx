
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            subtitle="Get In Touch"
            title="Contact Us"
            description="We're here to assist you with any questions or special requests you may have."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-border">
                <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Customer Service</h4>
                    <p className="text-jewelry-muted mb-1">Email: service@luxejewels.com</p>
                    <p className="text-jewelry-muted">Phone: +1 (800) 555-1234</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Custom Design Inquiries</h4>
                    <p className="text-jewelry-muted mb-1">Email: custom@luxejewels.com</p>
                    <p className="text-jewelry-muted">Phone: +1 (800) 555-5678</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Press Inquiries</h4>
                    <p className="text-jewelry-muted">Email: press@luxejewels.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-border">
                <h3 className="text-xl font-medium mb-6">Flagship Boutique</h3>
                <p className="text-jewelry-muted mb-4">
                  123 Fifth Avenue<br />
                  New York, NY 10010<br />
                  United States
                </p>
                <p className="text-jewelry-muted mb-6">
                  Monday - Saturday: 10am - 7pm<br />
                  Sunday: 12pm - 5pm
                </p>
                <Link to="/stores" className="text-primary font-medium hover:underline">
                  View All Locations
                </Link>
              </div>
              
              <div className="bg-jewelry-subtle p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Book an Appointment</h3>
                <p className="text-jewelry-muted mb-6">
                  For personalized service, schedule a private consultation with one of our jewelry specialists.
                </p>
                <button className="btn-outline border-primary text-primary hover:bg-primary/5">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-jewelry-subtle">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">What are your shipping options?</h3>
              <p className="text-jewelry-muted">
                We offer complimentary standard shipping on all orders within the United States. Express and international shipping options are available at checkout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">What is your return policy?</h3>
              <p className="text-jewelry-muted">
                We offer a 30-day return policy for unworn items in their original packaging. Custom pieces are final sale. Please visit our Returns page for more details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-medium mb-2">Do you offer jewelry repairs?</h3>
              <p className="text-jewelry-muted">
                Yes, we provide repair services for all LUXE Jewels pieces. Contact our customer service team to arrange a repair consultation.
              </p>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="text-primary font-medium hover:underline">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
