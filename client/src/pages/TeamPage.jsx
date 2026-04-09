import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, SectionHeading } from "../components/ui";
import TeamCard from "../components/team/TeamCard";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─── Orbiting node network background ─── */
const OrbitalNetwork = () => {
  const nodes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: 8 + Math.random() * 84,
    y: 8 + Math.random() * 84,
    size: 2 + Math.random() * 4,
    delay: i * 0.4,
    dur: 5 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Connecting lines between nearby nodes */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist > 28) return null;
            return (
              <motion.line
                key={`${a.id}-${b.id}`}
                x1={`${a.x}%`}
                y1={`${a.y}%`}
                x2={`${b.x}%`}
                y2={`${b.y}%`}
                stroke="url(#nodeLine)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            );
          }),
        )}
        <defs>
          <linearGradient id="nodeLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute rounded-full bg-brand-purple/30"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: n.size,
            height: n.size,
          }}
          animate={{
            y: [0, -15, 0, 15, 0],
            x: [0, 8, 0, -8, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: n.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: n.delay,
          }}
        />
      ))}
    </div>
  );
};

/* ─── Light hero — clean gradient + floating geometry ─── */
const TeamHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Meet", "the", "Minds", "Behind", "the", "Mission"];
  const specialWords = ["Minds", "Mission"];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-white"
      style={{ marginTop: "80px", minHeight: "min(calc(100vh - 80px), 700px)" }}
    >
      {/* Soft gradient blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-purple/[0.06] blur-[100px] hidden sm:block"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/[0.05] blur-[90px] hidden sm:block"
        animate={{ x: [0, -35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[25vw] h-[25vw] rounded-full bg-brand-glow/[0.04] blur-[70px] hidden sm:block"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating geometry — light accents */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-[14%] left-[8%] w-36 h-36 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[14%] left-[8%] w-36 h-36 border border-brand-accent/8 rounded-full"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-14 h-14 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 28, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[75%] w-24 h-24 border border-brand-accent/8 rounded-2xl"
          animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small floating dots */}
        {[
          { t: "22%", l: "80%", s: 5, c: "bg-brand-purple/20" },
          { t: "55%", l: "6%", s: 4, c: "bg-brand-accent/20" },
          { t: "75%", l: "88%", s: 6, c: "bg-brand-purple/15" },
          { t: "30%", l: "45%", s: 3, c: "bg-brand-accent/15" },
          { t: "80%", l: "30%", s: 4, c: "bg-brand-purple/10" },
        ].map((d, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${d.c}`}
            style={{ top: d.t, left: d.l, width: d.s, height: d.s }}
            animate={{ y: [0, -10, 0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        style={{
          y: textY,
          opacity,
          minHeight: "min(calc(100vh - 80px), 700px)",
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-brand-purple"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-brand-purple tracking-wide">
              Our People
            </span>
          </motion.div>

          {/* Word-by-word title */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 mb-6 sm:mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(10px)",
                  scale: 0.85,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold ${
                  specialWords.includes(word)
                    ? "bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent"
                    : "text-secondary-900"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary-500 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate experts driving innovation in data science and AI
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 mx-auto h-[2px] w-32 bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow origin-center"
          />
        </div>
      </motion.div>
    </section>
  );
};
const TeamPage = () => {
  const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");
  const allMembers = [
    {
      name: "M.G.S",
      designation: "Co-Founder & CEO",
      bio: "A visionary leader driving the democratization of advanced analytics. MGS combines deep technical expertise with strategic business acumen to transform enterprise data into predictive intelligence.",
      expertise: [
        "Decision Intelligence",
        "Strategic Leadership",
        "AI Automation",
      ],
    },
    {
      name: "Venkatesan C",
      designation: "Co-Founder & CTO",
      bio: "Leading the technological innovation behind our autonomous decision intelligence platform. Venkatesan specializes in building scalable, real-time AI architectures.",
      expertise: ["AI Architect", "Cloud Computing", "Tech Innovation"],
    },
    {
      name: "Murugan S",
      designation: "Co-Founder & CFO",
      bio: "Expert in financial strategy and sustainable business growth. Murugan ensures operational excellence and drives measurable business impact through optimized resource allocation.",
      expertise: [
        "Financial Strategy",
        "Growth Optimization",
        "Business Operations",
      ],
    },
    {
      name: "Elakkiya B",
      designation: "Head - Learning & Development",
      bio: "Driving organizational excellence through continuous learning. Dr. Elakkiya leads our initiatives to foster talent and build a culture of innovation and growth.",
      expertise: [
        "Talent Development",
        "Learning Strategy",
        "Organizational Growth",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Abstract Hero */}
      <TeamHero />

      {/* Main Content */}
      <div id="page-content">
        {/* About Our Team Section */}
        <section className="glass-section py-16 sm:py-20 md:py-28">
          <div className="hidden sm:block">
            <OrbitalNetwork />
          </div>
          <div className="container-custom relative z-10">
            <SectionHeading
              badge="About Our Team"
              title="A Team of"
              highlight="Visionaries"
              description="Our leadership team combines decades of experience in data science, machine learning, and business strategy. Together, they guide our mission to deliver transformative solutions that empower organizations worldwide."
            />

            {/* Value propositions row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  title: "Innovation-Led",
                  desc: "Pushing boundaries with cutting-edge research",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Collaborative",
                  desc: "Cross-functional expertise that amplifies impact",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                  title: "Results-Driven",
                  desc: "Measurable outcomes for every engagement",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <motion.div
                    {...(isMobile
                      ? { whileTap: { scale: 0.97 } }
                      : { whileHover: { y: -6, scale: 1.03, rotateX: 2 } })}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glow-card group text-center p-6 rounded-2xl relative overflow-hidden"
                  >
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:from-brand-purple group-hover:to-brand-accent transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-brand-purple group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-base font-display font-bold text-secondary-900 mb-1 group-hover:text-brand-purple transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-500">{item.desc}</p>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section — single unified grid */}
        <section className="glass-section-alt py-16 sm:py-20 md:py-28">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.012] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Blur orbs */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-brand-purple/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="container-custom relative z-10">
            <SectionHeading
              badge="The Team"
              title="People Who"
              highlight="Lead"
              description="The architects behind our vision — combining strategic leadership, technical depth, and operational excellence to drive transformative outcomes."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto px-1 sm:px-0">
              {allMembers.map((member, index) => (
                <AnimatedSection
                  key={member.name}
                  delay={index * 0.12}
                  direction={index % 2 === 0 ? "right" : "left"}
                  className="h-full"
                >
                  <TeamCard member={member} index={index} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="glass-section py-16 sm:py-20 md:py-28">
          <div className="container-custom">
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full hidden sm:block"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-16 -left-16 w-48 h-48 border border-white/10 rounded-full hidden sm:block"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Floating particles */}
                {!isMobile &&
                  [...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white/30"
                      style={{
                        left: `${15 + i * 18}%`,
                        top: `${20 + (i % 3) * 25}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}

                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4"
                  >
                    Join Our Team
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto"
                  >
                    Be part of a team that&apos;s shaping the future of data
                    science and AI.
                  </motion.p>
                  <motion.a
                    href="/company/careers"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-full hover:shadow-2xl transition-all duration-300"
                  >
                    <span>View Open Positions</span>
                    <svg
                      className="w-5 h-5"
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
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
