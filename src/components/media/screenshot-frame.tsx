import Image from "next/image";
import { ImageOff } from "lucide-react";

type ScreenshotFrameProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function ScreenshotFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: ScreenshotFrameProps) {
  return (
    <div className="browser-frame group">
      <div className="browser-frame-bar">
        <span className="browser-frame-dot" />
        <span className="browser-frame-dot" />
        <span className="browser-frame-dot" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,45,170,0.12),transparent_55%)]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-zinc-500">
            <ImageOff className="h-8 w-8" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wide">Screenshot coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
