import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
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

  const { category: urlCategory } = useParams();

  // Dynamic content map for individual "pages"
  const categoryContent = {
    all: {
      badge: "Knowledge Hub",
      title: "Insights & Resources",
      desc: "Guides, thought leadership, and deep dives from our analytics experts — helping you stay ahead of the curve.",
    },
    "case-studies": {
      badge: "Success Stories",
      title: "Real-World Impact",
      desc: "Explore how COXARA Analytics transforms raw data into measurable ROI for our global clients across retail, healthcare, and finance.",
    },
    blog: {
      badge: "Latest Insights",
      title: "The Intelligence Blog",
      desc: "Expert perspectives on AI, data strategy, and the future of enterprise automation from our leading practitioners.",
    },
    toolkits: {
      badge: "Executive Assets",
      title: "Strategic Toolkits",
      desc: "Curated templates, dashboard frameworks, and data strategy checklists to accelerate your digital transformation.",
    },
    webinars: {
      badge: "Video Library",
      title: "On-Demand Webinars",
      desc: "Watch our technical leaders and product experts discuss the latest in AI, causal reasoning, and predictive analytics.",
    },
    whitepapers: {
      badge: "Deep Dives",
      title: "Strategic Whitepapers",
      desc: "Comprehensive research papers on the architecture, ethics, and future of enterprise-grade intelligent systems.",
    },
  };

  const currentContent =
    categoryContent[urlCategory?.toLowerCase()] || categoryContent.all;

  const words = currentContent.title.split(" ");
  const specialWords = words.filter(
    (w, i) => i === 0 || i === words.length - 1,
  ); // Highlight first and last words

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
              {currentContent.badge}
            </span>
          </motion.div>

          {/* Word-by-word title */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 pb-3 max-w-4xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
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
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {currentContent.desc}
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
const BlogCard = ({ post, index, onClick }) => {
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
        onClick={onClick}
        className="glow-card group rounded-2xl overflow-hidden h-full flex flex-col relative cursor-pointer text-left"
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
              className="text-brand-purple font-bold text-xs flex items-center gap-1"
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
const ResourcesPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    "All",
    "Blog",
    "Case Studies",
    "Whitepapers",
    "Webinars",
    "Toolkits",
  ];

  // Sync state with URL param
  useEffect(() => {
    if (category) {
      // Convert slug back to Display Name (e.g. case-studies -> Case Studies)
      const found = categories.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase(),
      );
      if (found) {
        setActiveCategory(found);
      }
    } else {
      setActiveCategory("All");
    }
  }, [category]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      navigate("/resources");
    } else {
      navigate(`/resources/${cat.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Retail Chains: A Predictive Inventory Case Study",
      category: "Case Studies",
      date: "February 15, 2026",
      readTime: "12 min read",
      excerpt:
        "How a leading retail brand reduced stockouts by 40% using Beacon's forecasting engine. Real data, real results, and actionable takeaways.",
      author: "Analytics Team",
      image: "/blog_dashboard.png",
      content: {
        subtitle: "How a leading retail brand reduced stockouts by 40% using Beacon's forecasting engine.",
        introduction: "In the fast-moving consumer goods (FMCG) and retail sectors, inventory management is the difference between profitability and failure. Holding too much stock locks up working capital; holding too little leads to lost sales and damaged customer loyalty.",
        sections: [
          {
            title: "The Challenge",
            paragraphs: [
              "A major North American retail chain with over 450 locations struggled with demand forecasting. Traditional statistical models failed to account for hyper-local factors like sudden weather changes, neighborhood-specific events, and micro-economic shifts.",
              "This led to recurring stockouts of high-margin seasonal items while slower-moving stock cluttered warehouse shelves."
            ]
          },
          {
            title: "The Solution",
            paragraphs: [
              "We integrated Beacon's predictive inventory engine with the retailer's ERP. The system processed 3+ years of historical transaction logs, weather histories, local calendar events, and real-time competitor pricing.",
              "Using advanced multi-layered neural networks, Beacon calculated localized demand forecasts on a daily basis."
            ],
            bullets: [
              "Real-time Data Integration: Ingesting live weather, local events, and traffic data streams.",
              "Localized Demand Models: Generating unique demand curves for individual store locations.",
              "Automated Reordering: Dynamic alerts sent to warehouse management to optimize dispatch timing."
            ]
          },
          {
            title: "The Results",
            paragraphs: [
              "Within the first quarter of deployment, the retailer saw a dramatic improvement in all core supply chain metrics.",
              "By optimizing reorder points, the firm reduced its reliance on emergency logistics and lowered carbon emissions from logistics operations."
            ],
            bullets: [
              "Stockout Reduction: A 40% drop in stockouts on high-demand, high-margin items.",
              "Carrying Costs: 18% reduction in overall carrying costs through lean replenishment cycles.",
              "Inventory Turnover: 25% increase in inventory turnover speed."
            ]
          }
        ],
        conclusion: "Predictive inventory forecasting is no longer a luxury—it is a core operational requirement. Beacon enables retail operations to transform from reactive crisis management into proactive, margin-optimizing engines."
      }
    },
    {
      id: 2,
      title: "The 2026 Enterprise AI Readiness Framework",
      category: "Whitepapers",
      date: "February 10, 2026",
      readTime: "25 min read",
      excerpt:
        "A comprehensive guide for CDOs on preparing data infrastructure for large-scale Generative AI deployment. Security, ethics, and scale.",
      author: "Strategy Team",
      image: "/blog_analytics.png",
      content: {
        subtitle: "A comprehensive guide for CDOs on preparing data infrastructure for large-scale Generative AI deployment.",
        introduction: "As Generative AI and agentic systems move from pilot projects to core business infrastructure, enterprise leaders face a critical decision. How do we build scalable AI environments without compromising security, data privacy, or compliance?",
        sections: [
          {
            title: "Pillar 1: Unified Data Fabric",
            paragraphs: [
              "AI is only as good as the data it consumes. Enterprises must build unified, real-time data pipelines that clean, structure, and enrich siloed data before feeding it to Large Language Models.",
              "Without a robust data governance foundation, LLM deployments will suffer from frequent hallucinations and poor context alignment."
            ]
          },
          {
            title: "Pillar 2: Agentic Orchestration",
            paragraphs: [
              "Moving from static chatbots to autonomous, goal-driven agents requires building self-correcting loops and sandbox execution layers.",
              "The next wave of productivity will be unlocked by AI agents that can read, plan, call APIs, and execute tasks with human-in-the-loop oversight."
            ]
          },
          {
            title: "Pillar 3: Governance & Security",
            paragraphs: [
              "Deploying enterprise-grade AI requires strict role-based access control (RBAC), data masking for sensitive PII, and comprehensive audit logging to meet emerging global AI regulations (such as the EU AI Act).",
              "Ensuring that enterprise data is never leaked into public training pools is the single most critical task for security leads."
            ]
          }
        ],
        conclusion: "Enterprise AI readiness is not just an engineering problem; it is a holistic data strategy challenge. By implementing these three pillars, CDOs can build systems that scale reliably and securely."
      }
    },
    {
      id: 3,
      title: "Navigating the Future: The Rise of Causal AI in Supply Chain",
      category: "Blog",
      date: "February 5, 2026",
      readTime: "8 min read",
      excerpt:
        "Why standard predictive models are no longer enough. Learn how Causal AI identifies the 'why' behind supply chain disruptions to build true resilience.",
      author: "Dr. Sarah Chen",
      image: "/blog_ai.png",
      content: {
        subtitle: "Why standard predictive models are no longer enough, and how Causal AI identifies the 'why' behind disruptions.",
        introduction: "Predictive models tell you what might happen based on historical correlations. But in a volatile global market, correlations break down. Enter Causal AI: the next frontier of artificial intelligence that understands why things happen.",
        sections: [
          {
            title: "Correlation vs. Causation",
            paragraphs: [
              "Standard AI might observe that whenever air freight costs spike, retail delivery delays increase. It concludes that air freight costs cause delays. Causal AI models the actual physical network: a port strike causes both the spike in air freight rates and the delivery delays.",
              "By understanding root causes rather than simple statistical correlations, Causal AI enables businesses to design active interventions instead of just waiting to react."
            ]
          },
          {
            title: "Simulating the 'What-If'",
            paragraphs: [
              "Using Causal Directed Acyclic Graphs (DAGs), supply chain leaders can run simulations: 'What if we rerouted 15% of cargo to Savannah port?'",
              "Causal AI provides high-confidence forecasts of outcomes under scenarios that have never occurred historically."
            ],
            bullets: [
              "Scenario Modeling: Running multi-variant simulations to test infrastructure resilience.",
              "Root Cause Analysis: Automatically tracing disruptions back to their origins.",
              "Optimized Actions: Recommending actions that modify the causal path to prevent delays."
            ]
          }
        ],
        conclusion: "Transitioning your supply chain logic from correlation-based forecasting to causal reasoning is the key to building resilient, self-healing operational structures."
      }
    },
    {
      id: 4,
      title: "Webinar: Bridging the Gap Between Data and Decisions",
      category: "Webinars",
      date: "February 1, 2026",
      readTime: "45 min watch",
      excerpt:
        "Watch our latest session on how to build a data culture that empowers frontline managers to make data-backed decisions every day.",
      author: "Beacon Experts",
      image: "/blog_dashboard.png",
      content: {
        subtitle: "Watch our latest session on how to build a data culture that empowers frontline managers to make data-backed decisions.",
        introduction: "Despite investing millions in modern data stacks, many organizations still struggle to make data-driven decisions at the frontline. Why does this disconnect persist, and how can we bridge it?",
        sections: [
          {
            title: "Key Topic: The Analytics Trap",
            paragraphs: [
              "Many businesses make the mistake of generating hundreds of dashboards, which leads to decision paralysis rather than clarity.",
              "The goal should be to deliver actionable insights directly inside the tools that frontline employees use every single day."
            ]
          },
          {
            title: "Embedding Contextual Insights",
            paragraphs: [
              "Rather than expecting managers to search through Tableau or PowerBI, organizations should push contextual alerts into Slack, Salesforce, or Microsoft Teams.",
              "For example, alerting a logistics lead when a shipment has a 70% probability of delay, along with three potential resolutions."
            ],
            bullets: [
              "Actionable Alerts: Simple notifications with recommended options.",
              "Natural Language Search: Empowering non-technical users to query database metrics via chat.",
              "Standardized Metrics: Creating a single source of truth for all business definitions."
            ]
          }
        ],
        conclusion: "A true data culture is built on access, clarity, and action. Watch the full recorded webinar to learn how Beacon is helping enterprise teams democratize data."
      }
    },
    {
      id: 5,
      title: "Mastering Data Visualization: Executive Dashboard Toolkit",
      category: "Toolkits",
      date: "January 28, 2026",
      readTime: "Downloaded 5k+ times",
      excerpt:
        "A curated collection of dashboard templates and chart selection guides designed specifically for C-suite reporting and board meetings.",
      author: "UX Design Team",
      image: "/blog_analytics.png",
      content: {
        subtitle: "A curated collection of dashboard templates and chart selection guides designed specifically for C-suite reporting.",
        introduction: "When presenting data to executive teams and board members, clarity is your ultimate metric. A cluttered dashboard raises more questions than it answers.",
        sections: [
          {
            title: "Design Philosophy: Three Levels of Detail",
            paragraphs: [
              "An executive dashboard should be structured hierarchically. The most critical KPIs must be visible at a glance, with the ability to drill down into operational details only when needed."
            ],
            bullets: [
              "Strategic View: High-level KPIs showing direction (e.g., ARR growth, Net Revenue Retention).",
              "Tactical View: Middle-tier metrics highlighting progress (e.g., pipeline coverage, customer health scores).",
              "Operational View: Detailed tables for granular troubleshooting and department leads."
            ]
          },
          {
            title: "Data Visualization Best Practices",
            paragraphs: [
              "Color should be used sparingly and deliberately. Avoid multi-colored dashboards; instead, use neutral tones (grays, dark blues) and save vibrant colors (red, green) for alerts and status changes.",
              "Ensure layouts follow a natural reading order—from top-left (most critical summary) to bottom-right (supporting details)."
            ]
          }
        ],
        conclusion: "This toolkit includes standardized template files for Figma, PowerBI, and Tableau. Download the resource to begin elevating your organization's executive reports."
      }
    },
    {
      id: 6,
      title: "Healthcare Efficiency: Reducing Patient Wait Times with AI",
      category: "Case Studies",
      date: "January 22, 2026",
      readTime: "9 min read",
      excerpt:
        "Discover how hospital networks use flow analytics to predict patient inflow and optimize staffing schedules in real-time.",
      author: "Healthcare Team",
      image: "/blog_ai.png",
      content: {
        subtitle: "Discover how hospital networks use flow analytics to predict patient inflow and optimize staffing schedules in real-time.",
        introduction: "Emergency departments and out-patient clinics operate in environments of extreme variability. Accurately matching healthcare staffing to patient inflow is vital for both care quality and budget compliance.",
        sections: [
          {
            title: "The Challenge",
            paragraphs: [
              "A regional hospital network faced patient wait times exceeding 4.5 hours during peak periods, leading to high staff burnout and patient dissatisfaction.",
              "Traditional scheduling models relied on simple historical averages, which failed to predict surges driven by weather events, flu seasons, or regional holidays."
            ]
          },
          {
            title: "The Solution",
            paragraphs: [
              "We deployed a machine learning workflow that predicts patient volume by hours, days, and department.",
              "By integrating historical intake logs, local epidemiological reports, and regional weather patterns, the system generates real-time staffing recommendations."
            ],
            bullets: [
              "Volume Forecasting: Predicting surges 48 hours in advance with over 90% accuracy.",
              "Dynamic Schedule Optimization: Assisting managers in aligning staff shifts to predicted demand spikes.",
              "Resource Allocation: Optimizing bed availability and equipment locations."
            ]
          },
          {
            title: "The Results",
            paragraphs: [
              "Within six months, the hospital network saw significant improvements in patient throughput and operational performance."
            ],
            bullets: [
              "Wait Time Reduction: A 35% drop in average emergency room wait times.",
              "Staff Burnout Mitigation: 22% reduction in nurse scheduling conflicts and overtime costs.",
              "Satisfaction: Significant improvement in patient satisfaction scores (HCAHPS)."
            ]
          }
        ],
        conclusion: "Using predictive analytics in healthcare is not just about cutting costs—it is about delivering faster, safer patient care when it is needed most."
      }
    },
    {
      id: 7,
      title: "Building Trust in AI: A Framework for Algorithmic Transparency",
      category: "Whitepapers",
      date: "January 18, 2026",
      readTime: "22 min read",
      excerpt:
        "Deep dive into the legal and ethical framework required when deploying AI systems that make financial or operational choices.",
      author: "Compliance Team",
      image: "/blog_analytics.png",
      content: {
        subtitle: "Deep dive into the legal and ethical framework required when deploying AI systems that make financial or operational choices.",
        introduction: "When an algorithm decides who gets a loan, how a medical patient is triaged, or which supply container is prioritized, 'black box' models are no longer acceptable.",
        sections: [
          {
            title: "Pillar 1: Explainability (XAI)",
            paragraphs: [
              "Implementing techniques like SHAP (SHapley Additive exPlanations) and LIME to dissect why a deep neural network made a specific prediction.",
              "Businesses must be able to explain the exact inputs and weighting factors that drove an automated decision to both auditors and customers."
            ]
          },
          {
            title: "Pillar 2: Bias Mitigation",
            paragraphs: [
              "Continuous testing of training datasets is required to detect and correct historical biases across protected classes.",
              "By establishing automated bias testing pipelines, enterprises can ensure their algorithms adhere to fairness guidelines before code reaches production."
            ]
          },
          {
            title: "Pillar 3: Model Lineage & Auditing",
            paragraphs: [
              "Tracking every version of code, data features, and hyperparameters to ensure complete reproducibility.",
              "Under audit conditions, organizations must demonstrate how their models behaved on a specific date in history, using exactly the dataset that was active then."
            ]
          }
        ],
        conclusion: "Algorithmic transparency is the key to building consumer and regulatory trust. Our whitepaper outlines a practical framework for compliance officers and engineering teams."
      }
    },
    {
      id: 8,
      title: "5 Common Pitfalls in Enterprise Data Migration",
      category: "Blog",
      date: "January 15, 2026",
      readTime: "6 min read",
      excerpt:
        "Migration isn't just about moving data—it's about maintaining integrity. Here are the top 5 mistakes we see and how to avoid them.",
      author: "Jason Miller",
      image: "/blog_dashboard.png",
      content: {
        subtitle: "Migration isn't just about moving data—it's about maintaining integrity. Here are the top 5 mistakes we see.",
        introduction: "Transitioning your on-premise data center or legacy cloud system to a modern architecture is a high-stakes operation. A minor oversight can corrupt years of historical records.",
        sections: [
          {
            title: "1. Treating Migration as a Pure IT Project",
            paragraphs: [
              "Without business stakeholder alignment, you risk migrating data that nobody uses, while missing critical operational relationships. Engage department heads early."
            ]
          },
          {
            title: "2. Neglecting Data Cleansing",
            paragraphs: [
              "Migrating bad data to a faster database just results in making bad decisions faster. Cleanse, deduplicate, and standardize data before migration."
            ]
          },
          {
            title: "3. Lack of Phased Rollbacks",
            paragraphs: [
              "Implementing an 'all-at-once' cutover creates massive operational risk. Prefer parallel runs or phased migrations where possible."
            ]
          },
          {
            title: "4. Ignoring Schema Evolution",
            paragraphs: [
              "How schema changes over time can break downstream analytics dashboard connections. Define a schema versioning policy before moving."
            ]
          },
          {
            title: "5. Insufficient Security Auditing",
            paragraphs: [
              "Forgetting to update access controls and encryption parameters during data transfer can expose sensitive customer data."
            ]
          }
        ],
        conclusion: "By planning around these common failure modes, enterprises can execute seamless data migrations that establish a solid foundation for future AI initiatives."
      }
    },
    {
      id: 9,
      title: "Unlocking Financial Agility with Real-time Forecasting",
      category: "Case Studies",
      date: "January 10, 2026",
      readTime: "15 min read",
      excerpt:
        "Learn how a global fintech firm achieved 98% forecasting accuracy across multiple currencies using our proprietary neural network models.",
      author: "Finance Solutions",
      image: "/blog_ai.png",
      content: {
        subtitle: "Learn how a global fintech firm achieved 98.4% forecasting accuracy across multiple currencies using our neural network models.",
        introduction: "In the global financial markets, currency fluctuations, regulatory changes, and inflation require organizations to re-evaluate their financial forecast continuously.",
        sections: [
          {
            title: "The Challenge",
            paragraphs: [
              "A global fintech corporation was spending 3 weeks every quarter reconciling international balances and predicting currency reserves, leaving them vulnerable to market moves.",
              "Their spreadsheets were prone to errors, and their static forecasts became stale within days of completion."
            ]
          },
          {
            title: "The Solution",
            paragraphs: [
              "We deployed Beacon's real-time financial forecasting models. The platform processes transaction flows across 24 currencies, combining historical patterns with real-time financial market tickers.",
              "This allowed the treasury team to monitor currency exposures and liquidity requirements in real-time."
            ]
          },
          {
            title: "The Results",
            paragraphs: [
              "By automating the data collection and model execution, the client dramatically reduced planning cycles."
            ],
            bullets: [
              "Planning Time: Replaced the 3-week quarterly forecasting cycle with an automated, daily real-time forecast.",
              "Accuracy: 98.4% forecasting accuracy achieved across major trading pairs.",
              "Risk Mitigation: Prevented millions of dollars in currency exposure losses during sudden market shifts."
            ]
          }
        ],
        conclusion: "Real-time forecasting turns financial operations from a historical reporting department into a forward-looking strategic asset."
      }
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
        <section className="glass-section py-8 sm:py-12 md:py-16">
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
                  onClick={() => handleCategoryChange(cat)}
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
              >
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, i) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      index={i}
                      onClick={() => setSelectedPost(post)}
                    />
                  ))
                ) : (
                  <div className="col-span-full py-32 text-center rounded-3xl border-2 border-dashed border-secondary-100 bg-secondary-50/30">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-secondary-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      More {activeCategory} Coming Soon
                    </h3>
                    <p className="text-secondary-500 max-w-xs mx-auto mb-8">
                      We're currently finalizing deep dives into this category.
                      Check back shortly for our latest findings.
                    </p>
                    <button
                      onClick={() => navigate("/company/contact")}
                      className="px-6 py-2.5 bg-brand-purple text-white font-bold rounded-full hover:scale-105 transition-transform"
                    >
                      Request a Custom Resource
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Newsletter Section ─── */}
        <section className="glass-section-alt py-8 sm:py-12 md:py-16">
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

      {/* Modal for displaying detailed content */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-secondary-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative border border-secondary-100 flex flex-col max-h-[90vh]"
            >
              {/* Cover Image & Category */}
              <div className="relative h-64 sm:h-72 overflow-hidden shrink-0">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-secondary-900 rounded-full p-2.5 shadow-md z-20 transition-all border border-secondary-200"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Category pill & Title */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                  <span className="px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full mb-3 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Content details scrollable area */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-secondary-700 text-left">
                {/* Author metadata */}
                <div className="flex items-center justify-between pb-6 border-b border-secondary-100 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                      {selectedPost.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 leading-none">
                        {selectedPost.author}
                      </p>
                      <p className="text-xs text-secondary-400 mt-1">Author</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-secondary-900">{selectedPost.date}</p>
                    <p className="text-xs text-secondary-400 mt-1">{selectedPost.readTime}</p>
                  </div>
                </div>

                {/* Render Rich Content */}
                {selectedPost.content && (
                  <div className="prose prose-secondary max-w-none space-y-4">
                    <p className="text-lg font-medium text-secondary-800 leading-relaxed italic border-l-4 border-brand-purple pl-4 py-1">
                      {selectedPost.content.subtitle}
                    </p>
                    
                    <p className="leading-relaxed">
                      {selectedPost.content.introduction}
                    </p>

                    {selectedPost.content.sections.map((section, idx) => (
                      <div key={idx} className="pt-4 space-y-3">
                        <h4 className="text-lg font-bold text-secondary-900">
                          {section.title}
                        </h4>
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                        {section.bullets && (
                          <ul className="list-disc list-inside pl-4 space-y-2 text-secondary-700">
                            {section.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                <strong className="text-secondary-900">{b.split(":")[0]}:</strong>
                                {b.substring(b.indexOf(":") === -1 ? 0 : b.indexOf(":") + 1)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {selectedPost.content.conclusion && (
                      <div className="pt-6 border-t border-secondary-100">
                        <h4 className="text-lg font-bold text-secondary-900 mb-2">
                          Summary & Next Steps
                        </h4>
                        <p className="leading-relaxed italic">
                          {selectedPost.content.conclusion}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-secondary-50 px-6 py-4 flex items-center justify-end border-t border-secondary-100 shrink-0">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-brand-purple hover:bg-brand-medium text-white font-bold rounded-xl shadow-md transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResourcesPage;
