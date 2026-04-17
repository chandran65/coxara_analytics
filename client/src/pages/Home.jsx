import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductSection from "../components/home/ProductSection";
import { useMediaQuery } from "../hooks/useMediaQuery";

import CapabilitiesGrid from "../components/home/CapabilitiesGrid";
import FeaturedCaseStudy from "../components/home/FeaturedCaseStudy";
import MissionVisionSection from "../components/home/MissionVisionSection";
import ResourcesSection from "../components/home/ResourcesSection";
import { AnimatedSection, SectionHeading } from "../components/ui";

const Home = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [heroActive, setHeroActive] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      const active = window.scrollY < threshold;
      if (active !== heroActive) setHeroActive(active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroActive]);

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { amount: 0.1, margin: "200px" });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section — sticky on desktop only; static on mobile to prevent scroll jank */}
      <div className={isDesktop ? "sticky top-0 z-0" : "relative z-0"}>
        <HeroSection isActive={heroActive} />
      </div>

      {/* Scrollable content — comes on top of hero */}
      <div className="relative z-10">
        {/* About Section */}
        <AboutSection />

        {/* Mission & Vision */}
        <MissionVisionSection />

        {/* Why Choose Us */}
        <section
          ref={whyRef}
          className="py-12 md:py-16 glass-section relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.012] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-purple/[0.05] rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-brand-accent/[0.04] rounded-full blur-[50px] pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
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

                  <div className="space-y-4">
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
                        title: "Future-Ready",
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
                        title: "Client-Centric",
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
                        initial={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 6, scale: 1.01 }}
                        className="group relative flex items-start gap-4 p-5 rounded-2xl glow-card overflow-hidden cursor-default"
                      >
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
                        {/* Left accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-purple to-brand-accent rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                        <div className="relative z-10 w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-purple/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {item.icon}
                          </svg>
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-base font-bold text-secondary-900 mb-1 group-hover:text-brand-purple transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-secondary-500 text-sm leading-relaxed group-hover:text-secondary-600 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative w-full aspect-square max-lg mx-auto select-none">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/8 to-brand-accent/5 rounded-full blur-[90px] scale-125" />

                  {whyInView && (
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      aria-hidden="true"
                    >
                      {/* Rotating layered diamond/prism shapes */}
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 80,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      >
                        <motion.rect
                          x="145"
                          y="145"
                          width="110"
                          height="110"
                          rx="4"
                          fill="none"
                          stroke="#6D28D9"
                          strokeWidth="1"
                          opacity="0.12"
                          style={{
                            transformOrigin: "200px 200px",
                            transform: "rotate(45deg)",
                          }}
                          animate={{ opacity: [0.08, 0.18, 0.08] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </motion.g>

                      <motion.g
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 55,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      >
                        <motion.rect
                          x="125"
                          y="125"
                          width="150"
                          height="150"
                          rx="6"
                          fill="none"
                          stroke="#8B5CF6"
                          strokeWidth="0.8"
                          opacity="0.1"
                          style={{
                            transformOrigin: "200px 200px",
                            transform: "rotate(45deg)",
                          }}
                          animate={{ opacity: [0.06, 0.14, 0.06] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: 1,
                          }}
                        />
                      </motion.g>

                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 70,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      >
                        <motion.rect
                          x="105"
                          y="105"
                          width="190"
                          height="190"
                          rx="8"
                          fill="none"
                          stroke="#6D28D9"
                          strokeWidth="0.5"
                          opacity="0.07"
                          style={{
                            transformOrigin: "200px 200px",
                            transform: "rotate(45deg)",
                          }}
                        />
                      </motion.g>

                      {/* Constellation network nodes */}
                      {[
                        { cx: 200, cy: 120, r: 5 },
                        { cx: 280, cy: 170, r: 4 },
                        { cx: 300, cy: 260, r: 3.5 },
                        { cx: 230, cy: 310, r: 4.5 },
                        { cx: 130, cy: 290, r: 3 },
                        { cx: 100, cy: 190, r: 4 },
                        { cx: 160, cy: 155, r: 3 },
                        { cx: 250, cy: 230, r: 3.5 },
                      ].map((node, i) => (
                        <motion.circle
                          key={`node-${i}`}
                          cx={node.cx}
                          cy={node.cy}
                          r={node.r}
                          fill="#6D28D9"
                          animate={{
                            opacity: [0.15, 0.4, 0.15],
                            r: [node.r, node.r + 1.5, node.r],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}

                      {/* Network connecting lines */}
                      {[
                        [200, 120, 280, 170],
                        [280, 170, 300, 260],
                        [300, 260, 230, 310],
                        [230, 310, 130, 290],
                        [130, 290, 100, 190],
                        [100, 190, 200, 120],
                        [200, 120, 250, 230],
                        [100, 190, 250, 230],
                        [160, 155, 280, 170],
                        [160, 155, 130, 290],
                      ].map(([x1, y1, x2, y2], i) => (
                        <motion.line
                          key={`conn-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          animate={{ opacity: [0.04, 0.12, 0.04] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}

                      {/* Central glowing orb */}
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="28"
                        fill="url(#whyGrad)"
                        animate={{ r: [28, 32, 28] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="42"
                        fill="none"
                        stroke="#6D28D9"
                        strokeWidth="0.8"
                        opacity="0.12"
                        animate={{
                          r: [42, 48, 42],
                          opacity: [0.12, 0.06, 0.12],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Orbiting particles along elliptical paths */}
                      {[0, 1, 2, 3].map((i) => {
                        const speed = 15 + i * 5;
                        const rx = 110 + i * 20;
                        const ry = 70 + i * 15;
                        return (
                          <motion.circle
                            key={`particle-${i}`}
                            cx={200 + rx * Math.cos((i * Math.PI) / 4)}
                            cy={200 + ry * Math.sin((i * Math.PI) / 4)}
                            r="3"
                            fill="#8B5CF6"
                            opacity="0.35"
                            animate={{
                              cx: Array.from(
                                { length: 37 },
                                (_, j) =>
                                  200 +
                                  rx *
                                    Math.cos(
                                      (j * 2 * Math.PI) / 36 +
                                        (i * Math.PI) / 4,
                                    ),
                              ),
                              cy: Array.from(
                                { length: 37 },
                                (_, j) =>
                                  200 +
                                  ry *
                                    Math.sin(
                                      (j * 2 * Math.PI) / 36 +
                                        (i * Math.PI) / 4,
                                    ),
                              ),
                            }}
                            transition={{
                              duration: speed,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              filter:
                                "drop-shadow(0 0 4px rgba(139,92,246,0.4))",
                            }}
                          />
                        );
                      })}

                      <defs>
                        <radialGradient id="whyGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#6D28D9" />
                        </radialGradient>
                      </defs>
                    </svg>
                  )}

                  {/* Floating badge - top right */}
                  <motion.div
                    className="absolute top-[5%] right-[5%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-brand-purple/10 border border-secondary-100 px-4 py-2.5 z-10"
                    animate={{ y: [-3, 5, -3] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
                        <svg
                          className="w-3.5 h-3.5 text-emerald-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-secondary-800">
                          Trusted Partner
                        </p>
                        <p className="text-[10px] text-secondary-400">
                          SOC 2 Compliant
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating badge - bottom left */}
                  <motion.div
                    className="absolute bottom-[8%] left-[5%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-secondary-200/50 border border-secondary-100 px-4 py-2.5 z-10"
                    animate={{ y: [4, -4, 4] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white/50 backdrop-blur-md flex items-center justify-center p-1 shadow-sm border border-brand-purple/10">
                        <img
                          src="/geometric_c_nodes.png"
                          alt="Roxbee"
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-secondary-800">
                          Roxbee AI
                        </p>
                        <p className="text-[9px] text-brand-purple font-semibold">
                          Enterprise Ready
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <ProductSection />

        {/* Capabilities Grid */}
        <CapabilitiesGrid />

        {/* Featured Case Study */}
        <FeaturedCaseStudy />

        {/* Resources Section */}
        <ResourcesSection />

        {/* Final CTA Section */}
        <section className="py-10 md:py-14 glass-section-alt relative overflow-hidden">
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
                <motion.h2
                  className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  Ready to Transform Your{" "}
                  <span className="text-brand-purple">Data Strategy</span>?
                </motion.h2>
                <motion.p
                  className="text-lg text-secondary-500 mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  Let's build intelligent systems that drive real business
                  value.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <button
                    onClick={() => navigate("/company/contact")}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white text-base font-semibold rounded-full shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">
                      Schedule a Consultation
                    </span>
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
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      {/* end scrollable content wrapper */}
    </div>
  );
};

export default Home;
