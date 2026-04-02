import { useRef, useState } from "react";

const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  ...props
}) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block magnetic ${className}`}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
