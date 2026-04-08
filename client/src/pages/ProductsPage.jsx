import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─────────────────────── Product Data ─────────────────────── */
const products = [
  {
    id: "data-studio",
    num: "01",
    title: "Data Studio",
    subtitle: "Connect · Prepare · Model · Govern",
    description:
      "Unify your data foundations with end-to-end pipelines, intelligent modeling frameworks, enterprise-quality governance, and accelerated data activation.",
    features: [
      "End-to-end data pipeline orchestration",
      "Intelligent data modeling frameworks",
      "Enterprise-grade data governance",
      "Automated data quality monitoring",
      "Accelerated data activation & cataloging",
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
    title: "Experimentation Studio",
    subtitle: "A/B Testing · Causal Inference · Uplift Modeling",
    description:
      "Run experiments at scale, quantify true causal impact, and optimize product and business decisions with scientifically grounded uplift frameworks.",
    features: [
      "Multi-variant A/B testing engine",
      "Causal inference & counterfactual analysis",
      "Uplift modeling for targeted interventions",
      "Bayesian optimization for experiment design",
      "Real-time experiment monitoring dashboards",
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
    title: "Forecasting & Planning Studio",
    subtitle: "Demand · Supply · Scenario Planning · Budgeting",
    description:
      "Deliver highly accurate forecasts, simulate multi-scenario outcomes, and streamline planning cycles across demand, supply, and financial workflows.",
    features: [
      "ML-powered demand & supply forecasting",
      "Multi-scenario simulation engine",
      "Automated budget planning workflows",
      "Seasonal pattern recognition",
      "Collaborative planning dashboards",
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
    title: "Decision Automation Studio",
    subtitle: "Rules + ML · Workflows · Human-in-the-Loop",
    description:
      "Deploy intelligent, governed decisions using hybrid rules + machine learning systems—complete with approval loops, monitoring, and auditability.",
    features: [
      "Hybrid rules + ML decision engine",
      "Human-in-the-loop approval workflows",
      "Real-time decision monitoring & audit trails",
      "Low-code workflow builder",
      "A/B testing for decision policies",
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
    title: "Domain Intelligence Packs",
    subtitle: "Prebuilt Industry Assets · KPIs · Accelerators",
    description:
      "Jumpstart deployments with pre-configured analytics templates, domain-specific KPIs, and ready-made intelligence packs for industry verticals.",
    features: [
      "Pre-configured industry analytics templates",
      "Domain-specific KPI libraries",
      "Ready-made intelligence packs",
      "Customizable accelerator frameworks",
      "Plug-and-play data connectors",
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

  const words = ["Nexira OS", "Platform", "Studios"];
  const specialWords = ["Nexira OS"];

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

      {/* Dot grid */}
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-brand-purple"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-brand-purple tracking-wide">
              Product Suite
            </span>
          </motion.div>

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
            A comprehensive suite of intelligent studios designed to accelerate
            your data journey—from raw inputs to automated decisions.
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

/* ── 1. Data Studio: Dark Terminal / ETL Monitor ── */
const DataStudioVisual = () => {
  const logs = [
    { time: "12:04:01", src: "S3", tgt: "Snowflake", rows: "2.4M", status: "ok" },
    { time: "12:04:03", src: "Kafka", tgt: "Delta Lake", rows: "890K", status: "ok" },
    { time: "12:04:05", src: "Postgres", tgt: "BigQuery", rows: "1.1M", status: "ok" },
    { time: "12:04:06", src: "API", tgt: "Redis", rows: "340K", status: "warn" },
    { time: "12:04:08", src: "MongoDB", tgt: "Warehouse", rows: "3.2M", status: "ok" },
  ];

  return (
    <div className="min-h-[260px] sm:min-h-[320px] relative flex flex-col select-none">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0f0f1a] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] text-slate-500 ml-2 font-mono">
          nexira-etl-monitor
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

      {/* Terminal body */}
      <div className="bg-[#0f0f1a] flex-1 p-3 sm:p-4 font-mono text-[10px] sm:text-[11px] overflow-hidden">
        {/* Schema diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-3 text-slate-600"
        >
          <span className="text-violet-400">$</span> nexira pipeline status --live
        </motion.div>

        {/* table header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex gap-2 text-[9px] text-slate-600 mb-1.5 border-b border-slate-800 pb-1"
        >
          <span className="w-[60px]">TIME</span>
          <span className="w-[52px]">SOURCE</span>
          <span className="text-slate-700">→</span>
          <span className="w-[62px]">TARGET</span>
          <span className="flex-1 text-right">ROWS</span>
          <span className="w-[28px] text-right">ST</span>
        </motion.div>

        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.3 }}
            className="flex gap-2 items-center py-[3px] text-[9px] sm:text-[10px]"
          >
            <span className="w-[60px] text-slate-600 tabular-nums">{log.time}</span>
            <span className="w-[52px] text-cyan-400 truncate">{log.src}</span>
            <motion.span
              className="text-violet-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            >
              →
            </motion.span>
            <span className="w-[62px] text-amber-300 truncate">{log.tgt}</span>
            <span className="flex-1 text-right text-slate-300 tabular-nums">{log.rows}</span>
            <span className={`w-[28px] text-right font-bold ${log.status === "ok" ? "text-emerald-400" : "text-amber-400"}`}>
              {log.status === "ok" ? "✓" : "⚠"}
            </span>
          </motion.div>
        ))}

        {/* Summary line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="mt-3 pt-2 border-t border-slate-800"
        >
          <span className="text-emerald-400">✓</span>
          <span className="text-slate-500 ml-2">
            7.93M rows synced · 5 pipelines ·
          </span>
          <span className="text-emerald-400 ml-1">all healthy</span>
        </motion.div>

        {/* Blinking cursor */}
        <div className="mt-2 flex items-center">
          <span className="text-violet-400">$</span>
          <motion.span
            className="inline-block w-[7px] h-[13px] bg-violet-400 ml-2 rounded-[1px]"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
          />
        </div>
      </div>
    </div>
  );
};

/* ── 2. Experimentation Studio: Split-Screen A/B Lab with Bell Curves ── */
const ExperimentationVisual = () => (
  <div className="min-h-[260px] sm:min-h-[320px] relative flex flex-col select-none">
    {/* Lab header */}
    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <span className="text-[11px] font-bold text-secondary-700">
        Experiment Lab
      </span>
      <div className="ml-auto flex items-center gap-1">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[9px] text-emerald-600 font-medium">Running</span>
      </div>
    </div>

    {/* Split-screen A vs B phone mockups */}
    <div className="flex-1 p-4">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Control */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <div className="text-[9px] font-bold text-secondary-400 uppercase tracking-wider mb-2 text-center">
            Control (A)
          </div>
          <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-3 space-y-2">
            <div className="h-2.5 bg-secondary-200 rounded-full w-3/4" />
            <div className="h-2.5 bg-secondary-200 rounded-full w-full" />
            <div className="h-7 bg-secondary-300 rounded-lg mt-2" />
            <div className="h-2.5 bg-secondary-200 rounded-full w-1/2 mx-auto" />
          </div>
          <div className="text-center mt-2">
            <span className="text-lg font-bold text-secondary-600">3.2%</span>
            <div className="text-[8px] text-secondary-400">conversion</div>
          </div>
        </motion.div>

        {/* Variant */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="relative"
        >
          <div className="text-[9px] font-bold text-fuchsia-500 uppercase tracking-wider mb-2 text-center">
            Variant (B)
          </div>
          <div className="bg-fuchsia-50/50 border border-fuchsia-200 rounded-xl p-3 space-y-2">
            <div className="h-2.5 bg-fuchsia-200 rounded-full w-full" />
            <div className="h-7 bg-gradient-to-r from-fuchsia-300 to-purple-300 rounded-lg" />
            <div className="h-2.5 bg-fuchsia-200 rounded-full w-3/4" />
            <div className="h-2.5 bg-fuchsia-200 rounded-full w-1/2 mx-auto" />
          </div>
          <div className="text-center mt-2">
            <span className="text-lg font-bold text-fuchsia-600">5.1%</span>
            <div className="text-[8px] text-fuchsia-400">conversion</div>
          </div>
        </motion.div>
      </div>

      {/* SVG Bell Curves overlapping */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative h-16 sm:h-20"
      >
        <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
          {/* Control distribution */}
          <motion.path
            d="M10,48 Q40,48 60,40 Q80,10 100,5 Q120,10 140,40 Q160,48 190,48"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
          <motion.path
            d="M10,48 Q40,48 60,40 Q80,10 100,5 Q120,10 140,40 Q160,48 190,48"
            fill="url(#controlFill)"
            opacity="0.15"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          />
          {/* Variant distribution (shifted right, taller) */}
          <motion.path
            d="M30,48 Q55,48 75,38 Q95,5 120,2 Q145,5 165,38 Q185,48 200,48"
            fill="none"
            stroke="#d946ef"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          <motion.path
            d="M30,48 Q55,48 75,38 Q95,5 120,2 Q145,5 165,38 Q185,48 200,48"
            fill="url(#variantFill)"
            opacity="0.15"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
          />
          <defs>
            <linearGradient id="controlFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="variantFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[8px]">
          <span className="text-secondary-400 flex items-center gap-1">
            <span className="w-3 h-[2px] bg-secondary-400 inline-block" style={{ borderBottom: "2px dashed #a1a1aa", height: 0 }} />
            Control
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="text-fuchsia-500 font-bold"
          >
            +59% uplift ↑
          </motion.span>
          <span className="text-fuchsia-500 flex items-center gap-1">
            <span className="w-3 h-[2px] bg-fuchsia-500 inline-block" />
            Variant
          </span>
        </div>
      </motion.div>

      {/* Confidence meter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="mt-3 flex items-center gap-3 px-3 py-2 bg-emerald-50 border border-emerald-200/50 rounded-xl"
      >
        <div className="flex-1">
          <div className="text-[9px] text-emerald-700 font-bold mb-1">
            Statistical Confidence
          </div>
          <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "95.2%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
        <span className="text-sm font-bold text-emerald-600 tabular-nums">95.2%</span>
      </motion.div>
    </div>
  </div>
);

/* ── 3. Forecasting Studio: SVG Line Chart with Confidence Band ── */
const ForecastingVisual = () => {
  // Actual & forecast data normalized 0-100 for SVG
  const actualPts = [
    [0, 68], [20, 55], [40, 62], [60, 48], [80, 52], [100, 44], [120, 38], [140, 32],
  ];
  const forecastPts = [
    [140, 32], [160, 26], [180, 22], [200, 18], [220, 14], [240, 10],
  ];
  const toPath = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const actualPath = toPath(actualPts);
  const forecastPath = toPath(forecastPts);
  // Confidence band (upper/lower)
  const upper = forecastPts.map(([x, y]) => [x, y - 8]);
  const lower = [...forecastPts].reverse().map(([x, y]) => [x, y + 8]);
  const bandPath = `M${upper[0][0]},${upper[0][1]} ${upper.map(p => `L${p[0]},${p[1]}`).join(" ")} ${lower.map(p => `L${p[0]},${p[1]}`).join(" ")} Z`;

  return (
    <div className="min-h-[260px] sm:min-h-[320px] relative flex flex-col select-none">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-secondary-700">
            Demand Forecast
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {["Optimistic", "Base", "Conservative"].map((s, i) => (
            <span
              key={s}
              className={`text-[8px] px-2 py-0.5 rounded-md font-medium ${i === 1 ? "bg-brand-purple text-white" : "text-secondary-400 bg-secondary-50 border border-secondary-100"}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 gap-2 px-4 pt-3 pb-1">
        {[
          { label: "Next Qtr", val: "72K", icon: "📈" },
          { label: "MAPE", val: "5.8%", icon: "🎯" },
          { label: "Trend", val: "↑ Bull", icon: "📊" },
          { label: "Intervals", val: "±8%", icon: "📐" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="text-center px-1 py-1.5 bg-secondary-50/50 rounded-lg"
          >
            <div className="text-xs mb-0.5">{s.icon}</div>
            <div className="text-[10px] font-bold text-secondary-900 leading-none">{s.val}</div>
            <div className="text-[7px] text-secondary-400 mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* SVG line chart */}
      <div className="flex-1 px-3 py-2 relative">
        <svg viewBox="-5 -2 255 85" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#f1f5f9" strokeWidth="0.5" />
          ))}

          {/* Confidence band */}
          <motion.path
            d={bandPath}
            fill="#8B5CF6"
            opacity="0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />

          {/* Actual line */}
          <motion.path
            d={actualPath}
            fill="none"
            stroke="#6D28D9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Data points on actual */}
          {actualPts.map(([x, y], i) => (
            <motion.circle
              key={`ac-${i}`}
              cx={x}
              cy={y}
              r="3"
              fill="white"
              stroke="#6D28D9"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
            />
          ))}

          {/* Forecast line (dashed) */}
          <motion.path
            d={forecastPath}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="6,4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Forecast points */}
          {forecastPts.slice(1).map(([x, y], i) => (
            <motion.circle
              key={`fc-${i}`}
              cx={x}
              cy={y}
              r="2.5"
              fill="#8B5CF6"
              opacity="0.6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Divider line at handoff point */}
          <motion.line
            x1="140" y1="0" x2="140" y2="80"
            stroke="#6D28D9"
            strokeWidth="0.5"
            strokeDasharray="3,3"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          />
        </svg>

        {/* Labels */}
        <div className="absolute bottom-1 left-4 text-[8px] text-secondary-400">Jan '25</div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-brand-purple font-bold bg-brand-purple/5 px-2 py-0.5 rounded">
          ← Actual | Forecast →
        </div>
        <div className="absolute bottom-1 right-4 text-[8px] text-secondary-400">Jun '26</div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 px-4 pb-3 pt-0">
        <span className="flex items-center gap-1 text-[8px] text-secondary-500">
          <span className="w-4 h-[2px] bg-brand-purple rounded inline-block" /> Historical
        </span>
        <span className="flex items-center gap-1 text-[8px] text-secondary-500">
          <span className="w-4 h-[2px] bg-brand-accent rounded inline-block" style={{ borderBottom: "2px dashed #8B5CF6", height: 0 }} /> Forecast
        </span>
        <span className="flex items-center gap-1 text-[8px] text-secondary-500">
          <span className="w-3 h-2 bg-brand-purple/10 rounded inline-block" /> CI Band
        </span>
      </div>
    </div>
  );
};

/* ── 4. Decision Automation: Visual Flowchart with Branching ── */
const DecisionVisual = () => (
  <div className="min-h-[260px] sm:min-h-[320px] relative flex flex-col select-none">
    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0" />
        </svg>
      </div>
      <span className="text-[11px] font-bold text-secondary-700">
        Decision Flow Builder
      </span>
      <span className="ml-auto text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
        ⚡ Automated
      </span>
    </div>

    {/* SVG Flowchart */}
    <div className="flex-1 flex items-center justify-center p-4">
      <svg viewBox="0 0 260 220" className="w-full max-w-[280px] h-auto">
        {/* Connection lines (draw first, behind nodes) */}
        {/* Trigger → ML Model */}
        <motion.line
          x1="130" y1="28" x2="130" y2="58"
          stroke="#c4b5fd" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.3 }}
        />
        {/* ML Model → Decision diamond */}
        <motion.line
          x1="130" y1="82" x2="130" y2="108"
          stroke="#c4b5fd" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.3 }}
        />
        {/* Diamond → left (Reject) */}
        <motion.polyline
          points="112,130 60,130 60,160"
          fill="none" stroke="#fca5a5" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.3 }}
        />
        {/* Diamond → right (Approve) */}
        <motion.polyline
          points="148,130 200,130 200,160"
          fill="none" stroke="#86efac" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.3 }}
        />

        {/* Animated pulse traveling down the flow */}
        <motion.circle
          cx="130" cy="0" r="4" fill="#8B5CF6"
          animate={{ cy: [18, 70, 120, 200, 200], cx: [130, 130, 130, 200, 200], opacity: [1, 1, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
        />

        {/* 1. Trigger node (rounded rect) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <rect x="80" y="4" width="100" height="24" rx="12" fill="#6D28D9" />
          <text x="130" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
            ▶ New Request
          </text>
        </motion.g>

        {/* 2. ML Model node (rect) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <rect x="75" y="58" width="110" height="24" rx="6" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="130" y="74" textAnchor="middle" fill="#6D28D9" fontSize="9" fontWeight="600">
            🧠 ML Risk Score
          </text>
        </motion.g>

        {/* 3. Decision diamond */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <polygon points="130,108 148,130 130,152 112,130" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="130" y="134" textAnchor="middle" fill="#6D28D9" fontSize="8" fontWeight="700">
            Score?
          </text>
        </motion.g>

        {/* Labels on branches */}
        <motion.text
          x="78" y="145" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="700"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.3 }}
        >
          {"< 0.5"}
        </motion.text>
        <motion.text
          x="182" y="145" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="700"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.3 }}
        >
          {"≥ 0.5"}
        </motion.text>

        {/* 4a. Reject (left) */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <rect x="20" y="160" width="80" height="24" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
          <text x="60" y="176" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="600">
            ✋ Review
          </text>
        </motion.g>

        {/* 4b. Approve (right) */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <rect x="160" y="160" width="80" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
          <text x="200" y="176" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="600">
            ✓ Approve
          </text>
        </motion.g>

        {/* Bottom: Approve → Execute */}
        <motion.line
          x1="200" y1="184" x2="200" y2="202"
          stroke="#86efac" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.7, duration: 0.2 }}
        />
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          <rect x="165" y="202" width="70" height="18" rx="9" fill="#16a34a" />
          <text x="200" y="214" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">
            🚀 Execute
          </text>
        </motion.g>
      </svg>
    </div>

    {/* Stats bar */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.0, duration: 0.4 }}
      className="flex items-center justify-between mx-4 mb-3 px-3 py-2 bg-indigo-50 border border-indigo-200/50 rounded-xl"
    >
      <span className="text-[9px] font-bold text-indigo-700">Today</span>
      <div className="flex gap-3">
        <span className="text-[9px] text-indigo-600">
          <span className="font-bold">248</span> auto-approved
        </span>
        <span className="text-[9px] text-amber-600">
          <span className="font-bold">12</span> flagged
        </span>
      </div>
    </motion.div>
  </div>
);

/* ── 5. Domain Intelligence: Hexagonal Grid of Industry Packs ── */
const DomainIntelVisual = () => {
  const packs = [
    { name: "Retail", emoji: "🛒", kpis: 24, color: "from-rose-100 to-pink-100", border: "border-rose-200" },
    { name: "Healthcare", emoji: "🏥", kpis: 18, color: "from-sky-100 to-blue-100", border: "border-sky-200" },
    { name: "Finance", emoji: "💰", kpis: 31, color: "from-amber-100 to-yellow-100", border: "border-amber-200" },
    { name: "Manufact.", emoji: "🏭", kpis: 22, color: "from-emerald-100 to-green-100", border: "border-emerald-200" },
    { name: "Telecom", emoji: "📡", kpis: 16, color: "from-violet-100 to-purple-100", border: "border-violet-200" },
    { name: "Energy", emoji: "⚡", kpis: 20, color: "from-orange-100 to-red-100", border: "border-orange-200" },
  ];

  return (
    <div className="min-h-[260px] sm:min-h-[320px] relative flex flex-col select-none">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-secondary-700">
          Intelligence Packs
        </span>
        <span className="ml-auto text-[9px] font-bold text-fuchsia-600 bg-fuchsia-50 px-2 py-0.5 rounded-full">
          6 Verticals
        </span>
      </div>

      {/* Honeycomb-style grid */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-2">
        {/* Row 1 — 3 packs */}
        <div className="flex gap-2 sm:gap-3">
          {packs.slice(0, 3).map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-[72px] h-[82px] sm:w-[80px] sm:h-[90px] bg-gradient-to-br ${pack.color} ${pack.border} border rounded-2xl flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform duration-200`}
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <span className="text-xl sm:text-2xl">{pack.emoji}</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-secondary-700 leading-none">{pack.name}</span>
              <span className="text-[7px] text-secondary-500">{pack.kpis} KPIs</span>
            </motion.div>
          ))}
        </div>
        {/* Row 2 — 3 packs (offset for honeycomb) */}
        <div className="flex gap-2 sm:gap-3 -mt-3">
          {packs.slice(3, 6).map((pack, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-[72px] h-[82px] sm:w-[80px] sm:h-[90px] bg-gradient-to-br ${pack.color} ${pack.border} border rounded-2xl flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform duration-200`}
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <span className="text-xl sm:text-2xl">{pack.emoji}</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-secondary-700 leading-none">{pack.name}</span>
              <span className="text-[7px] text-secondary-500">{pack.kpis} KPIs</span>
            </motion.div>
          ))}
        </div>

        {/* Central connecting pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-fuchsia-400/30"
            animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.4 }}
        className="flex items-center justify-between mx-4 mb-3 px-3 py-2 bg-fuchsia-50 border border-fuchsia-200/50 rounded-xl"
      >
        <span className="text-[10px] font-bold text-fuchsia-700 flex items-center gap-1">
          📦 Marketplace
        </span>
        <div className="flex gap-2">
          <span className="text-[9px] text-fuchsia-600"><b>131</b> KPIs</span>
          <span className="text-[9px] text-fuchsia-600"><b>48</b> Templates</span>
          <span className="text-[9px] text-fuchsia-600"><b>6</b> Verticals</span>
        </div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────── Animated Product Visual ─────────────────────── */
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

/* ─────────────────────── Product Section ─────────────────────── */
const ProductSection = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={product.id}
      className="scroll-mt-24 py-16 sm:py-20 md:py-32 relative"
    >
      {!isEven && (
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/50 via-secondary-50/30 to-transparent pointer-events-none" />
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

/* ─────────────────────── Overview Cards Strip ─────────────────────── */
const OverviewStrip = () => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/40 to-white pointer-events-none" />

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
              Complete Suite
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900">
            Five Studios of{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
              Intelligence
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
                className="group relative bg-white rounded-2xl border border-secondary-100 p-6 sm:p-7 h-full overflow-hidden shadow-sm hover:shadow-xl hover:shadow-secondary-200/30 transition-shadow duration-300"
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

/* ─────────────────────── CTA Section ─────────────────────── */
const CTASection = () => (
  <section className="py-16 sm:py-20 md:py-32">
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
            Explore how Nexira OS Platform Studios can accelerate your analytics
            from raw data to automated, intelligent decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/company/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-purple rounded-full font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

/* ─────────────────────── Page ─────────────────────── */
const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
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
