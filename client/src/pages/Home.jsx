import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import IndustriesSection from "../components/home/IndustriesSection";
import ClientTicker from "../components/home/ClientTicker";
import FeaturedCaseStudy from "../components/home/FeaturedCaseStudy";
import MissionVisionSection from "../components/home/MissionVisionSection";
import PlatformStudios from "../components/home/PlatformStudios";
import ResourcesSection from "../components/home/ResourcesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Client Ticker - Trust Signal */}
      <ClientTicker />

      {/* About Section */}
      <AboutSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Platform Studios (Services) */}
      <PlatformStudios />

      {/* Featured Case Study - Break up the flow */}
      <FeaturedCaseStudy />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Why Choose Us - MathCo Style */}
      <div className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple font-semibold text-xs uppercase tracking-wider rounded-full border border-brand-purple/20 mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6 leading-tight">
                Empowering Business <br /> Through <span className="text-brand-purple">Innovation</span>
              </h2>
              <p className="text-base md:text-lg text-secondary-600 mb-8 leading-relaxed">
                We bridge the gap between complex data and actionable insights. Our approach combines deep industry expertise with cutting-edge technology to deliver measurable value.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Enterprise Scale", desc: "Solutions built to handle massive datasets with robust security." },
                  { title: "Future Ready", desc: "Leveraging the latest in AI and Machine Learning technologies." },
                  { title: "Client Centric", desc: "Tailored strategies that align with your specific business goals." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-purple shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{item.title}</h3>
                      <p className="text-secondary-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple/5 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-bold text-brand-purple mb-2">100+</p>
                <p className="text-secondary-600 font-medium">Enterprise clients trusting our analytics solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
