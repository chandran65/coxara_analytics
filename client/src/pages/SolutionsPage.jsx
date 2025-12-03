import PageHero from "../components/common/PageHero";

const SolutionsPage = () => {
  const solutions = [
    {
      id: "supply-chain",
      title: "Supply Chain Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16v1a3 3 0 003 3h3m0 0a1 1 0 001-1v-5a3 3 0 00-3-3h-3m-6 0a1 1 0 00-1-1V7a2 2 0 012-2h2a2 2 0 012 2v6h3m-3-6V4m-6 0v3"
        />
      ),
      description:
        "Optimize supply chain operations and inventory levels. Reduce costs, improve efficiency, and ensure product availability with predictive analytics.",
      capabilities: [
        "Demand forecasting and planning",
        "Inventory optimization",
        "Supplier risk analysis",
        "Logistics and route optimization",
        "Network design and planning",
      ],
    },
    {
      id: "financial",
      title: "Financial Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Gain deep visibility into your financial health. Streamline reporting, improve forecasting accuracy, and drive profitability with advanced financial insights.",
      capabilities: [
        "Cash flow forecasting",
        "Profitability analysis",
        "Expense management and optimization",
        "Budget variance analysis",
        "Financial risk modeling",
      ],
    },
    {
      id: "hr",
      title: "HR Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Transform talent management with data-driven insights. Improve recruitment, retention, and workforce planning to build a high-performing organization.",
      capabilities: [
        "Attrition prediction and retention",
        "Talent acquisition analytics",
        "Performance analysis",
        "Workforce planning",
        "Diversity and inclusion metrics",
      ],
    },
    {
      id: "risk",
      title: "Risk Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      ),
      description:
        "Proactively identify and mitigate business risks. Leverage AI to detect anomalies, assess credit risk, and ensure regulatory compliance.",
      capabilities: [
        "Credit risk modeling",
        "Fraud detection and prevention",
        "Operational risk assessment",
        "Regulatory compliance monitoring",
        "Scenario stress testing",
      ],
    },
    {
      id: "marketing",
      title: "Marketing Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      ),
      description:
        "Maximize marketing ROI and customer engagement. Understand campaign performance, attribution, and customer journeys to optimize spend.",
      capabilities: [
        "Marketing mix modeling",
        "Campaign attribution",
        "Customer journey mapping",
        "Sentiment analysis",
        "Churn prediction",
      ],
    },
    {
      id: "sales",
      title: "Sales Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "Accelerate revenue growth with actionable sales insights. Optimize pipelines, forecast accurately, and empower your sales team to close more deals.",
      capabilities: [
        "Sales forecasting",
        "Pipeline health analysis",
        "Win/loss analysis",
        "Territory planning",
        "Sales performance management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Analytics Solutions"
        subtitle="Innovative solutions designed to solve your toughest business challenges"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Proven Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Purpose-Built{" "}
                <span className="gradient-text">Analytics Solutions</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our battle-tested solutions address specific business challenges
                with precision and expertise. Each solution is designed to
                deliver immediate value while supporting long-term strategic
                objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-brand-purple/40 overflow-hidden scroll-mt-20"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {solution.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-4">
                        Key Capabilities
                      </p>
                      <ul className="space-y-2">
                        {solution.capabilities.map((capability, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-secondary-700"
                          >
                            <svg
                              className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Find the Right Solution for You
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Not sure which solution fits your needs? Let's discuss your
                  challenges and find the perfect analytics solution.
                </p>
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Speak with an Expert</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionsPage;
