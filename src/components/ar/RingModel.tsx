
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function RingModel({ isRotating = true }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animate the ring rotation
  useFrame((state, delta) => {
    if (ringRef.current && isRotating) {
      ringRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh 
      ref={ringRef} 
      scale={hovered ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusGeometry args={[1, 0.2, 32, 64]} />
      <meshPhysicalMaterial 
        color={new THREE.Color("#FFD700")}
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
      />
    </mesh>
  );
}
