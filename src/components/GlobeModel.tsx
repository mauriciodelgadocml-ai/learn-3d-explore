import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const GlobeModel = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Main globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          color="#4a9eff" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      
      {/* Continents representation */}
      <mesh position={[0, 0, 1.51]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#2d5016" roughness={0.8} />
      </mesh>
      <mesh position={[0.8, 0.5, 1.2]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#2d5016" roughness={0.8} />
      </mesh>
      <mesh position={[-0.7, -0.3, 1.3]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#2d5016" roughness={0.8} />
      </mesh>
      <mesh position={[0.3, -0.8, 1.25]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#2d5016" roughness={0.8} />
      </mesh>
      
      {/* North pole ice cap */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#e8f4f8" roughness={0.2} />
      </mesh>
      
      {/* South pole ice cap */}
      <mesh position={[0, -1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#e8f4f8" roughness={0.2} />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default GlobeModel;
