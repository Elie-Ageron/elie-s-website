import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

const GlowingCard = ({ children, className = '' }: GlowingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      hsl(var(--primary) / 0.08),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" 
           style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.05), transparent 40%)` }} 
      />
      {children}
    </motion.div>
  );
};

export default GlowingCard;
