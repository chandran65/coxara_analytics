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
                  {/* Layered atmospheric glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-accent/6 rounded-full blur-[100px] scale-125" />
                  <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-brand-medium/[0.07] rounded-full blur-[60px]" />

                  {whyInView && (
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      aria-hidden="true"
                    >
                      <defs>
                        <radialGradient id="whyCore" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#A78BFA" />
                          <stop offset="40%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#6D28D9" />
                        </radialGradient>
                        <radialGradient id="whyAura" cx="50%" cy="50%" r="50%">
                          <stop
                            offset="0%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#6D28D9"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <linearGradient
                          id="whyPanelFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#6D28D9"
                            stopOpacity="0.08"
                          />
                          <stop
                            offset="100%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                        <filter id="whyNeon">
                          <feGaussianBlur stdDeviation="5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <filter id="whySoft">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* ═══ Background tech dot-matrix grid ═══ */}
                      {Array.from({ length: 17 }, (_, row) =>
                        Array.from({ length: 17 }, (_, col) => {
                          const x = 18 + col * 22.5;
                          const y = 18 + row * 22.5;
                          const dist = Math.hypot(x - 200, y - 200);
                          if (dist > 180) return null;
                          return (
                            <circle
                              key={`g-${row}-${col}`}
                              cx={x}
                              cy={y}
                              r="0.6"
                              fill="#8B5CF6"
                              opacity={Math.max(
                                0.015,
                                0.055 * (1 - dist / 185),
                              )}
                            />
                          );
                        }),
                      )}

                      {/* ═══ Tech rings — circuit-trace pattern ═══ */}
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="174"
                        fill="none"
                        stroke="#6D28D9"
                        strokeWidth="0.5"
                        strokeDasharray="1,5,8,5,1,12"
                        opacity="0.12"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 100,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      />
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="164"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="0.3"
                        strokeDasharray="16,3,2,3,8,3"
                        opacity="0.08"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 75,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      />
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="155"
                        fill="none"
                        stroke="#C084FC"
                        strokeWidth="0.25"
                        strokeDasharray="3,10,1,10"
                        opacity="0.06"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 55,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      />

                      {/* ═══ Radar scanning sweep ═══ */}
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      >
                        <path
                          d="M200,200 L200,38 A162,162 0 0,1 340,120 Z"
                          fill="url(#whyAura)"
                          opacity="0.12"
                        />
                      </motion.g>

                      {/* ═══ Central diamond processor ═══ */}
                      <motion.g
                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "200px 200px" }}
                      >
                        <rect
                          x="177"
                          y="177"
                          width="46"
                          height="46"
                          rx="3"
                          fill="url(#whyCore)"
                          transform="rotate(45 200 200)"
                          filter="url(#whyNeon)"
                        />
                        <rect
                          x="187"
                          y="187"
                          width="26"
                          height="26"
                          rx="1.5"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                          opacity="0.3"
                          transform="rotate(45 200 200)"
                        />
                        <rect
                          x="194"
                          y="194"
                          width="12"
                          height="12"
                          rx="0.5"
                          fill="white"
                          opacity="0.12"
                          transform="rotate(45 200 200)"
                        />
                      </motion.g>

                      {/* Central breathing aura */}
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="30"
                        fill="url(#whyAura)"
                        animate={{
                          r: [30, 42, 30],
                          opacity: [0.45, 0.15, 0.45],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* ═══ 8 circuit traces radiating from center ═══ */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const x1 = 200 + 36 * Math.cos(rad);
                        const y1 = 200 + 36 * Math.sin(rad);
                        const x2 = 200 + 142 * Math.cos(rad);
                        const y2 = 200 + 142 * Math.sin(rad);
                        return (
                          <motion.line
                            key={`trace-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#8B5CF6"
                            strokeWidth={i % 2 === 0 ? "0.7" : "0.35"}
                            strokeDasharray={i % 2 === 0 ? "6,4" : "2,6"}
                            animate={{ opacity: [0.05, 0.18, 0.05] }}
                            transition={{
                              duration: 3 + (i % 3),
                              repeat: Infinity,
                              delay: i * 0.25,
                            }}
                          />
                        );
                      })}

                      {/* ═══ Ring junction nodes ═══ */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const cx = 200 + 157 * Math.cos(rad);
                        const cy = 200 + 157 * Math.sin(rad);
                        return (
                          <motion.g key={`rn-${i}`}>
                            <motion.circle
                              cx={cx}
                              cy={cy}
                              r="5"
                              fill="#6D28D9"
                              opacity="0.12"
                              animate={{
                                r: [5, 7, 5],
                                opacity: [0.08, 0.22, 0.08],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.35,
                              }}
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r="1.8"
                              fill="#8B5CF6"
                              opacity="0.45"
                            />
                          </motion.g>
                        );
                      })}

                      {/* ═══ Holographic data panels ═══ */}

                      {/* Top panel — Performance metrics */}
                      <motion.g
                        animate={{ y: [-2, 4, -2] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <rect
                          x="152"
                          y="28"
                          width="96"
                          height="56"
                          rx="5"
                          fill="url(#whyPanelFill)"
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.75"
                        />
                        <rect
                          x="156"
                          y="32"
                          width="88"
                          height="10"
                          rx="2"
                          fill="#6D28D9"
                          opacity="0.1"
                        />
                        <text
                          x="162"
                          y="40"
                          fill="#6D28D9"
                          fontSize="6"
                          fontWeight="700"
                          opacity="0.5"
                        >
                          PERFORMANCE
                        </text>
                        <text
                          x="232"
                          y="40"
                          fill="#6D28D9"
                          fontSize="7"
                          fontWeight="800"
                          opacity="0.45"
                          textAnchor="end"
                        >
                          98.6%
                        </text>
                        {/* Mini bar chart */}
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((b) => {
                          const h = 8 + Math.abs(Math.sin(b * 1.1 + 0.5)) * 16;
                          return (
                            <motion.rect
                              key={`bar-${b}`}
                              x={160 + b * 10}
                              y={76 - h}
                              width="6"
                              height={h}
                              rx="1"
                              fill="#8B5CF6"
                              animate={{
                                opacity: [0.12, 0.35, 0.12],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: b * 0.12,
                              }}
                            />
                          );
                        })}
                      </motion.g>

                      {/* Right panel — Neural network mini viz */}
                      <motion.g
                        animate={{ x: [-2, 4, -2] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      >
                        <rect
                          x="282"
                          y="148"
                          width="88"
                          height="60"
                          rx="5"
                          fill="url(#whyPanelFill)"
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.75"
                        />
                        <rect
                          x="286"
                          y="152"
                          width="80"
                          height="10"
                          rx="2"
                          fill="#6D28D9"
                          opacity="0.1"
                        />
                        <text
                          x="292"
                          y="160"
                          fill="#6D28D9"
                          fontSize="6"
                          fontWeight="700"
                          opacity="0.5"
                        >
                          NEURAL NET
                        </text>
                        {/* 2-layer network dots */}
                        {[
                          [296, 176],
                          [312, 172],
                          [328, 176],
                          [344, 172],
                          [296, 196],
                          [312, 192],
                          [328, 196],
                          [344, 192],
                        ].map(([cx, cy], n) => (
                          <motion.circle
                            key={`nn-${n}`}
                            cx={cx}
                            cy={cy}
                            r="2.8"
                            fill="#8B5CF6"
                            animate={{ opacity: [0.12, 0.45, 0.12] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: n * 0.18,
                            }}
                          />
                        ))}
                        {/* network connections */}
                        {[
                          [0, 4],
                          [0, 5],
                          [1, 4],
                          [1, 5],
                          [1, 6],
                          [2, 5],
                          [2, 6],
                          [2, 7],
                          [3, 6],
                          [3, 7],
                        ].map(([a, b], ci) => {
                          const pts = [
                            [296, 176],
                            [312, 172],
                            [328, 176],
                            [344, 172],
                            [296, 196],
                            [312, 192],
                            [328, 196],
                            [344, 192],
                          ];
                          return (
                            <line
                              key={`nnl-${ci}`}
                              x1={pts[a][0]}
                              y1={pts[a][1]}
                              x2={pts[b][0]}
                              y2={pts[b][1]}
                              stroke="#8B5CF6"
                              strokeWidth="0.4"
                              opacity="0.12"
                            />
                          );
                        })}
                      </motion.g>

                      {/* Bottom panel — Data pipeline sparkline */}
                      <motion.g
                        animate={{ y: [2, -4, 2] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <rect
                          x="140"
                          y="314"
                          width="120"
                          height="52"
                          rx="5"
                          fill="url(#whyPanelFill)"
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.75"
                        />
                        <rect
                          x="144"
                          y="318"
                          width="112"
                          height="10"
                          rx="2"
                          fill="#6D28D9"
                          opacity="0.1"
                        />
                        <text
                          x="150"
                          y="326"
                          fill="#6D28D9"
                          fontSize="6"
                          fontWeight="700"
                          opacity="0.5"
                        >
                          DATA PIPELINE
                        </text>
                        {/* Sparkline */}
                        <motion.path
                          d="M150,354 L162,347 L174,350 L186,338 L198,343 L210,335 L222,340 L234,332 L246,337"
                          fill="none"
                          stroke="#8B5CF6"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                        <path
                          d="M150,354 L162,347 L174,350 L186,338 L198,343 L210,335 L222,340 L234,332 L246,337 L246,360 L150,360 Z"
                          fill="#8B5CF6"
                          opacity="0.04"
                        />
                        <motion.circle
                          cx="246"
                          cy="337"
                          r="2.5"
                          fill="#C084FC"
                          animate={{
                            r: [2.5, 4, 2.5],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </motion.g>

                      {/* Left panel — System status */}
                      <motion.g
                        animate={{ x: [2, -4, 2] }}
                        transition={{
                          duration: 5.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5,
                        }}
                      >
                        <rect
                          x="30"
                          y="152"
                          width="82"
                          height="64"
                          rx="5"
                          fill="url(#whyPanelFill)"
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.75"
                        />
                        <rect
                          x="34"
                          y="156"
                          width="74"
                          height="10"
                          rx="2"
                          fill="#6D28D9"
                          opacity="0.1"
                        />
                        <text
                          x="40"
                          y="164"
                          fill="#6D28D9"
                          fontSize="6"
                          fontWeight="700"
                          opacity="0.5"
                        >
                          SYSTEMS
                        </text>
                        {[
                          { label: "Inference", y: 180 },
                          { label: "Training", y: 192 },
                          { label: "Pipeline", y: 204 },
                        ].map((s, si) => (
                          <g key={`st-${si}`}>
                            <motion.circle
                              cx="42"
                              cy={s.y}
                              r="2.2"
                              fill="#34D399"
                              animate={{
                                opacity: [0.35, 0.85, 0.35],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: si * 0.5,
                              }}
                            />
                            <text
                              x="50"
                              y={s.y + 2}
                              fill="#6D28D9"
                              fontSize="5.5"
                              opacity="0.4"
                            >
                              {s.label}
                            </text>
                            <text
                              x="104"
                              y={s.y + 2}
                              fill="#34D399"
                              fontSize="5"
                              fontWeight="700"
                              opacity="0.45"
                              textAnchor="end"
                            >
                              Active
                            </text>
                          </g>
                        ))}
                      </motion.g>

                      {/* ═══ Data packets — outbound from center ═══ */}
                      {[0, 90, 180, 270].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <motion.circle
                            key={`pkt-${i}`}
                            r="2.8"
                            fill="#C084FC"
                            animate={{
                              cx: [
                                200 + 36 * Math.cos(rad),
                                200 + 142 * Math.cos(rad),
                              ],
                              cy: [
                                200 + 36 * Math.sin(rad),
                                200 + 142 * Math.sin(rad),
                              ],
                              opacity: [0, 0.9, 0.9, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.7,
                              ease: "easeInOut",
                            }}
                            style={{
                              filter:
                                "drop-shadow(0 0 5px rgba(192,132,252,0.65))",
                            }}
                          />
                        );
                      })}

                      {/* Data packets — inbound on diagonal traces */}
                      {[45, 135, 225, 315].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        return (
                          <motion.circle
                            key={`pkt2-${i}`}
                            r="2"
                            fill="#8B5CF6"
                            animate={{
                              cx: [
                                200 + 135 * Math.cos(rad),
                                200 + 36 * Math.cos(rad),
                              ],
                              cy: [
                                200 + 135 * Math.sin(rad),
                                200 + 36 * Math.sin(rad),
                              ],
                              opacity: [0, 0.7, 0.7, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: 1.2 + i * 0.65,
                              ease: "easeInOut",
                            }}
                            style={{
                              filter:
                                "drop-shadow(0 0 4px rgba(139,92,246,0.55))",
                            }}
                          />
                        );
                      })}

                      {/* ═══ Orbiting sentinel particles ═══ */}
                      {[0, 1, 2].map((i) => (
                        <motion.circle
                          key={`orb-${i}`}
                          r="2.2"
                          fill={["#C084FC", "#8B5CF6", "#6D28D9"][i]}
                          opacity="0.55"
                          animate={{
                            cx: Array.from(
                              { length: 37 },
                              (_, j) =>
                                200 +
                                158 *
                                  Math.cos(
                                    (j * 2 * Math.PI) / 36 +
                                      (i * 2 * Math.PI) / 3,
                                  ),
                            ),
                            cy: Array.from(
                              { length: 37 },
                              (_, j) =>
                                200 +
                                158 *
                                  Math.sin(
                                    (j * 2 * Math.PI) / 36 +
                                      (i * 2 * Math.PI) / 3,
                                  ),
                            ),
                          }}
                          transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            filter: "drop-shadow(0 0 4px rgba(139,92,246,0.5))",
                          }}
                        />
                      ))}

                      {/* ═══ Ambient micro-particles ═══ */}
                      {Array.from({ length: 24 }, (_, i) => {
                        const angle = (i / 24) * 2 * Math.PI + 0.3;
                        const r = 45 + ((i * 41 + 7) % 125);
                        const cx = 200 + r * Math.cos(angle);
                        const cy = 200 + r * Math.sin(angle);
                        return (
                          <motion.circle
                            key={`dust-${i}`}
                            cx={cx}
                            cy={cy}
                            r="0.8"
                            fill="#C084FC"
                            animate={{ opacity: [0, 0.25, 0] }}
                            transition={{
                              duration: 2.5 + (i % 4),
                              repeat: Infinity,
                              delay: (i % 10) * 0.3,
                            }}
                          />
                        );
                      })}
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
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm border border-brand-purple/10">
                        <img
                          src="/Product Logo.png"
                          alt="Roxbee"
                          className="w-full h-full object-cover"
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

                  {/* Floating badge - mid left */}
                  <motion.div
                    className="absolute top-[42%] left-[0%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-brand-purple/10 border border-secondary-100 px-3 py-2 z-10"
                    animate={{ y: [2, -5, 2], x: [0, 4, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-violet-50 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-violet-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary-800">
                          6x ROI
                        </p>
                        <p className="text-[8px] text-secondary-400">
                          Avg. Year 1
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
