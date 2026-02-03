import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, RoundedBox } from '@react-three/drei';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// Soft floating sphere with gentle movement
const SoftSphere = ({ 
  position, 
  scale = 1, 
  color = "#e8e4de",
  speed = 1 
}: { 
  position: [number, number, number]; 
  scale?: number; 
  color?: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.9}
          metalness={0.05}
        />
      </Sphere>
    </Float>
  );
};

// Soft rounded box
const SoftBox = ({ 
  position, 
  scale = 1, 
  color = "#f0ebe5",
  speed = 1 
}: { 
  position: [number, number, number]; 
  scale?: number; 
  color?: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.4 + 1) * 0.1;
    }
  });

  return (
    <Float speed={speed * 0.4} rotationIntensity={0.15} floatIntensity={0.2}>
      <RoundedBox ref={meshRef} position={position} args={[1, 1, 1]} radius={0.15} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.85}
          metalness={0.1}
        />
      </RoundedBox>
    </Float>
  );
};

// Soft accent ring/torus
const SoftRing = ({ 
  position, 
  scale = 1, 
  speed = 1 
}: { 
  position: [number, number, number]; 
  scale?: number; 
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={speed * 0.3} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.15, 16, 48]} />
        <meshStandardMaterial
          color="#d8cfc5"
          roughness={0.8}
          metalness={0.15}
        />
      </mesh>
    </Float>
  );
};

// Small floating particles
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 30;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#c9bfb3"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      {/* Soft ambient lighting */}
      <ambientLight intensity={0.8} color="#fff9f5" />
      
      {/* Main soft light from top */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.6}
        color="#ffffff"
        castShadow={false}
      />
      
      {/* Subtle fill light */}
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#f5e6dc" />
      
      {/* Floating shapes - elegant and minimal */}
      <SoftSphere position={[4, 0.5, -3]} scale={0.7} color="#e8e0d8" speed={0.8} />
      <SoftSphere position={[-3.5, 1.5, -4]} scale={0.45} color="#f0e8e0" speed={1} />
      <SoftSphere position={[2, -1.5, -5]} scale={0.35} color="#d8d0c8" speed={0.6} />
      
      <SoftBox position={[-4.5, -0.5, -3.5]} scale={0.5} color="#ebe5dd" speed={0.7} />
      <SoftBox position={[5, 2, -5]} scale={0.35} color="#e0d8d0" speed={0.9} />
      
      <SoftRing position={[3, 2.5, -4]} scale={0.4} speed={0.5} />
      <SoftRing position={[-5, -2, -5]} scale={0.3} speed={0.6} />
      
      {/* Subtle floating particles */}
      <FloatingParticles />
    </>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
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

export default HeroScene3D;
