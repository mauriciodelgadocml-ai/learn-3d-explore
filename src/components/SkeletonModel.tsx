import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const SkeletonModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Skull */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Spine */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2, 16]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
      
      {/* Ribcage */}
      {[...Array(6)].map((_, i) => (
        <group key={i} position={[0, 1.2 - i * 0.15, 0]}>
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
            <torusGeometry args={[0.25, 0.02, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#c8c8c8" />
          </mesh>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, -Math.PI / 6]} scale={[-1, 1, 1]}>
            <torusGeometry args={[0.25, 0.02, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#c8c8c8" />
          </mesh>
        </group>
      ))}
      
      {/* Pelvis */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[0.6, 0.15, 0.3]} />
        <meshStandardMaterial color="#d5d5d5" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[0.6, 0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
        <meshStandardMaterial color="#cdcdcd" />
      </mesh>
      <mesh position={[-0.6, 0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
        <meshStandardMaterial color="#cdcdcd" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[0.2, -1.5, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 1.3, 8]} />
        <meshStandardMaterial color="#d2d2d2" />
      </mesh>
      <mesh position={[-0.2, -1.5, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 1.3, 8]} />
        <meshStandardMaterial color="#d2d2d2" />
      </mesh>
    </group>
  );
};

export default SkeletonModel;
