import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, Suspense, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Create a circular texture for round dots
const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  
  // Draw a soft circle with gradient
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

// Mouse position in 3D space
const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert to normalized coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mouse;
};

// Floating pink dots - positioned to avoid center, with cursor repulsion
const FloatingDots = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  const { camera } = useThree();
  
  const particleCount = 60;
  
  const { positions, originalPositions, speeds, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const origPos = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    const vel = new Float32Array(particleCount * 3); // velocities for smooth movement
    
    for (let i = 0; i < particleCount; i++) {
      // Spread dots but avoid the center area where the title is
      let x, y;
      do {
        x = (Math.random() - 0.5) * 22;
        y = (Math.random() - 0.5) * 14;
      } while (Math.abs(x) < 4 && Math.abs(y) < 2); // Avoid center
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 6;
      
      // Store original positions
      origPos[i * 3] = x;
      origPos[i * 3 + 1] = y;
      origPos[i * 3 + 2] = pos[i * 3 + 2];
      
      spd[i] = Math.random() * 0.5 + 0.3;
      
      // Initialize velocities to 0
      vel[i * 3] = 0;
      vel[i * 3 + 1] = 0;
      vel[i * 3 + 2] = 0;
    }
    return { positions: pos, originalPositions: origPos, speeds: spd, velocities: vel };
  }, []);

  // Store refs for velocities (mutable)
  const velocitiesRef = useRef(velocities);

  useFrame((state) => {
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      const vel = velocitiesRef.current;
      
      // Convert mouse to 3D world position
      const mouseX = mouse.x * 12; // Scale to match scene
      const mouseY = mouse.y * 7;
      
      const repulsionRadius = 4; // How far the cursor affects dots
      const repulsionStrength = 0.15; // How strong the push is
      const returnStrength = 0.03; // How fast dots return to original position
      const damping = 0.92; // Velocity damping for smooth movement
      
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Calculate distance from mouse
        const dx = pos[idx] - mouseX;
        const dy = pos[idx + 1] - mouseY;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        
        // Apply repulsion force if within radius
        if (dist < repulsionRadius && dist > 0.1) {
          const force = (repulsionRadius - dist) / repulsionRadius;
          const forceX = (dx / dist) * force * repulsionStrength;
          const forceY = (dy / dist) * force * repulsionStrength;
          
          vel[idx] += forceX;
          vel[idx + 1] += forceY;
        }
        
        // Apply return force toward original position
        const origDx = originalPositions[idx] - pos[idx];
        const origDy = originalPositions[idx + 1] - pos[idx + 1];
        
        vel[idx] += origDx * returnStrength;
        vel[idx + 1] += origDy * returnStrength;
        
        // Apply damping
        vel[idx] *= damping;
        vel[idx + 1] *= damping;
        
        // Update position with velocity
        pos[idx] += vel[idx];
        pos[idx + 1] += vel[idx + 1];
        
        // Add subtle floating animation
        pos[idx + 1] += Math.sin(time * speeds[i] + i * 0.5) * 0.001;
        pos[idx] += Math.cos(time * speeds[i] * 0.7 + i * 0.3) * 0.0005;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = time * 0.015;
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
        size={0.25}
        color="#c4516b"
        transparent
        opacity={0.6}
        sizeAttenuation
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

// Larger accent dots - edges only, with cursor repulsion
const AccentDots = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  
  const particleCount = 20;
  
  const { positions, originalPositions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const origPos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Place on edges of viewport
      const edge = Math.random();
      if (edge < 0.25) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = 5 + Math.random() * 3;
      } else if (edge < 0.5) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = -5 - Math.random() * 3;
      } else if (edge < 0.75) {
        pos[i * 3] = 7 + Math.random() * 4;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      } else {
        pos[i * 3] = -7 - Math.random() * 4;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      }
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 4;
      
      origPos[i * 3] = pos[i * 3];
      origPos[i * 3 + 1] = pos[i * 3 + 1];
      origPos[i * 3 + 2] = pos[i * 3 + 2];
      
      vel[i * 3] = 0;
      vel[i * 3 + 1] = 0;
      vel[i * 3 + 2] = 0;
    }
    return { positions: pos, originalPositions: origPos, velocities: vel };
  }, []);

  const velocitiesRef = useRef(velocities);

  useFrame((state) => {
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      const vel = velocitiesRef.current;
      
      const mouseX = mouse.x * 12;
      const mouseY = mouse.y * 7;
      
      const repulsionRadius = 5;
      const repulsionStrength = 0.12;
      const returnStrength = 0.025;
      const damping = 0.9;
      
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        const dx = pos[idx] - mouseX;
        const dy = pos[idx + 1] - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < repulsionRadius && dist > 0.1) {
          const force = (repulsionRadius - dist) / repulsionRadius;
          vel[idx] += (dx / dist) * force * repulsionStrength;
          vel[idx + 1] += (dy / dist) * force * repulsionStrength;
        }
        
        vel[idx] += (originalPositions[idx] - pos[idx]) * returnStrength;
        vel[idx + 1] += (originalPositions[idx + 1] - pos[idx + 1]) * returnStrength;
        
        vel[idx] *= damping;
        vel[idx + 1] *= damping;
        
        pos[idx] += vel[idx];
        pos[idx + 1] += vel[idx + 1];
        
        pos[idx + 1] += Math.sin(time * 0.3 + i * 0.8) * 0.002;
        pos[idx] += Math.cos(time * 0.25 + i * 0.5) * 0.001;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = -time * 0.01;
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
        size={0.4}
        color="#e07a94"
        transparent
        opacity={0.45}
        sizeAttenuation
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

// Tiny subtle dots in background - very far back (no repulsion, too far)
const SubtleDots = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const circleTexture = useMemo(() => createCircleTexture(), []);
  
  const particleCount = 40;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = -8 - Math.random() * 6; // Very far back
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
        size={0.15}
        color="#d4a5b0"
        transparent
        opacity={0.25}
        sizeAttenuation
        map={circleTexture}
        alphaMap={circleTexture}
        depthWrite={false}
      />
    </points>
  );
};

const Scene = ({ mouse }: { mouse: { x: number; y: number } }) => {
  return (
    <>
      {/* Soft ambient lighting */}
      <ambientLight intensity={1} color="#fff5f7" />
      
      {/* Pink floating dots layers - back to front */}
      <SubtleDots />
      <FloatingDots mouse={mouse} />
      <AccentDots mouse={mouse} />
    </>
  );
};

const HeroScene3D = () => {
  const mouse = useMousePosition();
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
