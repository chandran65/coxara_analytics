import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

/* ── Abstract Geometric Visual (About) ── */
const AbstractVisual = () => {
  const hexPoints = (cx, cy, r) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return pts.join(" ");
  };

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 select-none">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-accent/5 rounded-full blur-[80px] scale-110" />

      {/* Central rotating hexagonal mesh */}
      <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
        {/* Outer rotating ring of hexagons */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 140 * Math.cos(rad);
            const cy = 200 + 140 * Math.sin(rad);
            return (
              <motion.polygon
                key={i}
                points={hexPoints(cx, cy, 28)}
                fill="none"
                stroke="#6D28D9"
                strokeWidth="1"
                opacity="0.12"
                animate={{ opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            );
          })}
        </motion.g>

        {/* Middle ring */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {[30, 90, 150, 210, 270, 330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + 85 * Math.cos(rad);
            const cy = 200 + 85 * Math.sin(rad);
            return (
              <motion.polygon
                key={i}
                points={hexPoints(cx, cy, 22)}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="1"
                opacity="0.15"
                animate={{ opacity: [0.1, 0.22, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
              />
            );
          })}
        </motion.g>

        {/* Connecting lines from center */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.line
              key={`line-${i}`}
              x1="200"
              y1="200"
              x2={200 + 140 * Math.cos(rad)}
              y2={200 + 140 * Math.sin(rad)}
              stroke="#6D28D9"
              strokeWidth="0.5"
              opacity="0.06"
              animate={{ opacity: [0.04, 0.1, 0.04] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.3 }}
            />
          );
        })}

        {/* Central core */}
        <motion.circle
          cx="200"
          cy="200"
          r="35"
          fill="url(#aboutGrad)"
          animate={{ r: [35, 38, 35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="50"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="1"
          opacity="0.15"
          animate={{ r: [50, 55, 50], opacity: [0.15, 0.08, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="65"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.5"
          opacity="0.08"
          animate={{ r: [65, 70, 65] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`dot-${i}`}
            r="4"
            fill="#6D28D9"
            opacity="0.5"
            animate={{
              cx: [
                200 + 110 * Math.cos((i * 2 * Math.PI) / 3),
                200 + 110 * Math.cos((i * 2 * Math.PI) / 3 + (2 * Math.PI) / 3),
                200 + 110 * Math.cos((i * 2 * Math.PI) / 3 + (4 * Math.PI) / 3),
                200 + 110 * Math.cos((i * 2 * Math.PI) / 3),
              ],
              cy: [
                200 + 110 * Math.sin((i * 2 * Math.PI) / 3),
                200 + 110 * Math.sin((i * 2 * Math.PI) / 3 + (2 * Math.PI) / 3),
                200 + 110 * Math.sin((i * 2 * Math.PI) / 3 + (4 * Math.PI) / 3),
                200 + 110 * Math.sin((i * 2 * Math.PI) / 3),
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 6px rgba(109,40,217,0.4))" }}
          />
        ))}

        <defs>
          <radialGradient id="aboutGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating badge - top right */}
      <motion.div
        className="absolute top-[8%] right-[2%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-brand-purple/10 border border-secondary-100 px-4 py-2.5 z-10"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-brand-purple"
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
            <p className="text-[11px] font-bold text-secondary-800">
              AI-Native
            </p>
            <p className="text-[9px] text-brand-purple font-semibold">
              Approach
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge - bottom left */}
      <motion.div
        className="absolute bottom-[8%] left-[2%] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-secondary-200/50 border border-secondary-100 px-4 py-2.5 z-10"
        animate={{ y: [3, -5, 3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-secondary-800">
              GenAI Ready
            </p>
            <p className="text-[9px] text-secondary-400">Enterprise Grade</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

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
          {/* Left Side - Abstract Visual */}
          <AnimatedSection direction="left">
            <AbstractVisual />
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
                {[
                  "We are a new-age analytics firm born in the era of Generative AI. Unlike traditional consultancies, we don't just analyze data; we build intelligent systems that learn, adapt, and drive autonomous decision-making.",
                  "Our mission is to democratize access to advanced AI, enabling businesses of all sizes to harness the power of predictive intelligence and causal reasoning without the technical complexity.",
                  "We are building the operating system for the modern enterprise—where data isn't just a report, but a dynamic engine of growth.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-secondary-100 mt-8">
                {[
                  {
                    title: "Innovation First",
                    desc: "Cutting-edge GenAI & ML solutions",
                    bgColor: "bg-brand-purple/10",
                    textColor: "text-brand-purple",
                    hoverBorder: "hover:border-brand-purple/30",
                    hoverShadow: "hover:shadow-brand-purple/8",
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
                    title: "Agile Delivery",
                    desc: "Rapid prototyping & deployment",
                    bgColor: "bg-brand-accent/10",
                    textColor: "text-brand-accent",
                    hoverBorder: "hover:border-brand-accent/30",
                    hoverShadow: "hover:shadow-brand-accent/8",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                  },
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    className={`group relative flex items-start gap-3 p-4 rounded-xl border border-secondary-100 ${val.hoverBorder} bg-white hover:shadow-lg ${val.hoverShadow} transition-all duration-300 overflow-hidden cursor-default`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div
                      className={`relative z-10 w-10 h-10 rounded-xl ${val.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <svg
                        className={`w-5 h-5 ${val.textColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {val.icon}
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-secondary-900 group-hover:text-brand-purple transition-colors duration-300">
                        {val.title}
                      </h4>
                      <p className="text-sm text-secondary-500">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
