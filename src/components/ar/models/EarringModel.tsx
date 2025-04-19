
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EarringModel({ isRotating = true }) {
  const earringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (earringRef.current && isRotating) {
      earringRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={earringRef}>
      {/* Hook part */}
      <mesh position={[0, 0.4, 0]}>
        <torusGeometry args={[0.15, 0.02, 16, 32, Math.PI]} />
        <meshPhysicalMaterial
          color={new THREE.Color("#FFD700")}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial
          color={new THREE.Color("#FFD700")}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          reflectivity={1}
        />
      </mesh>
    </group>
  );
}
