const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Icon Container */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <svg
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9h.01M15 9h.01"
                  />
                </svg>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-glow/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-bright/20 rounded-full blur-2xl" />
              </div>

              {/* Floating badge - Changed to Innovation Focus */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border-2 border-brand-purple/20">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-brand-purple">
                    AI
                  </p>
                  <p className="text-sm font-semibold text-secondary-600">
                    Native Approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Heading */}
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple font-semibold text-xs uppercase tracking-wider rounded-full border border-brand-purple/20">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 leading-tight">
                Pioneering the Future of{" "}
                <span className="text-brand-purple">Intelligent Enterprise</span>
              </h2>
            </div>

            {/* Paragraph Text */}
            <div className="space-y-4 text-base md:text-lg text-secondary-600 leading-relaxed">
              <p>
                We are a new-age analytics firm born in the era of Generative AI.
                Unlike traditional consultancies, we don't just analyze data; we build
                intelligent systems that learn, adapt, and drive autonomous decision-making.
              </p>
              <p>
                Our mission is to democratize access to advanced AI, enabling
                businesses of all sizes to harness the power of predictive intelligence
                and causal reasoning without the technical complexity.
              </p>
              <p>
                We are building the operating system for the modern enterprise—where
                data isn't just a report, but a dynamic engine of growth.
              </p>
            </div>

            {/* Core Values / Features instead of Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-secondary-100 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Innovation First</h4>
                  <p className="text-sm text-secondary-600">Cutting-edge GenAI & ML solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Agile Delivery</h4>
                  <p className="text-sm text-secondary-600">Rapid prototyping & deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
