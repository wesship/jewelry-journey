
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

// Expanded testimonials data
const testimonials = [
  {
    name: "Sophia Chen",
    text: "The craftsmanship of my custom engagement ring exceeded all expectations. Every detail was perfect, and the customer service was exceptional throughout the process.",
    location: "New York, NY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=400",
  },
  {
    name: "James Wilson",
    text: "I purchased a necklace for my wife's anniversary gift and she absolutely loves it. The quality is outstanding and the packaging was beautifully presented.",
    location: "Los Angeles, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=400",
  },
  {
    name: "Emma Thompson",
    text: "LUXE Jewels created the most beautiful pair of earrings for my wedding day. They were attentive to my vision and delivered a piece that I will cherish forever.",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&q=80&w=400",
  },
  {
    name: "Daniel Garcia",
    text: "Working with LUXE on my custom wedding bands was a highlight of our wedding planning. The rings are stunning and the process was enjoyable from start to finish.",
    location: "Miami, FL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&q=80&w=400",
  },
  {
    name: "Olivia Parker",
    text: "I've purchased several pieces from LUXE over the years and have always been impressed by their attention to detail and commitment to quality. True artisans!",
    location: "Seattle, WA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1524290266577-e75f403b4415?auto=format&q=80&w=400",
  },
  {
    name: "Michael Johnson",
    text: "The sapphire bracelet I purchased for my mother's birthday was exquisite. The color of the stones is vibrant and the craftsmanship is impeccable.",
    location: "Boston, MA",
    rating: 4,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&q=80&w=400",
  },
  {
    name: "Sarah Williams",
    text: "I inherited my grandmother's rings but they didn't suit my style. LUXE helped redesign them into a modern pendant that honors her memory while fitting my aesthetic.",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&q=80&w=400",
  },
  {
    name: "Robert Chang",
    text: "As someone who knows little about jewelry, I appreciated the educational approach the team took when helping me select an engagement ring. No pressure, just expertise.",
    location: "San Francisco, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&q=80&w=400",
  },
  {
    name: "Elena Petrova",
    text: "The earrings I purchased are even more beautiful in person than they appeared online. They arrived promptly and the packaging was exquisite.",
    location: "Washington, DC",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?auto=format&q=80&w=400",
  },
];

// Video testimonials data
const videoTestimonials = [
  {
    id: "1",
    name: "Jessica & Mark",
    description: "Custom Wedding Band Journey",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&q=80&w=800",
  },
  {
    id: "2",
    name: "Thomas Chen",
    description: "Heirloom Redesign Process",
    thumbnail: "https://images.unsplash.com/photo-1520183802803-06f731a2059f?auto=format&q=80&w=800",
  },
  {
    id: "3",
    name: "Priya Sharma",
    description: "Anniversary Gift Experience",
    thumbnail: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&q=80&w=800",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            subtitle="Client Stories"
            title="What Our Clients Say"
            description="Read about the experiences of our valued clients and their journey with LUXE Jewels."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                location={testimonial.location}
                image={testimonial.image}
                rating={testimonial.rating as 1 | 2 | 3 | 4 | 5}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-jewelry-subtle">
        <div className="container">
          <SectionHeading
            subtitle="Video Stories"
            title="Hear From Our Clients"
            description="Watch our clients share their experiences with LUXE Jewels in their own words."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <div className="aspect-video relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        className="w-8 h-8"
                      >
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{video.name}</h3>
                  <p className="text-jewelry-muted text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-8">Share Your Story</h2>
          <p className="text-jewelry-muted mb-8">
            We love hearing from our clients. If you've purchased a LUXE Jewels piece, we'd be honored if you shared your experience.
          </p>
          <button className="btn-primary">
            Submit Your Testimonial
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
