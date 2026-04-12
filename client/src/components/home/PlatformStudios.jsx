import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection, SectionHeading } from "../ui";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const studios = [
  {
    id: "engineering",
    title: "Custom AI Development",
    tags: ["Custom Models", "Security", "AI Pipelines", "Scale"],
    description:
      "Build scalable, compliant AI solutions with custom foundation models and generative features designed securely for your enterprise.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    tags: ["Report Generation", "Document Analysis", "RAG Pipelines", "Assistants"],
    description:
      "Solve complex business problems using the power of AI—trained directly on your company's proprietary data for rapid intelligence.",
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
    id: "data-science",
    title: "Advanced Machine Learning",
    tags: ["Predictive Analytics", "Forecasting", "Pattern Recognition", "Risk"],
    description:
      "Transform petabytes of raw data into strategic assets through precise predictive and prescriptive analytics tuned for your workflow.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    id: "training",
    title: "AI Consulting",
    tags: ["Readiness Audits", "Roadmap Planning", "Risk Mitigation", "Governance"],
    description:
      "Future-proof your business with AI-first strategies. We provide readiness audits and deliver comprehensive roadmaps.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
];

const FlipCard = ({ studio, isTouchDevice }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1200px] h-[320px]"
      onClick={isTouchDevice ? () => setFlipped((f) => !f) : undefined}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${!isTouchDevice ? "group-hover:[transform:rotateY(180deg)]" : ""}`}
        style={flipped ? { transform: "rotateY(180deg)" } : undefined}
      >
        {/* ===== FRONT FACE ===== */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl glow-card-static overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.03] to-brand-accent/[0.02]" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-purple/20">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {studio.icon}
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
              {studio.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {studio.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary-50 text-secondary-500 text-xs font-medium rounded-full border border-secondary-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {isTouchDevice && (
              <p className="mt-4 text-[10px] text-secondary-400 font-medium tracking-wide">
                Tap to explore →
              </p>
            )}
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl glow-card-static border-brand-purple/20 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.05] to-brand-accent/[0.03]" />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            <div>
              {/* Small icon + title row */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white shadow-md shadow-brand-purple/15 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {studio.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-display font-bold text-brand-purple">
                  {studio.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-secondary-600 leading-relaxed text-sm mb-5">
                {studio.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {studio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-brand-purple/5 text-brand-purple text-xs font-medium rounded-full border border-brand-purple/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={`/services#${studio.id}`}
              className="inline-flex items-center gap-2 text-brand-purple font-semibold text-sm mt-4 hover:gap-3 transition-all duration-300"
            >
              Learn more
              <svg
                className="w-4 h-4"
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
    </div>
  );
};

const PlatformStudios = () => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  return (
    <section className="py-24 md:py-32 glass-section relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-purple/[0.06] rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-accent/[0.05] rounded-full blur-[50px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Our Services"
            title="Core Enterprise"
            highlight="AI Services"
            description="A comprehensive suite of intelligent solutions designed to accelerate your data journey from raw inputs to automated decisions."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {studios.map((studio, index) => (
            <AnimatedSection key={studio.id} delay={index * 0.1}>
              <FlipCard studio={studio} isTouchDevice={isTouchDevice} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStudios;
