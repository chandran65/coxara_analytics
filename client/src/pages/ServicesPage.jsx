import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─────────────────────── Service Data ─────────────────────── */
const services = [
  {
    id: "gen-ai",
    num: "01",
    title: "Generative AI & LLMs",
    description:
      "Harness the power of Custom Foundation Models and RAG systems trained on your proprietary data to drive content generation and knowledge discovery at scale.",
    benefits: [
      "Custom Foundation Model Fine-tuning",
      "Retrieval-Augmented Generation (RAG)",
      "Automated Knowledge Discovery Systems",
      "Proprietary Content Generation Engines",
      "Enterprise-Grade Security & Compliance",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    accent: "from-purple-600 to-fuchsia-500",
    accentLight: "from-purple-50 to-fuchsia-50",
  },
  {
    id: "vision-ai",
    num: "02",
    title: "Computer Vision & Intelligence",
    description:
      "Transform visual data into real-time patterns. From facial analysis to manufacturing defect detection, we build vision systems that see beyond the surface.",
    benefits: [
      "Real-time Pattern Recognition",
      "Visual Quality Assurance (VQA)",
      "Surveillance & Traffic Monitoring",
      "Medical Image Analysis & Diagnosis",
      "Behavioral & Crowd Intelligence",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    ),
    accent: "from-blue-600 to-cyan-500",
    accentLight: "from-blue-50 to-cyan-50",
  },
  {
    id: "conversational-ai",
    num: "03",
    title: "Conversational AI Systems",
    description:
      "Build context-aware AI assistants and voice-to-insight platforms that communicate in enterprise-specific terminology and multi-regional languages.",
    benefits: [
      "LLM-powered Contextual Chatbots",
      "Indic Language Voice Recognition",
      "Voice-to-Insights Analytics (Roxbee)",
      "Automated Transcription & Summarization",
      "Sentimental & Intent Analysis",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    ),
    accent: "from-brand-purple to-brand-accent",
    accentLight: "from-brand-glow/30 to-brand-accent/10",
  },
  {
    id: "strategic-consulting",
    num: "04",
    title: "Strategic AI Transformation",
    description:
      "Future-proof your business with AI Business Ally strategies. We provide readiness audits, identify high-value use cases, and deliver roadmaps for autonomous growth.",
    benefits: [
      "Enterprise AI Readiness Audits",
      "High-Value Use Case Identification",
      "AI Governance & Compliance Frameworks",
      "Custom Enterprise AI Roadmap",
      "Managed AI Deployment & Scaling",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    accent: "from-violet-600 to-indigo-500",
    accentLight: "from-violet-50 to-indigo-50",
  },
];

/* ─────────────────────── Hero ─────────────────────── */
const ServicesHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Analytical", "Services"];
  const specialWords = ["Analytical", "Services"];

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
              What We Offer
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
            From data collection to actionable insights, we provide
            comprehensive analytics services that empower your business to make
            informed decisions and drive measurable results.
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
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-secondary-200 text-secondary-600 hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple/[0.04] transition-all duration-300"
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
/* ─────────────────────── Service-Specific Visuals ─────────────────────── */

/* ── Engineering: Custom AI Development — Animated Architecture ── */
const EngineeringVisual = () => {
  const layers = [
    { label: "Data Layer", items: ["Ingestion", "ETL", "Lake"], color: "#3b82f6", y: 12 },
    { label: "Model Layer", items: ["Training", "Fine-tune", "Eval"], color: "#8B5CF6", y: 52 },
    { label: "Serve Layer", items: ["API", "Monitor", "Scale"], color: "#06b6d4", y: 92 },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      {/* IDE header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#1a1b2e] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] text-slate-500 ml-2 font-mono">ai-architecture.yml</span>
        <div className="ml-auto flex gap-2">
          <motion.span className="text-[8px] px-2 py-0.5 bg-violet-500/20 text-violet-300 rounded font-mono" animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Infinity }}>v3.1.0</motion.span>
          <span className="text-[8px] px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono">PROD</span>
        </div>
      </div>

      <div className="bg-[#1a1b2e] flex-1 p-4 relative">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        {/* Architecture SVG */}
        <svg viewBox="0 0 240 130" className="w-full h-auto relative">
          {/* Connecting lines between layers */}
          {[0, 1].map((li) => (
            <motion.g key={li}>
              {[0, 1, 2].map((ci) => (
                <motion.line key={ci}
                  x1={40 + ci * 80} y1={layers[li].y + 28}
                  x2={40 + ci * 80} y2={layers[li + 1].y}
                  stroke={layers[li].color} strokeWidth="1" strokeDasharray="3,3" opacity="0.4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.5 + li * 0.3 + ci * 0.1, duration: 0.5 }}
                />
              ))}
            </motion.g>
          ))}

          {/* Data flow particles */}
          {[0, 1, 2].map((pi) => (
            <motion.circle key={pi} r="2" fill="#a78bfa"
              animate={{
                cx: [40 + pi * 80, 40 + pi * 80, 40 + ((pi + 1) % 3) * 80],
                cy: [layers[0].y + 14, layers[1].y + 14, layers[2].y + 14],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: pi * 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Layer groups */}
          {layers.map((layer, li) => (
            <motion.g key={li} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + li * 0.2, duration: 0.5 }}>
              {/* Layer background */}
              <rect x="4" y={layer.y} width="232" height="30" rx="8" fill={layer.color} opacity="0.08" stroke={layer.color} strokeWidth="0.5" strokeOpacity="0.2" />

              {/* Layer label */}
              <text x="14" y={layer.y + 11} fill={layer.color} fontSize="7" fontWeight="700" opacity="0.7">{layer.label}</text>

              {/* Items as boxes */}
              {layer.items.map((item, ci) => (
                <motion.g key={ci}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + li * 0.2 + ci * 0.1, type: "spring", stiffness: 200 }}
                >
                  <rect x={15 + ci * 76} y={layer.y + 15} width="60" height="12" rx="3" fill={layer.color} opacity="0.15" stroke={layer.color} strokeWidth="0.7" strokeOpacity="0.4" />
                  <text x={45 + ci * 76} y={layer.y + 23} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="600" opacity="0.9">{item}</text>
                </motion.g>
              ))}
            </motion.g>
          ))}
        </svg>

        {/* Animated metrics */}
        <div className="flex gap-2 mt-3">
          {[
            { l: "Models", v: "12", c: "text-violet-300", icon: "◆" },
            { l: "Pipelines", v: "8", c: "text-cyan-300", icon: "⟁" },
            { l: "Latency", v: "<50ms", c: "text-emerald-300", icon: "⚡" },
            { l: "Uptime", v: "99.9%", c: "text-amber-300", icon: "●" },
          ].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 + i * 0.08, type: "spring" }}
              className="flex-1 text-center py-1.5 bg-white/[0.03] border border-white/5 rounded-lg hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className={`text-[10px] font-bold ${m.c}`}>{m.icon} {m.v}</div>
              <div className="text-[7px] text-slate-500">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Gen AI: RAG Pipeline Visualization ── */
const GenAIVisual = () => {
  const ragSteps = [
    { label: "Documents", detail: "PDFs, reports, knowledge base", icon: "📄", color: "bg-amber-50 border-amber-200 text-amber-700", accent: "bg-amber-400" },
    { label: "Embedding", detail: "Vector encoding & chunking", icon: "🔢", color: "bg-violet-50 border-violet-200 text-violet-700", accent: "bg-violet-400" },
    { label: "Retrieval", detail: "Semantic search across 4.2M vectors", icon: "🔍", color: "bg-blue-50 border-blue-200 text-blue-700", accent: "bg-blue-400" },
    { label: "Generation", detail: "LLM synthesis with cited sources", icon: "✨", color: "bg-purple-50 border-purple-200 text-purple-700", accent: "bg-purple-400" },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-secondary-700">RAG Pipeline</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-[9px] text-emerald-600 font-medium">Active</span>
        </div>
      </div>

      <div className="flex-1 p-4 relative">
        {/* Background flow particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} className="absolute w-6 h-6 rounded-full"
            style={{ background: `radial-gradient(circle, ${['#f59e0b', '#8B5CF6', '#3b82f6', '#a855f7'][i]}15, transparent)`, left: `${20 + i * 20}%` }}
            animate={{ y: [-20, 250], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}

        {/* RAG flow steps */}
        <div className="space-y-2 relative">
          {ragSteps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`flex items-center gap-3 px-3 py-2.5 ${step.color} border rounded-xl relative overflow-hidden group hover:shadow-md transition-all duration-300`}>
                {/* Animated accent bar */}
                <motion.div className={`absolute left-0 top-0 bottom-0 w-[3px] ${step.accent}`}
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
                  style={{ transformOrigin: "top" }}
                />
                <motion.span className="text-base flex-shrink-0"
                  whileInView={{ rotate: [0, -10, 10, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.18, duration: 0.4 }}
                >{step.icon}</motion.span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold">{step.label}</div>
                  <div className="text-[9px] opacity-70 truncate">{step.detail}</div>
                </div>
                {i < ragSteps.length - 1 && (
                  <motion.div className="flex flex-col gap-0.5 text-[8px] opacity-40"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                  >
                    <span>↓</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Generated output with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 px-3 py-2.5 bg-purple-50 border border-purple-200 rounded-xl relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent"
            animate={{ x: [-200, 300] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
          />
          <div className="relative">
            <div className="text-[9px] font-bold text-purple-700 mb-1 flex items-center gap-1">
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}>✨</motion.span>
              Generated Response
            </div>
            <motion.div className="text-[9px] text-purple-600 leading-relaxed"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 1.5 }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              "Based on Q4 reports, retention improved by 12%..."
            </motion.div>
            <div className="flex gap-2 mt-1.5">
              <motion.span className="text-[8px] text-purple-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }}>📎 3 sources cited</motion.span>
              <motion.span className="text-[8px] text-emerald-500" initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 2.0, type: "spring" }}>✓ Hallucination check passed</motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ── Data Science: Neural Network + Prediction Visual ── */
const DataScienceVisual = () => {
  const layers = [
    { nodes: 3, x: 30, label: "Input" },
    { nodes: 5, x: 85, label: "Hidden 1" },
    { nodes: 6, x: 140, label: "Hidden 2" },
    { nodes: 2, x: 210, label: "Output" },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-secondary-100">
        <div className="flex items-center gap-2">
          <motion.div className="w-2 h-2 rounded-full bg-brand-purple"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] font-bold text-secondary-400 uppercase tracking-wider">Neural Network</span>
        </div>
        <div className="flex gap-1">
          {["Train", "Validate", "Predict"].map((t, i) => (
            <motion.span key={t}
              className={`text-[9px] px-2 py-0.5 rounded-md font-medium ${i === 2 ? "bg-brand-purple text-white" : "text-secondary-400 bg-secondary-50"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, type: "spring" }}
            >{t}</motion.span>
          ))}
        </div>
      </div>

      {/* Network SVG */}
      <div className="flex-1 px-3 py-3 relative">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div className="w-32 h-32 rounded-full bg-brand-purple/[0.04]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <svg viewBox="0 0 240 130" className="w-full h-auto relative">
          <defs>
            <linearGradient id="connGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Connections */}
          {layers.slice(0, -1).map((layer, li) => {
            const nextLayer = layers[li + 1];
            const connections = [];
            for (let a = 0; a < layer.nodes; a++) {
              for (let b = 0; b < nextLayer.nodes; b++) {
                const y1 = 10 + (a / (layer.nodes - 1 || 1)) * 100;
                const y2 = 10 + (b / (nextLayer.nodes - 1 || 1)) * 100;
                connections.push(
                  <motion.line key={`${li}-${a}-${b}`}
                    x1={layer.x} y1={y1} x2={nextLayer.x} y2={y2}
                    stroke="url(#connGradient)" strokeWidth="0.7"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.15 + li * 0.12 + a * 0.03 }}
                  />
                );
              }
            }
            return connections;
          })}

          {/* Multiple signal pulses */}
          {[
            { path: [0, 1, 2, 3], cy: [30, 55, 35, 40], color: "#8B5CF6", delay: 0 },
            { path: [0, 1, 2, 3], cy: [60, 30, 80, 70], color: "#a78bfa", delay: 1 },
            { path: [0, 1, 2, 3], cy: [80, 85, 55, 40], color: "#c084fc", delay: 2 },
          ].map((pulse, pi) => (
            <motion.circle key={pi} r="3" fill={pulse.color} opacity="0.7"
              animate={{
                cx: pulse.path.map(i => layers[i].x),
                cy: pulse.cy,
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: pulse.delay, ease: "easeInOut" }}
            />
          ))}

          {/* Nodes with activation glow */}
          {layers.map((layer, li) =>
            Array.from({ length: layer.nodes }).map((_, ni) => {
              const y = 10 + (ni / (layer.nodes - 1 || 1)) * 100;
              return (
                <motion.g key={`n-${li}-${ni}`}>
                  {/* Activation glow */}
                  <motion.circle cx={layer.x} cy={y} r="10" fill="#8B5CF6" opacity="0"
                    animate={{ opacity: [0, 0.15, 0], r: [8, 14, 8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: li * 0.3 + ni * 0.15 }}
                  />
                  <motion.circle cx={layer.x} cy={y} r="6" fill="white" stroke="#6D28D9" strokeWidth="2"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + li * 0.1 + ni * 0.04, type: "spring", stiffness: 250 }}
                  />
                </motion.g>
              );
            })
          )}

          {/* Labels */}
          {layers.map((layer, i) => (
            <motion.text key={i} x={layer.x} y={125} textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="600"
              initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }}
            >{layer.label}</motion.text>
          ))}
        </svg>
      </div>

      {/* Prediction metrics with animated bars */}
      <div className="grid grid-cols-3 gap-2 px-4 pb-3">
        {[
          { label: "Accuracy", val: "96.8%", pct: 96.8, color: "bg-emerald-500", text: "text-emerald-600" },
          { label: "F1 Score", val: "0.94", pct: 94, color: "bg-brand-purple", text: "text-brand-purple" },
          { label: "Predictions", val: "1.2M/d", pct: 80, color: "bg-indigo-500", text: "text-indigo-600" },
        ].map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
            className="text-center py-2 bg-secondary-50 rounded-xl border border-secondary-100"
          >
            <div className={`text-[11px] font-bold ${s.text}`}>{s.val}</div>
            <div className="text-[7px] text-secondary-400 mb-1">{s.label}</div>
            <div className="mx-2 h-1 bg-secondary-100 rounded-full overflow-hidden">
              <motion.div className={`h-full ${s.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 + i * 0.12, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── Training/Consulting: Strategic Roadmap Timeline ── */
const TrainingVisual = () => {
  const phases = [
    { title: "AI Readiness Audit", duration: "Week 1-2", status: "complete", items: ["Data assessment", "Infra review", "Gap analysis"], color: "from-violet-500 to-purple-500", pct: 100 },
    { title: "Use Case Discovery", duration: "Week 3-4", status: "complete", items: ["Opportunity mapping", "ROI estimation", "Prioritization"], color: "from-purple-500 to-fuchsia-500", pct: 100 },
    { title: "Strategy & Roadmap", duration: "Week 5-8", status: "active", items: ["Architecture", "Impl. plan", "Governance"], color: "from-fuchsia-500 to-pink-500", pct: 65 },
    { title: "Execution Support", duration: "Week 9+", status: "upcoming", items: ["Upskilling", "Pilot", "Change mgmt"], color: "from-indigo-500 to-violet-500", pct: 0 },
  ];

  return (
    <div className="min-h-[280px] sm:min-h-[350px] relative flex flex-col select-none overflow-hidden">
      <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border-b border-secondary-100">
        <motion.div className="w-2 h-2 rounded-full bg-brand-purple"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[10px] font-bold text-secondary-400 uppercase tracking-wider">Transformation Roadmap</span>
        <span className="ml-auto text-[9px] font-bold text-brand-purple bg-brand-purple/[0.07] px-2 py-0.5 rounded-full">4 Phases</span>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 py-3 space-y-2.5 relative">
        {/* Connecting line on left */}
        <motion.div className="absolute left-[30px] top-3 w-[2px] bg-gradient-to-b from-violet-300 via-fuchsia-300 to-indigo-200"
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 1.5rem)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        />

        {phases.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 relative"
          >
            <motion.div
              className={`w-8 h-8 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0 relative z-10`}
              whileInView={phase.status === "active" ? { scale: [1, 1.1, 1] } : {}}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1, repeat: phase.status === "active" ? Infinity : 0, repeatDelay: 2 }}
            >
              {phase.status === "complete" ? (
                <motion.span initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.15, type: "spring" }}>✓</motion.span>
              ) : phase.status === "active" ? (
                <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>▶</motion.span>
              ) : (i + 1)}
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold text-secondary-800">{phase.title}</span>
                <motion.span
                  className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${
                    phase.status === "complete" ? "bg-emerald-50 text-emerald-600" :
                    phase.status === "active" ? "bg-violet-50 text-violet-600" :
                    "bg-secondary-50 text-secondary-400"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
                >{phase.duration}</motion.span>
              </div>
              {/* Progress bar */}
              <div className="h-1 bg-secondary-100 rounded-full mb-1.5 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${phase.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${phase.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {phase.items.map((item, j) => (
                  <motion.span key={j}
                    initial={{ opacity: 0, scale: 0.7, y: 3 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.15 + j * 0.06, type: "spring", stiffness: 200 }}
                    className="text-[8px] px-2 py-0.5 bg-secondary-50 border border-secondary-100 rounded text-secondary-500 hover:bg-secondary-100 transition-colors duration-200"
                  >{item}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROI callout */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
        className="mx-4 mb-3 flex items-center gap-2 px-3 py-2 bg-indigo-50 border border-indigo-200/50 rounded-xl overflow-hidden relative"
      >
        <motion.div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-violet-400"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
        />
        <motion.span className="text-sm" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>🎯</motion.span>
        <span className="text-[10px] font-bold text-indigo-700">Avg. 6x ROI within first year</span>
      </motion.div>
    </div>
  );
};
/* ─────────────────────── Animated Service Visual ─────────────────────── */
const ServiceVisual = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const visualMap = {
    engineering: <EngineeringVisual />,
    "gen-ai": <GenAIVisual />,
    "data-science": <DataScienceVisual />,
    training: <TrainingVisual />,
  };

  return (
    <div className="relative py-2">
      {/* Tilted accent background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -4 : 4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: isEven ? -2 : 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 bg-gradient-to-br ${service.accentLight} rounded-3xl`}
      />

      {/* Main visual card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl border border-secondary-100 shadow-lg shadow-secondary-200/20 overflow-hidden"
      >
        {visualMap[service.id]}
      </motion.div>
    </div>
  );
};

/* ─────────────────────── Service Section ─────────────────────── */
const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-32 ${isEven ? 'glass-section' : 'glass-section-alt'}`}
    >
      {/* Subtle background for alternating sections */}
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
        {/* Section number + title row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16"
        >
          <span
            className={`text-sm font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent tracking-wider`}
          >
            {service.num}
          </span>
          <div
            className={`h-[1px] w-12 bg-gradient-to-r ${service.accent} opacity-30`}
          />
          <span className="text-sm font-semibold text-secondary-400 uppercase tracking-widest">
            Service
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={isEven ? "" : "lg:order-2"}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4 sm:mb-6 leading-tight">
              {service.title}
            </h2>

            <p className="text-base sm:text-lg text-secondary-500 leading-relaxed mb-8 sm:mb-10">
              {service.description}
            </p>

            {/* Benefits as a timeline-style list */}
            <div className="relative pl-6 border-l-2 border-secondary-100 space-y-5">
              {service.benefits.map((benefit, idx) => (
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
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br ${service.accent} ring-4 ring-white shadow-sm`}
                  />
                  <p className="text-secondary-700 font-medium leading-relaxed group-hover:text-secondary-900 transition-colors duration-200">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <div className={isEven ? "" : "lg:order-1"}>
            <ServiceVisual service={service} index={index} />
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
    <section className="glass-section py-14 sm:py-16 md:py-20">

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
              End-to-End Analytics
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900">
            Four Pillars of{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
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
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} ${isTouchDevice ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                />

                {/* Number */}
                <span
                  className={`text-xs font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent tracking-wider mb-4 block`}
                >
                  {service.num}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center text-white mb-5 shadow-md ${isTouchDevice ? "" : "group-hover:scale-110 group-hover:rotate-3"} transition-all duration-300`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-secondary-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-secondary-500 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Arrow */}
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
  <section className="glass-section py-16 sm:py-20 md:py-32">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 lg:p-20 text-center text-white shadow-2xl overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />

        {/* Floating shapes */}
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
            Let's Build Your Analytics Solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with us to unlock the full potential of your data and drive
            measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/company/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-brand-purple rounded-full font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started
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
              to="/resources"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────── Page ─────────────────────── */
const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <OverviewStrip />
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
