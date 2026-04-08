import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Hero ─── */
const SolutionsHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Analytics", "Solutions"];
  const specialWords = ["Solutions"];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-white"
      style={{ marginTop: "80px", minHeight: "min(calc(100vh - 80px), 700px)" }}
    >
      <motion.div
        className="hidden sm:block absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-purple/[0.06] blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/[0.05] blur-[90px]"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[8%] w-12 h-12 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        style={{ y: textY, opacity, minHeight: "min(calc(100vh - 80px), 700px)" }}
      >
        <div className="text-center max-w-5xl mx-auto">
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
              Proven Solutions
            </span>
          </motion.div>

          <h1 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 mb-6 sm:mb-8 pb-1">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
            Innovative solutions designed to solve your toughest business
            challenges with precision and expertise.
          </motion.p>

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
        </div>
      </motion.div>
    </section>
  );
};

const SolutionsPage = () => {
  const solutions = [
    {
      id: "supply-chain",
      title: "Supply Chain Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16v1a3 3 0 003 3h3m0 0a1 1 0 001-1v-5a3 3 0 00-3-3h-3m-6 0a1 1 0 00-1-1V7a2 2 0 012-2h2a2 2 0 012 2v6h3m-3-6V4m-6 0v3"
        />
      ),
      description:
        "Optimize supply chain operations and inventory levels. Reduce costs, improve efficiency, and ensure product availability with predictive analytics.",
      capabilities: [
        "Demand forecasting and planning",
        "Inventory optimization",
        "Supplier risk analysis",
        "Logistics and route optimization",
        "Network design and planning",
      ],
    },
    {
      id: "financial",
      title: "Financial Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Gain deep visibility into your financial health. Streamline reporting, improve forecasting accuracy, and drive profitability with advanced financial insights.",
      capabilities: [
        "Cash flow forecasting",
        "Profitability analysis",
        "Expense management and optimization",
        "Budget variance analysis",
        "Financial risk modeling",
      ],
    },
    {
      id: "hr",
      title: "HR Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Transform talent management with data-driven insights. Improve recruitment, retention, and workforce planning to build a high-performing organization.",
      capabilities: [
        "Attrition prediction and retention",
        "Talent acquisition analytics",
        "Performance analysis",
        "Workforce planning",
        "Diversity and inclusion metrics",
      ],
    },
    {
      id: "risk",
      title: "Risk Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
      description:
        "Proactively identify and mitigate business risks. Leverage AI to detect anomalies, assess credit risk, and ensure regulatory compliance.",
      capabilities: [
        "Credit risk modeling",
        "Fraud detection and prevention",
        "Operational risk assessment",
        "Regulatory compliance monitoring",
        "Scenario stress testing",
      ],
    },
    {
      id: "marketing",
      title: "Marketing Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      ),
      description:
        "Maximize marketing ROI and customer engagement. Understand campaign performance, attribution, and customer journeys to optimize spend.",
      capabilities: [
        "Marketing mix modeling",
        "Campaign attribution",
        "Customer journey mapping",
        "Sentiment analysis",
        "Churn prediction",
      ],
    },
    {
      id: "sales",
      title: "Sales Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "Accelerate revenue growth with actionable sales insights. Optimize pipelines, forecast accurately, and empower your sales team to close more deals.",
      capabilities: [
        "Sales forecasting",
        "Pipeline health analysis",
        "Win/loss analysis",
        "Territory planning",
        "Sales performance management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SolutionsHero />

      {/* ── Introduction ── */}
      <section className="glass-section py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full text-sm font-semibold text-brand-purple mb-4">
              Proven Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Purpose-Built{" "}
              <span className="gradient-text">Analytics Solutions</span>
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Our battle-tested solutions address specific business challenges
              with precision and expertise. Each solution is designed to deliver
              immediate value while supporting long-term strategic objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="glass-section-alt py-20 md:py-28">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.012] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6D28D9 0.5px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-purple/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glow-card rounded-2xl overflow-hidden scroll-mt-20 group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {solution.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="border-t border-secondary-100 pt-6">
                    <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-4">
                      Key Capabilities
                    </p>
                    <ul className="space-y-2">
                      {solution.capabilities.map((capability, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-secondary-700"
                        >
                          <svg
                            className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="glass-section py-20 md:py-28">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                Find the Right Solution for You
              </h2>
              <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                Not sure which solution fits your needs? Let's discuss your
                challenges and find the perfect analytics solution.
              </p>
              <a
                href="/company/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Speak with an Expert</span>
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
