import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 5, className = '' }: FloatingElementsProps) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 3
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
            boxShadow: '0 0 10px hsl(var(--primary) / 0.3)'
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
