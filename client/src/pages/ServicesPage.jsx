import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

/* ─────────────────────── Service Data ─────────────────────── */
const services = [
  {
    id: "engineering",
    num: "01",
    title: "Engineering Services",
    description:
      "Build robust, scalable, and high-performance software solutions. From full-stack development to cloud architecture, we engineer systems that drive business success.",
    benefits: [
      "Custom software and application development",
      "Cloud infrastructure and migration (AWS, Azure, GCP)",
      "Microservices architecture and API design",
      "Legacy system modernization",
      "DevOps and CI/CD automation",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
    accent: "from-violet-600 to-indigo-500",
    accentLight: "from-violet-50 to-indigo-50",
  },
  {
    id: "gen-ai",
    num: "02",
    title: "Generative AI and Innovation",
    description:
      "Harness the power of Generative AI to revolutionize your business. We help you implement LLMs, RAG pipelines, and AI agents to automate workflows and create new value.",
    benefits: [
      "Custom LLM fine-tuning and deployment",
      "RAG (Retrieval-Augmented Generation) implementation",
      "AI agent development for process automation",
      "Generative design and content creation tools",
      "AI strategy and innovation workshops",
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
    id: "data-science",
    num: "03",
    title: "Data Science Consulting",
    description:
      "Transform your data into a strategic asset. Our expert consultants help you navigate the complexities of data analytics, from strategy formulation to model deployment.",
    benefits: [
      "Data strategy and roadmap development",
      "Advanced predictive modeling and forecasting",
      "Customer segmentation and behavior analysis",
      "Marketing mix modeling (MMM) and attribution",
      "Data governance and quality assurance",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    accent: "from-brand-purple to-brand-accent",
    accentLight: "from-brand-glow/30 to-brand-accent/10",
  },
  {
    id: "training",
    num: "04",
    title: "Enterprise Learning Program",
    description:
      "Empower your workforce and students with cutting-edge skills. We provide comprehensive training programs in data science, AI, and engineering tailored to your needs.",
    benefits: [
      "Customized corporate upskilling programs",
      "Hands-on workshops for AI and Machine Learning",
      "Executive training on Data & AI strategy",
      "Academic curriculum development and delivery",
      "Mentorship and project-based learning",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
    accent: "from-indigo-600 to-violet-500",
    accentLight: "from-indigo-50 to-violet-50",
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
      style={{ marginTop: "80px", minHeight: "calc(100vh - 80px)" }}
    >
      {/* Gradient blobs */}
      <motion.div
        className="absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-purple/[0.06] blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/[0.05] blur-[90px]"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[20vw] h-[20vw] rounded-full bg-brand-glow/[0.04] blur-[70px]"
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
      <div className="absolute inset-0 pointer-events-none">
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
        className="relative z-10 flex flex-col items-center justify-center px-6 py-24"
        style={{ y: textY, opacity, minHeight: "calc(100vh - 80px)" }}
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
          <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8 pb-1">
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
            className="text-lg sm:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed mb-10"
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
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border border-secondary-200 text-secondary-600 hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple/[0.04] transition-all duration-300"
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

/* ─────────────────────── Animated Service Visual ─────────────────────── */
const ServiceVisual = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Layered background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -6 : 6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: isEven ? -3 : 3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 bg-gradient-to-br ${service.accentLight} rounded-3xl`}
      />

      {/* Main visual container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl border border-secondary-100 shadow-lg shadow-secondary-200/20 p-10 md:p-14 overflow-hidden"
      >
        {/* Corner accent */}
        <div
          className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-32 h-32 bg-gradient-to-br ${service.accent} opacity-[0.06] rounded-full blur-2xl -translate-y-1/2 ${isEven ? "translate-x-1/2" : "-translate-x-1/2"}`}
        />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6D28D9 1px, transparent 1px), linear-gradient(to bottom, #6D28D9 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Central icon with orbit rings */}
        <div className="relative flex items-center justify-center h-56">
          {/* Outer orbit */}
          <motion.div
            className="absolute w-44 h-44 border border-dashed rounded-full opacity-20"
            style={{
              borderColor: index % 2 === 0 ? "#7C3AED" : "#C084FC",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner orbit */}
          <motion.div
            className="absolute w-28 h-28 border rounded-full opacity-15"
            style={{
              borderColor: index % 2 === 0 ? "#C084FC" : "#7C3AED",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting dots */}
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className={`absolute w-2.5 h-2.5 rounded-full bg-gradient-to-br ${service.accent}`}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12 + dot * 4,
                repeat: Infinity,
                ease: "linear",
                delay: dot * 2,
              }}
              style={{
                transformOrigin: `${22 + dot * 8}px 0px`,
                opacity: 0.4 - dot * 0.1,
              }}
            />
          ))}

          {/* Central icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.accent} rounded-2xl flex items-center justify-center shadow-xl`}
            style={{
              boxShadow: "0 20px 40px rgba(109, 40, 217, 0.2)",
            }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {service.icon}
            </svg>
          </motion.div>
        </div>

        {/* Service number */}
        <div className="absolute bottom-6 right-8 text-7xl font-display font-black text-secondary-100/60 select-none pointer-events-none">
          {service.num}
        </div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────── Service Section ─────────────────────── */
const ServiceSection = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section id={service.id} className="scroll-mt-24 py-24 md:py-32 relative">
      {/* Subtle background for alternating sections */}
      {!isEven && (
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/50 via-secondary-50/30 to-transparent pointer-events-none" />
      )}

      <div className="container-custom relative z-10">
        {/* Section number + title row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={isEven ? "" : "lg:order-2"}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6 leading-tight">
              {service.title}
            </h2>

            <p className="text-lg text-secondary-500 leading-relaxed mb-10">
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
const OverviewStrip = () => (
  <section className="py-20 bg-white relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/40 to-white pointer-events-none" />

    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-6">
          <span className="text-sm font-semibold text-brand-purple tracking-wide">
            End-to-End Analytics
          </span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900">
          Four Pillars of{" "}
          <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
            Excellence
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-secondary-100 p-7 h-full overflow-hidden shadow-sm hover:shadow-xl hover:shadow-secondary-200/30 transition-shadow duration-300"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />

              {/* Number */}
              <span
                className={`text-xs font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent tracking-wider mb-4 block`}
              >
                {service.num}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
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
              <div className="mt-5 flex items-center text-brand-purple opacity-0 group-hover:opacity-100 transition-all duration-300">
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

/* ─────────────────────── CTA Section ─────────────────────── */
const CTASection = () => (
  <section className="py-24 md:py-32">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-10 md:p-16 lg:p-20 text-center text-white shadow-2xl overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-lg rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">
            Let's Build Your Analytics Solution
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with us to unlock the full potential of your data and drive
            measurable business outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-purple rounded-full font-bold text-base shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
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
    <div className="min-h-screen bg-white">
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
