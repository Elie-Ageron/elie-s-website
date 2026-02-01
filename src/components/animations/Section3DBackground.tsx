import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const FloatingOrb = ({ position, scale = 0.5 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
        <MeshDistortMaterial
          color="#D94A8C"
          emissive="#D94A8C"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
          distort={0.3}
          speed={1}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#D94A8C" />
      
      <FloatingOrb position={[3, 1, -2]} scale={0.4} />
      <FloatingOrb position={[-3, -1, -3]} scale={0.3} />
      <FloatingOrb position={[2, -2, -2]} scale={0.2} />
    </>
  );
};

interface Section3DBackgroundProps {
  className?: string;
}

const Section3DBackground = ({ className = '' }: Section3DBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none opacity-50 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Section3DBackground;
