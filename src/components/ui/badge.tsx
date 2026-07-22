import { Star } from "lucide-react";

export function LanguageBadge({ language }: { language?: string | null }) {
  return (
    <span className="rounded-full border border-[#FF2DAA]/35 bg-[#FF2DAA]/10 px-3 py-1 text-xs font-bold uppercase text-[#FFB6D9]">
      {language ?? "Code"}
    </span>
  );
}

export function PinnedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#FFB6D9]/30 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase text-[#FFB6D9]">
      <Star className="h-3 w-3" aria-hidden />
      Pinned
    </span>
  );
}
