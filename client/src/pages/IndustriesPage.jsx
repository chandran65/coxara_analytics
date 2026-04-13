const IndustriesPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-white pt-20">
      <div className="container-custom text-center max-w-3xl">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-secondary-900">
          <span className="gradient-text">Industries</span>
        </h1>
        <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Explore our tailored solutions across Retail & FMCG, Hospitality,
          Healthcare, and Banking. This section is currently being updated with
          our latest case studies and vertical-specific offerings.
        </p>
        <div className="inline-block px-6 py-3 bg-brand-purple/10 text-brand-purple font-semibold rounded-lg border border-brand-purple/20">
          🚀 Coming Soon
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
