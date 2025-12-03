import React from 'react';
import PageHero from "../components/common/PageHero";
import PlatformStudios from "../components/home/PlatformStudios";

const NexiraOSPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <PageHero
                title="NexiraOS"
                subtitle="Autonomous Decision Intelligence Platform"
                backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
            />

            {/* Platform Studios Section */}
            <PlatformStudios />

            {/* Introduction Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                            Marketing Mix Modeling
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                            Optimize Your <span className="gradient-text">Marketing Impact</span>
                        </h2>
                        <p className="text-lg text-secondary-600 leading-relaxed">
                            NexiraOS uses advanced Marketing Mix Modeling (MMM) to help you understand channel attribution, analyze ROI, optimize budgets, and plan future scenarios with precision.
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            {
                                title: "Channel Attribution",
                                desc: "Identify which marketing channels drive the most impact.",
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            },
                            {
                                title: "ROI Analysis",
                                desc: "Calculate the exact return on investment for every dollar spent.",
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "Budget Optimization",
                                desc: "AI-driven recommendations on how to allocate your budget.",
                                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            },
                            {
                                title: "Scenario Planning",
                                desc: "Simulate outcomes based on changes in media spend.",
                                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6 text-brand-purple group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                                <p className="text-secondary-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 md:py-24 bg-secondary-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto" />
                    </div>

                    <div className="space-y-12 max-w-5xl mx-auto">
                        {[
                            { step: "01", title: "Prepare Your Data", desc: "Upload time-series data including dates, KPI metrics (sales, revenue), and media spend across channels." },
                            { step: "02", title: "Connect Data Source", desc: "Seamlessly integrate your CSV files via our Data Studio interface." },
                            { step: "03", title: "Configure Model", desc: "Select your KPI, media channels, and control variables like seasonality or price." },
                            { step: "04", title: "Train & Analyze", desc: "Run the model to generate insights on channel contribution, ROI, and model quality (R²)." },
                            { step: "05", title: "Optimize", desc: "Use AI recommendations to reallocate budget for maximum efficiency." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-white p-8 rounded-3xl shadow-sm border border-secondary-100">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">{item.title}</h3>
                                    <p className="text-lg text-secondary-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced Capabilities */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-6">
                                Advanced Modeling Capabilities
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-purple mb-2">Adstock (Carryover Effect)</h3>
                                    <p className="text-secondary-600">
                                        Model the delayed and prolonged effect of advertising. We account for how long your ads continue to influence customers after the initial exposure.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-purple mb-2">Saturation (Diminishing Returns)</h3>
                                    <p className="text-secondary-600">
                                        Understand the limit of your spend efficiency. Our models automatically capture the point where doubling spend no longer doubles impact.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-purple mb-2">Budget Optimization</h3>
                                    <p className="text-secondary-600">
                                        Allocate your budget based on marginal ROI. Our system identifies the "next best dollar" to spend across all your channels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-purple/5 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                alt="Analytics Dashboard"
                                className="relative rounded-3xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-secondary-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Ready to Optimize Your Marketing?</h2>
                    <p className="text-xl text-secondary-300 mb-10 max-w-2xl mx-auto">
                        Start making data-driven decisions with NexiraOS today.
                    </p>
                    <a href="/company/contact" className="inline-block px-8 py-4 bg-brand-purple hover:bg-brand-light text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-purple/50">
                        Request a Demo
                    </a>
                </div>
            </section>
        </div>
    );
};

export default NexiraOSPage;
