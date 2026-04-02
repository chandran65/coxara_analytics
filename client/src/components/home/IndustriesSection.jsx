import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      title: "CPG (Consumer Packaged Goods)",
      description:
        "Optimize supply chains, predict demand, and enhance brand loyalty with data-driven insights.",
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
        "Personalize customer experiences, optimize inventory, and drive sales through advanced retail analytics.",
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
      title: "Pharma & Life Sciences",
      description:
        "Accelerate drug discovery, optimize clinical trials, and improve patient outcomes with AI and analytics.",
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
      title: "Automotive",
      description:
        "Drive innovation in autonomous driving, predictive maintenance, and smart manufacturing.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      ),
    },
    {
      id: 5,
      title: "Manufacturing",
      description:
        "Enhance operational efficiency, reduce downtime, and ensure quality with Industry 4.0 solutions.",
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
      id: 6,
      title: "Education",
      description:
        "Transform learning experiences and administrative efficiency with data-driven educational technologies.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

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
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full bg-white rounded-2xl p-8 border border-secondary-100 hover:border-brand-purple/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl shadow-lg shadow-brand-purple/15 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {industry.icon}
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-5">
                    {industry.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-brand-purple font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore Solutions</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </motion.div>
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
            <button className="btn-primary px-8 py-4 text-lg font-semibold">
              Discuss Your Project
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustriesSection;
