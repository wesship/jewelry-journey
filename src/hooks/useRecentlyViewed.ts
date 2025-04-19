
import { useState, useEffect } from 'react';
import { BasicProduct } from '@/types/product';

const MAX_RECENT_ITEMS = 4;

export function useRecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState<BasicProduct[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      setRecentlyViewed(JSON.parse(stored));
    }
  }, []);

  const addToRecentlyViewed = (product: BasicProduct) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_RECENT_ITEMS);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      return updated;
    });
  };

  return {
    recentlyViewed,
    addToRecentlyViewed
  };
}
