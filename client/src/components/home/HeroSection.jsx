import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ── Animated orbital visual ── */
const HeroVisual = () => {
  const rings = [
    { size: 180, dur: 22, opacity: 0.1, dotSize: 6 },
    { size: 280, dur: 32, opacity: 0.07, dotSize: 5, reverse: true },
    { size: 370, dur: 42, opacity: 0.04, dotSize: 4 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto select-none">
      {/* Central glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            boxShadow:
              "0 0 80px rgba(109,40,217,0.25), 0 0 160px rgba(109,40,217,0.08)",
          }}
        />
        <motion.div
          className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Orbital rings with dots */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: ring.size,
            height: ring.size,
            left: `calc(50% - ${ring.size / 2}px)`,
            top: `calc(50% - ${ring.size / 2}px)`,
            borderColor: `rgba(109,40,217,${ring.opacity})`,
          }}
          animate={{ rotate: ring.reverse ? -360 : 360 }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute -top-[3px] left-1/2 -ml-[3px] rounded-full bg-brand-purple/60"
            style={{
              width: ring.dotSize,
              height: ring.dotSize,
              boxShadow: "0 0 10px rgba(109,40,217,0.4)",
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
          {i < 2 && (
            <div
              className="absolute top-1/2 -right-[2px] -mt-[2px] rounded-full bg-brand-accent/40"
              style={{ width: ring.dotSize - 1, height: ring.dotSize - 1 }}
            />
          )}
        </motion.div>
      ))}

      {/* Floating dashboard cards */}
      <motion.div
        className="absolute top-[6%] right-[0%] bg-white rounded-xl shadow-lg shadow-secondary-200/60 border border-secondary-100 px-3.5 py-2.5 z-10"
        animate={{ y: [-5, 7, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-secondary-800">Revenue</p>
            <p className="text-[10px] text-emerald-500 font-semibold">+24.5%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[-2%] bg-white rounded-xl shadow-lg shadow-secondary-200/60 border border-secondary-100 px-3.5 py-2.5 z-10"
        animate={{ y: [5, -7, 5] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-brand-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-secondary-800">
              AI Models
            </p>
            <p className="text-[10px] text-brand-purple font-semibold">
              12 Active
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[48%] right-[-6%] bg-white rounded-xl shadow-lg shadow-secondary-200/60 border border-secondary-100 px-3.5 py-2.5 z-10"
        animate={{ y: [-4, 8, -4] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-secondary-800">
              Analytics
            </p>
            <p className="text-[10px] text-amber-500 font-semibold">
              Real-time
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[
        { x: "18%", y: "22%", s: 4, d: 0 },
        { x: "72%", y: "18%", s: 3, d: 0.6 },
        { x: "82%", y: "58%", s: 5, d: 1.2 },
        { x: "12%", y: "62%", s: 3, d: 1.8 },
        { x: "55%", y: "82%", s: 4, d: 2.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-purple/25"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 3 + i * 0.6,
            repeat: Infinity,
            delay: p.d,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary-50/30 to-white">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft decorative blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-purple/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                AI-Native Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-display font-bold text-secondary-900 leading-[1.08] mb-7 tracking-tight"
            >
              Solving complex <br className="hidden sm:block" />
              business problems <br className="hidden sm:block" />
              with{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-accent">
                  Data and AI
                </span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple/0 via-brand-purple to-brand-purple/0 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg md:text-xl text-secondary-500 leading-relaxed max-w-xl mb-10"
            >
              We are an AI-native consulting firm helping enterprises build
              intelligent systems, automate decisions, and drive measurable
              value at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button
                onClick={() => navigate("/company/contact")}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white text-base font-semibold rounded-full shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                className="group px-8 py-4 border border-secondary-200 text-secondary-700 text-base font-semibold rounded-full hover:border-brand-purple/30 hover:text-brand-purple hover:bg-brand-purple/[0.03] transition-all duration-300"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Animated Visual */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-secondary-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-secondary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
