import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─── Hero Section ─── */
const ResourcesHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Insights", "&", "Resources"];
  const specialWords = ["Insights", "Resources"];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-white"
      style={{ marginTop: "80px", minHeight: "min(calc(100vh - 80px), 700px)" }}
    >
      {/* Soft gradient blobs */}
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
      <motion.div
        className="hidden sm:block absolute top-[40%] left-[50%] w-[20vw] h-[20vw] rounded-full bg-brand-glow/[0.04] blur-[70px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-purple/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[18%] right-[12%] w-32 h-32 border border-brand-accent/8 rounded-full"
          style={{ borderStyle: "dashed" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[8%] w-12 h-12 border border-brand-purple/10 rotate-45 rounded-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-[55%] right-[75%] w-20 h-20 border border-brand-accent/8 rounded-2xl"
          animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {[
          { t: "25%", l: "85%", s: 5, c: "bg-brand-purple/20" },
          { t: "60%", l: "4%", s: 4, c: "bg-brand-accent/20" },
          { t: "78%", l: "90%", s: 6, c: "bg-brand-purple/15" },
          { t: "35%", l: "40%", s: 3, c: "bg-brand-accent/15" },
          { t: "82%", l: "25%", s: 4, c: "bg-brand-purple/10" },
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

      {/* Floating SVG dots */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 10 }, (_, i) => {
            const x = 8 + Math.random() * 84;
            const y = 8 + Math.random() * 84;
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={1.5 + Math.random() * 2}
                fill="#7C3AED"
                initial={{ opacity: 0.15 }}
                animate={{
                  opacity: [0.1, 0.35, 0.1],
                  cy: [`${y}%`, `${y - 2}%`, `${y}%`],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>
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
              Knowledge Hub
            </span>
          </motion.div>

          {/* Word-by-word title */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8 pb-3">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold ${
                  specialWords.includes(word)
                    ? "bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent pb-3"
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
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Guides, thought leadership, and deep dives from our analytics
            experts — helping you stay ahead of the curve.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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

/* ─── Blog Card ─── */
const BlogCard = ({ post, index }) => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");
  const categoryColors = {
    "Case Studies": "from-fuchsia-500 to-pink-400",
    Resources: "from-indigo-500 to-violet-400",
    Webinars: "from-purple-500 to-brand-medium",
    Whitepapers: "from-brand-purple to-indigo-600",
    Tutorial: "from-violet-500 to-purple-400",
  };
  const accent =
    categoryColors[post.category] || "from-brand-purple to-brand-accent";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        {...(isTouchDevice
          ? { whileTap: { scale: 0.98 } }
          : { whileHover: { y: -6 } })}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glow-card group rounded-2xl overflow-hidden h-full flex flex-col relative"
      >
        {/* Top accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent} ${isTouchDevice ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left z-10`}
        />

        {/* Image area */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Category pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-purple text-xs font-bold rounded-full border border-brand-purple/10">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-brand-purple/70">
              {post.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-secondary-300" />
            <span className="text-xs text-secondary-400">{post.date}</span>
          </div>

          <h3 className="text-lg font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors duration-300 leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-secondary-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-700 leading-none">
                  {post.author}
                </p>
              </div>
            </div>

            <motion.span
              {...(isTouchDevice ? {} : { whileHover: { x: 3 } })}
              className="text-brand-purple font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              Read
              <svg
                className="w-3.5 h-3.5"
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
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ─── Main Resources Page ─── */
import { useState } from "react";

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Case Studies",
    "Resources",
    "Webinars",
    "Whitepapers",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Retail Chains: A Predictive Inventory Case Study",
      category: "Case Studies",
      date: "November 5, 2025",
      readTime: "12 min read",
      excerpt:
        "How a leading retail brand reduced stockouts by 40% using COXARA's forecasting engine. Real data, real results, and actionable takeaways.",
      author: "Analytics Team",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      id: 2,
      title: "The 2026 Enterprise AI Readiness Framework",
      category: "Whitepapers",
      date: "November 1, 2025",
      readTime: "25 min read",
      excerpt:
        "A comprehensive guide for CDOs on preparing data infrastructure for large-scale Generative AI deployment. Security, ethics, and scale.",
      author: "Strategy Team",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 3,
      title: "Webinar: Bridging the Gap Between Data and Decisions",
      category: "Webinars",
      date: "October 28, 2025",
      readTime: "45 min watch",
      excerpt:
        "Watch our latest session on how to build a data culture that empowers frontline managers to make data-backed decisions every day.",
      author: "CoreSight Experts",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      id: 4,
      title: "Data Visualization Toolkit for Executives",
      category: "Resources",
      date: "October 25, 2025",
      readTime: "Downloaded 2k+ times",
      excerpt:
        "A curated collection of dashboard templates and chart selection guides designed specifically for C-suite reporting and board meetings.",
      author: "UX Team",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: 5,
      title: "Healthcare Efficiency: Reducing Patient Wait Times with AI",
      category: "Case Studies",
      date: "October 22, 2025",
      readTime: "9 min read",
      excerpt:
        "Discover how hospital networks use flow analytics to predict patient inflow and optimize staffing schedules in real-time.",
      author: "Healthcare Team",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    },
    {
      id: 6,
      title: "The Ethics of Autonomous Decision Systems",
      category: "Whitepapers",
      date: "October 18, 2025",
      readTime: "18 min read",
      excerpt:
        "Deep dive into the legal and ethical framework required when deploying AI systems that make financial or operational choices.",
      author: "Compliance Team",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ResourcesHero />

      {/* Main Content */}
      <div id="page-content">
        {/* ─── Filter + Blog Grid ─── */}
        <section className="glass-section py-16 sm:py-24 md:py-32">
          <div className="container-custom relative z-10">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                  Knowledge Hub
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
                  Knowledge
                </span>
              </h2>
            </motion.div>

            {/* Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-16"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-brand-purple text-white border-brand-purple shadow-lg shadow-brand-purple/20 scale-105"
                      : "bg-white text-secondary-500 border-secondary-100 hover:border-brand-purple/30 hover:text-brand-purple"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Blog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-secondary-400">
                    No resources found in this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── Newsletter Section ─── */}
        <section className="glass-section-alt py-16 sm:py-24 md:py-32">
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
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-2xl sm:rounded-3xl border border-secondary-100 shadow-xl shadow-secondary-200/20 p-6 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden"
            >
              {/* Corner gradients */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-brand-purple/[0.05] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-brand-accent/[0.04] to-transparent pointer-events-none" />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-purple/20"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4 relative">
                Subscribe to Our{" "}
                <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h2>
              <p className="text-secondary-500 text-lg mb-10 max-w-xl mx-auto relative leading-relaxed">
                Get the latest insights, tips, and updates delivered directly to
                your inbox. No spam, just valuable content.
              </p>

              <motion.form
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 relative"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-secondary-200 text-secondary-900 placeholder-secondary-400 focus:border-brand-purple focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)] outline-none transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-accent text-white font-bold rounded-xl shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 transition-shadow duration-300 whitespace-nowrap flex items-center gap-2"
                >
                  Subscribe
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>
              </motion.form>

              {/* Trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xs text-secondary-400 mt-5 relative flex items-center justify-center gap-1.5"
              >
                <svg
                  className="w-3.5 h-3.5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No spam. Unsubscribe anytime.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
