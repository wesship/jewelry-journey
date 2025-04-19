
import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RotateCw, Hand } from 'lucide-react';
import { toast } from "sonner";
import { ARViewer } from './ARViewer';

export function ARTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isARSupported, setIsARSupported] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [arSession, setARSession] = useState<any>(null);

  React.useEffect(() => {
    // Check if WebXR is supported with improved error handling
    if ('xr' in navigator) {
      navigator.xr?.isSessionSupported('immersive-ar')
        .then((supported) => {
          setIsARSupported(supported);
          if (supported) {
            toast.success("AR is supported on your device!");
          }
        })
        .catch((error) => {
          console.error('Error checking AR support:', error);
          setIsARSupported(false);
          toast.error("Could not verify AR support");
        });
    } else {
      toast.error("WebXR is not available on this browser");
    }
  }, []);

  const handleTryOn = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!navigator.xr) {
        throw new Error('WebXR not available');
      }

      // Request AR session with hand tracking and DOM overlay
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hand-tracking'],
        optionalFeatures: ['dom-overlay', 'hit-test'],
        domOverlay: { root: document.body }
      });

      // Set up session end handler
      session.addEventListener('end', () => {
        setARSession(null);
        toast.info("AR Session Ended", {
          description: "You've exited the AR experience"
        });
      });

      // Handle input sources (e.g., hand tracking)
      session.addEventListener('inputsourceschange', (event: any) => {
        const inputSources = event.session.inputSources;
        if (inputSources.length > 0) {
          toast.success("Hand tracking active");
        }
      });

      setARSession(session);
      toast.success("AR Experience Started", {
        description: "Move your hand to place the ring",
      });

    } catch (error: any) {
      console.error('Error launching AR:', error);
      toast.error("Failed to launch AR", {
        description: error.message || "Make sure you're using a supported device and browser."
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleRotation = useCallback(() => {
    setIsRotating(!isRotating);
  }, [isRotating]);

  if (!isARSupported) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Virtual Try-On</CardTitle>
          <CardDescription>AR is not supported on your device. Try using a device with AR capabilities.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Virtual Try-On</CardTitle>
        <CardDescription>
          {arSession 
            ? "Move your hand to position the ring" 
            : "Try on rings virtually using AR"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ARViewer isLoading={isLoading} isRotating={isRotating} />
        <div className="flex gap-2">
          <Button
            onClick={handleTryOn}
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Initializing AR...
              </>
            ) : (
              <>
                <Hand className="mr-2 h-4 w-4" />
                Try On Ring
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleRotation}
            title={isRotating ? "Stop Rotation" : "Start Rotation"}
          >
            <RotateCw className={`h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
