
import React from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "The Enduring Allure of Diamond Engagement Rings",
    excerpt: "Exploring the history and symbolism behind the timeless tradition of diamond engagement rings.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    date: "May 15, 2023",
    author: "Maria Ricci",
    category: "Traditions",
  },
  {
    id: "2",
    title: "Colored Gemstones: A Guide to Rarity and Value",
    excerpt: "Discover what makes certain colored gemstones more valuable than others and how to select the perfect stone.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    date: "April 28, 2023",
    author: "Thomas Chen",
    category: "Education",
  },
  {
    id: "3",
    title: "The Art of Filigree: Ancient Technique in Modern Jewelry",
    excerpt: "How this intricate metalworking technique from antiquity continues to inspire contemporary jewelry design.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    date: "March 10, 2023",
    author: "Sofia Lombardi",
    category: "Craftsmanship",
  },
  {
    id: "4",
    title: "Caring for Your Fine Jewelry: Essential Maintenance Tips",
    excerpt: "Expert advice on how to clean, store, and maintain your precious jewelry to ensure it lasts for generations.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=800",
    date: "February 22, 2023",
    author: "James Wilson",
    category: "Care",
  },
  {
    id: "5",
    title: "Jewelry Through the Ages: From Ancient Egypt to Art Deco",
    excerpt: "A journey through history's most influential jewelry periods and how they continue to inspire today's designs.",
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    date: "January 15, 2023",
    author: "Elena Petrova",
    category: "History",
  },
  {
    id: "6",
    title: "Ethical Sourcing in the Jewelry Industry: Progress and Challenges",
    excerpt: "An examination of how the jewelry industry is addressing ethical concerns in gemstone and metal sourcing.",
    image: "https://images.unsplash.com/photo-1518580814362-68d74c4d8a02?auto=format&q=80&w=800",
    date: "December 8, 2022",
    author: "Michael Johnson",
    category: "Sustainability",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-jewelry-subtle">
        <div className="container">
          <SectionHeading
            subtitle="Insights & Education"
            title="The LUXE Journal"
            description="Discover the stories behind our creations, learn about gemstones and metals, and explore the rich history of jewelry craftsmanship."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`} 
                className="group block bg-white rounded-lg overflow-hidden shadow-subtle transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-jewelry-muted text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-jewelry-muted">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center text-primary font-medium">
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <button className="btn-outline border-primary text-primary hover:bg-primary/5">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
                Subscribe To Our Newsletter
              </span>
              <h2 className="mb-4">Stay Informed</h2>
              <p className="text-jewelry-muted mb-6">
                Join our mailing list to receive new articles, exclusive offers, and invitations to special events. Be the first to know about new collections and limited edition pieces.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616750819459-6912d19b3b9b?auto=format&q=80&w=1200" 
                alt="Jewelry article preview" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
