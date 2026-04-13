import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

/* ══════════════════════════════════════════════════════════════════
   Animated Background Elements
   ═══════════════════════════════════════════════════════════════════ */
const FloatingGrid = () => (
  <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full opacity-[0.4]" preserveAspectRatio="none">
      {Array.from({ length: 25 }, (_, i) => {
        const x = ((i * 13) % 100);
        const y = ((i * 17) % 100);
        return (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={1.5 + (i % 2)}
            fill={i % 2 === 0 ? "#7C3AED" : "#C084FC"}
            initial={{ opacity: 0.05 }}
            animate={{
              opacity: [0.05, 0.25, 0.05],
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10 + (i % 6),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   Premium Data-Intelligence Network Visual
   ═══════════════════════════════════════════════════════════════════ */
const HeroVisual = ({ mouseX, mouseY }) => {
  const containerRef = useRef(null);
  
  // Parallax movement for the visual
  const visualX = useSpring(useTransform(mouseX, [0, 1500], [5, -5]), { stiffness: 60, damping: 20 });
  const visualY = useSpring(useTransform(mouseY, [0, 1000], [5, -5]), { stiffness: 60, damping: 20 });
  const rotateX = useSpring(useTransform(mouseY, [0, 1000], [10, -10]), { stiffness: 60, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1500], [-10, 10]), { stiffness: 60, damping: 20 });

  const cx = 50, cy = 50;
  const outerNodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = 38 + (i % 2) * 6;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

  return (
    <motion.div 
      style={{ 
        x: visualX, 
        y: visualY,
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: 1000
      }}
      className="relative w-full aspect-square max-w-[320px] sm:max-w-[440px] md:max-w-[560px] mx-auto select-none"
    >
      {/* Ambient background glows */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 75%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic connection lines */}
        {outerNodes.map((n, i) => (
          <motion.line
            key={`l-${i}`}
            x1={cx} y1={cy} x2={n.x} y2={n.y}
            stroke="url(#edge-grad)" strokeWidth="0.4"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Node dots with pulse */}
        {outerNodes.map((n, i) => (
          <g key={`n-group-${i}`}>
            <motion.circle
              cx={n.x} cy={n.y} r="2.5"
              fill="#7C3AED" opacity="0.15"
              animate={{ r: [2.5, 5, 2.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />
            <circle cx={n.x} cy={n.y} r="1.5" fill="#7C3AED" filter="url(#glow)" />
          </g>
        ))}

        {/* Central core orb */}
        <defs>
            <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
            </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r="12" fill="url(#core-glow)" />
      </svg>

      {/* Center 3D Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
            className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br from-brand-purple to-brand-accent shadow-[0_0_80px_rgba(109,40,217,0.4)] flex items-center justify-center relative overflow-hidden"
            animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1],
                borderRadius: ["2rem", "2.5rem", "2rem"]
            }}
            transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                borderRadius: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
            <svg className="w-10 h-10 md:w-14 md:h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        </motion.div>
      </div>

      {/* Floating dynamic status indicators */}
      <motion.div 
        className="absolute top-[10%] left-[-5%] bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-secondary-100 z-10"
        style={{ scale: useSpring(useTransform(mouseY, [0, 1000], [0.95, 1.05])) }}
      >
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-secondary-800 tracking-tight">System Optimal</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroSection = ({ isActive = true }) => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const textY = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#fafafa] py-20"
    >
      {/* Premium Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] bg-brand-purple/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-brand-accent/[0.03] rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-brand-glow/[0.05] rounded-full blur-[100px]" />
      </div>

      <FloatingGrid />

      {/* Main Layout Container */}
      <motion.div 
        style={{ opacity, scale }}
        className="container-custom relative z-10 pt-16 pb-8 md:pt-20 md:pb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                </span>
                Intelligence Reimagined
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-display font-light text-secondary-900 leading-[1.1] mb-10 tracking-tight"
            >
              Coxara:{" "}
              <span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent mt-4">
                Own Your Data.
              </span>
              <span className="block italic font-light mt-2">Amplify Your Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-secondary-500 leading-relaxed max-w-2xl mb-12 font-normal"
            >
              Coxara partners with enterprises to build a supercharged
              intelligence layer—a powerful blend of data assets, advanced
              tools, and AI capabilities that independently collect, process,
              and analyze data.
              <br />
              <br />
              Together, we solve your toughest challenges while empowering you
              to stay in control of your data, accelerate innovation, and gain a
              lasting competitive edge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <button
                onClick={() => navigate("/company/contact")}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-purple text-white text-base font-bold rounded-full shadow-[0_20px_40px_-10px_rgba(109,40,217,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(109,40,217,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get in Touch</span>
                <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => navigate("/products")}
                className="w-full sm:w-auto px-10 py-5 border-2 border-secondary-200 text-secondary-800 text-base font-bold rounded-full hover:bg-secondary-50 hover:border-secondary-300 transition-all duration-300"
              >
                Explore Products
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <HeroVisual mouseX={mouseX} mouseY={mouseY} />
          </motion.div>
        </div>
      </motion.div>

      {/* Dynamic Floor Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;
