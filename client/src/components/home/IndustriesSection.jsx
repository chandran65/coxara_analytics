import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedSection, SectionHeading } from "../ui";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const FlipCard = ({ industry, isTouchDevice }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1200px] h-[280px]"
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

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-purple/20">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {industry.icon}
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-secondary-900">
              {industry.title}
            </h3>

            {isTouchDevice && (
              <p className="mt-3 text-[10px] text-secondary-400 font-medium tracking-wide">
                Tap to explore →
              </p>
            )}
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl glow-card-static border-brand-purple/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.05] to-brand-accent/[0.03]" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white shadow-md shadow-brand-purple/15 flex-shrink-0 mb-4">
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {industry.icon}
              </svg>
            </div>
            <h3 className="text-base font-display font-bold text-brand-purple mb-3">
              {industry.title}
            </h3>
            <p className="text-secondary-600 leading-relaxed text-[13px]">
              {industry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustriesSection = () => {
  const navigate = useNavigate();
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  const industries = [
    {
      id: 1,
      title: "CPG",
      description:
        "Optimize product life cycles, demand forecasting, and consumer insights for high-velocity goods.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      ),
    },
    {
      id: 2,
      title: "Retail",
      description:
        "Personalize customer journeys and optimize multi-channel inventory with real-time analytics.",
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
      id: 3,
      title: "Pharma & Life Science",
      description:
        "Accelerate drug discovery, clinical trials, and patient outcomes with AI-driven research.",
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
      id: 4,
      title: "Entertainment",
      description:
        "Segment audiences and predict churn to drive engagement across digital media platforms.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
    {
      id: 5,
      title: "Manufacturing",
      description:
        "Predictive maintenance and visual QA for smarter, more autonomous production lines.",
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
      id: 6,
      title: "High-Tech",
      description:
        "Scale innovation with agile intelligence and data-backed product development strategies.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 glass-section relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Color-bleed orbs */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-brand-purple/[0.06] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-brand-accent/[0.05] rounded-full blur-[50px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Industries We Serve"
            title="Expertise Across"
            highlight="Multiple Sectors"
            description="Delivering tailored data science solutions that address unique challenges in diverse industries worldwide."
          />
        </AnimatedSection>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.id} delay={index * 0.08}>
              <FlipCard industry={industry} isTouchDevice={isTouchDevice} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-lg text-secondary-500 mb-6">
              Don't see your industry? We work with businesses across all
              sectors.
            </p>
            <button
              onClick={() => navigate("/company/contact")}
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              <span>Discuss Your Project</span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustriesSection;
