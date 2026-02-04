import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useMemo, useEffect } from 'react';
import * as THREE from 'three';

// Create a circular texture for round dots
const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Shared mouse position ref for all components
const mouseRef = { x: 0, y: 0 };

// Floating pink dots with smooth cursor repulsion
const FloatingDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  
  const particleCount = 80;
  
  const { basePositions, currentPositions, speeds } = useMemo(() => {
    const base = new Float32Array(particleCount * 3);
    const current = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      let x, y;
      do {
        x = (Math.random() - 0.5) * 22;
        y = (Math.random() - 0.5) * 14;
      } while (Math.abs(x) < 4 && Math.abs(y) < 2);
      
      // Keep z range tighter to avoid size variation
      const z = (Math.random() - 0.5) * 4 - 5;
      
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      
      current[i * 3] = x;
      current[i * 3 + 1] = y;
      current[i * 3 + 2] = z;
      
      spd[i] = Math.random() * 0.5 + 0.3;
    }
    return { basePositions: base, currentPositions: current, speeds: spd };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    // Mouse in 3D world coordinates
    const mouseX = mouseRef.x * 11;
    const mouseY = mouseRef.y * 6;
    
    const repulsionRadius = 4;
    const minDistance = 2;
    const smoothing = 0.035;
    
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      const animX = basePositions[idx] + Math.cos(time * speeds[i] * 0.7 + i * 0.3) * 0.3;
      const animY = basePositions[idx + 1] + Math.sin(time * speeds[i] + i * 0.5) * 0.3;
      
      let targetX = animX;
      let targetY = animY;
      
      const dx = animX - mouseX;
      const dy = animY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < repulsionRadius) {
        const nx = dist > 0.01 ? dx / dist : 0;
        const ny = dist > 0.01 ? dy / dist : 0;
        const pushAmount = repulsionRadius - dist;
        
        targetX = mouseX + nx * (dist + pushAmount * 1.2);
        targetY = mouseY + ny * (dist + pushAmount * 1.2);
      }
      
      currentPositions[idx] += (targetX - currentPositions[idx]) * smoothing;
      currentPositions[idx + 1] += (targetY - currentPositions[idx + 1]) * smoothing;
      
      pos[idx] = currentPositions[idx];
      pos[idx + 1] = currentPositions[idx + 1];
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={currentPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={8}
        color="#c4516b"
        transparent
        opacity={0.6}
        sizeAttenuation={false}
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

// Medium accent dots with smooth cursor repulsion
const AccentDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  
  const particleCount = 30;
  
  const { basePositions, currentPositions } = useMemo(() => {
    const base = new Float32Array(particleCount * 3);
    const current = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const edge = Math.random();
      let x, y;
      
      if (edge < 0.25) {
        x = (Math.random() - 0.5) * 20;
        y = 5 + Math.random() * 3;
      } else if (edge < 0.5) {
        x = (Math.random() - 0.5) * 20;
        y = -5 - Math.random() * 3;
      } else if (edge < 0.75) {
        x = 7 + Math.random() * 4;
        y = (Math.random() - 0.5) * 12;
      } else {
        x = -7 - Math.random() * 4;
        y = (Math.random() - 0.5) * 12;
      }
      
      const z = (Math.random() - 0.5) * 4 - 5;
      
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      
      current[i * 3] = x;
      current[i * 3 + 1] = y;
      current[i * 3 + 2] = z;
    }
    return { basePositions: base, currentPositions: current };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    const mouseX = mouseRef.x * 11;
    const mouseY = mouseRef.y * 6;
    
    const repulsionRadius = 4.5;
    const smoothing = 0.03;
    
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      const animX = basePositions[idx] + Math.cos(time * 0.25 + i * 0.5) * 0.4;
      const animY = basePositions[idx + 1] + Math.sin(time * 0.3 + i * 0.8) * 0.4;
      
      let targetX = animX;
      let targetY = animY;
      
      const dx = animX - mouseX;
      const dy = animY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < repulsionRadius) {
        const nx = dist > 0.01 ? dx / dist : 0;
        const ny = dist > 0.01 ? dy / dist : 0;
        const pushAmount = repulsionRadius - dist;
        
        targetX = mouseX + nx * (dist + pushAmount * 1.3);
        targetY = mouseY + ny * (dist + pushAmount * 1.3);
      }
      
      currentPositions[idx] += (targetX - currentPositions[idx]) * smoothing;
      currentPositions[idx + 1] += (targetY - currentPositions[idx + 1]) * smoothing;
      
      pos[idx] = currentPositions[idx];
      pos[idx + 1] = currentPositions[idx + 1];
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = -time * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={currentPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={12}
        color="#e07a94"
        transparent
        opacity={0.4}
        sizeAttenuation={false}
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

// Tiny subtle dots in background - no repulsion (too far back)
const SubtleDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  
  const particleCount = 50;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = -8 - Math.random() * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;
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
        size={5}
        color="#d4a5b0"
        transparent
        opacity={0.25}
        sizeAttenuation={false}
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} color="#fff5f7" />
      <SubtleDots />
      <FloatingDots />
      <AccentDots />
    </>
  );
};

const HeroScene3D = () => {
  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
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
