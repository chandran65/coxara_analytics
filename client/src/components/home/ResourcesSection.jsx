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
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    description:
      "Perspectives on emerging trends, practical frameworks, and strategic guidance to help leaders navigate the AI-driven enterprise landscape.",
    cta: "Explore Insights",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Resources"
            title="Latest"
            highlight="Insights"
            description="Stay ahead of the curve with our latest research, whitepapers, and strategic guides."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16">
          {resources.map((resource, index) => (
            <AnimatedSection key={resource.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/95 via-secondary-950/40 to-transparent" />
                </div>

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-secondary-300 mb-8 leading-relaxed max-w-md">
                    {resource.description}
                  </p>
                  <div>
                    <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-semibold rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-lg">
                      {resource.cta}
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
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
