import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─────────────────────── Product Data ─────────────────────── */
const products = [
  {
    id: "data-studio",
    num: "01",
    title: "Answers to Decisions",
    subtitle: "Transform raw data into actionable insights",
    description:
      "Roxbee doesn't just answer questions—it drives decisions. Go beyond 'what happened' to 'why it happened' and 'what to do next.' Designed for leaders who need clarity, not queries.",
    features: [
      "Context-aware reasoning layer",
      "Understands complex business logic",
      "No manual SQL or data prep required",
      "Multi-step analytical queries",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    ),
    accent: "from-violet-600 to-indigo-500",
    accentLight: "from-violet-50 to-indigo-50",
  },
  {
    id: "experimentation-studio",
    num: "02",
    title: "Business Context",
    subtitle: "Semantic logic tailored to your specific metrics",
    description:
      "Roxbee speaks your business language—not generic AI-speak. It aligns insights with your KPIs, metric definitions, and operating models to eliminate misinterpretation.",
    features: [
      "Dedicated Context Layer",
      "Captures custom business rules",
      "Continuously learns from enterprise data",
      "Eliminates metric ambiguity",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    accent: "from-purple-600 to-fuchsia-500",
    accentLight: "from-purple-50 to-fuchsia-50",
  },
  {
    id: "forecasting-studio",
    num: "03",
    title: "Data-Backed Insights",
    subtitle: "Verifiable results with end-to-end lineage",
    description:
      "Confidently present AI-driven insights in leadership meetings. No black-box answers. No hallucinated numbers—only verifiable results backed by traceable data logic.",
    features: [
      "Direct querying of live data",
      "No data replication or duplication",
      "Deterministic analytics",
      "End-to-end data lineage",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      />
    ),
    accent: "from-brand-purple to-brand-accent",
    accentLight: "from-brand-glow/30 to-brand-accent/10",
  },
  {
    id: "decision-automation",
    num: "04",
    title: "Proactive Intelligence",
    subtitle: "Anomaly detection and emerging risk alerts",
    description:
      "Roxbee surfaces what matters, not just what you ask. Identify emerging risks, anomalies, and opportunities before they impact outcomes—moving from hindsight to foresight.",
    features: [
      "Embedded anomaly detection",
      "Trend analysis across enterprise KPIs",
      "Insight-driven dashboards",
      "Automated alerts for emerging risks",
    ],
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
    accent: "from-indigo-600 to-violet-500",
    accentLight: "from-indigo-50 to-violet-50",
  },
  {
    id: "domain-intelligence",
    num: "05",
    title: "Enterprise Integration",
    subtitle: "Deploy securely on Cloud, on-prem, or hybrid",
    description:
      "Roxbee integrates seamlessly with enterprise governance, security, and compliance needs. Scale insights across teams without increasing operational risk.",
    features: [
      "Secure, permission-aware data access",
      "Role-based access controls",
      "Enterprise-grade performance",
      "Deploy on Cloud, on-prem, or hybrid",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    ),
    accent: "from-fuchsia-600 to-pink-500",
    accentLight: "from-fuchsia-50 to-pink-50",
  },
];

/* ─────────────────────── Hero ─────────────────────── */
const ProductsHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Roxbee", "Enterprise", "Copilot"];
  const specialWords = ["Roxbee"];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-white"
      style={{ marginTop: "80px", minHeight: "min(calc(100vh - 80px), 700px)" }}
    >
      {/* Gradient blobs */}
      <motion.div
        className="absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-purple/[0.06] blur-[100px] hidden sm:block"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/[0.05] blur-[90px] hidden sm:block"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[20vw] h-[20vw] rounded-full bg-brand-glow/[0.04] blur-[70px] hidden sm:block"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,40,217,0.05)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.05)_0%,transparent_40%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating geometry */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-accent/8 rounded-full"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[8%] w-12 h-12 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-[55%] right-[75%] w-20 h-20 border border-brand-accent/8 rounded-2xl"
          animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {[
          { t: "25%", l: "85%", s: 5, c: "bg-brand-purple/20" },
          { t: "60%", l: "4%", s: 4, c: "bg-brand-accent/20" },
          { t: "78%", l: "90%", s: 6, c: "bg-brand-purple/15" },
          { t: "35%", l: "40%", s: 3, c: "bg-brand-accent/15" },
          { t: "82%", l: "25%", s: 4, c: "bg-brand-purple/10" },
        ].map((d, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${d.c}`}
            style={{ top: d.t, left: d.l, width: d.s, height: d.s }}
            animate={{ y: [0, -10, 0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        style={{
          y: textY,
          opacity,
          minHeight: "min(calc(100vh - 80px), 700px)",
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10 group inline-block"
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-brand-purple/20 via-brand-accent/20 to-brand-glow/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <img
              src="/product_name_logo.png"
              alt="Roxbee Logo"
              className="h-28 sm:h-32 md:h-40 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(109,40,217,0.3)] hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </motion.div>
          <div className="flex justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-md border border-brand-purple/20 rounded-full shadow-sm hover:border-brand-purple/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-brand-purple tracking-[0.2em] uppercase">
                Enterprise AI Copilot
              </span>
            </motion.div>
          </div>

          {/* Word-by-word title */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 mb-6 sm:mb-8 pb-1">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold ${
                  specialWords.includes(word)
                    ? "bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent pb-1"
                    : "text-secondary-900"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0"
          >
            From fragmented data to coordinated decisions. Roxbee is a swarm
            intelligence–driven analytics platform that unifies distributed
            data, embeds governance, and enables natural language interaction—so
            business users can turn insights into action, instantly.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-brand-purple/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-brand-purple/30" />
            <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-brand-accent/40 rounded-full" />
          </motion.div>

          {/* Quick-nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 sm:px-0"
          >
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-secondary-200 text-secondary-600 hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple/[0.04] transition-all duration-300"
              >
                {p.title}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
/* ─────────────────────── Product-Specific Visuals ─────────────────────── */

/* ── 1. Answers to Decisions: Natural Language Query → Insight Flow ── */
const DataStudioVisual = () => {
  const queryText = "Show me revenue trends by region for Q4";

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0f0f1a] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] text-slate-500 ml-2 font-mono">
          Roxbee-query-engine
        </span>
        <span className="ml-auto text-[9px] font-mono text-emerald-400 flex items-center gap-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          LIVE
        </span>
      </div>

      <div className="bg-[#0f0f1a] flex-1 p-4 font-mono text-[10px] sm:text-[11px] overflow-hidden relative">
        {/* Floating particle background */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-500/20"
            animate={{
              x: [
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
              ],
              y: [
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
              ],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{ left: `${i * 15}%`, top: `${i * 12}%` }}
          />
        ))}

        {/* Query input with typing cursor */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 px-3 py-2.5 bg-violet-500/10 border border-violet-500/20 rounded-lg relative"
        >
          <span className="text-violet-400 text-[9px] font-bold block mb-1">
            USER QUERY
          </span>
          <div className="flex items-center">
            <motion.span
              className="text-slate-300 text-[11px]"
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              "{queryText}"
            </motion.span>
            <motion.span
              className="text-violet-400 text-[13px] ml-0.5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Animated pipeline with scanning beam effect */}
        <div className="relative">
          {/* Scanning beam */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent z-10"
            initial={{ top: 0, opacity: 0 }}
            whileInView={{ top: [0, 180], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          />

          {[
            {
              label: "Context Layer",
              icon: "🧠",
              status: "done",
              detail: "Mapping KPIs, business rules, metrics...",
              color: "border-blue-500/30",
            },
            {
              label: "Query Engine",
              icon: "⚡",
              status: "done",
              detail: "SELECT region, SUM(revenue)...",
              color: "border-amber-500/30",
            },
            {
              label: "Validation",
              icon: "🛡️",
              status: "done",
              detail: "Schema check · Row count: 24,891 ✓",
              color: "border-emerald-500/30",
            },
            {
              label: "Insight",
              icon: "📊",
              status: "active",
              detail: "APAC +23% · EMEA +8% · NA -2%",
              color: "border-violet-500/30",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + i * 0.25,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3 mb-2.5"
            >
              <motion.div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs border ${step.color} ${step.status === "active" ? "bg-violet-500/20 ring-1 ring-violet-400/50" : "bg-slate-800/60"}`}
                whileInView={
                  step.status === "active" ? { scale: [1, 1.15, 1] } : {}
                }
                viewport={{ once: true }}
                transition={{
                  delay: 1.5,
                  duration: 0.6,
                  repeat: step.status === "active" ? Infinity : 0,
                  repeatDelay: 2,
                }}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-bold ${step.status === "active" ? "text-violet-400" : "text-slate-500"}`}
                  >
                    {step.label}
                  </span>
                  {step.status === "done" && (
                    <motion.span
                      className="text-emerald-400 text-[9px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.8 + i * 0.25,
                        type: "spring",
                        stiffness: 400,
                      }}
                    >
                      ✓
                    </motion.span>
                  )}
                  {step.status === "active" && (
                    <motion.div
                      className="flex gap-0.5"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1 h-1 rounded-full bg-violet-400"
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
                <span
                  className={`text-[9px] block truncate ${step.status === "active" ? "text-slate-300" : "text-slate-600"}`}
                >
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated result bar */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 pt-2.5 border-t border-slate-800"
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.span
              className="text-emerald-400"
              animate={{ rotate: [0, 360] }}
              transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
            >
              ✓
            </motion.span>
            <span className="text-slate-500">Decision ready · </span>
            <motion.span
              className="text-emerald-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.1 }}
            >
              0.8s latency
            </motion.span>
          </div>
          {/* Mini bar chart for results */}
          <div className="flex items-end gap-1.5 h-6">
            {[
              { region: "APAC", v: 23, c: "bg-violet-500" },
              { region: "EMEA", v: 8, c: "bg-indigo-500" },
              { region: "NA", v: 2, c: "bg-slate-600" },
            ].map((r, i) => (
              <motion.div
                key={i}
                className="flex-1 flex flex-col items-center gap-0.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2 + i * 0.1 }}
              >
                <motion.div
                  className={`w-full ${r.c} rounded-sm`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(r.v * 0.8, 4)}px` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 2.3 + i * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
                <span className="text-[7px] text-slate-500">{r.region}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ── 2. Business Context: Semantic Knowledge Graph ── */
const ExperimentationVisual = () => {
  const nodes = [
    { x: 120, y: 55, label: "Revenue", color: "#8B5CF6", size: 20 },
    { x: 45, y: 25, label: "COGS", color: "#a78bfa", size: 14 },
    { x: 200, y: 30, label: "Margin", color: "#c084fc", size: 14 },
    { x: 35, y: 100, label: "Region", color: "#7c3aed", size: 14 },
    { x: 195, y: 105, label: "Channel", color: "#a78bfa", size: 14 },
    { x: 120, y: 140, label: "Product", color: "#6d28d9", size: 16 },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [5, 3],
    [5, 4],
    [1, 2],
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-secondary-700">
          Business Context Graph
        </span>
        <div className="ml-auto flex items-center gap-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[9px] text-emerald-600 font-medium">
            Mapped
          </span>
        </div>
      </div>

      <div className="flex-1 relative p-3">
        {/* Metrics strip with count-up animation */}
        <div className="flex gap-2 mb-3">
          {[
            { l: "Entities", v: "142", icon: "◉" },
            { l: "Relations", v: "318", icon: "⟷" },
            { l: "Rules", v: "56", icon: "⚡" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="flex-1 text-center py-1.5 bg-purple-50 border border-purple-100 rounded-lg group hover:bg-purple-100/60 transition-colors duration-300"
            >
              <div className="text-[10px] font-bold text-purple-700">
                {m.icon} {m.v}
              </div>
              <div className="text-[7px] text-purple-400">{m.l}</div>
            </motion.div>
          ))}
        </div>

        {/* SVG Knowledge Graph */}
        <svg viewBox="0 0 240 170" className="w-full h-auto">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
            <filter id="graphBlur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* Glow behind central node */}
          <motion.circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="35"
            fill="url(#nodeGlow)"
            animate={{ r: [30, 40, 30], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Edges with animated gradient stroke */}
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="#c4b5fd"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
            />
          ))}

          {/* Multiple animated pulses traveling along different paths */}
          {[
            [0, 5, 3],
            [0, 2, 4],
            [1, 0, 5],
          ].map((path, pi) => (
            <motion.circle
              key={pi}
              r="2.5"
              fill="#8B5CF6"
              animate={{
                cx: path.map((i) => nodes[i].x),
                cy: path.map((i) => nodes[i].y),
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: pi * 1.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Nodes with hover glow */}
          {nodes.map((n, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.12,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              {/* Outer glow ring for central node */}
              {i === 0 && (
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={n.size + 3}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="1"
                  animate={{
                    r: [n.size + 3, n.size + 6, n.size + 3],
                    opacity: [0.4, 0.1, 0.4],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              )}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.size}
                fill="white"
                stroke={n.color}
                strokeWidth="2.5"
              />
              <text
                x={n.x}
                y={n.y + 1}
                textAnchor="middle"
                fill={n.color}
                fontSize={i === 0 ? "8" : "7"}
                fontWeight="700"
                dominantBaseline="middle"
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
};

/* ── 3. Data Backed Insights: Audit Trail / Lineage Visualization ── */
const ForecastingVisual = () => {
  const trail = [
    {
      step: "Data Source",
      detail: "Snowflake · orders_v2",
      icon: "🗄️",
      color: "bg-blue-500",
      ring: "ring-blue-200",
    },
    {
      step: "Transformation",
      detail: "Aggregated by region, filtered Q4",
      icon: "⚙️",
      color: "bg-violet-500",
      ring: "ring-violet-200",
    },
    {
      step: "Validation",
      detail: "Row count: 24,891 · Schema ✓",
      icon: "✅",
      color: "bg-emerald-500",
      ring: "ring-emerald-200",
    },
    {
      step: "Computation",
      detail: "revenue = SUM(unit_price × qty)",
      icon: "🧮",
      color: "bg-purple-500",
      ring: "ring-purple-200",
    },
    {
      step: "Output",
      detail: "APAC: $4.2M · EMEA: $3.1M · NA: $5.8M",
      icon: "📊",
      color: "bg-brand-purple",
      ring: "ring-brand-glow",
    },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-secondary-700">
            Data Lineage Trace
          </span>
        </div>
        <motion.span
          className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
        >
          Verified ✓
        </motion.span>
      </div>

      <div className="flex-1 p-4 relative">
        {/* Animated vertical timeline line */}
        <motion.div
          className="absolute left-[26px] top-4 w-[2px] bg-gradient-to-b from-blue-300 via-violet-300 to-purple-400"
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 2rem)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        />

        {trail.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2 + i * 0.18,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-start gap-3 mb-3.5 last:mb-0 group"
          >
            <motion.div
              className={`relative z-10 w-7 h-7 ${item.color} rounded-full flex items-center justify-center text-[11px] shadow-sm flex-shrink-0 ring-2 ${item.ring}`}
              whileInView={i === trail.length - 1 ? { scale: [1, 1.2, 1] } : {}}
              viewport={{ once: true }}
              transition={{
                delay: 1.0,
                duration: 0.5,
                repeat: i === trail.length - 1 ? Infinity : 0,
                repeatDelay: 3,
              }}
            >
              {item.icon}
            </motion.div>
            <motion.div
              className="flex-1 min-w-0 bg-secondary-50/50 border border-secondary-100 rounded-lg px-3 py-2 hover:bg-secondary-50 hover:border-secondary-200 transition-all duration-300 hover:shadow-sm"
              whileHover={{ x: 3 }}
            >
              <div className="flex items-center gap-2">
                <div className="text-[10px] font-bold text-secondary-800">
                  {item.step}
                </div>
                {i < trail.length - 1 && (
                  <motion.div
                    className="text-[8px] text-emerald-500 font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.18, type: "spring" }}
                  >
                    pass ✓
                  </motion.div>
                )}
              </div>
              <div className="text-[9px] text-secondary-500 truncate">
                {item.detail}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── 4. Proactive Intelligence: Anomaly Detection Dashboard ── */
const DecisionVisual = () => {
  const dataPoints = [
    40, 42, 38, 41, 39, 43, 40, 78, 42, 39, 41, 37, 40, 44, 38, 41,
  ];
  const threshold = 55;

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-secondary-700">
          Anomaly Monitor
        </span>
        <motion.span
          className="ml-auto text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full flex items-center gap-1"
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.03, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-rose-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          1 Alert
        </motion.span>
      </div>

      <div className="flex-1 p-3 sm:p-4">
        {/* Alert card with shake animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-3 px-3 py-2.5 bg-rose-50 border border-rose-200 rounded-xl relative overflow-hidden"
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100/50 to-transparent"
            animate={{ x: [-200, 300] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <div className="relative flex items-center gap-2 mb-1">
            <motion.span
              className="text-[10px]"
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              🚨
            </motion.span>
            <span className="text-[10px] font-bold text-rose-700">
              Spike Detected — Server Latency
            </span>
          </div>
          <span className="relative text-[9px] text-rose-500">
            Value 78ms exceeded threshold 55ms at 14:32 UTC
          </span>
        </motion.div>

        {/* Sparkline with anomaly highlight */}
        <svg
          viewBox="0 0 240 80"
          className="w-full h-20 sm:h-24"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0, 20, 40, 60, 80].map((y) => (
            <motion.line
              key={y}
              x1="0"
              y1={y}
              x2="240"
              y2={y}
              stroke="#f1f5f9"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            />
          ))}

          {/* Threshold area */}
          <motion.rect
            x="0"
            y="0"
            width="240"
            height={80 - threshold}
            fill="#fef2f2"
            opacity="0.3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          {/* Threshold line */}
          <motion.line
            x1="0"
            y1={80 - threshold}
            x2="240"
            y2={80 - threshold}
            stroke="#fca5a5"
            strokeWidth="1"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.text
            x="2"
            y={80 - threshold - 3}
            fill="#ef4444"
            fontSize="7"
            fontWeight="600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            threshold
          </motion.text>

          {/* Area under the line */}
          <motion.path
            d={`M0,${80 - dataPoints[0]} ${dataPoints.map((v, i) => `L${(i / (dataPoints.length - 1)) * 240},${80 - v}`).join(" ")} L240,80 L0,80 Z`}
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          />
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Data line */}
          <motion.polyline
            points={dataPoints
              .map((v, i) => `${(i / (dataPoints.length - 1)) * 240},${80 - v}`)
              .join(" ")}
            fill="none"
            stroke="#6D28D9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          />

          {/* Data point dots */}
          {dataPoints.map((v, i) => (
            <motion.circle
              key={i}
              cx={(i / (dataPoints.length - 1)) * 240}
              cy={80 - v}
              r="2"
              fill={i === 7 ? "#ef4444" : "#6D28D9"}
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
            />
          ))}

          {/* Anomaly highlight */}
          <motion.circle
            cx={(7 / 15) * 240}
            cy={80 - 78}
            r="8"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, type: "spring" }}
          />
          {/* Ripple */}
          <motion.circle
            cx={(7 / 15) * 240}
            cy={80 - 78}
            r="5"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1"
            animate={{ r: [5, 18], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>

        {/* KPI row with animated counters */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            {
              label: "Anomalies (24h)",
              val: "1",
              color: "text-rose-600",
              bg: "bg-rose-50",
            },
            {
              label: "Avg Latency",
              val: "40ms",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              label: "Uptime",
              val: "99.97%",
              color: "text-indigo-600",
              bg: "bg-indigo-50",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.8 + i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className={`text-center py-2 ${s.bg} rounded-xl border border-secondary-100`}
            >
              <div className={`text-[11px] font-bold ${s.color}`}>{s.val}</div>
              <div className="text-[7px] text-secondary-400 mt-0.5">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── 5. Enterprise Ready: Security Architecture Diagram ── */
const DomainIntelVisual = () => {
  const layers = [
    {
      label: "Role-Based Access",
      icon: "🔐",
      items: ["Admin", "Analyst", "Viewer"],
      color: "from-violet-100 to-purple-100",
      border: "border-violet-200",
      iconBg: "bg-violet-500",
    },
    {
      label: "Data Governance",
      icon: "🛡️",
      items: ["Encryption", "Audit Log", "Masking"],
      color: "from-indigo-100 to-blue-100",
      border: "border-indigo-200",
      iconBg: "bg-indigo-500",
    },
    {
      label: "Deployment",
      icon: "☁️",
      items: ["Cloud", "On-Prem", "Hybrid"],
      color: "from-fuchsia-100 to-pink-100",
      border: "border-fuchsia-200",
      iconBg: "bg-fuchsia-500",
    },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-secondary-700">
          Enterprise Architecture
        </span>
        <motion.span
          className="ml-auto text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          SOC 2 Compliant
        </motion.span>
      </div>

      <div className="flex-1 p-4 space-y-3 relative">
        {/* Floating shield animation behind layers */}
        <motion.div
          className="absolute right-4 top-4 w-16 h-16 opacity-[0.04]"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity },
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-brand-purple"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </motion.div>

        {/* Security layers with staggered entrance */}
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15 + i * 0.18,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`bg-gradient-to-r ${layer.color} ${layer.border} border rounded-xl p-3 relative overflow-hidden group hover:shadow-md transition-shadow duration-300`}
          >
            {/* Shimmer on hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="relative flex items-center gap-2 mb-2">
              <motion.div
                className={`w-6 h-6 ${layer.iconBg} rounded-md flex items-center justify-center text-[11px] shadow-sm`}
                whileInView={{ rotate: [0, -5, 5, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.18, duration: 0.4 }}
              >
                {layer.icon}
              </motion.div>
              <span className="text-[10px] font-bold text-secondary-800">
                {layer.label}
              </span>
              <motion.div
                className="ml-auto w-2 h-2 rounded-full bg-emerald-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.18, type: "spring" }}
              />
            </div>
            <div className="relative flex gap-1.5">
              {layer.items.map((item, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.7, y: 5 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.18 + j * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-[9px] px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-md font-medium text-secondary-600 border border-white shadow-sm hover:bg-white hover:border-secondary-200 transition-all duration-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Animated status bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-200/50 rounded-xl overflow-hidden relative"
        >
          {/* Progress shimmer */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-300"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          />
          <span className="text-[9px] font-bold text-emerald-700 flex items-center gap-1">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🔒
            </motion.span>
            All Systems Secure
          </span>
          <div className="flex gap-2">
            <span className="text-[9px] text-emerald-600">
              <b>256-bit</b> AES
            </span>
            <span className="text-[9px] text-emerald-600">
              <b>99.99%</b> uptime
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ Animated Product Visual ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const ProductVisual = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const visualMap = {
    "data-studio": <DataStudioVisual />,
    "experimentation-studio": <ExperimentationVisual />,
    "forecasting-studio": <ForecastingVisual />,
    "decision-automation": <DecisionVisual />,
    "domain-intelligence": <DomainIntelVisual />,
  };

  return (
    <div className="relative py-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -4 : 4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: isEven ? -2 : 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 bg-gradient-to-br ${product.accentLight} rounded-3xl`}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl border border-secondary-100 shadow-lg shadow-secondary-200/20 overflow-hidden"
      >
        {visualMap[product.id]}
      </motion.div>
    </div>
  );
};

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ Product Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const ProductSection = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={product.id}
      className={`scroll-mt-24 py-8 sm:py-12 md:py-16 ${isEven ? "glass-section" : "glass-section-alt"}`}
    >
      {!isEven && (
        <>
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.012] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Blur orbs */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-brand-purple/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16"
        >
          <span
            className={`text-sm font-bold bg-gradient-to-r ${product.accent} bg-clip-text text-transparent tracking-wider`}
          >
            {product.num}
          </span>
          <div
            className={`h-[1px] w-12 bg-gradient-to-r ${product.accent} opacity-30`}
          />
          <span className="text-sm font-semibold text-secondary-400 uppercase tracking-widest">
            Product
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={isEven ? "" : "lg:order-2"}
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-4 sm:mb-5"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${product.accent} rounded-xl flex items-center justify-center text-white shadow-md`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {product.icon}
                </svg>
              </div>
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest">
                {product.subtitle}
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4 sm:mb-6 leading-tight">
              {product.title}
            </h2>

            <p className="text-base sm:text-lg text-secondary-500 leading-relaxed mb-8 sm:mb-10">
              {product.description}
            </p>

            {/* Features as timeline list */}
            <div className="relative pl-6 border-l-2 border-secondary-100 space-y-5">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group"
                >
                  <div
                    className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br ${product.accent} ring-4 ring-white shadow-sm`}
                  />
                  <p className="text-secondary-700 font-medium leading-relaxed group-hover:text-secondary-900 transition-colors duration-200">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className={isEven ? "" : "lg:order-1"}>
            <ProductVisual product={product} index={index} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ Overview Cards Strip ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const OverviewStrip = () => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  return (
    <section className="glass-section py-10 sm:py-12 md:py-16">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-6">
            <span className="text-sm font-semibold text-brand-purple tracking-wide">
              AI Copilot
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900">
            The Enterprise AI{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
              Copilot
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, idx) => (
            <motion.a
              key={product.id}
              href={`#${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                {...(isTouchDevice
                  ? { whileTap: { scale: 0.97 } }
                  : { whileHover: { y: -8 } })}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glow-card group relative rounded-2xl p-6 sm:p-7 h-full overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${product.accent} ${isTouchDevice ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                />

                <span
                  className={`text-xs font-bold bg-gradient-to-r ${product.accent} bg-clip-text text-transparent tracking-wider mb-4 block`}
                >
                  {product.num}
                </span>

                <div
                  className={`w-12 h-12 bg-gradient-to-br ${product.accent} rounded-xl flex items-center justify-center text-white mb-5 shadow-md ${isTouchDevice ? "" : "group-hover:scale-110 group-hover:rotate-3"} transition-all duration-300`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {product.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-display font-bold text-secondary-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                  {product.title}
                </h3>

                <p className="text-sm text-secondary-500 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <div
                  className={`mt-5 flex items-center text-brand-purple ${isTouchDevice ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-all duration-300`}
                >
                  <span className="text-sm font-semibold">Explore</span>
                  <svg
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ CTA Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const CTASection = () => (
  <section className="glass-section py-8 sm:py-12 md:py-16">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 lg:p-20 text-center text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />

        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full hidden sm:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-lg rotate-45 hidden sm:block"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-5 leading-tight">
            Ready to Transform Your Data Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore how Roxbee can accelerate your analytics from raw data to
            automated, intelligent decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/company/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-purple rounded-full font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request a Demo
              <svg
                className="w-5 h-5"
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
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ Page ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */
const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <OverviewStrip />
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}
      <CTASection />
    </div>
  );
};

export default ProductsPage;
