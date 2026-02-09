interface BackgroundPatternProps {
  disableBlurAccents?: boolean;
}

const BackgroundPattern = ({ disableBlurAccents = false }: BackgroundPatternProps) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ willChange: 'auto', contain: 'strict' }}>
      {/* Very subtle grid pattern for light theme */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Soft accents (can be costly on iOS Safari due to large blurs) */}
      {!disableBlurAccents && (
        <>
          <div
            className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
          <div
            className="absolute top-[60%] right-[10%] w-[500px] h-[500px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)',
              filter: 'blur(120px)',
            }}
          />
        </>
      )}
    </div>
  );
};

export default BackgroundPattern;
