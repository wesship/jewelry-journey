
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/ui/blog-card";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Facebook, Instagram, Twitter } from "lucide-react";

// Sample blog data - in a real application this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "The Enduring Allure of Diamond Engagement Rings",
    excerpt: "Exploring the history and symbolism behind the timeless tradition of diamond engagement rings.",
    content: `
      <p>For centuries, diamond engagement rings have symbolized eternal love and commitment. The tradition, however, is relatively recent in historical terms, becoming widely popularized in the early 20th century.</p>
      
      <h3>The Origin of Diamond Engagement Rings</h3>
      
      <p>While rings have been used to signify betrothal since ancient Roman times, the first documented diamond engagement ring dates back to 1477, when Archduke Maximilian of Austria commissioned a ring for his betrothed, Mary of Burgundy. This sparked a trend among European aristocracy, but diamond rings remained exclusively for the wealthy elite for centuries.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?auto=format&q=80&w=1600" alt="Vintage diamond engagement ring" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">A vintage-inspired diamond engagement ring, reminiscent of early 20th century designs.</figcaption>
      </figure>
      
      <p>The modern tradition of diamond engagement rings truly took hold in the late 1930s with De Beers' famous "A Diamond is Forever" campaign. This brilliant marketing strategy transformed diamonds from luxury items for the elite into essential symbols of enduring love for couples across all social strata.</p>
      
      <h3>Symbolism and Meaning</h3>
      
      <p>The circular shape of the ring has always represented eternity—with no beginning and no end, it perfectly symbolizes unending love. Diamonds were chosen for engagement rings not only for their beauty but for their unmatched durability, representing a love that can withstand anything.</p>
      
      <p>The placement on the fourth finger of the left hand stems from an ancient belief that this finger contained the "vena amoris" or "vein of love" that connected directly to the heart. While anatomically incorrect, this romantic notion has persisted for centuries.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1515626553181-0f218cb03f14?auto=format&q=80&w=1600" alt="Close-up of engagement ring on finger" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">The traditional placement on the fourth finger of the left hand dates back to ancient Roman beliefs.</figcaption>
      </figure>
      
      <h3>Evolution of Styles</h3>
      
      <p>Engagement ring designs have evolved dramatically through the decades, reflecting changing tastes and fashion trends:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Victorian Era (1837-1901):</strong> Ornate designs featuring diamonds in flower, bow, and cluster settings.</li>
        <li><strong>Edwardian Period (1901-1910):</strong> Delicate platinum settings with intricate filigree work.</li>
        <li><strong>Art Deco (1920s-1930s):</strong> Geometric patterns and calibre-cut colored gemstones alongside diamonds.</li>
        <li><strong>Mid-Century (1940s-1950s):</strong> The rise of the solitaire diamond as the predominant style.</li>
        <li><strong>Contemporary (Present day):</strong> A vast array of styles from vintage-inspired to minimalist modern designs.</li>
      </ul>
      
      <h3>The Four Cs: A Modern Framework</h3>
      
      <p>Today's diamond selections are guided by the famous "Four Cs" framework developed by the Gemological Institute of America (GIA):</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Cut:</strong> How well the diamond has been cut to maximize brilliance and fire.</li>
        <li><strong>Color:</strong> The absence of color, with completely colorless diamonds being most valuable.</li>
        <li><strong>Clarity:</strong> The absence of inclusions and blemishes.</li>
        <li><strong>Carat:</strong> The weight of the diamond.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=1600" alt="Various diamond engagement rings" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">A collection of contemporary diamond engagement rings showcasing various cuts and settings.</figcaption>
      </figure>
      
      <h3>Changing Traditions</h3>
      
      <p>While diamond rings remain the traditional choice, modern couples are increasingly selecting alternative gemstones like sapphires, emeralds, and morganites. Ethical considerations have also shaped the market, with lab-grown diamonds and vintage rings offering sustainable alternatives to newly mined stones.</p>
      
      <p>Despite these shifts, the diamond engagement ring remains an enduring symbol of commitment—a tangible promise of a shared future that continues to capture the imagination of couples worldwide.</p>
    `,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&q=80&w=800",
    date: "May 15, 2023",
    author: "Maria Ricci",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=150",
    category: "Traditions",
    readTime: "8 min read",
    tags: ["Engagement Rings", "Diamond", "History", "Traditions"],
    relatedPosts: ["2", "5", "6"],
  },
  {
    id: "2",
    title: "Colored Gemstones: A Guide to Rarity and Value",
    excerpt: "Discover what makes certain colored gemstones more valuable than others and how to select the perfect stone.",
    content: `
      <p>Unlike diamonds, which are valued primarily on the 4 Cs (cut, color, clarity, and carat), colored gemstones follow a more complex valuation system that considers additional factors like rarity, origin, and treatment history.</p>
      
      <h3>The Big Three: Ruby, Sapphire, and Emerald</h3>
      
      <p>In the world of colored gemstones, rubies, sapphires, and emeralds stand above all others in terms of value and prestige. Often called "The Big Three," these precious gems have commanded high prices for centuries.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1627469679746-342c2da4cc72?auto=format&q=80&w=1600" alt="Collection of precious rubies" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Fine Burmese rubies are among the most valuable colored gemstones in the world.</figcaption>
      </figure>
      
      <p>Rubies from Burma (Myanmar), especially those with the coveted "pigeon's blood" color, are considered the most valuable colored gemstones in the world. Similarly, sapphires from Kashmir and emeralds from Colombia command premium prices due to their exceptional quality and historical significance.</p>
      
      <h3>The Impact of Origin</h3>
      
      <p>Unlike diamonds, where the origin rarely affects value, the source of colored gemstones significantly impacts their worth. For example:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Rubies:</strong> Burmese rubies command the highest prices, followed by those from Mozambique and Thailand.</li>
        <li><strong>Sapphires:</strong> Kashmir sapphires are the most valuable, followed by those from Burma and Sri Lanka.</li>
        <li><strong>Emeralds:</strong> Colombian emeralds, particularly those from the Muzo mine, are considered superior to those from Brazil or Zambia.</li>
        <li><strong>Tourmaline:</strong> Paraíba tourmalines from Brazil are far more valuable than tourmalines from other sources.</li>
      </ul>
      
      <h3>Color: The Primary Value Factor</h3>
      
      <p>For colored gemstones, color is the most critical value factor, typically analyzed in terms of:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Hue:</strong> The basic color of the gemstone.</li>
        <li><strong>Tone:</strong> How light or dark the color appears.</li>
        <li><strong>Saturation:</strong> The intensity or purity of the color.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1573408301828-9112b4d2d2a1?auto=format&q=80&w=1600" alt="Various colored gemstones" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">A collection of colored gemstones displaying various hues, tones, and saturations.</figcaption>
      </figure>
      
      <p>The most valuable stones typically have pure hues (like pure red for rubies) with medium-dark tones and strong saturation. Secondary hues can either enhance or detract from value, depending on the specific gemstone.</p>
      
      <h3>Treatments and Enhancement</h3>
      
      <p>Almost all colored gemstones undergo some form of treatment to enhance their appearance. Common treatments include:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Heat treatment:</strong> Used to improve color and clarity, particularly in sapphires and rubies.</li>
        <li><strong>Oiling/Filling:</strong> Common in emeralds to fill surface-reaching fractures.</li>
        <li><strong>Irradiation:</strong> Used to enhance or change color in stones like topaz and tourmaline.</li>
        <li><strong>Dyeing:</strong> Applied to porous gems like turquoise to enhance or stabilize color.</li>
      </ul>
      
      <p>Untreated stones of high quality are extremely rare and can command prices many times higher than their treated counterparts. Proper disclosure of treatments is essential in the gemstone market.</p>
      
      <h3>Emerging Stars in the Gemstone World</h3>
      
      <p>While The Big Three maintain their position at the top, several previously lesser-known gemstones have gained significant attention and value in recent years:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Paraíba Tourmaline:</strong> With its electric neon blue color, these rare tourmalines from Brazil can exceed the price of fine emeralds.</li>
        <li><strong>Alexandrite:</strong> Famous for its color-changing properties, fine alexandrite can sell for tens of thousands per carat.</li>
        <li><strong>Spinel:</strong> Once mistaken for rubies in crown jewels, fine red spinels now command high prices on their own merits.</li>
        <li><strong>Padparadscha Sapphire:</strong> These rare orange-pink sapphires are among the most valuable sapphire varieties.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1610501983956-d771662c7579?auto=format&q=80&w=1600" alt="Rare gemstone jewelry" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Jewelry featuring rare colored gemstones representing significant investment value.</figcaption>
      </figure>
      
      <h3>Selecting Quality Colored Gemstones</h3>
      
      <p>When purchasing colored gemstones, consider these factors:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Color:</strong> Look for vivid, evenly distributed color without "windows" or dull areas.</li>
        <li><strong>Clarity:</strong> Each gemstone type has different clarity expectations—emeralds typically have inclusions, while aquamarines should be relatively clean.</li>
        <li><strong>Cut:</strong> A proper cut maximizes color and brilliance while minimizing visible inclusions.</li>
        <li><strong>Carat:</strong> Larger stones of fine quality are exponentially more valuable due to their rarity.</li>
        <li><strong>Certification:</strong> For significant purchases, obtain certification from reputable laboratories like GIA, AGL, or SSEF.</li>
        <li><strong>Treatment disclosure:</strong> Always ask about and get in writing any treatments applied to the stone.</li>
      </ul>
      
      <p>Whether collecting for investment or personal enjoyment, understanding these value factors will help you make informed decisions when selecting colored gemstones.</p>
    `,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&q=80&w=800",
    date: "April 28, 2023",
    author: "Thomas Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&q=80&w=150",
    category: "Education",
    readTime: "10 min read",
    tags: ["Gemstones", "Value", "Rubies", "Sapphires", "Emeralds"],
    relatedPosts: ["3", "4", "5"],
  },
  {
    id: "3",
    title: "The Art of Filigree: Ancient Technique in Modern Jewelry",
    excerpt: "How this intricate metalworking technique from antiquity continues to inspire contemporary jewelry design.",
    content: `
      <p>Filigree—delicate wirework where thin threads of gold or silver are twisted and curled into intricate patterns—is one of the oldest and most enduring jewelry-making techniques in history. This ancient art form continues to captivate modern designers and consumers alike with its ethereal beauty and technical complexity.</p>
      
      <h3>Ancient Origins</h3>
      
      <p>The word "filigree" derives from the Latin "filum" (thread) and "granum" (grain), referring to the tiny metal beads often incorporated into the designs. Archaeological evidence shows that filigree techniques were already sophisticated in Mesopotamia around 3000 BCE, making it one of the oldest metalworking techniques still practiced today.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&q=80&w=1600" alt="Ancient filigree jewelry piece" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">A reproduction of ancient Etruscan filigree work, showcasing the technical sophistication achieved thousands of years ago.</figcaption>
      </figure>
      
      <p>The technique reached extraordinary heights in the hands of the Etruscans (8th-3rd century BCE), whose breathtaking gold filigree work remains unmatched in its technical complexity. Their masterful creations featured gossamer-thin wires—sometimes less than 0.1 mm thick—arranged in complex patterns with seemingly impossible precision.</p>
      
      <h3>Global Traditions</h3>
      
      <p>Filigree flourished across many cultures, each developing distinctive regional styles:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Indian Filigree:</strong> Known as "swamiyar" work, Indian filigree often incorporates granulation and features spiritual motifs.</li>
        <li><strong>Russian Filigree:</strong> Often combined with cloisonné enamel and characterized by its architectural-inspired structured patterns.</li>
        <li><strong>Portuguese Filigree:</strong> Perhaps the most famous contemporary tradition, typified by heart-shaped "coração de Viana" pendants and elaborate wedding jewelry.</li>
        <li><strong>Middle Eastern Filigree:</strong> Often features intricate geometric patterns influenced by Islamic artistry and frequently incorporates turquoise and coral.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=1600" alt="Portuguese filigree jewelry" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Traditional Portuguese filigree jewelry featuring the iconic "coração de Viana" heart motif.</figcaption>
      </figure>
      
      <h3>The Filigree Process</h3>
      
      <p>Creating filigree jewelry requires extraordinary patience and skill. The basic process includes:</p>
      
      <ol class="list-decimal pl-5 space-y-2 my-4">
        <li><strong>Wire Creation:</strong> Drawing metal through progressively smaller holes to create extremely thin wires.</li>
        <li><strong>Wire Preparation:</strong> Twisting or flattening wires to create various textures.</li>
        <li><strong>Framework Construction:</strong> Creating an outline structure to contain the design.</li>
        <li><strong>Pattern Formation:</strong> Bending and shaping wires into scrolls, spirals, and other patterns.</li>
        <li><strong>Assembly:</strong> Carefully placing the elements according to the design.</li>
        <li><strong>Soldering:</strong> Permanently joining the components with tiny amounts of solder.</li>
        <li><strong>Finishing:</strong> Cleaning, polishing, and sometimes adding gemstones or enamel.</li>
      </ol>
      
      <p>The most skilled filigree artists can create pieces that appear almost lace-like in their delicacy, with patterns so fine they resemble fabric rather than metal.</p>
      
      <h3>Filigree in Contemporary Jewelry</h3>
      
      <p>Despite requiring intensive handwork in an age of mass production, filigree has experienced a remarkable renaissance in contemporary jewelry design. Modern designers approach the ancient technique in several ways:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Traditional Revival:</strong> Meticulously recreating historical techniques and patterns.</li>
        <li><strong>Contemporary Interpretation:</strong> Using filigree techniques with modern, abstract designs.</li>
        <li><strong>Mixed Media:</strong> Combining filigree with other techniques like casting, 3D printing, or alternative materials.</li>
        <li><strong>Technology-Assisted Creation:</strong> Using laser cutting or 3D printing to create components that mimic filigree patterns.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1515626553181-0f218cb03f14?auto=format&q=80&w=1600" alt="Modern filigree jewelry design" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">A contemporary filigree design that combines traditional techniques with modern aesthetic sensibilities.</figcaption>
      </figure>
      
      <h3>Collecting and Caring for Filigree Jewelry</h3>
      
      <p>When purchasing filigree jewelry, consider these factors:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Craftsmanship:</strong> Look for uniform wire thickness, clean soldering points, and overall symmetry.</li>
        <li><strong>Materials:</strong> Fine silver (999) and high-karat gold (18-24K) are traditional choices for filigree due to their malleability.</li>
        <li><strong>Weight:</strong> Quality filigree should feel substantial despite its delicate appearance.</li>
        <li><strong>Provenance:</strong> For antique pieces, documentation of age and origin adds significant value.</li>
      </ul>
      
      <p>Due to its delicate nature, filigree jewelry requires special care:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Store pieces individually in soft pouches to prevent tangling or catching.</li>
        <li>Clean gently with a soft brush and mild soap solution, never using ultrasonic cleaners.</li>
        <li>Apply perfumes and cosmetics before wearing filigree jewelry.</li>
        <li>Have repairs done only by jewelers experienced in filigree work.</li>
      </ul>
      
      <p>Whether in museum collections or contemporary jewelry boutiques, filigree continues to stand as a testament to the extraordinary capabilities of human craftsmanship and artistic expression—a living link to our ancient past that remains vibrantly relevant in modern jewelry design.</p>
    `,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&q=80&w=800",
    date: "March 10, 2023",
    author: "Sofia Lombardi",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&q=80&w=150",
    category: "Craftsmanship",
    readTime: "12 min read",
    tags: ["Filigree", "Craftsmanship", "History", "Techniques"],
    relatedPosts: ["1", "5", "6"],
  },
  {
    id: "4",
    title: "Caring for Your Fine Jewelry: Essential Maintenance Tips",
    excerpt: "Expert advice on how to clean, store, and maintain your precious jewelry to ensure it lasts for generations.",
    content: `
      <p>Fine jewelry represents not just monetary value but often deep sentimental meaning. With proper care, these precious items can retain their beauty for generations and even become family heirlooms. This guide covers essential practices for maintaining your jewelry's condition, luster, and integrity.</p>
      
      <h3>Daily Wear Considerations</h3>
      
      <p>The first step in jewelry care begins with thoughtful wearing habits:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>The "Last On, First Off" Rule:</strong> Always put your jewelry on after applying cosmetics, perfumes, and hairsprays, and remove it before showering, swimming, or engaging in vigorous physical activities.</li>
        <li><strong>Activity Awareness:</strong> Remove jewelry before activities that might subject it to harsh chemicals, excessive moisture, or physical impact (gardening, cleaning, sports, etc.).</li>
        <li><strong>Rotation Habits:</strong> Avoid wearing the same pieces every day to prevent excess wear and allow time for proper cleaning between wearings.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=1600" alt="Jewelry care tools and accessories" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Professional jewelry cleaning tools help maintain your pieces' brilliance between professional servicing.</figcaption>
      </figure>
      
      <h3>Material-Specific Care Guidelines</h3>
      
      <p>Different jewelry materials require specific care approaches:</p>
      
      <h4>Gold</h4>
      
      <p>While durable, gold jewelry can scratch and dent:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Clean with warm water and mild dish soap using a soft brush.</li>
        <li>Be aware that lower karat gold (10K, 14K) contains more alloy metals and may tarnish over time.</li>
        <li>White gold that has been rhodium-plated will need replating every 1-2 years to maintain its bright white appearance.</li>
      </ul>
      
      <h4>Silver</h4>
      
      <p>Sterling silver naturally tarnishes when exposed to air and sulfur compounds:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Use silver polishing cloths or commercial silver cleaners for tarnish removal.</li>
        <li>Store in anti-tarnish bags or with anti-tarnish strips to slow oxidation.</li>
        <li>Regular wear actually helps prevent tarnish, as the oils in your skin create a protective barrier.</li>
      </ul>
      
      <h4>Platinum</h4>
      
      <p>This dense, durable metal requires minimal maintenance:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Clean with mild soap and water, followed by thorough rinsing and drying.</li>
        <li>Platinum develops a natural patina over time that many prefer, but it can be professionally polished to restore its original luster if desired.</li>
        <li>Despite its durability, platinum can still scratch (though metal isn't lost, just displaced).</li>
      </ul>
      
      <h4>Gemstones</h4>
      
      <p>Each gemstone type has specific vulnerabilities and care requirements:</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?auto=format&q=80&w=1600" alt="Various gemstone jewelry pieces" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Different gemstones require specific care approaches based on their hardness and structure.</figcaption>
      </figure>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Diamonds (Mohs 10):</strong> Though extremely hard, the oils from your skin can dull their brilliance. Clean with mild detergent, water, and a soft brush.</li>
        <li><strong>Sapphires and Rubies (Mohs 9):</strong> Relatively durable, they can be cleaned like diamonds but should avoid harsh chemicals.</li>
        <li><strong>Emeralds (Mohs 7.5-8):</strong> Often treated with oils or resins to fill surface fissures. Never use ultrasonic cleaners, harsh detergents, or steam. Clean with a damp, soft cloth only.</li>
        <li><strong>Pearls (Mohs 2.5-4.5):</strong> Extremely delicate and porous. Wipe with a soft, damp cloth after wearing. Never submerge in water or use any cleansers. Restring annually if worn regularly.</li>
        <li><strong>Opals (Mohs 5.5-6.5):</strong> Contain water and can crack if they dry out. Never use ultrasonic cleaners, heat, or leave in direct sunlight for extended periods.</li>
      </ul>
      
      <h3>Professional Maintenance Schedule</h3>
      
      <p>Even with excellent home care, professional maintenance is essential:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Inspection:</strong> Have prongs, settings, and clasps checked every 6-12 months to prevent stone loss.</li>
        <li><strong>Deep Cleaning:</strong> Professional cleaning (appropriate to the specific pieces) annually removes buildup in hard-to-reach areas.</li>
        <li><strong>Replating:</strong> White gold and other plated jewelry may need replating every 1-2 years depending on wear.</li>
        <li><strong>Restringing:</strong> Pearl necklaces and beaded jewelry should be restrung annually if worn frequently.</li>
        <li><strong>Appraisal Updates:</strong> Have valuable pieces reappraised every 5 years for insurance purposes.</li>
      </ul>
      
      <h3>Proper Storage Techniques</h3>
      
      <p>Proper storage is crucial for preventing damage when jewelry isn't being worn:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Individual Storage:</strong> Store pieces separately to prevent scratching and tangling. Use individual pouches, compartmentalized boxes, or anti-tarnish bags.</li>
        <li><strong>Environment Control:</strong> Maintain moderate humidity and temperature. Avoid direct sunlight and extreme temperature fluctuations.</li>
        <li><strong>Special Considerations:</strong> Store pearls and opals separately in breathable containers to prevent drying out. Keep silver in anti-tarnish bags.</li>
        <li><strong>Travel Precautions:</strong> Use a dedicated travel jewelry case with secure compartments when traveling, and consider leaving extremely valuable pieces at home or in a secure location.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1584611533097-bde9c541a48d?auto=format&q=80&w=1600" alt="Jewelry storage box with compartments" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Proper storage with individual compartments prevents damage and keeps jewelry organized.</figcaption>
      </figure>
      
      <h3>Insurance and Documentation</h3>
      
      <p>Protecting the value of your jewelry extends beyond physical care:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Maintain updated appraisals for valuable pieces (generally recommended every 5 years).</li>
        <li>Keep photographs and detailed descriptions of each significant piece.</li>
        <li>Consider specialized jewelry insurance that covers loss, theft, and damage.</li>
        <li>Store certificates (particularly for diamonds and colored gemstones) securely with other important documents.</li>
      </ul>
      
      <p>With consistent care and attention, your fine jewelry can maintain its beauty and integrity for generations. Remember that each piece is unique and may require specific care instructions beyond these general guidelines. When in doubt about how to care for a particular piece, consult with a professional jeweler who can provide guidance tailored to your specific items.</p>
    `,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&q=80&w=800",
    date: "February 22, 2023",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&q=80&w=150",
    category: "Care",
    readTime: "9 min read",
    tags: ["Jewelry Care", "Maintenance", "Cleaning", "Storage"],
    relatedPosts: ["1", "2", "6"],
  },
  {
    id: "5",
    title: "Jewelry Through the Ages: From Ancient Egypt to Art Deco",
    excerpt: "A journey through history's most influential jewelry periods and how they continue to inspire today's designs.",
    content: `
      <p>The history of jewelry is as old as civilization itself. Throughout the millennia, jewelry has served as currency, symbolized status and power, represented religious and spiritual beliefs, and always—without fail—beautified its wearers. This exploration of jewelry through the ages reveals how historical designs continue to influence and inspire contemporary jewelry creation.</p>
      
      <h3>Ancient Egyptian Jewelry (c. 3100-332 BCE)</h3>
      
      <p>The Egyptians were masters of jewelry craft, creating pieces of astonishing beauty and technical sophistication:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Materials:</strong> Gold was highly prized, along with lapis lazuli, turquoise, carnelian, and glass.</li>
        <li><strong>Techniques:</strong> Cloisonné, granulation, filigree, and inlay work were all perfected by Egyptian artisans.</li>
        <li><strong>Symbolic Motifs:</strong> Scarab beetles, falcon heads, lotus flowers, and the Eye of Horus featured prominently.</li>
        <li><strong>Purpose:</strong> Beyond adornment, Egyptian jewelry was worn as protective amulets and buried with the dead to assist in the afterlife.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=1600" alt="Modern jewelry with Egyptian influence" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Contemporary jewelry drawing on Egyptian motifs and symbolism.</figcaption>
      </figure>
      
      <p>The discovery of Tutankhamun's tomb in 1922 sparked an Egyptian revival in jewelry design that continues to influence designers today, seen in the continued popularity of cartouche pendants, scarab motifs, and bold collar necklaces.</p>
      
      <h3>Classical Greek and Roman Jewelry (c. 800 BCE-400 CE)</h3>
      
      <p>Greek and Roman jewelry emphasized natural forms and demonstrated remarkable technical skill:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Greek Contributions:</strong> Hellenistic craftsmen excelled in fine granulation and filigree work, often featuring laurel leaves, amphora shapes, and mythological figures.</li>
        <li><strong>Roman Innovations:</strong> Romans introduced cameos, expanded the use of colored gemstones, and popularized snake bracelets that coiled around the wrist.</li>
        <li><strong>Cultural Impact:</strong> The Romans spread jewelry styles throughout their vast empire, creating the first "international" jewelry styles.</li>
      </ul>
      
      <p>Modern designers continue to draw inspiration from classical forms, particularly in wedding jewelry where Greek key patterns, laurel wreaths, and cameos remain perennially popular.</p>
      
      <h3>Byzantine and Medieval Jewelry (c. 400-1400 CE)</h3>
      
      <p>This era saw jewelry become deeply entwined with religious symbolism:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Byzantine Splendor:</strong> Characterized by opulent colors, enameling techniques, and heavy use of pearls and cabochon gemstones in religious iconography.</li>
        <li><strong>Medieval Focus:</strong> Jewelry served both decorative and practical purposes, with brooches and cloak clasps being particularly important. Memento mori jewelry reminded wearers of mortality.</li>
        <li><strong>Materials:</strong> Gemstones were often valued more for their symbolic and purported magical properties than for their intrinsic value.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1586878341523-7c90a72e9729?auto=format&q=80&w=1600" alt="Byzantine-inspired jewelry" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Modern jewelry drawing inspiration from Byzantine mosaics and color palettes.</figcaption>
      </figure>
      
      <p>The lavish use of colored stones, religious motifs, and the distinctive Byzantine palette of deep reds, blues, and greens continues to inspire contemporary designers seeking to create pieces with historical resonance.</p>
      
      <h3>Renaissance Jewelry (c. 1400-1600)</h3>
      
      <p>The Renaissance brought a renewed interest in classical forms and innovations in technique:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Technical Innovations:</strong> Development of diamond cutting techniques and perspective-based designs.</li>
        <li><strong>Material Shifts:</strong> Gemstones began to be valued for their intrinsic beauty rather than symbolic meanings.</li>
        <li><strong>Portraiture:</strong> Miniature portrait pendants and rings became fashionable among the nobility.</li>
        <li><strong>Global Influence:</strong> Exploration of the Americas and sea routes to India brought new gemstones and design influences to European jewelry.</li>
      </ul>
      
      <p>Renaissance-inspired jewelry today often features intricate metalwork, symmetrical designs, and ornate detailing reminiscent of the period's architecture and decorative arts.</p>
      
      <h3>Georgian and Victorian Eras (c. 1714-1901)</h3>
      
      <p>These periods saw jewelry become more accessible to the growing middle classes:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Georgian (1714-1837):</strong> Characterized by nature-inspired motifs, cannetille work (intricate wirework), and paste (glass) gemstones. This was the era of memento mori and lover's eye jewelry.</li>
        <li><strong>Early Victorian (1837-1860):</strong> Romantic themes dominated, with serpents (symbolizing eternal love), flowers, and Gothic revival motifs.</li>
        <li><strong>Mid-Victorian (1860-1885):</strong> Following Prince Albert's death, mourning jewelry became prominent, featuring jet, onyx, and dark garnets.</li>
        <li><strong>Late Victorian (1885-1901):</strong> A return to delicate designs, stars, crescents, and sport-inspired motifs like horseshoes and riding crops.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1586878341523-7c90a72e9729?auto=format&q=80&w=1600" alt="Victorian-inspired jewelry" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Contemporary jewelry with Victorian motifs and styling.</figcaption>
      </figure>
      
      <p>Victorian influence remains perhaps the most pervasive in contemporary jewelry, from promise rings adorned with hearts to the continued popularity of lockets, cameos, and floral motifs.</p>
      
      <h3>Art Nouveau and Art Deco (c. 1890-1940)</h3>
      
      <p>These two consecutive but dramatically different design movements continue to be major sources of inspiration:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Art Nouveau (1890-1910):</strong> Characterized by organic, flowing lines, nature motifs (particularly insects and flowers), and the use of materials valued for their artistic effect rather than intrinsic worth. René Lalique pioneered the use of materials like horn, glass, and enamel in fine jewelry.</li>
        <li><strong>Art Deco (1920-1940):</strong> In stark contrast, Art Deco embraced geometrical patterns, symmetry, vibrant colors, and clean lines. It combined exotic influences from Egypt, Asia, and Africa with modern materials and industrial aesthetics.</li>
      </ul>
      
      <p>Both styles remain enormously influential in contemporary design, with Art Nouveau inspiring organic statement pieces and Art Deco providing the aesthetic foundation for much of modern engagement ring design.</p>
      
      <h3>Modern and Contemporary Jewelry (1945-Present)</h3>
      
      <p>Post-war jewelry has been characterized by both innovation and revival:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Mid-Century (1945-1970):</strong> Abstract, space-age designs emphasizing texture, form, and unconventional materials.</li>
        <li><strong>Late 20th Century:</strong> Period revivals, including Victorian and Art Deco, alongside artistic experimentation pushing the boundaries of what constitutes "jewelry."</li>
        <li><strong>Contemporary:</strong> A diverse landscape where traditional craftsmanship exists alongside computer-aided design and 3D printing, with increasing emphasis on ethical sourcing and sustainability.</li>
      </ul>
      
      <p>Today's designers continue to draw from this rich historical tapestry while adding contemporary sensibilities regarding wearability, sustainability, and personal expression. The most successful contemporary pieces often combine historical references with modern techniques and perspectives, creating jewelry that feels both timeless and fresh.</p>
      
      <p>As we continue to create and wear jewelry in the 21st century, we participate in an unbroken tradition stretching back to the dawn of human adornment—a tradition that will undoubtedly continue to evolve while respecting and reinterpreting its rich historical foundations.</p>
    `,
    image: "https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=800",
    date: "January 15, 2023",
    author: "Elena Petrova",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=80&w=150",
    category: "History",
    readTime: "14 min read",
    tags: ["History", "Art Deco", "Victorian", "Ancient Jewelry", "Design Inspiration"],
    relatedPosts: ["3", "4", "6"],
  },
  {
    id: "6",
    title: "Ethical Sourcing in the Jewelry Industry: Progress and Challenges",
    excerpt: "An examination of how the jewelry industry is addressing ethical concerns in gemstone and metal sourcing.",
    content: `
      <p>The jewelry industry faces a complex array of ethical challenges in sourcing its materials. From conflict diamonds to environmentally destructive mining practices, consumers and industry stakeholders alike are increasingly demanding transparency and responsibility. This article examines the evolving landscape of ethical sourcing in the jewelry industry—highlighting both significant progress and persistent challenges.</p>
      
      <h3>The Evolution of Ethical Awareness</h3>
      
      <p>Public awareness of ethical issues in jewelry sourcing gained mainstream attention in the late 1990s with revelations about "blood diamonds" funding civil wars in Africa. Since then, consumer consciousness has expanded to encompass broader concerns:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Human rights abuses in mining communities</li>
        <li>Environmental degradation from mining operations</li>
        <li>Child labor in gemstone and metal extraction</li>
        <li>Fair compensation for miners and artisans</li>
        <li>Indigenous land rights</li>
        <li>Money laundering and tax evasion in the gem trade</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1518580814362-68d74c4d8a02?auto=format&q=80&w=1600" alt="Ethical jewelry sourcing" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Artisanal miners working with responsible sourcing initiatives receive fair compensation for their labor.</figcaption>
      </figure>
      
      <h3>Regulatory Frameworks and Industry Initiatives</h3>
      
      <p>Several key regulatory frameworks and industry initiatives have emerged in response to these concerns:</p>
      
      <h4>The Kimberley Process</h4>
      
      <p>Established in 2003, the Kimberley Process Certification Scheme (KPCS) aims to prevent conflict diamonds from entering the mainstream diamond market. While representing an important first step, the Kimberley Process has been criticized for:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Narrowly defining "conflict diamonds" as those funding rebel movements (excluding human rights abuses by governments or private security forces)</li>
        <li>Lacking independent monitoring mechanisms</li>
        <li>Focusing exclusively on rough diamonds, ignoring polished stones</li>
        <li>Operating on consensus, allowing single countries to block reforms</li>
      </ul>
      
      <h4>Responsible Jewelry Council</h4>
      
      <p>Founded in 2005, the Responsible Jewelry Council (RJC) certifies companies across the jewelry supply chain against its Code of Practices covering human rights, labor standards, environmental impact, and business ethics. While more comprehensive than the Kimberley Process, critics note:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>The industry-led nature of the organization raises questions about self-regulation</li>
        <li>Certification focuses on systems and procedures rather than outcomes</li>
        <li>Small-scale miners and producers are underrepresented</li>
      </ul>
      
      <h4>Dodd-Frank Act Section 1502</h4>
      
      <p>This U.S. legislation requires companies to disclose their use of conflict minerals (including gold) from the Democratic Republic of Congo and neighboring countries. While creating important disclosure requirements, challenges include:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Limited geographic scope</li>
        <li>Implementation difficulties for small companies</li>
        <li>Unintended economic consequences in affected regions</li>
      </ul>
      
      <h4>Fairmined and Fairtrade Gold</h4>
      
      <p>These certification systems for artisanal and small-scale gold mining operations ensure miners receive fair compensation and adhere to environmental and social standards. While representing gold standards for ethical sourcing, challenges include:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li>Limited supply compared to global demand</li>
        <li>Price premiums that some consumers resist</li>
        <li>Complex certification requirements that can be barriers for some mining communities</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&q=80&w=1600" alt="Responsible mining practices" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Responsible mining operations minimize environmental impact while providing fair working conditions.</figcaption>
      </figure>
      
      <h3>Colored Gemstones: The Next Frontier</h3>
      
      <p>While diamonds and gold have received significant attention, colored gemstones present even greater traceability challenges:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Fragmented Supply Chain:</strong> 80% of colored gemstones come from artisanal and small-scale miners operating in over 40 countries.</li>
        <li><strong>Limited Regulation:</strong> No equivalent to the Kimberley Process exists for colored stones.</li>
        <li><strong>Complex Trading Patterns:</strong> Gemstones often change hands dozens of times between mine and market.</li>
      </ul>
      
      <p>Emerging initiatives in this space include:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Gemstones and Sustainable Development Knowledge Hub:</strong> An alliance of major colored gemstone suppliers working to develop standards.</li>
        <li><strong>Moyo Gemstones:</strong> A pilot program in Tanzania helping female miners access international markets with full traceability.</li>
        <li><strong>Blockchain Solutions:</strong> Several startups are developing blockchain-based traceability systems for colored gemstones.</li>
      </ul>
      
      <h3>Technology's Role in Enhancing Traceability</h3>
      
      <p>Technological innovations are creating new possibilities for supply chain transparency:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Blockchain:</strong> Decentralized ledger technology creating immutable records of gem and metal journeys from mine to market. Companies like Everledger, TrustChain, and Tracr are building platforms specifically for jewelry supply chains.</li>
        <li><strong>DNA Marking:</strong> Applied to diamonds and metals, these microscopic tags provide physical traceability independent of documentation.</li>
        <li><strong>Origin Determination:</strong> Scientific advances in determining geographical origin of gemstones through trace element and isotope analysis.</li>
        <li><strong>Digital Twins:</strong> Creating detailed digital records of individual gemstones that travel with them throughout the supply chain.</li>
      </ul>
      
      <h3>Alternative Materials and Approaches</h3>
      
      <p>Beyond improving traditional supply chains, the industry is exploring alternatives:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Lab-Grown Diamonds and Gemstones:</strong> Created using either High Pressure High Temperature (HPHT) or Chemical Vapor Deposition (CVD) processes, these stones have identical physical and chemical properties to mined stones but avoid mining impacts. Their market share has grown significantly, particularly in the U.S.</li>
        <li><strong>Recycled Metals:</strong> Using existing stocks of precious metals reduces the need for new mining. Many designers now work exclusively with recycled gold and silver.</li>
        <li><strong>Vintage and Antique Jewelry:</strong> The ultimate form of recycling, the market for estate jewelry has grown as consumers seek pieces with history and minimal environmental footprint.</li>
      </ul>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1635797255620-89cf0139bbbc?auto=format&q=80&w=1600" alt="Lab-grown diamonds jewelry" class="rounded-lg my-8 w-full" />
        <figcaption class="text-sm text-jewelry-muted text-center mt-2">Lab-grown diamonds offer an ethical alternative with the same physical properties as mined stones.</figcaption>
      </figure>
      
      <h3>The Consumer Perspective</h3>
      
      <p>While awareness of ethical issues has increased dramatically, consumer behavior reveals a complex picture:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>The Intention-Action Gap:</strong> Surveys consistently show that consumers express concern about ethical sourcing and willingness to pay premiums for responsibly sourced jewelry. However, purchasing behavior often doesn't match these stated preferences.</li>
        <li><strong>Generational Differences:</strong> Millennials and Gen Z consumers show greater commitment to ethical considerations in their purchasing decisions than older generations.</li>
        <li><strong>Education Needs:</strong> Many consumers remain confused about certification systems and what constitutes "ethical" jewelry.</li>
        <li><strong>Transparency Demands:</strong> Modern consumers increasingly expect brands to be forthcoming about their supply chains and practices.</li>
      </ul>
      
      <h3>Looking Forward: The Future of Ethical Jewelry</h3>
      
      <p>Several trends are likely to shape the future landscape of ethical sourcing in jewelry:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4">
        <li><strong>Consolidation of Standards:</strong> The current fragmentation of certification systems creates confusion for both industry and consumers. Efforts are underway to harmonize standards.</li>
        <li><strong>Integration of Social and Environmental Concerns:</strong> Future frameworks will likely address both human rights and environmental sustainability in integrated approaches.</li>
        <li><strong>Direct Sourcing Relationships:</strong> More jewelry brands are establishing direct relationships with mines and manufacturing facilities to ensure ethical standards.</li>
        <li><strong>Circular Economy Approaches:</strong> The industry is exploring models for taking back and recycling jewelry at end-of-life.</li>
        <li><strong>Increased Regulation:</strong> Voluntary initiatives are likely to be supplemented by more binding regulations like the EU's forthcoming supply chain due diligence requirements.</li>
      </ul>
      
      <p>The journey toward fully ethical jewelry supply chains remains incomplete, but significant progress has been made. The most promising developments combine rigorous standards, technological innovation, cross-sector collaboration, and consumer education. As awareness continues to grow and technological solutions mature, the jewelry industry has an opportunity to transform what was once a major liability into a compelling example of how global supply chains can operate responsibly in the 21st century.</p>
    `,
    image: "https://images.unsplash.com/photo-1518580814362-68d74c4d8a02?auto=format&q=80&w=800",
    date: "December 8, 2022",
    author: "Michael Johnson",
    authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&q=80&w=150",
    category: "Sustainability",
    readTime: "15 min read",
    tags: ["Ethics", "Sustainability", "Responsible Sourcing", "Fair Trade", "Lab-Grown Diamonds"],
    relatedPosts: ["1", "4", "5"],
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);

  useEffect(() => {
    // Find the post with the matching ID
    const currentPost = blogPosts.find((post) => post.id === id);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts
      if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
        const related = blogPosts.filter(post => 
          currentPost.relatedPosts.includes(post.id)
        );
        setRelatedPosts(related);
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      // If no post is found, redirect to the blog listing page
      navigate("/blog", { replace: true });
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <p>Loading article...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full">
              {post.category}
            </span>
            <span className="text-white/80">•</span>
            <span className="text-white/80 flex items-center text-sm">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-white/90">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span>{post.author}</span>
            </div>
            <span className="text-white/80">•</span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/blog")}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Button>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share on Instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex gap-8">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t flex flex-wrap gap-2">
                <Tag className="h-4 w-4 text-jewelry-muted" />
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-jewelry-subtle rounded-full text-sm hover:bg-jewelry-subtle/80 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-8 bg-jewelry-subtle rounded-lg flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-medium mb-2">{post.author}</h3>
                  <p className="text-jewelry-muted mb-4">
                    Jewelry expert and historian with over 15 years of experience in the industry. Specializes in gemstone identification and jewelry design history.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      More Articles
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-jewelry-subtle">
          <div className="container">
            <SectionHeading
              subtitle="Continue Reading"
              title="Related Articles"
              description="Discover more insights about jewelry craftsmanship, design, and care."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  image={relatedPost.image}
                  category={relatedPost.category}
                  date={relatedPost.date}
                  className="bg-white rounded-lg shadow-subtle hover:shadow-md transition-shadow"
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-display mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-jewelry-muted mb-8 max-w-2xl mx-auto">
            Stay updated with our latest articles, exclusive jewelry care tips, and be the first to know about new collections and special events.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
