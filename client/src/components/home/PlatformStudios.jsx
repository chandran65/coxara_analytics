import { motion } from "framer-motion";

const studios = [
    {
        id: "data-studio",
        title: "Data Studio",
        tags: ["Connect", "Prepare", "Model", "Govern"],
        description:
            "Unify your data foundations with end-to-end pipelines, intelligent modeling frameworks, enterprise-quality governance, and accelerated data activation.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
    },
    {
        id: "experimentation-studio",
        title: "Experimentation Studio",
        tags: ["A/B Testing", "Causal Inference", "Uplift Modeling"],
        description:
            "Run experiments at scale, quantify true causal impact, and optimize product and business decisions with scientifically grounded uplift frameworks.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        id: "forecasting-studio",
        title: "Forecasting & Planning Studio",
        tags: ["Demand", "Supply", "Scenario Planning", "Budgeting"],
        description:
            "Deliver highly accurate forecasts, simulate multi-scenario outcomes, and streamline planning cycles across demand, supply, and financial workflows.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
    },
    {
        id: "decision-automation",
        title: "Decision Automation Studio",
        tags: ["Rules + ML", "Workflows", "Human-in-the-Loop"],
        description:
            "Deploy intelligent, governed decisions using hybrid rules + machine learning systems—complete with approval loops, monitoring, and auditability.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        id: "domain-intelligence",
        title: "Domain Intelligence Packs",
        tags: ["Prebuilt Industry Assets", "KPIs", "Accelerators"],
        description:
            "Jumpstart deployments with pre-configured analytics templates, domain-specific KPIs, and ready-made intelligence packs for industry verticals.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
];

const PlatformStudios = () => {
    return (
        <section className="py-24 bg-brand-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal font-semibold text-xs uppercase tracking-wider rounded-full border border-brand-teal/20 mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                        Nexira OS <span className="text-brand-teal">Platform Studios</span>
                    </h2>
                    <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive suite of intelligent studios designed to accelerate your data journey from raw inputs to automated decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studios.map((studio, index) => (
                        <motion.div
                            key={studio.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-secondary-100 hover:border-brand-teal/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-brand-teal mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {studio.icon}
                                </div>

                                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-teal transition-colors">
                                    {studio.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {studio.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-brand-light text-secondary-600 text-xs font-medium rounded-full border border-secondary-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-secondary-600 leading-relaxed mb-6">
                                    {studio.description}
                                </p>

                                <a
                                    href={`/services#${studio.id}`}
                                    className="inline-flex items-center text-brand-teal font-semibold hover:text-brand-dark transition-colors group/link"
                                >
                                    Learn more
                                    <svg
                                        className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
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
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformStudios;
