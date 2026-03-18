import { useMemo } from 'react';
import { useCalendly } from '@/contexts/CalendlyContext';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

// Pure-CSS floating animation — identical visual to the framer-motion version but
// runs entirely on the GPU compositor thread (zero JS per frame, no re-renders).
const FloatingElements = ({ count = 5, className = '' }: FloatingElementsProps) => {
  const { isOpen } = useCalendly();
  const elements = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 3,
    })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
            boxShadow: '0 0 10px hsl(var(--primary) / 0.3)',
            animationName: isOpen ? 'none' : 'float-el',
            animationDuration: `${el.duration}s`,
            animationDelay: `${el.delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationFillMode: 'both',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
