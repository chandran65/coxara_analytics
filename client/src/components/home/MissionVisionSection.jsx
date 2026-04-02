import { motion } from "framer-motion";
import { AnimatedSection } from "../ui";

const MissionVisionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-secondary-300 leading-relaxed">
                  Democratize advanced analytics, transform enterprise data into
                  predictive intelligence, and deliver measurable business
                  impact using AI-driven automation.
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/20 to-transparent rounded-bl-full" />
            </motion.div>
          </AnimatedSection>

          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-secondary-300 leading-relaxed">
                  To become the most trusted autonomous decision intelligence
                  platform enabling real-time, optimized business outcomes.
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-accent/20 to-transparent rounded-bl-full" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
