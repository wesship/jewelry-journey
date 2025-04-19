
import { useState, useCallback, useEffect } from 'react';
import { useARAnalytics } from './useARAnalytics';
import { toast } from 'sonner';

export const useARInteractions = (jewelryType: string) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(5);
  const { trackInteraction } = useARAnalytics(jewelryType);

  const handleZoom = useCallback(() => {
    if (!isZooming) {
      setIsZooming(true);
      trackInteraction('zoom');
      
      // Provide haptic feedback on mobile devices
      if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
      }
    }
  }, [isZooming, trackInteraction]);

  const handleDrag = useCallback(() => {
    if (!isDragging) {
      setIsDragging(true);
      trackInteraction('rotate');
      toast.info("Rotating model", {
        description: "Use arrow keys or drag to rotate",
        duration: 2000,
      });
    }
  }, [isDragging, trackInteraction]);

  const handleKeyboardInteraction = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        trackInteraction('rotate');
        toast.info(`Rotating ${e.key.replace('Arrow', '').toLowerCase()}`);
        break;
      case '+':
      case '=':
        trackInteraction('zoom');
        toast.info("Zooming in");
        break;
      case '-':
      case '_':
        trackInteraction('zoom');
        toast.info("Zooming out");
        break;
      default:
        break;
    }
  }, [trackInteraction]);

  // Reset interaction states
  useEffect(() => {
    const resetStates = () => {
      setIsZooming(false);
      setIsDragging(false);
    };

    window.addEventListener('mouseup', resetStates);
    window.addEventListener('touchend', resetStates);

    return () => {
      window.removeEventListener('mouseup', resetStates);
      window.removeEventListener('touchend', resetStates);
    };
  }, []);

  return {
    handleZoom,
    handleDrag,
    handleKeyboardInteraction,
    isZooming,
    isDragging
  };
};
