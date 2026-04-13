import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection, SectionHeading } from "../ui";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const products = [
  {
    id: "data-studio",
    title: "Data Studio",
    tags: ["Decision Intelligence", "NLQ", "Scalable"],
    description:
      "Transform raw data into actionable insights. Go beyond 'what happened' to why it happened and what to do next.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    ),
  },
  {
    id: "experimentation-studio",
    title: "Experimentation Studio",
    tags: ["Business Context", "Semantic AI", "Tailored"],
    description:
      "CoreSight speaks your business language, aligning insights with your KPIs, metric definitions, and operating models.",
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
    id: "forecasting-studio",
    title: "Forecasting Studio",
    tags: ["Verifiable", "Audit Trail", "Deterministic"],
    description:
      "Confidently present AI-driven insights backed by traceable data logic and no black-box responses.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      />
    ),
  },
  {
    id: "decision-automation",
    title: "Decision Automation",
    tags: ["Proactive", "Anomaly Detection", "Real-time"],
    description:
      "Identify emerging risks and opportunities before they impact outcomes with built-in proactive intelligence.",
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
  },
  {
    id: "domain-intelligence",
    title: "Domain Intelligence",
    tags: ["Enterprise-Ready", "Secure", "Hybrid"],
    description:
      "Deploy securely on Cloud, on-prem, or hybrid with enterprise-grade governance and compliance built-in.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    ),
  },
];

const FlipCard = ({ product, isTouchDevice }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1200px] h-[340px] sm:h-[350px]"
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
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white mb-5 shadow-lg shadow-brand-purple/20">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {product.icon}
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">
              {product.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {product.tags.map((tag) => (
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
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.05] to-brand-accent/[0.03]" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent" />

          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white shadow-md shadow-brand-purple/15 flex-shrink-0">
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {product.icon}
                  </svg>
                </div>
                <h3 className="text-base font-display font-bold text-brand-purple">
                  {product.title}
                </h3>
              </div>

              <p className="text-secondary-600 leading-relaxed text-[13px] mb-4">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-brand-purple/5 text-brand-purple text-xs font-medium rounded-full border border-brand-purple/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`/products#${product.id}`}
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

const ProductStudios = () => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  return (
    <section className="py-24 md:py-32 glass-section relative overflow-hidden">
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
            badge="Our Products"
            title="Core Intelligence"
            highlight="Product Suites"
            description="Explore our modular suites designed to transform every stage of your data lifecycle into automated decision power."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <FlipCard product={product} isTouchDevice={isTouchDevice} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStudios;
