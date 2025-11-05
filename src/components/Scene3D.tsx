import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
}

const Scene3D = ({ children, cameraPosition = [0, 0, 5] }: Scene3DProps) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted shadow-[var(--shadow-medium)]">
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
