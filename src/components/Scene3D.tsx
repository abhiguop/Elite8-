
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Create an animated scene with a rotating and pulsing sphere
const SimpleScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate the sphere continuously
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Create a breathing/pulsing effect
    const pulseFactor = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
    meshRef.current.scale.set(pulseFactor, pulseFactor, pulseFactor);
    
    // Change color slightly over time for a subtle effect
    const material = meshRef.current.material as THREE.MeshStandardMaterial;
    const hue = (Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1) + 0.75; // Slight hue variation in purple range
    material.color.setHSL(hue, 0.8, 0.6);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="purple" />
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#3c1e87"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      <OrbitControls 
        enableZoom={false} 
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className = "" }: Scene3DProps) => {
  // Add a mount animation effect
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className={`${className} transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'transform 1s ease-out, opacity 1s ease-out' 
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 3] }}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          // Remove the outputEncoding property as it's not supported in newer versions
          // Modern Three.js handles color encoding differently
        }}
      >
        <SimpleScene />
      </Canvas>
    </div>
  );
};

export default Scene3D;
