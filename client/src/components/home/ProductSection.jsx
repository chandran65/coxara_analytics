import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

const ProductSection = () => {
  const features = [
    {
      title: "Faster Deployment",
      desc: "Deploy pre-built AI analysts for any department in days, with no data science team required.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Unified Data",
      desc: "Transform scattered enterprise data into a single, governed workspace that reliably answers natural-language questions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      ),
    },
    {
      title: "Secure Scaling",
      desc: "Scale AI safely with built-in enterprise controls for access, auditing, and policy compliance in every workflow.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/[0.03] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/[0.02] rounded-full blur-[70px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <div className="max-w-xl">
              <SectionHeading
                badge="Product"
                title="Our"
                highlight="Product"
                align="left"
              />
              <p className="text-lg text-secondary-500 mt-6 mb-12 leading-relaxed">
                <span className="font-bold text-secondary-900">CoreSight</span> is Coxara's flagship product, built on our deep data engineering experience and designed to combine natural language intelligence with enterprise-scale analytics.
              </p>

              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/[0.06] border border-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-secondary-500 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Visual */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Product Frame with Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_-16px_rgba(109,40,217,0.25)] border border-brand-purple/10 bg-white"
              >
                {/* Visual Header Decoration */}
                <div className="h-4 bg-secondary-50 border-b border-secondary-100 flex items-center px-4 gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-400/50" />
                   <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                   <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                </div>
                
                <img
                  src="/coresight_visual.png"
                  alt="CoreSight Dashboard"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating "AI Active" Badge */}
                <div className="absolute top-8 right-8 bg-brand-purple text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  CoreSight AI Active
                </div>
              </motion.div>

              {/* Background gradient blobl behind the image */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-brand-purple/10 to-brand-accent/5 blur-[100px] -z-10 rounded-full" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
