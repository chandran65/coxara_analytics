import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(globalThis.scrollY);
    };

    globalThis.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => globalThis.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
