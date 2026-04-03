import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  amount = 0.15,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const dir = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, y: dir.y, x: dir.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
