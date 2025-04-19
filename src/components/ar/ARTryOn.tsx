
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RotateCw, Hand } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { ARViewer } from './ARViewer';

export function ARTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isARSupported, setIsARSupported] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [arSession, setARSession] = useState<any>(null);

  React.useEffect(() => {
    // Check if WebXR is supported
    if ('xr' in navigator) {
      navigator.xr?.isSessionSupported('immersive-ar')
        .then((supported) => {
          setIsARSupported(supported);
        })
        .catch((error) => {
          console.error('Error checking AR support:', error);
          setIsARSupported(false);
        });
    }
  }, []);

  const handleTryOn = async () => {
    setIsLoading(true);
    try {
      if (!navigator.xr) {
        throw new Error('WebXR not available');
      }

      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hand-tracking'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.body }
      });

      setARSession(session);
      
      session.addEventListener('end', () => {
        setARSession(null);
        toast({
          title: "AR Session Ended",
          description: "You've exited the AR experience",
        });
      });

      toast({
        title: "AR Experience Started",
        description: "Move your hand to place the ring",
      });
    } catch (error) {
      console.error('Error launching AR:', error);
      toast({
        title: "Error",
        description: "Failed to launch AR experience. Make sure you're using a supported device and browser.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

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
          >
            <RotateCw className={`h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
