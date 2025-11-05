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
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 50 }}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={1.5}
          maxDistance={15}
          // Mobile-friendly touch configuration
          touches={{
            ONE: 0, // 0 = ROTATE (single finger rotates - most intuitive)
            TWO: 3, // 3 = DOLLY_PAN (two fingers for zoom + pan)
          }}
          mouseButtons={{
            LEFT: 0, // 0 = ROTATE
            MIDDLE: 1, // 1 = ZOOM  
            RIGHT: 2, // 2 = PAN
          }}
          // Optimized for mobile
          panSpeed={0.7}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          // Smoothing
          dampingFactor={0.1}
          // Limits for better UX
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
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
