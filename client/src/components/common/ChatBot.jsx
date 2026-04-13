import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Brand-aligned FAQ responses ── */
const BOT_KNOWLEDGE = [
  {
    keywords: ["hello", "hi", "hey", "greet", "good morning", "good afternoon"],
    answer:
      "Hello! 👋 Welcome to COXARA Analytics! I'm your AI assistant. I can help you learn about our data analytics services, solutions, industries we serve, and much more. What would you like to know?",
  },
  {
    keywords: ["who are you", "what is coxara", "about coxara", "tell me about coxara", "company overview", "coxara analytics"],
    answer:
      "COXARA Analytics is a cutting-edge data intelligence platform specializing in transforming complex data into actionable insights. We help enterprises harness the power of AI, machine learning, and advanced analytics to drive smarter decisions. 🚀",
  },
  {
    keywords: ["service", "offer", "provide", "capabilities", "do", "help"],
    answer:
      "We offer a comprehensive suite of services:\n\n• 📊 **Business Intelligence & Dashboards**\n• 🤖 **AI/ML Model Development**\n• 🔮 **Predictive Analytics**\n• 🏭 **Industrial IoT Analytics**\n• ☁️ **Cloud Data Engineering**\n• 📈 **Data Strategy Consulting**\n\nVisit our Services page to explore each in detail!",
  },
  {
    keywords: ["industry", "sector", "vertical", "market", "domain", "speciali"],
    answer:
      "COXARA Analytics serves multiple industries:\n\n• 🏭 Manufacturing & Industry 4.0\n• 🏥 Healthcare & Life Sciences\n• 💰 BFSI (Banking, Finance & Insurance)\n• 🛒 Retail & E-Commerce\n• 🚚 Supply Chain & Logistics\n• ⚡ Energy & Utilities\n\nWe tailor analytics solutions to each sector's unique challenges.",
  },
  {
    keywords: ["product", "coresight", "core sight", "enterprise co-pilot", "conversational ai", "chat with data", "natural language"],
    answer:
      "Our flagship product is **COXARA CoreSight** — your Enterprise AI Co-Pilot! 🚀\n\nCoresight lets business users chat with their data in plain English — no SQL, no data prep needed. Here's what it does:\n\n• 🧠 **Answers to Decisions** — Goes beyond 'what happened' to tell you why & what to do next\n• 🏷️ **Built for Business Context** — Speaks your KPIs, not generic AI jargon\n• 🔍 **Data-Backed Insights** — Fully traceable, auditable, no hallucinated numbers\n• 🚨 **Proactive Intelligence** — Surfaces anomalies & risks before they impact you\n• 🔐 **Enterprise-Ready** — Role-based access, cloud/on-prem/hybrid deployment\n\nWant to see CoreSight in action? Request a demo!",
  },
  {
    keywords: ["solution", "platform", "tool", "offer", "what do you build"],
    answer:
      "We offer AI-powered analytics platforms and customizable enterprise solutions tailored to your business needs. Our flagship is **COXARA CoreSight** — an enterprise conversational AI that lets you chat with your data. Want me to connect you with our team for a personalized demo?",
  },
  {
    keywords: ["contact", "reach", "email", "phone", "touch", "talk", "speak", "demo", "meet"],
    answer:
      "We'd love to hear from you! 📞\n\nYou can:\n• Visit our **Contact page** to fill out a quick form\n• Request a **free demo** of our platform\n• Our team typically responds within 24 hours\n\nShall I take you to the contact page?",
  },
  {
    keywords: ["career", "job", "hire", "work", "join", "team", "openin", "recruit"],
    answer:
      "We're always looking for passionate data enthusiasts! 🎯\n\nCheck out our **Careers page** for current openings in:\n• Data Science & ML Engineering\n• Full-Stack Development\n• Business Analytics\n• Cloud Architecture\n\nAre you interested in joining COXARA Analytics?",
  },
  {
    keywords: ["price", "cost", "pricing", "plan", "package", "fee", "budget"],
    answer:
      "Our pricing is flexible and tailored to your business size and needs. We offer:\n\n• 💼 Starter plans for SMBs\n• 🏢 Enterprise licensing\n• 🤝 Custom project-based pricing\n\nContact our sales team for a personalized quote that fits your budget!",
  },
  {
    keywords: ["resource", "blog", "article", "learn", "document", "case study", "whitepaper"],
    answer:
      "Explore our **Resources hub** for:\n• 📚 In-depth whitepapers\n• 📰 Industry blogs & articles\n• 🎥 Webinar recordings\n• 📋 Case studies\n\nStay ahead of the curve with our thought leadership content!",
  },
  {
    keywords: ["ai", "artificial", "machine learning", "ml", "llm", "gpt", "intelligence"],
    answer:
      "AI & Machine Learning is at the heart of everything we do at COXARA! 🧠\n\nWe build custom ML models, integrate LLMs into business workflows, deploy computer vision pipelines, and create predictive systems that learn and adapt over time. What specific AI challenge are you looking to solve?",
  },
  {
    keywords: ["data", "analytics", "insight", "report", "dashboard", "kpi", "metric"],
    answer:
      "Data analytics is our core strength! 📊\n\nWe transform raw data into:\n• Real-time dashboards & KPI tracking\n• Predictive models & forecasts\n• Automated reporting pipelines\n• Custom business intelligence tools\n\nWhat type of data challenge are you facing?",
  },
  {
    keywords: ["cloud", "aws", "azure", "gcp", "google", "microsoft", "amazon"],
    answer:
      "We're cloud-agnostic and work across all major platforms:\n\n• ☁️ **AWS** — SageMaker, Redshift, Glue\n• 🔵 **Azure** — Synapse, ML Studio, Data Factory\n• 🟡 **GCP** — BigQuery, Vertex AI, Dataflow\n\nWe design robust, scalable cloud data architectures for enterprises.",
  },
  {
    keywords: ["thank", "thanks", "appreciate", "great", "awesome", "nice", "good"],
    answer:
      "You're welcome! 😊 It's my pleasure to assist. Is there anything else you'd like to know about COXARA Analytics? I'm here to help!",
  },
  {
    keywords: ["bye", "goodbye", "see you", "later", "exit", "close"],
    answer:
      "Goodbye! 👋 Thank you for visiting COXARA Analytics. Feel free to chat anytime — we're always here to help you unlock the power of your data!",
  },
];

const DEFAULT_RESPONSE =
  "That's a great question! 🤔 I'm still learning all the details. For the most accurate answer, I'd recommend reaching out to our team directly via the **Contact page** — they'll be happy to help you within 24 hours!";

const INITIAL_MESSAGES = [
  {
    id: 1,
    from: "bot",
    text: "👋 Hi there! I'm **Coxara Yukti**, your COXARA Analytics assistant.\n\nHow can I help you today? You can ask me about our services, industries, products, careers, or anything else!",
    time: new Date(),
  },
];

const QUICK_REPLIES = [
  "What services do you offer?",
  "Which industries do you serve?",
  "I'd like a demo",
  "Careers at Coxara",
  "Tell me about your products",
];

function findAnswer(input) {
  const lower = input.toLowerCase();
  for (const entry of BOT_KNOWLEDGE) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return DEFAULT_RESPONSE;
}

function formatText(text) {
  // Convert **bold** and \n to JSX
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

const TypingIndicator = () => (
  <div className="flex items-end gap-2 mb-3">
    <div className="w-7 h-7 rounded-full bg-white border border-secondary-100 flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
      <img src="/yukti_avatar.png" alt="Coxara Yukti" className="w-full h-full object-cover" />
    </div>
    <div className="bg-white border border-secondary-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
      <div className="flex gap-1.5 items-center h-4">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-brand-purple/60"
            style={{
              animation: `chatDot 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* Auto-open after 3 seconds on first visit */
  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem("coxara_chat_opened");
    if (!alreadyOpened) {
      const timer = setTimeout(() => {
        setOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("coxara_chat_opened", "1");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  /* Stop pulse after open */
  useEffect(() => {
    if (open) {
      setShowPulse(false);
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  /* Scroll to latest message */
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, open, typing]);

  const sendMessage = (text) => {
    const userText = (text || input).trim();
    if (!userText) return;
    setInput("");

    const userMsg = {
      id: Date.now(),
      from: "user",
      text: userText,
      time: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    // Simulate bot thinking delay
    const delay = 800 + Math.random() * 700;
    setTimeout(() => {
      const answer = findAnswer(userText);
      setTyping(false);
      const botMsg = {
        id: Date.now() + 1,
        from: "bot",
        text: answer,
        time: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      if (!open) setUnread((n) => n + 1);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (d) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* ── Keyframes injection ── */}
      <style>{`
        @keyframes chatDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes chatPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(109,40,217,0.5); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(109,40,217,0); }
        }
        @keyframes chatWiggle {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          60% { transform: rotate(-4deg); }
          80% { transform: rotate(4deg); }
        }
      `}</style>

      {/* ── Floating Toggle Button ── */}
      <div className="fixed bottom-24 right-8 z-[70]">
        <motion.button
          id="chatbot-toggle-btn"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-purple to-brand-medium text-white shadow-xl shadow-brand-purple/40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:ring-offset-2"
          style={
            showPulse && !open
              ? { animation: "chatPulse 2s ease-in-out infinite" }
              : {}
          }
          aria-label={open ? "Close chatbot" : "Open chatbot"}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Unread badge */}
          <AnimatePresence>
            {!open && unread > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white"
              >
                {unread}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Tooltip hint */}
        <AnimatePresence>
          {!open && showPulse && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ delay: 0.5 }}
              className="absolute right-16 bottom-3 bg-white rounded-xl shadow-lg shadow-secondary-200/40 border border-secondary-100 px-3 py-2 text-xs text-secondary-700 font-medium whitespace-nowrap pointer-events-none"
            >
              Chat with Yukti ✨
              <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-44 right-8 z-[70] w-[370px] max-w-[calc(100vw-2rem)] flex flex-col"
            style={{
              height: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px -12px rgba(109,40,217,0.28), 0 0 0 1px rgba(109,40,217,0.12)",
            }}
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-gradient-to-r from-brand-purple to-brand-medium px-5 py-4 flex items-center gap-3 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative w-10 h-10 rounded-full bg-white border-2 border-white/40 flex-shrink-0 overflow-hidden shadow-md">
                <img src="/yukti_avatar.png" alt="COXARA" className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-none">
                  Coxara Yukti
                </p>
                <p className="text-white/70 text-xs mt-1">
                  COXARA AI Assistant • Online
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="relative text-white/70 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Close chat"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 bg-secondary-50 custom-scrollbar flex flex-col">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-end gap-2 mb-3 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-white border border-secondary-100 flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
                      <img src="/yukti_avatar.png" alt="Coxara Yukti" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-gradient-to-br from-brand-purple to-brand-medium text-white rounded-2xl rounded-br-sm"
                        : "bg-white border border-secondary-100 text-secondary-800 rounded-2xl rounded-bl-sm shadow-sm"
                    } px-4 py-3 text-sm leading-relaxed`}
                  >
                    {formatText(msg.text)}
                    <p
                      className={`text-[10px] mt-1.5 ${msg.from === "user" ? "text-white/60" : "text-secondary-400"}`}
                    >
                      {formatTime(msg.time)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {typing && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && !typing && (
              <div className="flex-shrink-0 px-3 py-2 bg-secondary-50 border-t border-secondary-100 flex gap-2 overflow-x-auto custom-scrollbar">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-brand-purple/30 bg-white text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-200 font-medium whitespace-nowrap"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <div className="flex-shrink-0 bg-white border-t border-secondary-100 px-4 py-3 flex items-center gap-2">
              <input
                ref={inputRef}
                id="chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 bg-secondary-50 rounded-full px-4 py-2.5 text-sm text-secondary-800 placeholder-secondary-400 border border-secondary-200 focus:outline-none focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/10 transition-all"
                maxLength={400}
              />
              <motion.button
                id="chatbot-send-btn"
                onClick={() => sendMessage()}
                disabled={!input.trim() || typing}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-medium text-white flex items-center justify-center shadow-md shadow-brand-purple/30 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity flex-shrink-0"
                aria-label="Send message"
              >
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Footer brand */}
            <div className="flex-shrink-0 bg-white py-1.5 text-center">
              <p className="text-[10px] text-secondary-400">
                Powered by{" "}
                <span className="text-brand-purple font-semibold">
                  COXARA Analytics
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
