import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import IndustriesSection from "../components/home/IndustriesSection";
import FeaturedCaseStudy from "../components/home/FeaturedCaseStudy";
import MissionVisionSection from "../components/home/MissionVisionSection";
import PlatformStudios from "../components/home/PlatformStudios";
import ResourcesSection from "../components/home/ResourcesSection";
import { AnimatedSection, SectionHeading } from "../components/ui";

/* ── Animated counter component ── */
const AnimatedCounter = ({ value, suffix = "" }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {value}
    {suffix}
  </motion.span>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Platform Studios (Services) */}
      <PlatformStudios />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.012] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-accent/[0.02] rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div>
                <SectionHeading
                  badge="Why Choose Us"
                  title="Empowering Business Through"
                  highlight="Innovation"
                  align="left"
                />
                <p className="text-base md:text-lg text-secondary-500 mb-10 leading-relaxed mt-6">
                  We bridge the gap between complex data and actionable
                  insights. Our approach combines deep industry expertise with
                  cutting-edge technology to deliver measurable value.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      title: "Enterprise Scale",
                      desc: "Solutions built to handle massive datasets with robust security.",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      ),
                    },
                    {
                      title: "Future Ready",
                      desc: "Leveraging the latest in AI and Machine Learning technologies.",
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
                      title: "Client Centric",
                      desc: "Tailored strategies that align with your specific business goals.",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      ),
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      className="flex items-start gap-4 group p-4 -ml-4 rounded-xl hover:bg-secondary-50/80 transition-colors duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-purple/20 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-secondary-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-secondary-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-6 bg-gradient-to-br from-brand-purple/[0.07] to-brand-accent/[0.05] rounded-3xl blur-2xl" />

                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-secondary-200/40 border border-secondary-100">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full object-cover h-[420px] lg:h-[520px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/20 via-transparent to-transparent" />
                </div>

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-6 shadow-xl shadow-secondary-200/40 border border-secondary-100 max-w-[220px] hidden md:block"
                >
                  <p className="text-3xl font-display font-bold text-brand-purple mb-1">
                    <AnimatedCounter value="100" suffix="+" />
                  </p>
                  <p className="text-secondary-500 text-sm font-medium leading-snug">
                    Enterprise clients trusting our analytics solutions.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-secondary-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.01] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-5">
                Ready to Transform Your{" "}
                <span className="text-brand-purple">Data Strategy</span>?
              </h2>
              <p className="text-lg text-secondary-500 mb-10 leading-relaxed">
                Let's build intelligent systems that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate("/company/contact")}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white text-base font-semibold rounded-full shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Get in Touch</span>
                  <svg
                    className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
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
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 border border-secondary-200 text-secondary-700 text-base font-semibold rounded-full hover:border-brand-purple/30 hover:text-brand-purple hover:bg-white transition-all duration-300"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
