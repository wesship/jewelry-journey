
import React from "react";
import { BlogCard } from "@/components/ui/blog-card";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { SectionHeading } from "@/components/ui/section-heading";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface BlogListProps {
  posts: BlogPost[];
  filteredPosts: BlogPost[];
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
}

export const BlogList = ({ posts, filteredPosts, setSearchTerm, setSelectedCategory }: BlogListProps) => {
  return (
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
  );
};
