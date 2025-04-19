
import React from 'react';

interface ProductDetailsProps {
  longDescription: string;
}

export function ProductDetails({ longDescription }: ProductDetailsProps) {
  return (
    <section className="py-12 bg-jewelry-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display mb-6 text-center">Product Details</h2>
          <div className="prose max-w-none">
            <p>{longDescription}</p>
            
            <h3>Specifications</h3>
            <ul>
              <li>Center Stone: 1.2 carat round brilliant diamond</li>
              <li>Diamond Grade: G color, VS1 clarity</li>
              <li>Setting: 4-prong platinum setting</li>
              <li>Metal: 950 Platinum</li>
              <li>Band Width: 2mm</li>
            </ul>
            
            <h3>Craftsmanship</h3>
            <p>Each piece is meticulously crafted by our master jewelers using traditional techniques passed down through generations. After the design is finalized, our artisans carefully select the gemstones and precious metals needed for your piece.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
