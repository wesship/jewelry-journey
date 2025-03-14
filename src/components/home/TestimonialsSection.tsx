
import React from "react";
import { Link } from "react-router-dom";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";

// Sample testimonials data
const testimonials = [
  {
    name: "Sophia Chen",
    text: "The craftsmanship of my custom engagement ring exceeded all expectations. Every detail was perfect, and the customer service was exceptional throughout the process.",
    location: "New York, NY",
    rating: 5,
  },
  {
    name: "James Wilson",
    text: "I purchased a necklace for my wife's anniversary gift and she absolutely loves it. The quality is outstanding and the packaging was beautifully presented.",
    location: "Los Angeles, CA",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    text: "Luxe Jewels created the most beautiful pair of earrings for my wedding day. They were attentive to my vision and delivered a piece that I will cherish forever.",
    location: "Chicago, IL",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          subtitle="Client Stories"
          title="What Our Clients Say"
          description="Read about the experiences of our valued clients and their journey with LUXE Jewels."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              location={testimonial.location}
              rating={testimonial.rating as 1 | 2 | 3 | 4 | 5}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="btn-outline border-primary text-primary hover:bg-primary/5"
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
