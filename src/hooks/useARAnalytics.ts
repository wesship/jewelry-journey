
import { useState, useEffect } from 'react';

interface ARAnalyticsData {
  sessionStart: number;
  interactionCount: number;
  rotations: number;
  zoomEvents: number;
}

export const useARAnalytics = (jewelryType: string) => {
  const [analyticsData, setAnalyticsData] = useState<ARAnalyticsData>({
    sessionStart: Date.now(),
    interactionCount: 0,
    rotations: 0,
    zoomEvents: 0
  });

  const trackInteraction = (type: 'rotate' | 'zoom' | 'general') => {
    setAnalyticsData(prev => ({
      ...prev,
      interactionCount: prev.interactionCount + 1,
      ...(type === 'rotate' ? { rotations: prev.rotations + 1 } : {}),
      ...(type === 'zoom' ? { zoomEvents: prev.zoomEvents + 1 } : {})
    }));
  };

  const getSessionDuration = () => {
    return Math.floor((Date.now() - analyticsData.sessionStart) / 1000);
  };

  useEffect(() => {
    // Log analytics data every 10 seconds
    const interval = setInterval(() => {
      console.log(`AR Analytics for ${jewelryType}:`, {
        ...analyticsData,
        sessionDuration: getSessionDuration()
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [jewelryType, analyticsData]);

  return {
    analyticsData,
    trackInteraction,
    getSessionDuration
  };
};
