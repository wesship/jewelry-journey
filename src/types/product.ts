
export interface BasicProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
}

export interface DetailedProduct {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  material: string;
  description: string;
  longDescription: string;
  availableSizes: string[];
  isNew: boolean;
  isBestseller: boolean;
  relatedProducts: RelatedProduct[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}
