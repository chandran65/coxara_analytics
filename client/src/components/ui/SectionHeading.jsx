import AnimatedSection from "./AnimatedSection";

const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}) => {
  const alignClass = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  return (
    <div className={`max-w-3xl mb-16 md:mb-20 ${alignClass[align]}`}>
      {badge && (
        <AnimatedSection delay={0}>
          <span
            className={`badge mb-4 ${light ? "bg-white/10 text-white/90 border-white/20" : ""}`}
          >
            {badge}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-6 ${
            light ? "text-white" : "text-secondary-900"
          }`}
        >
          {title}{" "}
          {highlight && (
            <span className={light ? "text-brand-accent" : "text-brand-purple"}>
              {highlight}
            </span>
          )}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? "text-white/70" : "text-secondary-500"
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
};

export default SectionHeading;
