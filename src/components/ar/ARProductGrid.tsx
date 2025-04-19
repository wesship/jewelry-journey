
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

// Enhanced mock data with more details
const mockARProducts = [
  { 
    id: 1, 
    name: 'Diamond Engagement Ring',
    type: 'ring',
    model_url: '/models/ring-1.glb',
    description: '1.5 carat solitaire',
    tryOnCount: 156,
    rating: 4.8
  },
  { 
    id: 2, 
    name: 'Sapphire Earrings',
    type: 'earring',
    model_url: '/models/earring-1.glb',
    description: 'Blue sapphire studs',
    tryOnCount: 98,
    rating: 4.6
  },
  { 
    id: 3, 
    name: 'Pearl Necklace',
    type: 'necklace',
    model_url: '/models/necklace-1.glb',
    description: 'Akoya cultured pearls',
    tryOnCount: 87,
    rating: 4.7
  },
  { 
    id: 4, 
    name: 'Ruby Tennis Bracelet',
    type: 'bracelet',
    model_url: '/models/bracelet-1.glb',
    description: 'Round cut rubies',
    tryOnCount: 76,
    rating: 4.5
  }
];

interface ARProductGridProps {
  onTryOn: (product: any) => void;
}

export function ARProductGrid({ onTryOn }: ARProductGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockARProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="aspect-square bg-gray-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="h-12 w-12 text-gray-400" />
            </div>
            {product.tryOnCount > 0 && (
              <div className="absolute top-2 right-2 bg-primary/10 px-2 py-1 rounded text-xs">
                {product.tryOnCount} try-ons
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs bg-secondary/20 px-2 py-1 rounded-full capitalize">
                {product.type}
              </span>
              <span className="text-xs text-muted-foreground">
                ★ {product.rating}
              </span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline" size="sm">Preview</Button>
            <Button size="sm" onClick={() => onTryOn(product)}>Try On</Button>
          </CardFooter>
        </Card>
      ))}
      
      <Card className="border-dashed border-2 overflow-hidden">
        <div className="aspect-square flex items-center justify-center">
          <div className="text-center p-4">
            <Button variant="outline" className="mb-4">
              Add New AR Model
            </Button>
            <p className="text-sm text-muted-foreground">Upload new 3D models for AR try-on</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
