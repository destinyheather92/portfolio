"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScreenshotFrame } from "@/components/media/screenshot-frame";

type ScreenshotGalleryProps = {
  screenshots: string[];
  altPrefix: string;
  priority?: boolean;
};

export function ScreenshotGallery({ screenshots, altPrefix, priority = false }: ScreenshotGalleryProps) {
  const [index, setIndex] = useState(0);

  if (screenshots.length <= 1) {
    return (
      <ScreenshotFrame
        src={screenshots[0]}
        alt={screenshots[0] ? `${altPrefix} screenshot` : `${altPrefix} screenshot placeholder`}
        priority={priority}
      />
    );
  }

  const goTo = (next: number) => {
    setIndex((next + screenshots.length) % screenshots.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
  };

  return (
    <div>
      <div
        className="relative"
        role="group"
        aria-label={`${altPrefix} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="overflow-hidden rounded-[1.25rem]">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {screenshots.map((src, i) => (
              <div className="w-full shrink-0" key={src}>
                <ScreenshotFrame src={src} alt={`${altPrefix} screenshot ${i + 1}`} priority={priority && i === 0} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#FF2DAA]/60 hover:bg-black/80"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#FF2DAA]/60 hover:bg-black/80"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to screenshot ${i + 1}`}
            data-active={i === index}
            className="carousel-dot"
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
