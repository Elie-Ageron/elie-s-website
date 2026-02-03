import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// Floating pink dots/particles
const FloatingDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 80;
  
  const { positions, sizes, speeds } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const siz = new Float32Array(particleCount);
    const spd = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // Spread dots across the viewport
      pos[i * 3] = (Math.random() - 0.5) * 20;      // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;  // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3; // z (depth)
      
      // Varying sizes for depth effect
      siz[i] = Math.random() * 0.15 + 0.05;
      
      // Random speeds for organic movement
      spd[i] = Math.random() * 0.5 + 0.3;
    }
    return { positions: pos, sizes: siz, speeds: spd };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < particleCount; i++) {
        // Gentle floating motion
        pos[i * 3 + 1] += Math.sin(time * speeds[i] + i * 0.5) * 0.003;
        pos[i * 3] += Math.cos(time * speeds[i] * 0.7 + i * 0.3) * 0.001;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Slow overall rotation
      pointsRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#c4516b"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Larger accent dots with different pink shades
const AccentDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 25;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += Math.sin(time * 0.4 + i * 0.8) * 0.004;
        pos[i * 3] += Math.cos(time * 0.3 + i * 0.5) * 0.002;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = -time * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#e07a94"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};

// Tiny subtle dots for depth
const SubtleDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 50;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#d4a5b0"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      {/* Soft ambient lighting */}
      <ambientLight intensity={1} color="#fff5f7" />
      
      {/* Pink floating dots layers */}
      <FloatingDots />
      <AccentDots />
      <SubtleDots />
    </>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
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
