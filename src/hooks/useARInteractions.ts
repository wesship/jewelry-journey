
import { useState, useCallback, useEffect } from 'react';
import { useARAnalytics } from './useARAnalytics';

export const useARInteractions = (jewelryType: string) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { trackInteraction } = useARAnalytics(jewelryType);

  const handleZoom = useCallback(() => {
    if (!isZooming) {
      setIsZooming(true);
      trackInteraction('zoom');
    }
  }, [isZooming, trackInteraction]);

  const handleDrag = useCallback(() => {
    if (!isDragging) {
      setIsDragging(true);
      trackInteraction('rotate');
    }
  }, [isDragging, trackInteraction]);

  const handleKeyboardInteraction = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        trackInteraction('rotate');
        break;
      case '+':
      case '-':
        trackInteraction('zoom');
        break;
      default:
        break;
    }
  }, [trackInteraction]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardInteraction);
    return () => {
      window.removeEventListener('keydown', handleKeyboardInteraction);
    };
  }, [handleKeyboardInteraction]);

  return {
    handleZoom,
    handleDrag,
    isZooming,
    isDragging
  };
};
