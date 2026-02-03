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
      meshRef.current.rotation.x += 0.002 * rotationSpeed;
      meshRef.current.rotation.y += 0.003 * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  const renderShape = () => {
    // Subtle rose/warm colors for light theme
    const materialProps = {
      color: "#c4516b",
      emissive: "#c4516b",
      emissiveIntensity: 0.15,
      roughness: 0.4,
      metalness: 0.3,
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
              color="#c4516b"
              emissive="#c4516b"
              emissiveIntensity={0.1}
              roughness={0.5}
              metalness={0.2}
              distort={0.3}
              speed={1.5}
            />
          </Icosahedron>
        );
      default:
        return (
          <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale}>
            <MeshDistortMaterial
              color="#c4516b"
              emissive="#c4516b"
              emissiveIntensity={0.2}
              roughness={0.4}
              metalness={0.3}
              distort={0.4}
              speed={1}
            />
          </Sphere>
        );
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
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
      const intensity = 0.2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = intensity;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
      <meshStandardMaterial
        color="#d4a5b0"
        emissive="#c4516b"
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
      />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <>
      {/* Soft ambient lighting for light theme */}
      <ambientLight intensity={0.6} />
      
      {/* Main soft spotlight */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.4}
        penumbra={1}
        intensity={0.8}
        color="#c4516b"
      />
      
      {/* Fill light */}
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#e8b4bc" />
      
      {/* Floating shapes - subtle presence */}
      <FloatingShape position={[4, 0.5, -2]} scale={0.5} speed={0.4} shape="sphere" />
      <FloatingShape position={[-4, 1, -3]} scale={0.35} speed={0.5} shape="icosahedron" />
      
      {/* Accent orbs */}
      <GlowingOrb position={[5, 2.5, -4]} scale={0.1} />
      <GlowingOrb position={[-5, -2, -3]} scale={0.08} />
    </>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
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
