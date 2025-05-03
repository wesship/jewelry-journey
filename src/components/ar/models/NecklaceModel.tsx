
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NecklaceModel({ isRotating = true }) {
  const necklaceRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (necklaceRef.current && isRotating) {
      necklaceRef.current.rotation.y += delta * 0.5;
    }
  });

  // Create a chain of small spheres to simulate a necklace
  return (
    <group ref={necklaceRef}>
      {[...Array(24)].map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const radius = 1.2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * 0.3,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial
              color={new THREE.Color("#FFD700")}
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={1}
            />
          </mesh>
        );
      })}
    </group>
  );
}
