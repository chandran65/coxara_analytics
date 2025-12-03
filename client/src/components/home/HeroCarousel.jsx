import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VoiceCloningVisual from "../visuals/VoiceCloningVisual";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&q=80",
      title: "AI-Native Intelligence Platform for Modern Enterprises",
      tagline:
        "Transforming raw data into actionable intelligence with next-generation analytics.",
      highlight: "Future Ready",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&q=80",
      title: "Voice Cloning",
      customVisual: true,
      tagline:
        "Experience the future of communication with our advanced voice cloning technology.",
      highlight: "New Product",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80",
      title: "Advanced AI Solutions",
      tagline:
        "Leverage the power of artificial intelligence to predict trends and optimize performance.",
      highlight: "AI Powered",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80",
      title: "Enterprise Scale",
      tagline:
        "Built to handle the most complex data challenges with robust security and scalability.",
      highlight: "Secure",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleContactClick = () => {
    navigate("/company/contact");
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-brand-dark"
      style={{ marginTop: "80px", height: "calc(100vh - 80px)" }}
    >
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-purple/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="max-w-3xl text-left space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-in-out ${index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                  }`}
              >
                {/* Highlight Badge */}
                <div className="inline-block mb-4 animate-fade-in">
                  <span className="px-4 py-1.5 rounded-full border border-brand-light/30 bg-brand-purple/20 backdrop-blur-md text-brand-light text-sm font-semibold tracking-wide uppercase">
                    {slide.highlight}
                  </span>
                </div>

                {/* Heading */}
                {/* Heading */}
                {slide.customVisual ? (
                  <VoiceCloningVisual />
                ) : (
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
                    {slide.title === "Coxara Analytics" ? (
                      <span className="bg-gradient-to-r from-white via-brand-glow to-brand-light bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    ) : (
                      slide.title
                    )}
                  </h1>
                )}

                {/* Tagline */}
                <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-12 drop-shadow-md font-light">
                  {slide.tagline}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <button
                    onClick={handleContactClick}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10">Request a Demo</span>
                    <svg
                      className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
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

                  <button
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Talk to Us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-brand-purple/40 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 hover:scale-110 group hidden sm:block"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-brand-purple/40 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 hover:scale-110 group hidden sm:block"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
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
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? "w-12 h-1.5 bg-brand-light shadow-[0_0_10px_rgba(167,139,250,0.5)]"
              : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
