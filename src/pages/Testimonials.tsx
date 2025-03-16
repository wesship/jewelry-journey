import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { VideoModal } from "@/components/ui/video-modal";
import { toast } from "sonner";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

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

// Video testimonials data with real YouTube video IDs
const videoTestimonials = [
  {
    id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
    name: "Jessica & Mark",
    description: "Custom Wedding Band Journey",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&q=80&w=800",
  },
  {
    id: "V5bYDhZBFLA", // Luxury jewelry video
    name: "Thomas Chen",
    description: "Heirloom Redesign Process",
    thumbnail: "https://images.unsplash.com/photo-1520183802803-06f731a2059f?auto=format&q=80&w=800",
  },
  {
    id: "nDZeYm8dFBQ", // Jewelry making process
    name: "Priya Sharma",
    description: "Anniversary Gift Experience",
    thumbnail: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&q=80&w=800",
  },
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videoTestimonials)[0] | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleVideoClick = (video: typeof videoTestimonials[0]) => {
    setSelectedVideo(video);
  };

  const handleSubmitTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your testimonial! It will be reviewed and published soon.");
    setIsFormOpen(false);
  };

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
              <div 
                key={video.id} 
                className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
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

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo.id}
          title={selectedVideo.name}
          description={selectedVideo.description}
        />
      )}
      
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-8">Share Your Story</h2>
          <p className="text-jewelry-muted mb-8">
            We love hearing from our clients. If you've purchased a LUXE Jewels piece, we'd be honored if you shared your experience.
          </p>
          <Drawer open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DrawerTrigger asChild>
              <Button className="btn-primary">Submit Your Testimonial</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-lg">
                <DrawerHeader>
                  <DrawerTitle>Share Your Experience</DrawerTitle>
                  <DrawerDescription>
                    Tell us about your experience with LUXE Jewels. Your testimonial may be featured on our website.
                  </DrawerDescription>
                </DrawerHeader>
                <form onSubmit={handleSubmitTestimonial} className="p-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm">Name</label>
                      <input 
                        id="name" 
                        className="border rounded-md p-2" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        className="border rounded-md p-2" 
                        placeholder="Your email" 
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="location" className="text-sm">Location</label>
                      <input 
                        id="location" 
                        className="border rounded-md p-2" 
                        placeholder="City, State" 
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="testimonial" className="text-sm">Your Experience</label>
                      <textarea 
                        id="testimonial" 
                        className="border rounded-md p-2 min-h-[100px]" 
                        placeholder="Tell us about your experience with LUXE Jewels..." 
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <label key={star} className="cursor-pointer">
                            <input 
                              type="radio" 
                              name="rating" 
                              value={star} 
                              className="sr-only" 
                              defaultChecked={star === 5}
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#d4af37"
                              className="w-8 h-8 hover:scale-110 transition-transform"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DrawerFooter className="pt-6">
                    <Button type="submit">Submit Testimonial</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </form>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
