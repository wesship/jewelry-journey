
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RotateCw } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { ARViewer } from './ARViewer';

export function ARTryOn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isARSupported, setIsARSupported] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  React.useEffect(() => {
    // Check if WebXR is supported
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-ar')
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
      // This is a placeholder for the AR session initialization
      // In a full implementation, this would initialize WebXR
      toast({
        title: "AR Experience",
        description: "AR try-on feature coming soon!",
      });
    } catch (error) {
      console.error('Error launching AR:', error);
      toast({
        title: "Error",
        description: "Failed to launch AR experience",
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
          <CardDescription>AR is not supported on your device</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Virtual Try-On</CardTitle>
        <CardDescription>Try on rings virtually using AR</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ARViewer isLoading={isLoading} />
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
              'Try On Ring'
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
