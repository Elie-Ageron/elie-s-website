import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface NeonRippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NeonRippleButton = ({ children, className = '', onClick }: NeonRippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 30px hsl(328 100% 54% / 0.4), 0 0 60px hsl(328 100% 54% / 0.2)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      {children}
    </motion.button>
  );
};

export default NeonRippleButton;
