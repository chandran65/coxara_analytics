import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

const ExpertiseCard = ({ title, description, category, type, icon }) => {
  const isTechnology = type === "Technology";

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8 rounded-[32px] border-2 border-secondary-100 bg-white flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center text-brand-purple shadow-sm group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {icon}
          </svg>
        </div>
        <span
          className={`text-[13px] font-bold tracking-tight ${
            isTechnology ? "text-blue-500" : "text-blue-700"
          }`}
        >
          {type}
        </span>
      </div>

      <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">
        {title}
      </h3>
      <p className="text-secondary-500 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const CapabilitiesGrid = () => {
  const items = [
    {
      title: "Generative AI",
      category: "Technology",
      type: "Technology",
      description: "Solve problems with AI—trained on your company data.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Vision & Text AI",
      category: "Technology",
      type: "Technology",
      description:
        "Automate visual and text analysis instantly to unlock hidden insights.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      ),
    },
    {
      title: "Speech AI",
      category: "Technology",
      type: "Technology",
      description:
        "Convert voice to insights with recognition, modification, and analytics.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      ),
    },
    {
      title: "BFSI",
      category: "Industry",
      type: "Industry",
      description:
        "Predict, report, and mitigate risk with AI built for financial precision.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Healthcare & Life Sciences",
      category: "Industry",
      type: "Industry",
      description:
        "Accelerate drug discovery and transform patient care with personalized AI.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      ),
    },
    {
      title: "Retail & CPG",
      category: "Industry",
      type: "Industry",
      description:
        "Forecast demand and optimize paths for consumer and fast-moving goods.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      ),
    },
    {
      title: "High-Tech",
      category: "Industry",
      type: "Industry",
      description:
        "Scale innovation with agile intelligence and data-backed product strategies.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      ),
    },
    {
      title: "Manufacturing",
      category: "Industry",
      type: "Industry",
      description:
        "Spot defects and automate visual QA for smarter production lines.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      title: "Entertainment",
      category: "Industry",
      type: "Industry",
      description:
        "Engage and retain. Segment audiences and predict churn in real time.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Capabilities & Solutions"
            title="Empowering Enterprise With"
            highlight="Intelligent AI"
            description="Proven expertise across functional technologies and vertical industries, delivering end-to-end intelligence."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05} direction="up">
              <ExpertiseCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
