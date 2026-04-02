const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
              <svg
                className="w-6 h-6 text-brand-purple group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">
              Our Mission
            </h3>
            <p className="text-base text-secondary-600 leading-relaxed">
              Democratize advanced analytics, transform enterprise data into
              predictive intelligence, and deliver measurable business impact
              using AI-driven automation.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
              <svg
                className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">
              Our Vision
            </h3>
            <p className="text-base text-secondary-600 leading-relaxed">
              To become the most trusted autonomous decision intelligence
              platform enabling real-time, optimized business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
