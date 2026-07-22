"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="animate-fade-up fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#FF2DAA]/40 bg-[#111111]/90 text-white shadow-[0_0_30px_rgba(255,45,170,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-[#FFB6D9]/70"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
