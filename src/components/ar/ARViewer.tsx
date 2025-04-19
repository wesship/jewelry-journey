
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { RingModel } from './RingModel';

interface ARViewerProps {
  isLoading?: boolean;
}

export function ARViewer({ isLoading }: ARViewerProps) {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden bg-black/10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <RingModel />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
