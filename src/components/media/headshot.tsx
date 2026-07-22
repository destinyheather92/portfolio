import Image from "next/image";

type HeadshotProps = {
  src?: string | null;
  alt: string;
  initials: string;
  size?: number;
};

export function Headshot({ src, alt, initials, size = 300 }: HeadshotProps) {
  return (
    <div className="headshot-ring inline-flex animate-float" style={{ width: size, height: size }}>
      <div
        className="flex h-full w-full items-center justify-center bg-[#111111]"
        style={{ width: size - 8, height: size - 8 }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            priority
            sizes={`${size}px`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-5xl font-black text-[#FFB6D9]" aria-hidden>
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}
