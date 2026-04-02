const GradientOrbs = ({ variant = "default", className = "" }) => {
  const variants = {
    default: (
      <>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/[0.04] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </>
    ),
    hero: (
      <>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-purple/[0.06] rounded-full blur-[120px] translate-x-1/3 animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/[0.05] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand-medium/[0.04] rounded-full blur-[80px] -translate-y-1/2" />
      </>
    ),
    light: (
      <>
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-brand-glow/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-bright/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />
      </>
    ),
    dark: (
      <>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] -translate-x-1/3" />
      </>
    ),
    center: (
      <>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-brand-purple/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </>
    ),
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variants[variant] || variants.default}
    </div>
  );
};

export default GradientOrbs;
