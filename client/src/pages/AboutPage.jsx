import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Hero ─── */
const AboutHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["About", "Our", "Company"];
  const specialWords = ["Company"];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-white"
      style={{ marginTop: "80px", minHeight: "min(calc(100vh - 80px), 700px)" }}
    >
      {/* Gradient blobs */}
      <motion.div
        className="hidden sm:block absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-purple/[0.06] blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/[0.05] blur-[90px]"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #6D28D9 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating geometry */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[8%] w-12 h-12 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        style={{
          y: textY,
          opacity,
          minHeight: "min(calc(100vh - 80px), 700px)",
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
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
              Who We Are
            </span>
          </motion.div>

          <h1 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 mb-6 sm:mb-8 pb-1">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold ${
                  specialWords.includes(word)
                    ? "bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent pb-1"
                    : "text-secondary-900"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0"
          >
            Pioneering the future of data science and machine learning solutions
            with a decade of proven expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-brand-purple/40 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-brand-purple/30" />
            <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-brand-accent/40 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const keyPoints = [
  {
    title: "Expert Team",
    desc: "PhDs & industry veterans with proven track records",
  },
  {
    title: "Proven Solutions",
    desc: "10+ successful projects across industries",
  },
  {
    title: "Innovation First",
    desc: "Cutting-edge AI & ML technologies",
  },
  {
    title: "Client Success",
    desc: "98% client satisfaction & retention rate",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />

      {/* ── Company Info ── */}
      <section className="glass-section py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 space-y-6"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full text-sm font-semibold text-brand-purple">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight">
                  Data Science &{" "}
                  <span className="gradient-text">ML Solutions</span>
                </h2>
              </div>

              <div className="space-y-4 text-lg text-secondary-600 leading-relaxed">
                <p>
                  Founded with a vision to transform how businesses leverage
                  data, <strong>Coxara Analytics</strong> is a swarm intelligence–driven 
                  platform delivering comprehensive data science and machine learning solutions. 
                  Our team of expert data scientists and engineers work tirelessly to
                  turn complex data into actionable business value.
                </p>
                <p>
                  Our flagship product, <strong className="text-brand-purple">Roxbee</strong>, serves as your Enterprise 
                  AI Co-Pilot. It allows business users to seamlessly interact with complex datasets 
                  using natural language, transforming distributed data and models into governed, 
                  real-time decisions—no SQL or data prep required.
                </p>
                <p>
                  With over a decade of experience across multiple industries,
                  our commitment to excellence and cutting-edge technology enables 
                  us to tackle the most complex enterprise data challenges and 
                  deliver solutions that exceed expectations.
                </p>
              </div>

              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {keyPoints.map((kp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
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
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {kp.title}
                      </h4>
                      <p className="text-sm text-secondary-600">{kp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Logo block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-glow/20 via-transparent to-brand-bright/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-6xl sm:text-7xl font-display font-bold gradient-text">
                        DS
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                      Data Science
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-brand-glow">
                      & ML Solutions
                    </p>
                  </div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-glow/30 rounded-full blur-3xl" />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-bright/20 rounded-full blur-3xl" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl px-8 py-6 border border-brand-purple/15">
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold gradient-text">
                      Est.
                    </p>
                    <p className="text-2xl font-semibold text-secondary-900">
                      2014
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="glass-section-alt py-20 md:py-28">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.012] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #6D28D9 0.5px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Blur orbs */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-purple/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full text-sm font-semibold text-brand-purple mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900">
              Mission &{" "}
              <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glow-card rounded-2xl p-8 lg:p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                To empower businesses worldwide with transformative data science
                and machine learning solutions that drive innovation, efficiency,
                and sustainable growth. We believe in making advanced analytics
                accessible and actionable for organizations of all sizes.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glow-card rounded-2xl p-8 lg:p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                To be the global leader in democratizing AI and data science,
                creating a future where every organization can harness the full
                potential of their data to make intelligent, data-driven
                decisions that shape a better tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
