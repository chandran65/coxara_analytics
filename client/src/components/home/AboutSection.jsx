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

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border-2 border-brand-purple/20">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-brand-purple">
                    10+
                  </p>
                  <p className="text-sm font-semibold text-secondary-600">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Heading */}
            <div className="space-y-3">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight">
                Transforming Data Into{" "}
                <span className="gradient-text">Business Value</span>
              </h2>
            </div>

            {/* Paragraph Text - 3 Lines */}
            <div className="space-y-4 text-lg md:text-xl text-secondary-600 leading-relaxed">
              <p>
                We are a team of passionate data scientists and machine learning
                engineers dedicated to helping businesses unlock the full
                potential of their data.
              </p>
              <p>
                Our expertise spans across advanced analytics, predictive
                modeling, and AI-driven solutions that deliver measurable
                results and drive growth.
              </p>
              <p>
                With a proven track record of successful implementations, we
                partner with organizations to transform complex data challenges
                into strategic advantages.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-brand-purple">
                  500+
                </p>
                <p className="text-sm md:text-base text-secondary-600 font-medium">
                  Projects
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-brand-purple">
                  98%
                </p>
                <p className="text-sm md:text-base text-secondary-600 font-medium">
                  Success Rate
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-brand-purple">
                  50+
                </p>
                <p className="text-sm md:text-base text-secondary-600 font-medium">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
