
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Home, Calendar, User, Tag, Clock, Share2, Bookmark } from "lucide-react";

// Blog post data - would typically come from an API
const blogPosts = [
  {
    id: "1",
    title: "The Enduring Allure of Diamond Engagement Rings",
    excerpt: "Exploring the history and symbolism behind the timeless tradition of diamond engagement rings.",
    content: `
      <p>For centuries, diamond engagement rings have captivated hearts and symbolized eternal love. The tradition traces back to 1477 when Archduke Maximilian of Austria commissioned the first diamond engagement ring for Mary of Burgundy. This gesture set a precedent that would evolve into one of our most cherished traditions.</p>
      
      <p>The phrase "diamonds are forever," coined by De Beers in 1947, perfectly captures why these gems remain the preferred choice for engagement rings. Their unmatched durability—ranking 10 on the Mohs scale—mirrors the intended permanence of marriage.</p>
      
      <h3>The Four Cs: Understanding Diamond Quality</h3>
      
      <p>When selecting a diamond engagement ring, understanding the "Four Cs" is essential:</p>
      
      <ul>
        <li><strong>Cut:</strong> Perhaps the most important factor, cut determines how well a diamond interacts with light, affecting its brilliance and sparkle.</li>
        <li><strong>Color:</strong> The ideal diamond appears colorless, though subtle hints of yellow or brown may be present in lower-grade stones.</li>
        <li><strong>Clarity:</strong> This measures the absence of inclusions and blemishes, with flawless diamonds being exceptionally rare.</li>
        <li><strong>Carat:</strong> Referring to a diamond's weight, one carat equals 200 milligrams.</li>
      </ul>
      
      <p>Beyond the traditional solitaire, modern couples now explore diverse settings from vintage-inspired designs to minimalist bands. Alternative center stones like sapphires and moissanite have gained popularity, though diamonds remain the classic choice.</p>
      
      <h3>Ethical Considerations</h3>
      
      <p>Today's consumers increasingly prioritize ethically sourced diamonds. The Kimberley Process certification ensures diamonds are conflict-free, while lab-grown alternatives offer an ethical option with identical physical properties to mined diamonds.</p>
      
      <p>Whether you choose a family heirloom or a custom design, the diamond engagement ring tradition continues to evolve while maintaining its fundamental purpose: symbolizing a commitment meant to last forever, just like the diamond itself.</p>
    `,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1515720421559-5c1736cd9add?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?auto=format&q=80&w=800"
    ],
    date: "May 15, 2023",
    author: "Maria Ricci",
    category: "Traditions",
    readTime: "6 min read",
    relatedPosts: ["2", "5", "6"]
  },
  {
    id: "2",
    title: "Colored Gemstones: A Guide to Rarity and Value",
    excerpt: "Discover what makes certain colored gemstones more valuable than others and how to select the perfect stone.",
    content: `
      <p>While diamonds may dominate the jewelry market, colored gemstones offer a vibrant alternative with rich histories and unique properties. From the deep blues of sapphires to the fiery reds of rubies, colored gems provide distinctive character to fine jewelry pieces.</p>
      
      <h3>Factors Affecting Value</h3>
      
      <p>Several key factors determine the value of colored gemstones:</p>
      
      <ul>
        <li><strong>Color:</strong> Unlike diamonds, colored gems are prized for their vivid hues. The most valuable stones display rich, intense colors without being too dark or too light.</li>
        <li><strong>Clarity:</strong> While inclusions are expected in colored stones, those with fewer visible flaws command higher prices.</li>
        <li><strong>Cut:</strong> A quality cut maximizes a gem's color while creating pleasing proportions and symmetry.</li>
        <li><strong>Carat Weight:</strong> Larger stones of equal quality are rarer and thus more valuable.</li>
        <li><strong>Origin:</strong> Gems from certain mines or regions often command premium prices—Kashmir sapphires and Burmese rubies being prime examples.</li>
      </ul>
      
      <h3>The Rarest Colored Gemstones</h3>
      
      <p>Among the rarest and most valuable colored gemstones are:</p>
      
      <ul>
        <li><strong>Alexandrite:</strong> Known for its remarkable color-changing properties, appearing greenish in daylight and reddish in incandescent light.</li>
        <li><strong>Paraíba Tourmaline:</strong> Discovered in Brazil in the 1980s, these neon blue-green tourmalines contain copper, creating an electric glow.</li>
        <li><strong>Red Beryl:</strong> Estimated to be a thousand times rarer than gold, red beryl is found almost exclusively in Utah's Wah Wah Mountains.</li>
        <li><strong>Padparadscha Sapphire:</strong> These rare sapphires display a unique pink-orange color reminiscent of lotus blossoms.</li>
      </ul>
      
      <p>Whether selecting a gemstone for an engagement ring or a signature piece of jewelry, understanding these factors ensures you make an informed decision that balances beauty, durability, and value.</p>
    `,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1582748151341-8fcef2769834?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1599894019794-50339c9ad89c?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1635263834578-a28dd086a9a3?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&q=80&w=800"
    ],
    date: "April 28, 2023",
    author: "Thomas Chen",
    category: "Education",
    readTime: "7 min read",
    relatedPosts: ["3", "4", "1"]
  },
  {
    id: "3",
    title: "The Art of Filigree: Ancient Technique in Modern Jewelry",
    excerpt: "How this intricate metalworking technique from antiquity continues to inspire contemporary jewelry design.",
    content: `
      <p>Filigree, from the Latin words "filum" (thread) and "granum" (grain), is one of jewelry's most delicate and intricate metalworking techniques. Dating back to ancient Mesopotamia around 3000 BCE, this artform involves twisting thin threads of precious metal into lace-like patterns.</p>
      
      <h3>Historical Significance</h3>
      
      <p>Throughout history, filigree has adorned the jewelry of numerous civilizations:</p>
      
      <ul>
        <li>Ancient Etruscans created elaborate gold filigree pieces, often combined with granulation.</li>
        <li>Byzantine artisans perfected filigree techniques in religious objects and imperial jewelry.</li>
        <li>Indian jewelry features extensive filigree work in traditional adornments like temple jewelry.</li>
        <li>Portuguese and Spanish traditions developed distinctive regional filigree styles that continue today.</li>
      </ul>
      
      <h3>Crafting Filigree</h3>
      
      <p>Creating filigree requires exceptional skill and patience. The process involves:</p>
      
      <ol>
        <li>Drawing precious metal into extremely fine wires, sometimes as thin as human hair.</li>
        <li>Twisting or flattening these wires to create texture.</li>
        <li>Forming the wires into scrolls, curls, and geometric patterns.</li>
        <li>Carefully soldering each element to create a cohesive design.</li>
        <li>Adding finishing touches like polishing or contrasting materials.</li>
      </ol>
      
      <p>Modern jewelers have embraced this ancient technique, combining traditional methods with contemporary design sensibilities. Today's filigree pieces may incorporate colored gemstones, mixed metals, or asymmetrical designs while honoring the heritage of this meticulous craft.</p>
      
      <p>The delicate appearance of filigree belies its surprising durability—when properly constructed, these airy-looking pieces can last for generations, as evidenced by museum-quality examples that have survived thousands of years.</p>
    `,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1565561723231-ef123679ab7f?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1647421565973-f5af842020b6?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1648744081038-4cb5ee32d0e2?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1622398925373-3f91b1ff63c2?auto=format&q=80&w=800"
    ],
    date: "March 10, 2023",
    author: "Sofia Lombardi",
    category: "Craftsmanship",
    readTime: "5 min read",
    relatedPosts: ["5", "1", "6"]
  },
  {
    id: "4",
    title: "Caring for Your Fine Jewelry: Essential Maintenance Tips",
    excerpt: "Expert advice on how to clean, store, and maintain your precious jewelry to ensure it lasts for generations.",
    content: `
      <p>Fine jewelry represents not only a significant investment but often holds sentimental value that far exceeds its monetary worth. Proper care ensures these treasured pieces maintain their beauty and structural integrity for generations.</p>
      
      <h3>Regular Cleaning Routines</h3>
      
      <p>Different gemstones and metals require specific cleaning approaches:</p>
      
      <ul>
        <li><strong>Diamonds:</strong> Create a solution of warm water with a few drops of mild dish soap. Soak diamonds for 20-30 minutes, then gently brush with a soft toothbrush, focusing on the underside where oils and debris collect.</li>
        <li><strong>Colored Gemstones:</strong> Most colored stones require gentler treatment. Clean with a damp, soft cloth and mild soap, avoiding prolonged soaking which can damage certain gems like emeralds, opals, and pearls.</li>
        <li><strong>Gold:</strong> Clean with warm, soapy water and a soft brush. For intricate pieces with difficult-to-reach areas, brief ultrasonic cleaning is generally safe unless the piece contains fragile gemstones.</li>
        <li><strong>Silver:</strong> Use a polish specifically designed for silver to remove tarnish, then rinse thoroughly and dry with a soft cloth.</li>
      </ul>
      
      <h3>Proper Storage Practices</h3>
      
      <p>How you store your jewelry significantly impacts its longevity:</p>
      
      <ul>
        <li>Store pieces individually in soft pouches or lined jewelry boxes to prevent scratches.</li>
        <li>Hang necklaces and bracelets to prevent tangling.</li>
        <li>Keep silver in anti-tarnish bags or cloth to minimize oxidation.</li>
        <li>Store pearls separately in silk or soft cloth, as they scratch easily and can be damaged by chemicals from other jewelry.</li>
      </ul>
      
      <h3>Professional Maintenance</h3>
      
      <p>Even with diligent home care, professional attention is essential:</p>
      
      <ul>
        <li>Schedule annual inspections with a trusted jeweler to check for loose stones or weakened settings.</li>
        <li>Have platinum and white gold rings re-polished or re-rhodiumed every few years to maintain their finish.</li>
        <li>Have pearls restrung every few years, especially if worn frequently.</li>
      </ul>
      
      <p>By incorporating these practices into your routine, your fine jewelry will continue to shine brilliantly for years to come, preserving both their beauty and the memories they represent.</p>
    `,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1568944117240-7100801968b8?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1605667945317-f2254128c956?auto=format&q=80&w=800"
    ],
    date: "February 22, 2023",
    author: "James Wilson",
    category: "Care",
    readTime: "8 min read",
    relatedPosts: ["2", "6", "1"]
  },
  {
    id: "5",
    title: "Jewelry Through the Ages: From Ancient Egypt to Art Deco",
    excerpt: "A journey through history's most influential jewelry periods and how they continue to inspire today's designs.",
    content: `
      <p>Jewelry has been an integral part of human expression since prehistoric times, with each era leaving a distinctive mark on the craft. This rich history continues to influence contemporary designs, with modern jewelers often finding inspiration in historical periods.</p>
      
      <h3>Ancient Egyptian (3100-332 BCE)</h3>
      
      <p>Ancient Egyptian jewelry showcased remarkable sophistication, featuring:</p>
      
      <ul>
        <li>Gold as the dominant material, symbolizing the sun and divine power</li>
        <li>Vibrant colored gemstones and glass, particularly lapis lazuli, turquoise, and carnelian</li>
        <li>Symbolic motifs including scarabs, the Eye of Horus, and ankh symbols</li>
        <li>Cloisonné technique, where colored glass or stones were set in cell-like compartments</li>
      </ul>
      
      <h3>Classical Greek and Roman (800 BCE-400 CE)</h3>
      
      <p>Greco-Roman jewelry emphasized naturalistic designs with:</p>
      
      <ul>
        <li>Laurel leaves, acanthus motifs, and beaded wirework</li>
        <li>Cameos and intaglios carved from hardstones</li>
        <li>Filigree and granulation techniques creating delicate textures</li>
        <li>Elaborate gold earrings, necklaces, and diadems for wealthy citizens</li>
      </ul>
      
      <h3>Byzantine (330-1453 CE)</h3>
      
      <p>Byzantine jewelry reflected imperial opulence through:</p>
      
      <ul>
        <li>Liberal use of gemstones in cabochon cuts</li>
        <li>Intricate enameling techniques, particularly cloisonné</li>
        <li>Religious iconography including crosses and saints</li>
        <li>Substantial pendants and elaborate necklaces showing Eastern influence</li>
      </ul>
      
      <h3>Renaissance (14th-17th Centuries)</h3>
      
      <p>Renaissance jewelry featured:</p>
      
      <ul>
        <li>Pendant necklaces with religious or mythological themes</li>
        <li>Improved diamond cutting techniques allowing greater brilliance</li>
        <li>Enamel work, particularly en ronde bosse (enamel over high relief)</li>
        <li>Memento mori pieces reminding wearers of mortality</li>
      </ul>
      
      <h3>Art Nouveau (1890-1910)</h3>
      
      <p>This revolutionary movement introduced:</p>
      
      <ul>
        <li>Organic, flowing lines inspired by nature</li>
        <li>Unconventional materials including horn, glass, and enamel</li>
        <li>Masterful plique-à-jour enamel resembling stained glass</li>
        <li>Motifs of insects, flowers, and mythical female figures</li>
      </ul>
      
      <h3>Art Deco (1920s-1930s)</h3>
      
      <p>The Art Deco period brought:</p>
      
      <ul>
        <li>Bold geometric patterns and symmetry</li>
        <li>Contrasting colors using onyx, coral, jade, and diamonds</li>
        <li>Innovative cuts like the emerald cut and baguette</li>
        <li>Egyptian revival motifs following the discovery of Tutankhamun's tomb</li>
      </ul>
      
      <p>Today's jewelry designers continue drawing from this rich historical tapestry, reinterpreting classical elements with modern techniques and sensibilities, creating pieces that honor tradition while pushing boundaries with contemporary vision.</p>
    `,
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1622733784434-e8a0c5eeef6d?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1599643467764-650c0e97d73e?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&q=80&w=800"
    ],
    date: "January 15, 2023",
    author: "Elena Petrova",
    category: "History",
    readTime: "10 min read",
    relatedPosts: ["1", "3", "6"]
  },
  {
    id: "6",
    title: "Ethical Sourcing in the Jewelry Industry: Progress and Challenges",
    excerpt: "An examination of how the jewelry industry is addressing ethical concerns in gemstone and metal sourcing.",
    content: `
      <p>The jewelry industry has undergone significant transformation in recent decades as consumers increasingly demand transparency regarding the origins of their precious gems and metals. This shift toward ethical sourcing addresses human rights, environmental impact, and sustainability concerns.</p>
      
      <h3>The Evolution of Diamond Sourcing</h3>
      
      <p>The Kimberley Process, established in 2003, aimed to prevent conflict diamonds from entering the legitimate diamond market. While it has reduced the flow of conflict diamonds, critics note several limitations:</p>
      
      <ul>
        <li>Focus on funding armed conflicts rather than broader human rights abuses</li>
        <li>Limited traceability once diamonds enter the cutting and polishing stages</li>
        <li>Challenges in enforcement and monitoring, particularly in remote regions</li>
      </ul>
      
      <p>In response, initiatives like the Responsible Jewellery Council (RJC) have established broader standards for responsible business practices throughout the supply chain.</p>
      
      <h3>Colored Gemstone Challenges</h3>
      
      <p>Unlike diamonds, colored gemstones present unique traceability challenges:</p>
      
      <ul>
        <li>Produced predominantly by small-scale, artisanal miners across numerous countries</li>
        <li>Complex supply chains with many intermediaries before reaching retailers</li>
        <li>Absence of a single, universally recognized certification system</li>
      </ul>
      
      <p>Organizations like the Gemological Institute of America (GIA) have developed colored stone origin reports, while initiatives such as Moyo Gemstones and Pact work directly with artisanal miners to improve conditions and establish traceability.</p>
      
      <h3>Precious Metals: Addressing Environmental Impact</h3>
      
      <p>Gold and silver mining can cause severe environmental damage, including:</p>
      
      <ul>
        <li>Mercury pollution from artisanal mining operations</li>
        <li>Destruction of habitats and ecosystems</li>
        <li>High water consumption and potential contamination</li>
        <li>Significant carbon footprint</li>
      </ul>
      
      <p>The Fairmined and Fairtrade Gold standards certify metal from responsible artisanal and small-scale mining operations, ensuring proper environmental management and fair compensation for miners.</p>
      
      <h3>Lab-Grown Alternatives</h3>
      
      <p>Technological advances have made lab-grown diamonds and gemstones increasingly viable alternatives:</p>
      
      <ul>
        <li>Identical physical properties to their mined counterparts</li>
        <li>Significantly reduced environmental impact</li>
        <li>Free from concerns about mining practices</li>
        <li>Growing acceptance among consumers, particularly younger demographics</li>
      </ul>
      
      <p>These synthetic options provide ethical alternatives while challenging the traditional jewelry industry to improve its practices.</p>
      
      <p>As consumer awareness grows, the industry continues evolving toward greater transparency and responsibility. Leading jewelers now publish detailed sourcing information, invest in blockchain technology for supply chain tracking, and actively engage with mining communities to support sustainable development.</p>
      
      <p>The path to truly ethical jewelry requires ongoing commitment from all stakeholders—miners, manufacturers, retailers, and consumers alike—to prioritize people and planet alongside profit.</p>
    `,
    image: "https://images.unsplash.com/photo-1518580814362-68d74c4d8a02?auto=format&q=80&w=800",
    featuredImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1551406483-3a9d53cd59e4?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1615655050232-7f2c9aea075d?auto=format&q=80&w=800",
      "https://images.unsplash.com/photo-1622398284255-9bf2a149765c?auto=format&q=80&w=800"
    ],
    date: "December 8, 2022",
    author: "Michael Johnson",
    category: "Sustainability",
    readTime: "9 min read",
    relatedPosts: ["4", "2", "5"]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <Layout>
        <div className="container py-16">
          <h1>Post not found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary mt-4">Return to Blog</Link>
        </div>
      </Layout>
    );
  }
  
  // Find related posts
  const relatedPostsData = post.relatedPosts
    .map(relatedId => blogPosts.find(p => p.id === relatedId))
    .filter(Boolean);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-jewelry-background py-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <Home className="h-4 w-4" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{post.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Article Content */}
      <article className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <span className="inline-block text-sm uppercase tracking-wider font-medium text-primary px-3 py-1 bg-primary/10 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-jewelry-muted gap-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-jewelry-text prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Image Gallery */}
            {post.gallery && post.gallery.length > 0 && (
              <div className="my-10">
                <h3 className="text-xl font-medium mb-4">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {post.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${post.title} gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share and Tags Section */}
            <div className="flex flex-wrap justify-between items-center border-t border-b border-border py-6 my-10">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Share:</span>
                <button className="p-2 rounded-full hover:bg-jewelry-subtle transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full hover:bg-jewelry-subtle transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-4 sm:mt-0">
                <span className="text-sm font-medium mr-2">Tags:</span>
                <span className="px-3 py-1 bg-jewelry-subtle rounded-full text-xs">{post.category}</span>
                <span className="px-3 py-1 bg-jewelry-subtle rounded-full text-xs">Jewelry</span>
                <span className="px-3 py-1 bg-jewelry-subtle rounded-full text-xs">Luxury</span>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-jewelry-subtle p-6 rounded-lg sticky top-28">
              <h3 className="text-xl font-medium mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedPostsData.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-medium leading-tight group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-jewelry-muted mt-1">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map(category => (
                    <Link 
                      key={category} 
                      to={`/blog?category=${category}`}
                      className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                    >
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2" />
                        <span>{category}</span>
                      </div>
                      <span className="bg-jewelry-background px-2 py-0.5 rounded-full text-xs">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
      
      {/* More Articles Section */}
      <section className="bg-jewelry-subtle py-16">
        <div className="container">
          <h2 className="text-3xl font-display mb-10 text-center">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(post => (
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
                  <p className="text-jewelry-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="btn-outline border-primary text-primary hover:bg-primary/5">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
