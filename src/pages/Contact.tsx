
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

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
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-border">
                <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="customer-service">Customer Service</option>
                      <option value="custom-design">Custom Design Inquiry</option>
                      <option value="appointment">Book an Appointment</option>
                      <option value="order-status">Order Status</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
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
