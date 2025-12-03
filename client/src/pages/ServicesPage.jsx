import PageHero from "../components/common/PageHero";

const ServicesPage = () => {
  const services = [
    {
      id: "engineering",
      title: "Engineering Services",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
      description:
        "Build robust, scalable, and high-performance software solutions. From full-stack development to cloud architecture, we engineer systems that drive business success.",
      benefits: [
        "Custom software and application development",
        "Cloud infrastructure and migration (AWS, Azure, GCP)",
        "Microservices architecture and API design",
        "Legacy system modernization",
        "DevOps and CI/CD automation",
      ],
    },
    {
      id: "gen-ai",
      title: "Generative AI and Innovation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      description:
        "Harness the power of Generative AI to revolutionize your business. We help you implement LLMs, RAG pipelines, and AI agents to automate workflows and create new value.",
      benefits: [
        "Custom LLM fine-tuning and deployment",
        "RAG (Retrieval-Augmented Generation) implementation",
        "AI agent development for process automation",
        "Generative design and content creation tools",
        "AI strategy and innovation workshops",
      ],
    },
    {
      id: "data-science",
      title: "Data Science Consulting",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "Transform your data into a strategic asset. Our expert consultants help you navigate the complexities of data analytics, from strategy formulation to model deployment.",
      benefits: [
        "Data strategy and roadmap development",
        "Advanced predictive modeling and forecasting",
        "Customer segmentation and behavior analysis",
        "Marketing mix modeling (MMM) and attribution",
        "Data governance and quality assurance",
      ],
    },
    {
      id: "training",
      title: "Enterprise Learning Program",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      description:
        "Empower your workforce and students with cutting-edge skills. We provide comprehensive training programs in data science, AI, and engineering tailored to your needs.",
      benefits: [
        "Customized corporate upskilling programs",
        "Hands-on workshops for AI and Machine Learning",
        "Executive training on Data & AI strategy",
        "Academic curriculum development and delivery",
        "Mentorship and project-based learning",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive analytics solutions to transform your business"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                End-to-End{" "}
                <span className="gradient-text">Analytics Services</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                From data collection to actionable insights, we provide
                comprehensive analytics services that empower your business to
                make informed decisions and drive measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 md:py-16 scroll-mt-20 ${index % 2 === 0
              ? "bg-gradient-to-br from-white via-primary-50/30 to-white"
              : "bg-white"
              }`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} space-y-6`}
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 shadow-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {service.icon}
                    </svg>
                    Service
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900">
                    <span className="gradient-text">{service.title}</span>
                  </h3>
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider">
                      Key Benefits
                    </p>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-secondary-700 leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-accent/20 rounded-3xl transform rotate-3" />
                    <div className="relative bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-3xl p-8 md:p-12 border-2 border-brand-purple/20 backdrop-blur-sm">
                      <svg
                        className="w-full h-64 text-brand-purple/30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 md:py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Let's Build Your Analytics Solution
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Partner with us to unlock the full potential of your data and
                  drive transformative business outcomes.
                </p>
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
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

export default ServicesPage;
