import { useEffect, useRef, useState, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(
    Array.from({ length: 8 }, () => ({ x: -100, y: -100 })),
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const rafId = useRef(null);

  const handleHoverStart = useCallback((e) => {
    const target = e.target;
    if (
      target.closest("img") ||
      target.closest("video") ||
      target.closest("[data-cursor-view]")
    ) {
      setIsHovering(true);
      setCursorVariant("view");
    } else if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest('[role="button"]') ||
      target.closest("[data-cursor-hover]")
    ) {
      setIsHovering(true);
      setCursorVariant("link");
    } else if (target.closest("input") || target.closest("textarea")) {
      setIsHovering(true);
      setCursorVariant("text");
    }
  }, []);

  const handleHoverEnd = useCallback(() => {
    setIsHovering(false);
    setCursorVariant("default");
  }, []);

  useEffect(() => {
    const hasTouch = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    const handleMouseMove = (e) => {
      prevMouse.current = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
      velocity.current = {
        x: mouse.current.x - prevMouse.current.x,
        y: mouse.current.y - prevMouse.current.y,
      };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    const animate = () => {
      // Dot: fast follow
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.45;

      // Ring: smooth delayed follow with slight stretch based on velocity
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      // Glow: very slow follow for ambient effect
      glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.06;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.06;

      // Trail: cascading follow
      for (let i = 0; i < trailPositions.current.length; i++) {
        const prev = i === 0 ? dotPos.current : trailPositions.current[i - 1];
        const speed = 0.15 - i * 0.012;
        trailPositions.current[i].x +=
          (prev.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y +=
          (prev.y - trailPositions.current[i].y) * speed;
      }

      // Calculate speed for dynamic ring stretch
      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2,
      );
      const ringScale = Math.min(1 + speed * 0.008, 1.3);
      const angle =
        Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) rotate(${angle}deg) scaleX(${ringScale})`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px) translate(-50%, -50%)`;
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
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleHoverStart, handleHoverEnd]);

  if (isTouchDevice) return null;

  // Variant-specific sizes
  const ringSize =
    cursorVariant === "view"
      ? 80
      : cursorVariant === "link"
        ? 56
        : cursorVariant === "text"
          ? 4
          : 36;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: "normal" }}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 rounded-full transition-opacity duration-500"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(109,40,217,0.04) 0%, transparent 70%)",
          opacity: isHidden ? 0 : isHovering ? 0.8 : 0.5,
        }}
      />

      {/* Trail particles */}
      {trailPositions.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full transition-opacity duration-300"
          style={{
            width: `${5 - i * 0.5}px`,
            height: `${5 - i * 0.5}px`,
            background: `rgba(109, 40, 217, ${0.2 - i * 0.02})`,
            opacity: isHidden ? 0 : 1,
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: isHovering
            ? "rgba(109, 40, 217, 0.5)"
            : "rgba(109, 40, 217, 0.2)",
          borderWidth: isHovering ? "2px" : "1.5px",
          backgroundColor:
            cursorVariant === "link"
              ? "rgba(109, 40, 217, 0.06)"
              : cursorVariant === "view"
                ? "rgba(109, 40, 217, 0.08)"
                : "transparent",
          opacity: isHidden ? 0 : cursorVariant === "text" ? 0 : 1,
          transform: isClicking ? "scale(0.8)" : undefined,
        }}
      >
        {/* "View" label for images */}
        {cursorVariant === "view" && (
          <span
            className="text-[10px] font-bold uppercase tracking-wider text-brand-purple select-none"
            style={{ opacity: isHovering ? 1 : 0, transition: "opacity 0.2s" }}
          >
            View
          </span>
        )}
      </div>

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full transition-all duration-200 ease-out"
        style={{
          width: isHovering ? (cursorVariant === "text" ? 2 : 8) : 6,
          height: isHovering ? (cursorVariant === "text" ? 20 : 8) : 6,
          borderRadius: cursorVariant === "text" && isHovering ? "1px" : "50%",
          backgroundColor: "#6D28D9",
          opacity: isHidden ? 0 : cursorVariant === "view" ? 0 : 1,
          boxShadow: isHovering
            ? "0 0 24px rgba(109, 40, 217, 0.5)"
            : "0 0 10px rgba(109, 40, 217, 0.3)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
