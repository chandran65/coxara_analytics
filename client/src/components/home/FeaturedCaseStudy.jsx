import { motion } from "framer-motion";
import { AnimatedSection } from "../ui";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary-950 via-secondary-900 to-secondary-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,_rgba(109,40,217,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <AnimatedSection direction="left" className="w-full lg:w-1/2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-medium text-brand-light uppercase tracking-widest">
                  Featured Case Study
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                Revolutionizing <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-accent">
                  Retail Analytics
                </span>
              </h2>

              <p className="text-lg text-secondary-300 leading-relaxed max-w-xl">
                How we helped a global retail giant optimize their supply chain
                and increase profitability by 25% using our predictive modeling
                engine.
              </p>

              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                <div>
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    25%
                  </p>
                  <p className="text-sm text-secondary-400 font-medium">
                    Profit Increase
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    10x
                  </p>
                  <p className="text-sm text-secondary-400 font-medium">
                    ROI in Year 1
                  </p>
                </div>
              </div>

              <button className="group flex items-center gap-3 text-white font-semibold hover:text-brand-accent transition-colors duration-300">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 to-brand-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-brand-purple/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Data Analytics Dashboard"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating testimonial card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-medium text-sm leading-relaxed">
                    "Coxara Analytics transformed how we view our data. The
                    insights were immediate and actionable."
                  </p>
                  <p className="text-brand-accent text-sm mt-3 font-semibold">
                    - CTO, Global Retailer
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
