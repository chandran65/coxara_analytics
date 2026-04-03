import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "../ui";

const FeaturedCaseStudy = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        style={{ y: orbY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/[0.03] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="space-y-8">
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                Featured Case Study
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 leading-tight">
                Revolutionizing <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-accent">
                  Retail Analytics
                </span>
              </h2>

              <motion.p
                className="text-lg text-secondary-500 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                How we helped a global retail giant optimize their supply chain
                and increase profitability by 25% using our predictive modeling
                engine.
              </motion.p>

              <div className="grid grid-cols-2 gap-8 py-8 border-t border-secondary-100">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-4xl md:text-5xl font-display font-bold text-brand-purple mb-2">
                    25%
                  </p>
                  <p className="text-sm text-secondary-400 font-medium">
                    Profit Increase
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <p className="text-4xl md:text-5xl font-display font-bold text-brand-purple mb-2">
                    10x
                  </p>
                  <p className="text-sm text-secondary-400 font-medium">
                    ROI in Year 1
                  </p>
                </motion.div>
              </div>

              <button className="group flex items-center gap-3 text-brand-purple font-semibold hover:text-brand-accent transition-colors duration-300">
                Read the full story
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.2}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-secondary-100 shadow-xl shadow-secondary-200/30">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Data Analytics Dashboard"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating testimonial card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-6 rounded-xl border border-secondary-100 shadow-lg z-20 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                  <p className="text-secondary-700 font-medium text-sm leading-relaxed">
                    "Coxara Analytics transformed how we view our data. The
                    insights were immediate and actionable."
                  </p>
                  <p className="text-brand-purple text-sm mt-3 font-semibold">
                    — CTO, Global Retailer
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
