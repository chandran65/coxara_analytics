import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection, SectionHeading } from "../ui";

const resources = [
  {
    id: "whitepapers",
    title: "Whitepapers",
    description:
      "Deep-dive technical insights into data platforms, AI governance, experimentation science, and enterprise automation.",
    cta: "Download Whitepaper",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
];

const ResourcesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 glass-section-alt relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/[0.06] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/[0.05] rounded-full blur-[50px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Resources"
            title="Latest"
            highlight="Insights"
            description="Stay ahead of the curve with our latest research, whitepapers, and strategic guides."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8 lg:gap-10 mt-16">
          {resources.map((resource, index) => (
            <AnimatedSection key={resource.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-purple/[0.12] transition-all duration-400 border border-white/30 hover:border-brand-purple/30"
              >
                {/* Image with enhanced zoom */}
                <div className="absolute inset-0">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/95 via-secondary-950/50 to-secondary-950/10 group-hover:from-secondary-950/98 group-hover:via-secondary-950/60 transition-all duration-500" />
                </div>

                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-purple-light transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-secondary-300 mb-8 leading-relaxed max-w-md group-hover:text-secondary-200 transition-colors duration-300">
                    {resource.description}
                  </p>
                  <div>
                    <button
                      onClick={() => navigate("/resources")}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-semibold rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-purple/20 hover:scale-105"
                    >
                      {resource.cta}
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
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
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
