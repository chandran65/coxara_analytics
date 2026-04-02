import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientOrbs } from "../ui";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/company/contact");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary-950">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(109,40,217,0.25)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(109,40,217,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-accent/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Glowing orb accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] animate-float-slow pointer-events-none" />

      <div className="container-custom relative z-20 px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-medium text-brand-light uppercase tracking-widest">
                AI-Native Consulting
              </span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight"
          >
            Solving complex <br className="hidden sm:block" />
            business problems with <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-light to-brand-glow">
                Data and AI
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-brand-accent/0 via-brand-accent to-brand-accent/0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary-300 leading-relaxed max-w-2xl mb-12 font-light"
          >
            We are an AI-native consulting firm helping enterprises build
            intelligent systems, automate decisions, and drive measurable value
            at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-5"
          >
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-accent text-white text-lg font-bold rounded-full shadow-[0_0_30px_rgba(109,40,217,0.3)] hover:shadow-[0_0_40px_rgba(109,40,217,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              <span className="relative z-10">Start Your Journey</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <button
              onClick={() => navigate("/services")}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/15 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100+", label: "Enterprise Clients" },
            { value: "25%", label: "Avg. Profit Lift" },
            { value: "10x", label: "ROI Delivered" },
            { value: "6+", label: "Industries Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-secondary-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
