import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(Array.from({ length: 5 }, () => ({ x: -100, y: -100 })));
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Detect touch device
    const hasTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    const animate = () => {
      // Dot follows mouse instantly with slight smoothing
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.5;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.5;

      // Ring follows with delay
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      // Trail particles follow with increasing delay
      for (let i = 0; i < trailPositions.current.length; i++) {
        const prev = i === 0 ? dotPos.current : trailPositions.current[i - 1];
        const speed = 0.12 - i * 0.015;
        trailPositions.current[i].x += (prev.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y += (prev.y - trailPositions.current[i].y) * speed;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      trailRefs.current.forEach((ref, i) => {
        if (ref) {
          ref.style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px) translate(-50%, -50%)`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: "normal" }}
    >
      {/* Trail particles */}
      {trailPositions.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full transition-opacity duration-300"
          style={{
            width: `${4 - i * 0.5}px`,
            height: `${4 - i * 0.5}px`,
            background: `rgba(109, 40, 217, ${0.15 - i * 0.025})`,
            opacity: isHidden ? 0 : 1,
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border transition-all duration-300 ease-out"
        style={{
          width: isHovering ? "56px" : "40px",
          height: isHovering ? "56px" : "40px",
          borderColor: isHovering
            ? "rgba(109, 40, 217, 0.6)"
            : "rgba(109, 40, 217, 0.25)",
          borderWidth: isHovering ? "2px" : "1.5px",
          backgroundColor: isHovering
            ? "rgba(109, 40, 217, 0.06)"
            : "transparent",
          opacity: isHidden ? 0 : 1,
          transform: isClicking ? "scale(0.8)" : undefined,
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full transition-all duration-200 ease-out"
        style={{
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          backgroundColor: "#6D28D9",
          opacity: isHidden ? 0 : 1,
          boxShadow: isHovering
            ? "0 0 20px rgba(109, 40, 217, 0.5)"
            : "0 0 8px rgba(109, 40, 217, 0.3)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
