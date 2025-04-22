
import { useState, useCallback, useEffect, useRef } from 'react';
import { useARAnalytics } from './useARAnalytics';
import { toast } from 'sonner';

export const useARInteractions = (jewelryType: string) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(5);
  const lastTapRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);
  const { trackInteraction, trackInteractionDetail } = useARAnalytics(jewelryType);
  
  const handleZoom = useCallback(() => {
    if (!isZooming) {
      setIsZooming(true);
      trackInteraction('zoom');
      interactionCountRef.current += 1;
      
      // Provide haptic feedback on mobile devices
      if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
      }
    }
  }, [isZooming, trackInteraction]);

  const handlePinch = useCallback((delta: number) => {
    setIsZooming(true);
    trackInteraction('pinch-zoom');
    trackInteractionDetail('pinch-zoom', { delta });
    interactionCountRef.current += 1;
    
    // Provide stronger haptic feedback for pinch
    if (window.navigator.vibrate) {
      window.navigator.vibrate([30, 10, 30]);
    }
    
    toast.info(delta > 0 ? "Zooming in" : "Zooming out", {
      duration: 1000,
    });
  }, [trackInteraction, trackInteractionDetail]);

  const handleDrag = useCallback(() => {
    if (!isDragging) {
      setIsDragging(true);
      trackInteraction('rotate');
      interactionCountRef.current += 1;
      
      if (interactionCountRef.current === 1) {
        // First interaction
        toast.info("Rotating model", {
          description: "Use arrow keys or drag to rotate",
          duration: 2000,
        });
      }
    }
  }, [isDragging, trackInteraction]);

  const handleDoubleTap = useCallback(() => {
    // Reset the camera position
    trackInteraction('reset-view');
    trackInteractionDetail('reset-view', { interactionCount: interactionCountRef.current });
    
    // Provide haptic feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate([40, 30, 80]);
    }
    
    toast.success("View reset", { duration: 1500 });
  }, [trackInteraction, trackInteractionDetail]);

  const handleKeyboardInteraction = useCallback((e: KeyboardEvent) => {
    interactionCountRef.current += 1;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        trackInteraction('rotate');
        trackInteractionDetail('keyboard-rotate', { key: e.key });
        toast.info(`Rotating ${e.key.replace('Arrow', '').toLowerCase()}`);
        break;
      case '+':
      case '=':
        trackInteraction('zoom');
        trackInteractionDetail('keyboard-zoom', { direction: 'in' });
        toast.info("Zooming in");
        break;
      case '-':
      case '_':
        trackInteraction('zoom');
        trackInteractionDetail('keyboard-zoom', { direction: 'out' });
        toast.info("Zooming out");
        break;
      case 'r':
      case 'R':
        trackInteraction('reset-view');
        trackInteractionDetail('keyboard-reset', { interactionCount: interactionCountRef.current });
        toast.success("View reset");
        break;
      default:
        break;
    }
  }, [trackInteraction, trackInteractionDetail]);

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

  useEffect(() => {
    // Send detailed analytics after session
    return () => {
      // On unmount, track total interaction metrics
      if (interactionCountRef.current > 0) {
        trackInteractionDetail('session-summary', {
          totalInteractions: interactionCountRef.current,
          jewelryType,
        });
      }
    };
  }, [jewelryType, trackInteractionDetail]);

  return {
    handleZoom,
    handleDrag,
    handlePinch,
    handleDoubleTap,
    handleKeyboardInteraction,
    isZooming,
    isDragging
  };
};
