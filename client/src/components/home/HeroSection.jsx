import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ══════════════════════════════════════════════════════════════════
   Animated Background Elements
   ═══════════════════════════════════════════════════════════════════ */
const FloatingGrid = () => (
  <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {Array.from({ length: 15 }, (_, i) => {
        // Pseudo-random but deterministic based on index for rendering
        const x = 5 + (i * 7) % 90;
        const y = 5 + (i * 11) % 90;
        return (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={1.5 + (i % 3)}
            fill="#7C3AED"
            initial={{ opacity: 0.15 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              cy: [`${y}%`, `${y - 3}%`, `${y}%`],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
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
const HeroVisual = () => {
  /* ── Constellation geometry — 8 perimeter nodes evenly spaced ── */
  const cx = 50,
    cy = 50;
  const outerNodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = 36 + (i % 2) * 5;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

  return (
    <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[420px] md:max-w-[520px] mx-auto select-none">
      {/* ── Layer 0 · Ambient glows ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.14) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Layer 1 · SVG Network ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hero-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="hero-glow">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-blr">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* Hub → node connection lines (animated flowing dashes) */}
        {outerNodes.map((n, i) => (
          <motion.line
            key={`h-${i}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="url(#hero-edge)"
            strokeWidth="0.35"
            strokeDasharray="1.5 2.5"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{
              duration: 3 + i * 0.35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Ring → ring connection lines */}
        {outerNodes.map((n, i) => {
          const next = outerNodes[(i + 1) % outerNodes.length];
          return (
            <motion.line
              key={`r-${i}`}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="#7C3AED"
              strokeOpacity="0.07"
              strokeWidth="0.25"
              strokeDasharray="1 3"
              animate={{ strokeDashoffset: [0, 12] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Cross-connections for extra mesh density */}
        {[
          [0, 2],
          [1, 3],
          [2, 5],
          [4, 7],
          [5, 7],
          [3, 6],
        ].map(([a, b], i) => (
          <motion.line
            key={`x-${i}`}
            x1={outerNodes[a].x}
            y1={outerNodes[a].y}
            x2={outerNodes[b].x}
            y2={outerNodes[b].y}
            stroke="#7C3AED"
            strokeOpacity="0.04"
            strokeWidth="0.2"
            strokeDasharray="0.8 4"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Node glow halos */}
        {outerNodes.map((n, i) => (
          <motion.circle
            key={`g-${i}`}
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="url(#hero-glow)"
            animate={{ opacity: [0.15, 0.45, 0.15] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Node dots */}
        {outerNodes.map((n, i) => (
          <circle
            key={`n-${i}`}
            cx={n.x}
            cy={n.y}
            r="1.3"
            fill="#7C3AED"
            filter="url(#hero-blr)"
          />
        ))}

        {/* Data-flow particles streaming inward */}
        {outerNodes.map((n, i) => (
          <motion.circle
            key={`p-${i}`}
            cx={n.x}
            cy={n.y}
            r="0.65"
            fill="#A78BFA"
            filter="url(#hero-blr)"
            animate={{
              cx: [n.x, cx + (n.x - cx) * 0.15, n.x],
              cy: [n.y, cy + (n.y - cy) * 0.15, n.y],
              opacity: [0, 0.95, 0.9, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.45,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Secondary particles — opposite phase */}
        {outerNodes
          .filter((_, i) => i % 2 === 0)
          .map((n, i) => (
            <motion.circle
              key={`p2-${i}`}
              cx={cx + (n.x - cx) * 0.3}
              cy={cy + (n.y - cy) * 0.3}
              r="0.45"
              fill="#C084FC"
              animate={{
                cx: [cx + (n.x - cx) * 0.3, n.x],
                cy: [cy + (n.y - cy) * 0.3, n.y],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.5 + i * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}
      </svg>

      {/* ── Layer 2 · Radar pulse rings ── */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-brand-purple/30 pointer-events-none"
          animate={{ scale: [1, 18], opacity: [0.35, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* ── Layer 3 · Central hub ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outermost rotation ring */}
        <motion.div
          className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-brand-purple/[0.07]"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-brand-purple/25" />
          <div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 rounded-full bg-brand-accent/20" />
          <div className="absolute -bottom-0.5 left-[30%] w-1.5 h-1.5 rounded-full bg-brand-purple/15" />
        </motion.div>

        {/* Middle dashed counter-rotate */}
        <motion.div
          className="absolute w-[6.5rem] h-[6.5rem] md:w-32 md:h-32 rounded-full border border-dashed border-brand-accent/[0.1]"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -bottom-[2px] left-1/2 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-purple/30" />
          <div className="absolute top-1/4 -left-[2px] w-1.5 h-1.5 rounded-full bg-brand-accent/25" />
        </motion.div>

        {/* Hexagonal grid hint — innermost ring */}
        <motion.div
          className="absolute w-[4.5rem] h-[4.5rem] md:w-24 md:h-24 rounded-full border border-brand-purple/[0.06]"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner glow pulse */}
        <motion.div
          className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core orb */}
        <motion.div
          className="relative w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-[1.125rem] bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent flex items-center justify-center"
          style={{
            boxShadow:
              "0 0 60px rgba(109,40,217,0.35), 0 0 120px rgba(109,40,217,0.1)",
          }}
          animate={{ scale: [1, 1.06, 1], rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-8 h-8 md:w-9 md:h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </motion.div>
      </div>

      {/* ── Layer 4 · Floating dashboard cards ── */}

      {/* Card 1 — Revenue bar chart · top-right */}
      <motion.div
        className="absolute top-[2%] right-[-2%] hidden sm:block bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-secondary-200/40 border border-secondary-100/80 p-3.5 z-20"
        style={{ width: 144 }}
        animate={{ y: [-4, 7, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 12l4-5 4 3 5-6 4 3 3-4"
                />
              </svg>
            </div>
            <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-wider">
              Revenue
            </span>
          </div>
          <span className="text-[9px] font-bold text-emerald-500">+24%</span>
        </div>
        <div className="flex items-end gap-[3px] h-9">
          {[35, 52, 45, 68, 55, 72, 62, 85, 78, 92].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-[2px] bg-gradient-to-t from-brand-purple to-brand-accent/60"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                delay: 0.8 + i * 0.05,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[7px] text-secondary-300">Q1</span>
          <span className="text-[7px] text-secondary-300">Q4</span>
        </div>
      </motion.div>

      {/* Card 2 — AI Accuracy donut · bottom-left */}
      <motion.div
        className="absolute bottom-[5%] left-[-4%] hidden sm:block bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-secondary-200/40 border border-secondary-100/80 p-3.5 z-20"
        style={{ width: 130 }}
        animate={{ y: [5, -6, 5] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-wider block text-center">
          AI Accuracy
        </span>
        <div className="relative w-16 h-16 mx-auto mt-2 mb-1">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="14.5"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="3"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="14.5"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={91.1}
              initial={{ strokeDashoffset: 91.1 }}
              animate={{ strokeDashoffset: 91.1 * (1 - 0.968) }}
              transition={{
                delay: 1.2,
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-base font-bold text-secondary-900 leading-none">
              96.8
            </span>
            <span className="text-[7px] text-secondary-400 mt-0.5">
              percent
            </span>
          </div>
        </div>
        <div className="text-center">
          <span className="text-[8px] font-semibold text-emerald-500">
            ↑ 2.1% this week
          </span>
        </div>
      </motion.div>

      {/* Card 3 — Predictions sparkline · mid-right */}
      <motion.div
        className="absolute top-[46%] right-[-6%] hidden sm:block bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-secondary-200/40 border border-secondary-100/80 p-3.5 z-20"
        style={{ width: 140 }}
        animate={{ y: [-3, 8, -3] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-5 h-5 rounded-md bg-amber-50 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-wider">
            Predictions
          </span>
        </div>
        <svg
          className="w-full h-8"
          viewBox="0 0 100 32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 L12,20 L25,22 L38,14 L50,16 L62,8 L75,10 L88,4 L100,6 V32 H0Z"
            fill="url(#hero-spark)"
          />
          <motion.path
            d="M0,24 L12,20 L25,22 L38,14 L50,16 L62,8 L75,10 L88,4 L100,6"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 1.0,
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </svg>
        <div className="flex justify-between mt-1">
          <span className="text-[7px] text-secondary-300">Mon</span>
          <span className="text-[7px] font-bold text-brand-purple">Today</span>
        </div>
      </motion.div>

      {/* Card 4 — Live data badge · top-left area */}
      <motion.div
        className="absolute top-[18%] left-[-1%] hidden sm:block bg-white/90 backdrop-blur-xl rounded-xl shadow-lg shadow-secondary-200/30 border border-secondary-100/80 px-3 py-2 z-20"
        animate={{ y: [3, -5, 3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-purple/10 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-brand-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary-800">
              12 Models
            </p>
            <div className="flex items-center gap-1">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-[8px] text-emerald-500 font-semibold">
                All active
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Layer 5 · Node labels ── */}
      {[
        {
          i: 0,
          label: "Data Lake",
          bg: "bg-violet-50",
          txt: "text-violet-600",
        },
        { i: 2, label: "ML Ops", bg: "bg-purple-50", txt: "text-purple-600" },
        { i: 4, label: "Cloud", bg: "bg-indigo-50", txt: "text-indigo-600" },
        {
          i: 6,
          label: "Analytics",
          bg: "bg-fuchsia-50",
          txt: "text-fuchsia-600",
        },
      ].map(({ i, label, bg, txt }) => (
        <motion.div
          key={`lbl-${i}`}
          className={`absolute z-10 hidden sm:block px-2 py-0.5 ${bg} rounded-full border border-secondary-100/60 shadow-sm`}
          style={{
            left: `${outerNodes[i].x}%`,
            top: `${outerNodes[i].y}%`,
            transform: "translate(-50%, -220%)",
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + i * 0.12, duration: 0.4 }}
        >
          <span className={`text-[7px] font-bold ${txt} tracking-wide`}>
            {label}
          </span>
        </motion.div>
      ))}

      {/* ── Layer 6 · Ambient floating particles ── */}
      {[
        { x: "15%", y: "20%", s: 3, d: 0 },
        { x: "78%", y: "15%", s: 4, d: 1.0 },
        { x: "88%", y: "70%", s: 3, d: 0.5 },
        { x: "10%", y: "65%", s: 4, d: 1.5 },
        { x: "60%", y: "88%", s: 3, d: 2.0 },
        { x: "35%", y: "8%", s: 3, d: 0.8 },
        { x: "90%", y: "40%", s: 2, d: 1.2 },
      ].map((p, i) => (
        <motion.div
          key={`ap-${i}`}
          className="absolute rounded-full bg-brand-purple/20 pointer-events-none"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: p.d,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = ({ isActive = true }) => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary-50/30 to-white"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-brand-purple/[0.08] rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, 30, -30, 0, 0],
          scale: [1, 1.1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-brand-accent/[0.06] rounded-full blur-[90px] pointer-events-none"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, -40, 40, 0, 0],
          scale: [1, 1.15, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <FloatingGrid />

      {/* Floating geometry */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[5%] w-32 h-32 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[20%] left-[5%] w-32 h-32 border border-brand-accent/8 rounded-full"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[40%] w-16 h-16 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                AI-Powered Platform
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-display font-light text-secondary-900 leading-[1.1] mb-6 sm:mb-8 tracking-wide"
            >
              We are building the{" "}
              <span className="relative inline-block pb-2 mt-4 font-normal text-brand-purple">
                operating system
              </span>{" "}
              for the modern enterprise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-secondary-500 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal"
            >
              Where data isn't just a report, but a dynamic engine of growth. Empower your enterprise with AI-driven automation and intelligent velocity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mb-14"
            >
              <button
                onClick={() => navigate("/company/contact")}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-purple text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
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
            </motion.div>

            {/* CoreOps Signature Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-auto"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 border border-white flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/[0.08] flex items-center justify-center text-brand-purple flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-secondary-900 font-semibold mb-1 text-[15px]">Innovation First</h4>
                  <p className="text-secondary-500 text-sm leading-snug">Cutting-edge GenAI & ML solutions</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 border border-white flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/[0.08] flex items-center justify-center text-brand-accent flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-secondary-900 font-semibold mb-1 text-[15px]">Agile Delivery</h4>
                  <p className="text-secondary-500 text-sm leading-snug">Rapid prototyping & deployment</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated Visual — hidden on mobile to prevent scroll jank */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {isActive && <HeroVisual />}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
