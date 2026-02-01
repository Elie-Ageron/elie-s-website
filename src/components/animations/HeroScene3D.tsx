import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  scale = 1, 
  speed = 1, 
  rotationSpeed = 0.5,
  shape = 'sphere' 
}: { 
  position: [number, number, number]; 
  scale?: number; 
  speed?: number;
  rotationSpeed?: number;
  shape?: 'sphere' | 'torus' | 'icosahedron';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * rotationSpeed;
      meshRef.current.rotation.y += 0.005 * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderShape = () => {
    const materialProps = {
      color: "#FF1493",
      emissive: "#FF1493",
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.8,
    };

    switch (shape) {
      case 'torus':
        return (
          <Torus ref={meshRef} args={[1, 0.4, 16, 32]} scale={scale}>
            <meshStandardMaterial {...materialProps} />
          </Torus>
        );
      case 'icosahedron':
        return (
          <Icosahedron ref={meshRef} args={[1, 1]} scale={scale}>
            <MeshDistortMaterial
              color="#FF1493"
              emissive="#FF1493"
              emissiveIntensity={0.3}
              roughness={0.3}
              metalness={0.7}
              distort={0.4}
              speed={2}
            />
          </Icosahedron>
        );
      default:
        return (
          <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale}>
            <MeshDistortMaterial
              color="#FF1493"
              emissive="#FF1493"
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.9}
              distort={0.5}
              speed={1.5}
            />
          </Sphere>
        );
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {renderShape()}
      </group>
    </Float>
  );
};

const GlowingOrb = ({ position, scale = 0.3 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
      <meshStandardMaterial
        color="#FF1493"
        emissive="#FF1493"
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Main pink spotlight */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#FF1493"
      />
      
      {/* Secondary light for depth */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
      
      {/* Main floating shapes - scaled down */}
      <FloatingShape position={[4, 0.5, -2]} scale={0.6} speed={0.6} shape="sphere" />
      <FloatingShape position={[-4, 1, -3]} scale={0.4} speed={0.8} shape="icosahedron" />
      <FloatingShape position={[3, -2, -2]} scale={0.35} speed={0.7} shape="torus" />
      
      {/* Smaller accent orbs - more subtle */}
      <GlowingOrb position={[5, 2.5, -4]} scale={0.12} />
      <GlowingOrb position={[-5, -2, -3]} scale={0.1} />
      <GlowingOrb position={[-3, 3, -5]} scale={0.15} />
      <GlowingOrb position={[4, -1.5, -3]} scale={0.08} />
    </>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
