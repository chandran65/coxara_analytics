import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { AnimatedSection, SectionHeading } from "../components/ui";

const MindoraPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 overflow-hidden bg-secondary-950 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #6366f1 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            style={{ y: textY, opacity }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8 group"
            >
              <div className="absolute -inset-10 bg-indigo-500/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              <img 
                src="/mindora_logo_hero.png" 
                alt="Mindora AI Studio" 
                className="w-full max-w-[500px] mx-auto object-contain drop-shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-transform duration-500 relative z-10 rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-secondary-300 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              From your child’s <strong className="text-white">first line of code</strong> to building <strong className="text-indigo-300">real AI projects</strong>, 
              Mindora AI Studio makes learning fun, visual, and powerful.
            </motion.p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-900/20 hover:scale-105 hover:bg-indigo-500 transition-all">
                Start Learning
              </button>
              <button className="px-10 py-4 border-2 border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                Try a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ages Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            badge="For Every Learner"
            title="Built for Every"
            highlight="Young Learner"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                age: "Ages 4–7",
                level: "Early Explorers",
                gradient: "from-blue-500 to-cyan-400",
                bg: "bg-blue-50",
                items: [
                  "Learn through games, colors, and animations",
                  "Drag-and-drop coding blocks",
                  "Develop logic, creativity, and thinking skills"
                ]
              },
              {
                age: "Ages 8–12",
                level: "Young Creators",
                gradient: "from-indigo-600 to-purple-500",
                bg: "bg-indigo-50",
                items: [
                  "Build games, animations, and simple AI projects",
                  "Learn problem-solving and structured thinking",
                  "Start understanding how technology works"
                ]
              },
              {
                age: "Ages 13–17",
                level: "Future Innovators",
                gradient: "from-purple-600 to-pink-500",
                bg: "bg-purple-50",
                items: [
                  "Move from blocks to real coding (Python)",
                  "Build AI models, apps, and smart systems",
                  "Prepare for future careers in technology"
                ]
              }
            ].map((group, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`h-full group p-8 rounded-3xl ${group.bg} border border-transparent hover:border-indigo-200 transition-all duration-300`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                    {i === 0 ? "👶" : i === 1 ? "🧒" : "🧑🎓"}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{group.age}</h3>
                  <div className={`text-sm font-bold uppercase tracking-widest mb-6 opacity-60`}>{group.level}</div>
                  <ul className="space-y-4">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-secondary-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-secondary-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#312e81_0%,transparent_50%)] opacity-40 shrink-0" />
        <div className="container-custom relative z-10">
          <SectionHeading 
            badge="What Kids Can Do"
            title="Create and"
            highlight="Innovate"
            dark
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-indigo-500 transition-colors">🎨</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Create & Play</h3>
                  <p className="text-secondary-400 leading-relaxed">Make games, stories, and animations while learning coding basics in an environment that feels like play.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-purple-500 transition-colors">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Build AI Projects</h3>
                  <p className="text-secondary-400 leading-relaxed">Train real AI models. From face detection to voice recognition and smart personal assistants.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-pink-500 transition-colors">🧩</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Learn Step-by-Step</h3>
                  <p className="text-secondary-400 leading-relaxed">Start with the basics, grow into advanced concepts, and build a portfolio of work with confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl h-[400px] flex items-center justify-center overflow-hidden">
                {/* Visual representation of an AI canvas */}
                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-60">
                   <div className="bg-indigo-400/20 rounded-2xl border border-indigo-400/30 animate-pulse" />
                   <div className="bg-purple-400/20 rounded-2xl border border-purple-400/30 animate-pulse delay-75" />
                   <div className="bg-pink-400/20 rounded-2xl border border-pink-400/30 animate-pulse delay-150" />
                   <div className="bg-cyan-400/20 rounded-2xl border border-cyan-400/30 animate-pulse delay-225" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-xl font-bold">Project Canvas</div>
                    <div className="text-xs text-secondary-400 mt-2">v2.4 Ready for Build</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
              Why Parents & Schools Choose <span className="text-indigo-600">Mindora</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "Safe & Kid-Friendly Learning Environment",
                "No Coding Experience Needed",
                "Builds Logic, Creativity & Confidence",
                "Future-Ready Skills (AI + Coding)",
                "Designed for School Curriculum & Beyond"
              ].map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-secondary-50 rounded-2xl border border-secondary-100 group hover:bg-indigo-50 hover:border-indigo-100 transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0">✓</div>
                  <span className="text-lg font-bold text-secondary-800">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4)_0%,transparent_70%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl italic font-serif mb-12 opacity-80">"Intelligence, Unbound."</h2>
            <div className="text-3xl md:text-5xl font-display font-bold leading-tight mb-12">
              Every child is naturally curious. At Mindora, we help them explore freely, think creatively, and build intelligently.
            </div>
            <p className="text-xl opacity-80">
              From simple ideas to powerful creations—we unlock what’s already inside them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Start the Journey Today
          </h2>
          <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto">
            Give your child the power to think smarter, create confidently, and build the future.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-100 hover:scale-105 transition-all">
              Get Started Now
            </button>
            <button className="px-10 py-5 border-2 border-indigo-200 text-indigo-700 rounded-full font-bold text-lg hover:border-indigo-600 transition-all">
              Book a Demo Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindoraPage;
