
import { useState, useEffect } from 'react';

export const useEngagementTracker = () => {
  const [viewTime, setViewTime] = useState(0);
  const [interactions, setInteractions] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setViewTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    const trackInteraction = () => {
      setInteractions(prev => prev + 1);
    };

    document.addEventListener('click', trackInteraction);
    document.addEventListener('scroll', trackInteraction);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
    };
  }, []);

  return { viewTime, interactions };
};
