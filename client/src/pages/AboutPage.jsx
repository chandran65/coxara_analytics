import PageHero from "../components/common/PageHero";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="Pioneering the future of data science and machine learning solutions"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Company Info Section */}
        <section className="py-16 md:py-16 lg:py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1 space-y-6">
                {/* Company Name as Heading */}
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20">
                    Who We Are
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight">
                    Data Science &{" "}
                    <span className="gradient-text">ML Solutions</span>
                  </h2>
                </div>

                {/* Company Description */}
                <div className="space-y-4 text-lg text-secondary-600 leading-relaxed">
                  <p>
                    Founded with a vision to transform how businesses leverage
                    data, we are a leading provider of comprehensive data
                    science and machine learning solutions. Our team of expert
                    data scientists, engineers, and consultants work tirelessly
                    to deliver innovative solutions that drive real business
                    value.
                  </p>
                  <p>
                    With over a decade of experience across multiple industries,
                    we've helped hundreds of organizations unlock the power of
                    their data through advanced analytics, predictive modeling,
                    and AI-driven insights.
                  </p>
                  <p>
                    Our commitment to excellence, combined with cutting-edge
                    technology and deep domain expertise, enables us to tackle
                    the most complex data challenges and deliver solutions that
                    exceed expectations.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        Expert Team
                      </h4>
                      <p className="text-sm text-secondary-600">
                        PhDs & industry veterans with proven track records
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        Proven Solutions
                      </h4>
                      <p className="text-sm text-secondary-600">
                        10+ successful projects across industries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        Innovation First
                      </h4>
                      <p className="text-sm text-secondary-600">
                        Cutting-edge AI & ML technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        Client Success
                      </h4>
                      <p className="text-sm text-secondary-600">
                        98% client satisfaction & retention rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Company Logo/Image */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Logo Container */}
                  <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-glow/20 via-transparent to-brand-bright/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Logo/Placeholder */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-6xl sm:text-7xl font-display font-bold gradient-text">
                          DS
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                        Data Science
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-brand-glow">
                        & ML Solutions
                      </p>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-glow/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-bright/20 rounded-full blur-3xl" />
                  </div>

                  {/* Decorative badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl px-8 py-6 border-2 border-brand-purple/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <div className="text-center">
                      <p className="text-4xl font-display font-bold gradient-text">
                        Est.
                      </p>
                      <p className="text-2xl font-semibold text-secondary-900">
                        2014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-16 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-brand-purple/20 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  To empower businesses worldwide with transformative data
                  science and machine learning solutions that drive innovation,
                  efficiency, and sustainable growth. We believe in making
                  advanced analytics accessible and actionable for organizations
                  of all sizes.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-brand-purple/20 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  To be the global leader in democratizing AI and data science,
                  creating a future where every organization can harness the
                  full potential of their data to make intelligent, data-driven
                  decisions that shape a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
