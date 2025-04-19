
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RingModel() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  // Animate the ring rotation
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={ringRef} scale={[0.5, 0.5, 0.5]}>
      <torusGeometry args={[1, 0.2, 16, 32]} />
      <meshStandardMaterial 
        color={new THREE.Color("#FFD700")}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}
