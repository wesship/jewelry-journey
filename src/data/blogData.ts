
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

// Sample blog data
export const blogPosts: BlogPost[] = [
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

// Derive unique categories
export const blogCategories = Array.from(new Set(blogPosts.map(post => post.category)));
