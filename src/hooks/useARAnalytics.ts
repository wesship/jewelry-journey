
import { useState, useEffect, useCallback, useRef } from 'react';

interface ARAnalyticsData {
  sessionStart: number;
  interactionCount: number;
  rotations: number;
  zoomEvents: number;
  resetEvents: number;
  sessionDuration: number;
  deviceType: string;
  interactionDetails: Array<{
    type: string;
    timestamp: number;
    data?: any;
  }>;
}

export const useARAnalytics = (jewelryType: string) => {
  const [analyticsData, setAnalyticsData] = useState<ARAnalyticsData>({
    sessionStart: Date.now(),
    interactionCount: 0,
    rotations: 0,
    zoomEvents: 0,
    resetEvents: 0,
    sessionDuration: 0,
    deviceType: getDeviceType(),
    interactionDetails: []
  });

  const detailsRef = useRef<ARAnalyticsData['interactionDetails']>([]);

  function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'iOS';
    }
    return 'Desktop';
  }

  const trackInteraction = useCallback((type: 'rotate' | 'zoom' | 'pinch-zoom' | 'reset-view' | 'general') => {
    setAnalyticsData(prev => ({
      ...prev,
      interactionCount: prev.interactionCount + 1,
      ...(type === 'rotate' ? { rotations: prev.rotations + 1 } : {}),
      ...(type === 'zoom' || type === 'pinch-zoom' ? { zoomEvents: prev.zoomEvents + 1 } : {}),
      ...(type === 'reset-view' ? { resetEvents: prev.resetEvents + 1 } : {})
    }));
    
    // Store interaction in detailed log
    detailsRef.current.push({
      type,
      timestamp: Date.now()
    });
  }, []);

  const trackInteractionDetail = useCallback((type: string, data: any) => {
    // Store detailed interaction information
    detailsRef.current.push({
      type,
      timestamp: Date.now(),
      data
    });
  }, []);

  const getSessionDuration = useCallback(() => {
    return Math.floor((Date.now() - analyticsData.sessionStart) / 1000);
  }, [analyticsData.sessionStart]);

  useEffect(() => {
    // Log analytics data every 10 seconds
    const interval = setInterval(() => {
      const currentDuration = getSessionDuration();
      setAnalyticsData(prev => ({
        ...prev,
        sessionDuration: currentDuration,
        interactionDetails: [...detailsRef.current]
      }));
      
      console.log(`AR Analytics for ${jewelryType}:`, {
        ...analyticsData,
        sessionDuration: currentDuration,
        engagementScore: calculateEngagementScore(analyticsData, currentDuration),
        interactionFrequency: analyticsData.interactionCount / (currentDuration || 1)
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      
      // Final analytics on unmount
      const finalDuration = getSessionDuration();
      console.log(`AR Session Complete for ${jewelryType}:`, {
        ...analyticsData,
        sessionDuration: finalDuration,
        interactionDetails: detailsRef.current,
        engagementScore: calculateEngagementScore(analyticsData, finalDuration),
        conversionPotential: analyticsData.interactionCount > 5 ? 'High' : 'Low'
      });
    };
  }, [jewelryType, analyticsData, getSessionDuration]);
  
  // Calculate user engagement score based on interactions and time
  function calculateEngagementScore(data: ARAnalyticsData, duration: number) {
    if (duration === 0) return 0;
    
    const interactionFrequency = data.interactionCount / duration;
    const interactionVariety = (
      (data.rotations > 0 ? 1 : 0) + 
      (data.zoomEvents > 0 ? 1 : 0) + 
      (data.resetEvents > 0 ? 1 : 0)
    ) / 3;
    
    return Math.min(10, Math.round((interactionFrequency * 5 + interactionVariety * 5) * 10) / 10);
  }

  return {
    analyticsData,
    trackInteraction,
    trackInteractionDetail,
    getSessionDuration
  };
};
