import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/company/contact");
    };

    const handlePlatformClick = () => {
        navigate("/products/nexiraos");
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Dark gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a0b2e] to-[#0f0518]" />

                {/* Animated glowing orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-8"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-md text-brand-accent text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            Future Ready
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight"
                    >
                        AI-Native Intelligence <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-brand-purple via-brand-light to-brand-accent bg-clip-text text-transparent">
                            Platform for Modern Enterprises
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-secondary-200 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
                    >
                        Unify your data, automate decisions, and unlock true causal impact.
                        NexiraOS combines the power of Generative AI with rigorous analytical frameworks
                        to transform how your business operates.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={handleContactClick}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">Request a Demo</span>
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
                            onClick={handlePlatformClick}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            Explore Platform
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
