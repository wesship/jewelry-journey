
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function RingModel({ isRotating = true }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Animate the ring rotation and hover effect
  useFrame((state, delta) => {
    if (ringRef.current) {
      // Smooth rotation
      if (isRotating) {
        ringRef.current.rotation.y += delta * 0.5;
      }
      
      // Hover animation
      if (hovered) {
        ringRef.current.scale.lerp(new THREE.Vector3(0.6, 0.6, 0.6), 0.1);
      } else {
        ringRef.current.scale.lerp(new THREE.Vector3(0.5, 0.5, 0.5), 0.1);
      }
      
      // Click animation
      if (clicked) {
        ringRef.current.rotation.x = THREE.MathUtils.lerp(
          ringRef.current.rotation.x,
          Math.PI * 2,
          0.1
        );
      }
    }
  });

  return (
    <mesh 
      ref={ringRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <torusGeometry args={[1, 0.2, 32, 100]} />
      <meshPhysicalMaterial 
        color={new THREE.Color("#FFD700")}
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
        envMapIntensity={1}
        ior={2.4}
        transmission={0}
        thickness={1}
      />
    </mesh>
  );
}
