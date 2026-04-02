const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/10 blur-3xl rounded-l-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-accent/10 blur-3xl rounded-r-full"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-xs font-medium text-brand-glow uppercase tracking-wider">
                Featured Case Study
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Revolutionizing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-accent">
                Retail Analytics
              </span>
            </h2>

            <p className="text-lg text-secondary-300 leading-relaxed max-w-xl">
              How we helped a global retail giant optimize their supply chain
              and increase profitability by 25% using our predictive modeling
              engine.
            </p>

            <div className="grid grid-cols-2 gap-8 py-6 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold text-white mb-1">25%</p>
                <p className="text-sm text-secondary-400">Profit Increase</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">10x</p>
                <p className="text-sm text-secondary-400">ROI in Year 1</p>
              </div>
            </div>

            <button className="group flex items-center gap-3 text-white font-semibold hover:text-brand-accent transition-colors">
              Read the full story
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
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

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-brand-purple/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Data Analytics Dashboard"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-medium">
                  "Coxara Analytics transformed how we view our data. The
                  insights were immediate and actionable."
                </p>
                <p className="text-brand-accent text-sm mt-2">
                  - CTO, Global Retailer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
