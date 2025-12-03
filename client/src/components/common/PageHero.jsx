import PropTypes from "prop-types";

const PageHero = ({ title, subtitle, backgroundImage }) => {
  const defaultBg =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80";

  const scrollToContent = () => {
    const content = document.getElementById("page-content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-secondary-900"
      style={{
        marginTop: "80px",
        height: "calc(100vh - 80px)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || defaultBg}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/70 to-secondary-900/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center max-w-5xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {subtitle}
            </p>
          )}

          {/* Decorative line */}
          <div className="mt-8 mb-12 sm:mb-16 md:mb-20 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-brand-purple to-brand-accent rounded-full" />
            <div className="h-2 w-2 bg-brand-glow rounded-full" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent via-brand-accent to-brand-purple rounded-full" />
          </div>
        </div>

        {/* Scroll Indicator - Enhanced Animation */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <p className="text-white/80 text-sm sm:text-base font-medium tracking-wider uppercase animate-pulse">
            Scroll to Explore
          </p>
          <button
            onClick={scrollToContent}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
            aria-label="Scroll to content"
          >
            {/* Animated mouse icon */}
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 group-hover:border-brand-accent transition-all duration-300 group-active:scale-95">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce group-hover:bg-brand-accent transition-colors" />
            </div>
            {/* Down arrow with continuous animation */}
            <svg
              className="w-6 h-6 text-white/70 animate-bounce group-hover:text-brand-accent transition-all duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient fade - Theme-oriented subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-50/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default PageHero;
