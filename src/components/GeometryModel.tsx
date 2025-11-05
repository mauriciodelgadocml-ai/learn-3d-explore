import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const GeometryModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cube */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff6b6b" wireframe={false} />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1.02, 1.02, 1.02]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
      
      {/* Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#4ecdc4" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.62, 16, 16]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
      
      {/* Pyramid (Tetrahedron) */}
      <mesh position={[2, 0, 0]}>
        <tetrahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#ffe66d" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <tetrahedronGeometry args={[0.82]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
      
      {/* Cylinder */}
      <mesh position={[-1, -1.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
        <meshStandardMaterial color="#a8e6cf" />
      </mesh>
      <mesh position={[-1, -1.5, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 1.22, 16]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
      
      {/* Cone */}
      <mesh position={[1, -1.5, 0]}>
        <coneGeometry args={[0.5, 1.2, 32]} />
        <meshStandardMaterial color="#ffd3b6" />
      </mesh>
      <mesh position={[1, -1.5, 0]}>
        <coneGeometry args={[0.52, 1.22, 16]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
      
      {/* Torus */}
      <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="#dda15e" />
      </mesh>
      <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.52, 0.22, 8, 16]} />
        <meshStandardMaterial color="#000000" wireframe={true} wireframeLinewidth={2} />
      </mesh>
    </group>
  );
};

export default GeometryModel;
