"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale";
  delayMs?: number;
};

export function Reveal({
  children,
  className = "",
  variant = "up",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
