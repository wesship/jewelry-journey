
import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { BlogList } from "@/components/blog/BlogList";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { blogPosts, blogCategories } from "@/data/blogData";

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
      <BlogHero 
        title="The LUXE Journal"
        description="Discover the stories behind our creations, learn about gemstones and metals, and explore the rich history of jewelry craftsmanship."
        imageUrl="https://images.unsplash.com/photo-1568944117240-7100801968b8?auto=format&q=80&w=1920"
      />
      
      <BlogSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={blogCategories}
      />
      
      <BlogList 
        posts={blogPosts}
        filteredPosts={filteredPosts}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
      />
      
      <BlogNewsletter />
    </Layout>
  );
};

export default Blog;
