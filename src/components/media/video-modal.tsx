"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

type VideoModalProps = {
  src?: string;
  label?: string;
};

export function VideoModal({ src, label = "Watch Demo" }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], video, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  if (!src) {
    return (
      <span
        className="btn-secondary cursor-not-allowed opacity-50"
        aria-disabled="true"
        title="Demo video coming soon"
      >
        <Play className="mr-2 h-4 w-4" aria-hidden />
        Demo Coming Soon
      </span>
    );
  }

  return (
    <>
      <button type="button" ref={triggerRef} className="btn-secondary" onClick={() => setIsOpen(true)}>
        <Play className="mr-2 h-4 w-4" aria-hidden />
        {label}
      </button>

      {isOpen && (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div
            className="modal-panel relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-[#FF2DAA]/25 bg-[#0b0b0b] shadow-[0_0_80px_rgba(255,0,127,0.25)]"
            role="dialog"
            aria-modal="true"
            aria-label="CaseCompass AI demo video"
            ref={dialogRef}
            tabIndex={-1}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={close}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#FF2DAA]/60 hover:bg-black/80"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <video
              src={src}
              controls
              autoPlay
              preload="none"
              className="aspect-video w-full bg-black"
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
