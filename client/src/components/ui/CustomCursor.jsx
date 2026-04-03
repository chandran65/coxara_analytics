import { useEffect, useRef, useState, useCallback } from "react";

const TRAIL_COUNT = 5;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ghostRingRef = useRef(null);
  const glowRef = useRef(null);
  const particleContainerRef = useRef(null);
  const trailRefs = useRef([]);

  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const ghostPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })),
  );

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  });
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

  /* ── Click: particle burst + subtle ring ripple ── */
  const spawnParticles = useCallback((x, y) => {
    if (!particleContainerRef.current) return;
    const count = 10;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const dist = 22 + Math.random() * 38;
      const size = 2 + Math.random() * 3;
      const particle = document.createElement("div");
      particle.style.cssText = `
        position:fixed; left:${x}px; top:${y}px;
        width:${size}px; height:${size}px; border-radius:50%;
        background:rgba(109,40,217,${0.5 + Math.random() * 0.5});
        box-shadow:0 0 ${size * 2}px rgba(109,40,217,0.5);
        pointer-events:none; z-index:9998;
        transform:translate(-50%,-50%);
        animation:cursorParticleBurst 0.6s cubic-bezier(.22,.61,.36,1) forwards;
        --tx:${Math.cos(angle) * dist}px;
        --ty:${Math.sin(angle) * dist}px;
      `;
      particleContainerRef.current.appendChild(particle);
      setTimeout(() => particle.remove(), 650);
    }
    /* subtle expanding ring */
    const ring = document.createElement("div");
    ring.style.cssText = `
      position:fixed; left:${x}px; top:${y}px;
      width:0; height:0; border-radius:50%;
      border:1.5px solid rgba(109,40,217,0.35);
      transform:translate(-50%,-50%);
      pointer-events:none; z-index:9998;
      animation:cursorRipple 0.5s ease-out forwards;
    `;
    particleContainerRef.current.appendChild(ring);
    setTimeout(() => ring.remove(), 550);
  }, []);

  useEffect(() => {
    const hasTouch =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    /* Fallback: if a touch event fires, disable cursor immediately */
    const handleTouchStart = () => {
      setIsTouchDevice(true);
      cleanup();
    };

    const handleMouseMove = (e) => {
      prevMouse.current = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
      velocity.current = {
        x: mouse.current.x - prevMouse.current.x,
        y: mouse.current.y - prevMouse.current.y,
      };
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      spawnParticles(e.clientX, e.clientY);
    };
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
    document.addEventListener("touchstart", handleTouchStart, { once: true });

    const animate = () => {
      /* ── position interpolation ── */
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.45;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.14;

      ghostPos.current.x += (mouse.current.x - ghostPos.current.x) * 0.085;
      ghostPos.current.y += (mouse.current.y - ghostPos.current.y) * 0.085;

      glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.06;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.06;

      for (let i = 0; i < trailPositions.current.length; i++) {
        const prev = i === 0 ? dotPos.current : trailPositions.current[i - 1];
        const spd = 0.22 - i * 0.03;
        trailPositions.current[i].x +=
          (prev.x - trailPositions.current[i].x) * spd;
        trailPositions.current[i].y +=
          (prev.y - trailPositions.current[i].y) * spd;
      }

      /* ── velocity-based ring deformation ── */
      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2,
      );
      const angle =
        speed > 1.5
          ? Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI)
          : 0;
      const ringStretch = speed > 1.5 ? Math.min(1 + speed * 0.012, 1.4) : 1;

      /* ── apply transforms ── */
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px,${dotPos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px,${ringPos.current.y}px) translate(-50%,-50%) rotate(${angle}deg) scaleX(${ringStretch})`;
      }
      if (ghostRingRef.current) {
        ghostRingRef.current.style.transform = `translate(${ghostPos.current.x}px,${ghostPos.current.y}px) translate(-50%,-50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px,${glowPos.current.y}px) translate(-50%,-50%)`;
      }
      trailRefs.current.forEach((ref, i) => {
        if (ref) {
          ref.style.transform = `translate(${trailPositions.current[i].x}px,${trailPositions.current[i].y}px) translate(-50%,-50%)`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    function cleanup() {
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
      document.removeEventListener("touchstart", handleTouchStart);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    }

    return cleanup;
  }, [handleHoverStart, handleHoverEnd, spawnParticles]);

  if (isTouchDevice) return null;

  /* ── variant sizing ── */
  const ringSize =
    cursorVariant === "view"
      ? 90
      : cursorVariant === "link"
        ? 64
        : cursorVariant === "text"
          ? 4
          : 44;

  const effectiveRing = isClicking ? ringSize * 0.82 : ringSize;
  const ghostSize = ringSize + 24;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Particle / ripple container */}
      <div ref={particleContainerRef} />

      {/* ── Ambient glow ── */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 rounded-full"
        style={{
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(109,40,217,0.07) 0%, rgba(139,92,246,0.025) 40%, transparent 65%)",
          opacity: isHidden ? 0 : isHovering ? 1 : 0.6,
          transition: "opacity 0.4s",
        }}
      />

      {/* ── Ghost parallax ring ── */}
      <div
        ref={ghostRingRef}
        className="fixed top-0 left-0 rounded-full"
        style={{
          width: ghostSize,
          height: ghostSize,
          border: "1px solid rgba(109,40,217,0.08)",
          boxShadow: "0 0 18px rgba(109,40,217,0.04)",
          opacity: isHidden
            ? 0
            : cursorVariant === "text"
              ? 0
              : isHovering
                ? 0.7
                : 0.4,
          transition:
            "width 0.4s ease, height 0.4s ease, opacity 0.4s, border-color 0.3s",
        }}
      />

      {/* ── Trail particles ── */}
      {trailPositions.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full"
          style={{
            width: `${5.5 - i * 0.7}px`,
            height: `${5.5 - i * 0.7}px`,
            background: `rgba(109,40,217,${0.35 - i * 0.055})`,
            boxShadow:
              i < 3
                ? `0 0 ${6 - i * 1.5}px rgba(109,40,217,${0.25 - i * 0.06})`
                : "none",
            opacity: isHidden ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />
      ))}

      {/* ── Main ring: rotating conic gradient ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0"
        style={{
          width: effectiveRing,
          height: effectiveRing,
          opacity: isHidden ? 0 : cursorVariant === "text" ? 0 : 1,
          transition:
            "width 0.3s cubic-bezier(.34,1.56,.64,1), height 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.3s",
        }}
      >
        {/* spinning gradient stroke – default (arc with gap) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: "cursorRingSpin 3.5s linear infinite",
            background: `conic-gradient(
              from 0deg,
              rgba(109,40,217,0.85),
              rgba(139,92,246,0.45) 25%,
              rgba(167,139,250,0.1) 45%,
              transparent 60%,
              transparent 80%,
              rgba(109,40,217,0.85) 100%
            )`,
            WebkitMask:
              "radial-gradient(circle, transparent calc(50% - 3px), black calc(50% - 1.5px), black 50%, transparent calc(50% + 0.5px))",
            mask: "radial-gradient(circle, transparent calc(50% - 3px), black calc(50% - 1.5px), black 50%, transparent calc(50% + 0.5px))",
            opacity: isHovering ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />
        {/* spinning gradient stroke – hover (full ring, brighter) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: "cursorRingSpin 3s linear infinite",
            background: `conic-gradient(
              from 0deg,
              rgba(109,40,217,0.9),
              rgba(139,92,246,0.7) 20%,
              rgba(109,40,217,0.9) 40%,
              rgba(139,92,246,0.7) 60%,
              rgba(109,40,217,0.9) 80%,
              rgba(139,92,246,0.7) 100%
            )`,
            WebkitMask:
              "radial-gradient(circle, transparent calc(50% - 3.5px), black calc(50% - 1.5px), black 50%, transparent calc(50% + 0.5px))",
            mask: "radial-gradient(circle, transparent calc(50% - 3.5px), black calc(50% - 1.5px), black 50%, transparent calc(50% + 0.5px))",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
        {/* soft glow halo behind the ring */}
        <div
          className="absolute inset-[-3px] rounded-full"
          style={{
            animation: "cursorRingSpin 3.5s linear infinite",
            background: `conic-gradient(
              from 0deg,
              rgba(109,40,217,0.25),
              transparent 30%,
              transparent 70%,
              rgba(109,40,217,0.25) 100%
            )`,
            WebkitMask:
              "radial-gradient(circle, transparent calc(50% - 5px), black calc(50% - 3px), black calc(50% - 0.5px), transparent 50%)",
            mask: "radial-gradient(circle, transparent calc(50% - 5px), black calc(50% - 3px), black calc(50% - 0.5px), transparent 50%)",
            filter: "blur(2px)",
            opacity: isHovering ? 0.8 : 0.5,
            transition: "opacity 0.3s",
          }}
        />
        {/* hover fill */}
        {(cursorVariant === "link" || cursorVariant === "view") && (
          <div
            className="absolute inset-[2px] rounded-full"
            style={{ background: "rgba(109,40,217,0.06)" }}
          />
        )}
        {/* "View" label */}
        {cursorVariant === "view" && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.15em] text-brand-purple select-none">
            View
          </span>
        )}
      </div>

      {/* ── Inner dot ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0"
        style={{
          width: isHovering ? (cursorVariant === "text" ? 2 : 10) : 7,
          height: isHovering ? (cursorVariant === "text" ? 24 : 10) : 7,
          borderRadius: cursorVariant === "text" && isHovering ? "1px" : "50%",
          background: "linear-gradient(135deg, #6D28D9, #8B5CF6)",
          opacity: isHidden ? 0 : cursorVariant === "view" ? 0 : 1,
          boxShadow: isHovering
            ? "0 0 18px rgba(109,40,217,0.5), 0 0 40px rgba(109,40,217,0.15)"
            : "0 0 10px rgba(109,40,217,0.45), 0 0 25px rgba(109,40,217,0.12)",
          transition:
            "width 0.25s, height 0.25s, border-radius 0.25s, opacity 0.3s, box-shadow 0.3s",
          animation:
            cursorVariant === "text" && isHovering
              ? "cursorTextBlink 1s step-end infinite"
              : "none",
        }}
      />

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes cursorRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cursorParticleBurst {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0); opacity: 0; }
        }
        @keyframes cursorRipple {
          0%   { width: 0; height: 0; opacity: 1; }
          100% { width: 60px; height: 60px; opacity: 0; }
        }
        @keyframes cursorTextBlink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
