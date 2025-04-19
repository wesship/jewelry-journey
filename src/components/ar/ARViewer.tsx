
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  PresentationControls,
} from '@react-three/drei';
import { RingModel } from './RingModel';

interface ARViewerProps {
  isLoading?: boolean;
  isRotating?: boolean;
}

export function ARViewer({ isLoading, isRotating }: ARViewerProps) {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden bg-black/10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <RingModel isRotating={isRotating} />
          </PresentationControls>
          <ContactShadows 
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2.4}
          />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
