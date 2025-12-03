import { motion } from "framer-motion";

const resources = [
    {
        id: "whitepapers",
        title: "Whitepapers",
        description:
            "Deep-dive technical insights into data platforms, AI governance, experimentation science, and enterprise automation.",
        cta: "Download Whitepaper",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    },
    {
        id: "thought-leadership",
        title: "Thought Leadership",
        description:
            "Perspectives on emerging trends, practical frameworks, and strategic guidance to help leaders navigate the AI-driven enterprise landscape.",
        cta: "Explore Insights",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
];

const ResourcesSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple font-semibold text-xs uppercase tracking-wider rounded-full border border-brand-purple/20 mb-4">
                        Resources
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                        Latest <span className="text-brand-purple">Insights</span>
                    </h2>
                    <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                        Stay ahead of the curve with our latest research, whitepapers, and strategic guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-200 mb-8 leading-relaxed max-w-md">
                                    {resource.description}
                                </p>
                                <div>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-semibold rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300">
                                        {resource.cta}
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
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
