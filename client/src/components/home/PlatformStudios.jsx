import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

const studios = [
  {
    id: "data-studio",
    title: "Data Studio",
    tags: ["Connect", "Prepare", "Model", "Govern"],
    description:
      "Unify your data foundations with end-to-end pipelines, intelligent modeling frameworks, enterprise-quality governance, and accelerated data activation.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    id: "experimentation-studio",
    title: "Experimentation Studio",
    tags: ["A/B Testing", "Causal Inference", "Uplift Modeling"],
    description:
      "Run experiments at scale, quantify true causal impact, and optimize product and business decisions with scientifically grounded uplift frameworks.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "forecasting-studio",
    title: "Forecasting & Planning Studio",
    tags: ["Demand", "Supply", "Scenario Planning", "Budgeting"],
    description:
      "Deliver highly accurate forecasts, simulate multi-scenario outcomes, and streamline planning cycles across demand, supply, and financial workflows.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
  {
    id: "decision-automation",
    title: "Decision Automation Studio",
    tags: ["Rules + ML", "Workflows", "Human-in-the-Loop"],
    description:
      "Deploy intelligent, governed decisions using hybrid rules + machine learning systems—complete with approval loops, monitoring, and auditability.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
      </svg>
    ),
  },
  {
    id: "domain-intelligence",
    title: "Domain Intelligence Packs",
    tags: ["Prebuilt Industry Assets", "KPIs", "Accelerators"],
    description:
      "Jumpstart deployments with pre-configured analytics templates, domain-specific KPIs, and ready-made intelligence packs for industry verticals.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

const PlatformStudios = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Our Services"
            title="Nexira OS"
            highlight="Platform Studios"
            description="A comprehensive suite of intelligent studios designed to accelerate your data journey from raw inputs to automated decisions."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {studios.map((studio, index) => (
            <AnimatedSection key={studio.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full bg-white rounded-2xl p-8 border border-secondary-100 hover:border-brand-purple/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-purple/15 group-hover:scale-110 transition-transform duration-300">
                    {studio.icon}
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-brand-purple transition-colors duration-300">
                    {studio.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {studio.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary-50 text-secondary-500 text-xs font-medium rounded-full border border-secondary-100 group-hover:bg-brand-purple/5 group-hover:text-brand-purple group-hover:border-brand-purple/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {studio.description}
                  </p>

                  <a
                    href={`/services#${studio.id}`}
                    className="inline-flex items-center text-brand-purple font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStudios;
