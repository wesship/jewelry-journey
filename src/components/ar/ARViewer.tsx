
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  PresentationControls,
  useProgress,
  Html,
} from '@react-three/drei';
import { RingModel } from './RingModel';
import { NecklaceModel } from './models/NecklaceModel';
import { EarringModel } from './models/EarringModel';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

interface ARViewerProps {
  isLoading?: boolean;
  isRotating?: boolean;
  jewelryType?: 'ring' | 'necklace' | 'earring';
  modelQuality?: 'low' | 'medium' | 'high';
}

export function ARViewer({ isLoading, isRotating, jewelryType = 'ring', modelQuality = 'high' }: ARViewerProps) {
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

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={pixelRatio}
      >
        <Suspense fallback={<Loader />}>
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
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
