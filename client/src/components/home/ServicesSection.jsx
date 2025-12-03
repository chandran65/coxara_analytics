const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Engineering Services",
      description:
        "Build robust, scalable software solutions and cloud infrastructure that drive business success.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
    },
    {
      id: 2,
      title: "Generative AI and Innovation",
      description:
        "Revolutionize your business with custom LLMs, RAG pipelines, and AI agents for process automation.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      id: 3,
      title: "Data Science Consulting",
      description:
        "Transform data into strategic assets with advanced analytics, predictive modeling, and expert strategy.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      id: 4,
      title: "Corporate/academic Training",
      description:
        "Empower your team with cutting-edge skills in data science, AI, and engineering through customized training.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
    },
  ];

  return (
    <section className="py-16 md:py-16 lg:py-16 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight mb-4">
            Comprehensive Data <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
            End-to-end services designed to help you harness the power of your
            data and drive meaningful business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 border border-secondary-100 shadow-sm hover:shadow-2xl hover:border-brand-purple/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="relative mt-6 flex items-center text-brand-purple font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
