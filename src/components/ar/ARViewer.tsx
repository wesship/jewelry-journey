
import React, { Suspense, useMemo, useCallback, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  PresentationControls,
  useProgress,
  Html,
} from '@react-three/drei';
import { Loader, Activity, ZoomIn, RotateCw } from 'lucide-react';
import { RingModel } from './RingModel';
import { NecklaceModel } from './models/NecklaceModel';
import { EarringModel } from './models/EarringModel';
import { ARErrorBoundary } from './ARErrorBoundary';
import { useARInteractions } from '@/hooks/useARInteractions';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

function LoadingIndicator() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 p-4 bg-background/80 backdrop-blur rounded-lg shadow-lg">
        <div className="relative">
          <Activity className="h-8 w-8 text-primary animate-pulse" />
          <Skeleton className="w-16 h-16 rounded-full absolute -top-4 -left-4 animate-spin-slow" />
        </div>
        <Progress value={progress} className="w-32" />
        <p className="text-sm font-medium">Loading Model ({progress.toFixed(0)}%)</p>
      </div>
    </Html>
  );
}

// New component for interaction help overlay
function InteractionHelp({ visible }) {
  if (!visible) return null;
  
  return (
    <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none">
      <div className="bg-background/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-3 shadow-lg animate-fade-in">
        <div className="flex items-center gap-1">
          <ZoomIn className="h-4 w-4 text-primary" />
          <span className="text-xs">Pinch to zoom</span>
        </div>
        <div className="w-px h-4 bg-muted"></div>
        <div className="flex items-center gap-1">
          <RotateCw className="h-4 w-4 text-primary" />
          <span className="text-xs">Drag to rotate</span>
        </div>
      </div>
    </div>
  );
}

interface ARViewerProps {
  isLoading?: boolean;
  isRotating?: boolean;
  jewelryType?: 'ring' | 'necklace' | 'earring';
  modelQuality?: 'low' | 'medium' | 'high';
}

export function ARViewer({ isLoading, isRotating, jewelryType = 'ring', modelQuality = 'high' }: ARViewerProps) {
  const { handleZoom, handleDrag, handleKeyboardInteraction, handlePinch, handleDoubleTap } = useARInteractions(jewelryType);
  const [showHelp, setShowHelp] = useState(true);
  const [lastInteraction, setLastInteraction] = useState<Date | null>(null);

  const pixelRatio = useMemo(() => {
    switch (modelQuality) {
      case 'low': return [1, 1] as [number, number];
      case 'medium': return [1, 2] as [number, number];
      case 'high': return [2, 2] as [number, number];
      default: return [1, 2] as [number, number];
    }
  }, [modelQuality]);

  const JewelryComponent = useMemo(() => {
    switch (jewelryType) {
      case 'necklace': return NecklaceModel;
      case 'earring': return EarringModel;
      default: return RingModel;
    }
  }, [jewelryType]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyboardInteraction);
    
    // Hide the help tooltip after 5 seconds
    const helpTimer = setTimeout(() => {
      setShowHelp(false);
    }, 5000);
    
    return () => {
      window.removeEventListener('keydown', handleKeyboardInteraction);
      clearTimeout(helpTimer);
    };
  }, [handleKeyboardInteraction]);

  // Track interaction timing for analytics
  const trackInteraction = useCallback(() => {
    setLastInteraction(new Date());
    // Hide help on first interaction
    setShowHelp(false);
  }, []);

  const handleCanvasCreated = useCallback(({ gl }) => {
    toast.success(`${jewelryType} model loaded successfully`);
    // Enable checking for WebXR support
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then(supported => {
        if (supported) {
          console.log('WebXR AR supported on this device');
        }
      });
    }
  }, [jewelryType]);

  // Handle double-click manually since doubleClickSpeed isn't a valid prop
  const handleDoubleClick = useCallback(() => {
    handleDoubleTap();
  }, [handleDoubleTap]);

  return (
    <div 
      className="w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 relative touch-none"
      role="region"
      aria-label={`3D viewer for ${jewelryType}`}
      tabIndex={0}
      onTouchStart={trackInteraction}
      onMouseDown={trackInteraction}
    >
      <ARErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={pixelRatio}
          onCreated={handleCanvasCreated}
          onPointerDown={trackInteraction}
        >
          <Suspense fallback={<LoadingIndicator />}>
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1.5}
              castShadow
            />
            <PresentationControls
              global
              zoom={0.8}
              rotation={[0, -Math.PI / 4, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
            >
              <JewelryComponent isRotating={isRotating} />
            </PresentationControls>
            <ContactShadows 
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={5}
              blur={2.4}
              far={4}
            />
            <Environment preset="sunset" background blur={0.8} />
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 4}
              dampingFactor={0.05}
              rotateSpeed={0.5}
              minDistance={3}
              maxDistance={10}
              onStart={handleDrag}
              onChange={(e) => {
                if (e.target.getDistance) {
                  handleZoom();
                }
              }}
              onDoubleClick={handleDoubleClick}
              aria-label="3D controls"
            />
          </Suspense>
        </Canvas>
      </ARErrorBoundary>
      <InteractionHelp visible={showHelp} />
    </div>
  );
}
