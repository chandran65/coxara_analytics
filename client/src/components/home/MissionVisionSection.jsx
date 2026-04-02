import { motion } from "framer-motion";
import { AnimatedSection } from "../ui";

const MissionVisionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary-50 relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-secondary-200/80 bg-white overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-brand-purple/[0.06] transition-shadow duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center mb-8 shadow-lg shadow-brand-purple/20">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-secondary-500 leading-relaxed">
                  Democratize advanced analytics, transform enterprise data into
                  predictive intelligence, and deliver measurable business
                  impact using AI-driven automation.
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/[0.06] to-transparent rounded-bl-full" />
            </motion.div>
          </AnimatedSection>

          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-secondary-200/80 bg-white overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-brand-purple/[0.06] transition-shadow duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-glow flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/20">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-secondary-500 leading-relaxed">
                  To become the most trusted autonomous decision intelligence
                  platform enabling real-time, optimized business outcomes.
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-accent/[0.06] to-transparent rounded-bl-full" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
