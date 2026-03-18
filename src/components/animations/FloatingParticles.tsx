import { useEffect, useState } from 'react';
import { useCalendly } from '@/contexts/CalendlyContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  xOffset: number;
}

// Fewer particles on mobile/low-end devices
const getParticleCount = () => {
  if (typeof window === 'undefined') return 8;
  const isMobile = window.innerWidth < 768;
  return isMobile ? 5 : 10;
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { isOpen } = useCalendly();

  useEffect(() => {
    const count = getParticleCount();
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        xOffset: Math.random() * 50 - 25,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(var(--fp-x), -100px); opacity: 0.5; }
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            ['--fp-x' as string]: `${particle.xOffset}px`,
            animation: isOpen ? 'none' : `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;

