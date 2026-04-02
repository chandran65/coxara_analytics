import { AnimatedSection, SectionHeading } from "../ui";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-accent/10 rounded-3xl blur-3xl scale-110" />

                {/* Main card */}
                <div className="relative w-full h-full bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden group">
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Icon */}
                  <svg
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white/90 relative z-10 transform group-hover:scale-110 transition-transform duration-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9h.01M15 9h.01"
                    />
                  </svg>

                  {/* Decorative glows */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card px-6 py-4 shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-brand-purple">
                    AI
                  </p>
                  <p className="text-sm font-semibold text-secondary-600">
                    Native Approach
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6 text-center lg:text-left">
              <SectionHeading
                badge="About Us"
                title="Pioneering the Future of"
                highlight="Intelligent Enterprise"
                align="left"
              />

              <div className="space-y-5 text-base md:text-lg text-secondary-600 leading-relaxed">
                <p>
                  We are a new-age analytics firm born in the era of Generative
                  AI. Unlike traditional consultancies, we don't just analyze
                  data; we build intelligent systems that learn, adapt, and
                  drive autonomous decision-making.
                </p>
                <p>
                  Our mission is to democratize access to advanced AI, enabling
                  businesses of all sizes to harness the power of predictive
                  intelligence and causal reasoning without the technical
                  complexity.
                </p>
                <p>
                  We are building the operating system for the modern
                  enterprise—where data isn't just a report, but a dynamic
                  engine of growth.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-secondary-100 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-purple"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">
                      Innovation First
                    </h4>
                    <p className="text-sm text-secondary-500">
                      Cutting-edge GenAI & ML solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">
                      Agile Delivery
                    </h4>
                    <p className="text-sm text-secondary-500">
                      Rapid prototyping & deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
