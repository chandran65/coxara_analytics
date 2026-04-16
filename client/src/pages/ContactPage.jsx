import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

/* ─── Animated floating dots background ─── */
const FloatingGrid = () => (
  <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {Array.from({ length: 12 }, (_, i) => {
        const x = 5 + Math.random() * 90;
        const y = 5 + Math.random() * 90;
        return (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={1.5 + Math.random() * 2}
            fill="#7C3AED"
            initial={{ opacity: 0.15 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              cy: [`${y}%`, `${y - 3}%`, `${y}%`],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  </div>
);

/* ─── Light hero — matching site aesthetic ─── */
const ContactHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Let's", "Build", "Something", "Great", "Together"];
  const specialWords = ["Great", "Together"];

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

      <FloatingGrid />

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
              Contact Us
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
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold ${specialWords.includes(word)
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
            Have a project in mind? We'd love to hear about it. Reach out and
            let's turn your data into actionable intelligence.
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

/* ─── Animated form field wrapper ─── */
const FormField = ({ label, required, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    <label className="block text-sm font-semibold text-secondary-700 mb-2">
      {label} {required && <span className="text-brand-purple">*</span>}
    </label>
    {children}
  </motion.div>
);

/* ─── Main Contact Page ─── */
const ContactPage = () => {
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ── HubSpot CRM ─────────────────────────────────────────────────────
  // Set VITE_HS_PORTAL and VITE_HS_FORM in your .env file.
  //   PORTAL_ID  → HubSpot Settings → Account Setup → Your Account
  //   FORM_GUID  → HubSpot Marketing → Forms → your form → share URL
  const HS_PORTAL = import.meta.env.VITE_HS_PORTAL || "";
  const HS_FORM   = import.meta.env.VITE_HS_FORM || "";

  // ── Validation helpers ──────────────────────────────────────────────
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;
  const MAX_FIELD  = 200;
  const MAX_MSG    = 2000;

  const [formError, setFormError] = useState("");
  // Honeypot — invisible to real users, bots will fill it in
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Anti-spam honeypot check
    if (honeypot) return;

    // Client-side validation
    if (!formData.name.trim() || formData.name.length > MAX_FIELD) {
      setFormError("Please enter a valid name (max 200 characters).");
      return;
    }
    if (!EMAIL_RE.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (formData.phone && !PHONE_RE.test(formData.phone)) {
      setFormError("Please enter a valid phone number.");
      return;
    }
    if (!formData.subject.trim() || formData.subject.length > MAX_FIELD) {
      setFormError("Please enter a subject (max 200 characters).");
      return;
    }
    if (!formData.message.trim() || formData.message.length > MAX_MSG) {
      setFormError("Please enter a message (max 2000 characters).");
      return;
    }

    setIsSubmitting(true);

    const [firstName, ...rest] = formData.name.trim().split(" ");
    const lastName = rest.join(" ") || "";
    let success = false;

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "";

    // 1) HubSpot CRM — auto-creates Contact + notifies you
    if (!HS_PORTAL || !HS_FORM) {
      // Skip HubSpot if not configured
    } else try {
      const hsRes = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL}/${HS_FORM}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstName },
              { name: "lastname",  value: lastName },
              { name: "email",     value: formData.email },
              { name: "phone",     value: formData.phone },
              { name: "company",   value: formData.company },
              { name: "message",   value: `Subject: ${formData.subject}\n\n${formData.message}` },
            ],
            context: {
              pageUri: "https://www.roxbee.co.in/company/contact",
              pageName: "ROXBEE Analytics — Contact Page",
            },
          }),
        }
      );
      if (hsRes.ok) success = true;
    } catch { /* fall through */ }

    // 2) Formspree — emails director@roxbee.co.in as backup
    if (!formspreeId) {
      // Skip Formspree if not configured
    } else try {
      const fpRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (fpRes.ok) success = true;
    } catch { /* ignore */ }

    setIsSubmitting(false);
    if (success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please email us directly at director@roxbee.co.in");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl border-2 bg-white text-secondary-900 placeholder:text-secondary-300 transition-all duration-300 outline-none ${focusedField === field
      ? "border-brand-purple shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
      : "border-secondary-200 hover:border-secondary-300"
    }`;

  const contactInfo = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      title: "Email Us",
      content: "director@roxbee.co.in",
      link: "mailto:director@roxbee.co.in",
      accent: "from-violet-600 to-purple-400",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
      title: "Call Us",
      content: "+91- 7010439447",
      link: "tel:+917010439447",
      accent: "from-indigo-500 to-violet-400",
    },
    {
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
      title: "Visit Us",
      content:
        "No:58,Marudhar Town, Phase-II, Perumalpattu, Tiruvallur-602024",
      link: "https://maps.app.goo.gl/PMnRPv8DVY8Cx6FP7",
      accent: "from-purple-600 to-fuchsia-400",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: null,
      accent: "from-fuchsia-500 to-violet-400",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
      link: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      ),
      link: "https://twitter.com",
    },
    {
      name: "GitHub",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
      link: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ContactHero />

      {/* Main Content */}
      <div id="page-content">
        {/* ─── Form + Contact Info ─── */}
        <section className="glass-section py-16 sm:py-24 md:py-32">

          <div className="container-custom relative z-10">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/[0.06] border border-brand-purple/15 rounded-full mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                  Get Started
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                How Can We{" "}
                <span className="bg-gradient-to-r from-brand-purple via-brand-accent to-brand-glow bg-clip-text text-transparent">
                  Help You?
                </span>
              </h2>
              <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
                Choose your preferred way to connect with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
              {/* ─── Contact Form (3 cols) ─── */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-3xl border border-secondary-100 shadow-xl shadow-secondary-200/20 p-8 sm:p-10 relative overflow-hidden">
                  {/* Decorative corner gradients */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-purple/[0.04] to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-accent/[0.03] to-transparent pointer-events-none" />

                  {/* Form header */}
                  <div className="relative mb-8">
                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-secondary-500 text-sm">
                      Fill out the form and we'll get back within 24 hours.
                    </p>
                    <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-full" />
                  </div>

                  <form onSubmit={handleSubmit} className="relative space-y-6">
                    {/* Honeypot anti-spam field — hidden from real users */}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                      <input
                        type="text"
                        name="website_url"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {formError && (
                      <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {formError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Full Name" required delay={0.05}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          maxLength={200}
                          className={inputClass("name")}
                          placeholder="John Doe"
                        />
                      </FormField>
                      <FormField label="Email Address" required delay={0.1}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClass("email")}
                          placeholder="john@company.com"
                        />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Phone Number" delay={0.15}>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClass("phone")}
                          placeholder="+1 (555) 123-4567"
                        />
                      </FormField>
                      <FormField label="Company Name" delay={0.2}>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClass("company")}
                          placeholder="Your Company"
                        />
                      </FormField>
                    </div>

                    <FormField label="Subject" required delay={0.25}>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        required
                        maxLength={200}
                        className={inputClass("subject")}
                        placeholder="How can we help?"
                      />
                    </FormField>

                    <FormField label="Message" required delay={0.3}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        maxLength={2000}
                        rows={5}
                        className={`${inputClass("message")} resize-none`}
                        placeholder="Tell us about your project..."
                      />
                    </FormField>

                    {/* Submit button */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-accent text-white font-bold rounded-xl shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 transition-shadow duration-300 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70"
                      >
                        <AnimatePresence mode="wait">
                          {submitted ? (
                            <motion.span
                              key="done"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-2"
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
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Message Sent!
                            </motion.span>
                          ) : isSubmitting ? (
                            <motion.span
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              Sending...
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-2"
                            >
                              Send Message
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
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>

              {/* ─── Contact Info Cards (2 cols) ─── */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="lg:col-span-2 flex flex-col gap-5"
              >
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <motion.div
                      {...(isTouchDevice
                        ? { whileTap: { scale: 0.98 } }
                        : { whileHover: { y: -3, scale: 1.01 } })}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="glow-card group rounded-2xl p-6 relative overflow-hidden"
                    >
                      {/* Top accent line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${info.accent} ${isTouchDevice ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                      />

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.accent} p-[2px] flex-shrink-0`}
                        >
                          <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {info.icon}
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-bold text-secondary-900 mb-1 text-sm">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={
                                info.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                info.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-secondary-600 hover:text-brand-purple transition-colors text-sm leading-relaxed break-words"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-secondary-600 text-sm leading-relaxed">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Social Links Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-1"
                >
                  <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-100 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/[0.04] to-transparent pointer-events-none rounded-2xl" />
                    <h4 className="font-display font-bold text-secondary-900 mb-1 text-sm">
                      Follow Us
                    </h4>
                    <p className="text-secondary-400 text-xs mb-4">
                      Stay updated on social media
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...(isTouchDevice
                            ? { whileTap: { scale: 0.9 } }
                            : {
                              whileHover: { scale: 1.15, y: -2 },
                              whileTap: { scale: 0.9 },
                            })}
                          className="w-10 h-10 rounded-xl bg-white border border-secondary-100 flex items-center justify-center text-secondary-400 hover:bg-gradient-to-br hover:from-brand-purple hover:to-brand-accent hover:text-white hover:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                          aria-label={social.name}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {social.icon}
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Map Section ─── */}
        <section className="glass-section-alt py-16 md:py-20">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-secondary-900 mb-3">
                Find Us{" "}
                <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
                  Here
                </span>
              </h2>
              <p className="text-secondary-500 max-w-lg mx-auto">
                Visit our office — we're always happy to meet in person.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-3xl border border-secondary-100 shadow-lg shadow-secondary-200/20 overflow-hidden h-80 md:h-96 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-secondary-100/50" />
              <div className="relative text-center px-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-purple/20"
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </motion.div>
                <p className="text-base font-semibold text-secondary-600 mb-1">
                  Interactive Map
                </p>
                <p className="text-sm text-secondary-400">Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
