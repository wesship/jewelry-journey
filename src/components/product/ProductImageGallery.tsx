
import React, { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={images[currentImageIndex]} 
          alt={productName} 
          className="w-full h-[500px] object-cover object-center"
        />
      </div>
      
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <button 
            key={index}
            className={`rounded-md overflow-hidden border-2 ${index === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img 
              src={image} 
              alt={`${productName} view ${index + 1}`} 
              className="w-20 h-20 object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
