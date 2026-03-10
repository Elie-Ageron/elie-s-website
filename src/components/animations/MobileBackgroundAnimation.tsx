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

  const dotsCount = lite ? 4 : 7;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden sm:hidden" style={{ contain: 'strict' }}>
      <style>{`
        @keyframes mba-orb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25%  { transform: translate(10px, -20px) scale(1.08); opacity: 0.55; }
          50%  { transform: translate(0, -10px) scale(1); opacity: 0.45; }
          75%  { transform: translate(-10px, 20px) scale(0.92); opacity: 0.5; }
        }
        @keyframes mba-dot {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-30px); opacity: 0.5; }
        }
      `}</style>
      {orbs.map((orb, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            borderRadius: '50%',
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
            filter: lite ? 'blur(14px)' : 'blur(20px)',
            animation: `mba-orb ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}
      {Array.from({ length: dotsCount }, (_, i) => (
        <div
          key={`dot-${i}`}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'hsl(var(--primary) / 0.3)',
            left: `${12 + i * (lite ? 18 : 12)}%`,
            top: `${22 + (i % 3) * 25}%`,
            animation: `mba-dot ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default MobileBackgroundAnimation;

