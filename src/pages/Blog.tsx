
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/ui/blog-card";
import { Link } from "react-router-dom";
import { Search, Calendar, BookOpen } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

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

// Unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1568944117240-7100801968b8?auto=format&q=80&w=1920" 
          alt="LUXE Journal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-4">The LUXE Journal</h1>
          <p className="text-white/90 max-w-xl mx-auto text-base md:text-lg">
            Discover the stories behind our creations, learn about gemstones and metals, and explore the rich history of jewelry craftsmanship.
          </p>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-jewelry-subtle">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="relative w-full md:w-auto flex-grow max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jewelry-muted h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "" ? "bg-primary text-white" : "bg-white hover:bg-jewelry-subtle"
                }`}
                onClick={() => setSelectedCategory("")}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category ? "bg-primary text-white" : "bg-white hover:bg-jewelry-subtle"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            subtitle="Latest Articles"
            title="Featured Stories"
            description="Dive into our most popular articles about jewelry craftsmanship, design, and care."
          />
          
          {filteredPosts.length > 0 ? (
            <>
              {/* First Row - Featured Posts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {filteredPosts.slice(0, 2).map(post => (
                  <div key={post.id} className="group">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="block relative aspect-[16/9] overflow-hidden rounded-lg mb-4"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="inline-block text-xs uppercase tracking-wider font-medium text-white px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{post.title}</h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <BookOpen className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* Grid of Blog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(2).map(post => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    category={post.category}
                    date={post.date}
                    className="bg-white rounded-lg shadow-subtle hover:shadow-md transition-shadow"
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-16">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink isActive href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-jewelry-muted mb-4" />
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-jewelry-muted mb-6">Try adjusting your search or filter criteria</p>
              <button 
                className="btn-outline border-primary text-primary hover:bg-primary/5"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-jewelry-subtle">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm tracking-wider uppercase mb-3 font-medium text-primary">
                Subscribe To Our Newsletter
              </span>
              <h2 className="text-3xl md:text-4xl font-display mb-4">Get Jewelry Insights</h2>
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
