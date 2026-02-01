const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Distant color patches - soft blurred gradients */}
      <div 
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />
      <div 
        className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(328 60% 40% / 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      <div 
        className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] rounded-full opacity-12"
        style={{
          background: 'radial-gradient(circle, hsl(20 30% 30% / 0.2) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />
      <div 
        className="absolute top-[80%] left-[60%] w-[250px] h-[250px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
      />
    </div>
  );
};

export default BackgroundPattern;
