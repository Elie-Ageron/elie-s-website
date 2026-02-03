import { motion } from 'framer-motion';

const MobileBackgroundAnimation = () => {
  const orbs = [
    { size: 80, x: '15%', y: '20%', delay: 0, duration: 8 },
    { size: 60, x: '80%', y: '15%', delay: 1, duration: 10 },
    { size: 100, x: '70%', y: '60%', delay: 2, duration: 12 },
    { size: 50, x: '25%', y: '75%', delay: 0.5, duration: 9 },
    { size: 40, x: '85%', y: '85%', delay: 1.5, duration: 11 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden sm:hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            opacity: [0.4, 0.6, 0.4, 0.5, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Subtle floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default MobileBackgroundAnimation;
