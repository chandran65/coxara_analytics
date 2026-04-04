import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "../ui";

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        style={{ y: orbY1 }}
        className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/[0.04] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/[0.03] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-secondary-200/80 bg-white overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-brand-purple/[0.08] hover:border-brand-purple/20 transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.03] via-transparent to-brand-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center mb-8 shadow-lg shadow-brand-purple/20"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4 group-hover:text-brand-purple transition-colors duration-300">
                  Our Mission
                </h3>
                <motion.p
                  className="text-lg text-secondary-500 leading-relaxed group-hover:text-secondary-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Democratize advanced analytics, transform enterprise data into
                  predictive intelligence, and deliver measurable business
                  impact using AI-driven automation.
                </motion.p>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/[0.06] to-transparent rounded-bl-full group-hover:w-32 group-hover:h-32 group-hover:from-brand-purple/[0.1] transition-all duration-500" />
              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          </AnimatedSection>

          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full p-8 md:p-10 rounded-2xl border border-secondary-200/80 bg-white overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-brand-accent/[0.08] hover:border-brand-accent/20 transition-all duration-500"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.03] via-transparent to-brand-purple/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-glow flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/20"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  Our Vision
                </h3>
                <motion.p
                  className="text-lg text-secondary-500 leading-relaxed group-hover:text-secondary-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  To become the most trusted autonomous decision intelligence
                  platform enabling real-time, optimized business outcomes.
                </motion.p>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-accent/[0.06] to-transparent rounded-bl-full group-hover:w-32 group-hover:h-32 group-hover:from-brand-accent/[0.1] transition-all duration-500" />
              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent to-brand-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
