import { motion } from 'framer-motion';

interface MobileBackgroundAnimationProps {
  /**
   * iOS Safari peut crasher avec trop de couches floutées animées.
   * Cette option garde l’animation mais réduit le coût GPU.
   */
  lite?: boolean;
}

const MobileBackgroundAnimation = ({ lite = false }: MobileBackgroundAnimationProps) => {
  const orbs = lite
    ? [
        { size: 72, x: '18%', y: '22%', delay: 0, duration: 9 },
        { size: 56, x: '78%', y: '18%', delay: 1, duration: 11 },
        { size: 84, x: '68%', y: '64%', delay: 2, duration: 13 },
      ]
    : [
        { size: 80, x: '15%', y: '20%', delay: 0, duration: 8 },
        { size: 60, x: '80%', y: '15%', delay: 1, duration: 10 },
        { size: 100, x: '70%', y: '60%', delay: 2, duration: 12 },
        { size: 50, x: '25%', y: '75%', delay: 0.5, duration: 9 },
        { size: 40, x: '85%', y: '85%', delay: 1.5, duration: 11 },
      ];

  const dotsCount = lite ? 4 : 8;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden sm:hidden" style={{ contain: 'strict' }}>
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
            filter: lite ? 'blur(14px)' : 'blur(20px)',
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
      {[...Array(dotsCount)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${12 + i * (lite ? 18 : 12)}%`,
            top: `${22 + (i % 3) * 25}%`,
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

