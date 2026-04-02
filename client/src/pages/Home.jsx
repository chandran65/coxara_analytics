import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import IndustriesSection from "../components/home/IndustriesSection";
import FeaturedCaseStudy from "../components/home/FeaturedCaseStudy";
import MissionVisionSection from "../components/home/MissionVisionSection";
import PlatformStudios from "../components/home/PlatformStudios";
import ResourcesSection from "../components/home/ResourcesSection";
import { AnimatedSection, SectionHeading } from "../components/ui";

const Home = () => {
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
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

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
                <p className="text-base md:text-lg text-secondary-600 mb-10 leading-relaxed mt-6">
                  We bridge the gap between complex data and actionable
                  insights. Our approach combines deep industry expertise with
                  cutting-edge technology to deliver measurable value.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Enterprise Scale",
                      desc: "Solutions built to handle massive datasets with robust security.",
                    },
                    {
                      title: "Future Ready",
                      desc: "Leveraging the latest in AI and Machine Learning technologies.",
                    },
                    {
                      title: "Client Centric",
                      desc: "Tailored strategies that align with your specific business goals.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 flex items-center justify-center text-brand-purple shrink-0 group-hover:from-brand-purple group-hover:to-brand-accent group-hover:text-white transition-all duration-300">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-secondary-900">
                          {item.title}
                        </h3>
                        <p className="text-secondary-500 mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-3xl blur-2xl" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full object-cover h-[500px] lg:h-[600px]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/30 to-transparent" />
                </div>

                {/* Stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 glass-card p-8 shadow-xl max-w-xs hidden md:block"
                >
                  <p className="text-4xl font-display font-bold text-brand-purple mb-2">
                    100+
                  </p>
                  <p className="text-secondary-600 font-medium">
                    Enterprise clients trusting our analytics solutions.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
