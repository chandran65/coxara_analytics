import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/company/contact");
    };

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-digital-earth-lines-network-5674/1080p.mp4"
                        type="video/mp4"
                    />
                    {/* Fallback if video fails */}
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="container-custom relative z-20 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Animated Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "out" }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
                            Solving complex business problems with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-light">
                                Data and AI
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "out" }}
                        className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12 font-light drop-shadow-md"
                    >
                        We are an AI-native consulting firm helping enterprises build
                        intelligent systems, automate decisions, and drive measurable value
                        at scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "out" }}
                        className="flex flex-col sm:flex-row items-start gap-6"
                    >
                        <button
                            onClick={handleContactClick}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-purple/90 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">Start Your Journey</span>
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
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            Explore Services
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
            >
                <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
