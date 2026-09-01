import type { ReactNode } from "react";
import { BentoCard } from "@/components/BentoCard";

export type SocialPlatform = "linkedin" | "x";

export interface SocialImage {
  // Once the capture extension is wired up, real screenshots land here.
  // Until then, `label` renders as a plain placeholder block instead of a
  // fabricated-looking screenshot.
  src?: string;
  label: string;
}

export interface SocialHighlight {
  platform: SocialPlatform;
  caption: string;
  date: string;
  href: string;
  images: SocialImage[];
}

const PLATFORM_ICON: Record<SocialPlatform, ReactNode> = {
  linkedin: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  x: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.6 10.6 20.4 3h-1.6l-5.9 6.6L8.3 3H3l7.1 9.9L3 21h1.6l6.2-7 5 7H21l-7.4-10.4Zm-2.2 2.5-.7-1L5 4.3h2.1l4.6 6.4.7 1 6 8.4h-2.1l-4.9-6.6Z" />
    </svg>
  ),
};

const PLATFORM_LABEL: Record<SocialPlatform, string> = { linkedin: "LinkedIn", x: "X" };

export function SocialCard({ highlight }: { highlight: SocialHighlight }) {
  return (
    <BentoCard
      href={highlight.href}
      className="w-[270px] flex-none snap-start !p-0 sm:w-[300px]"
    >
      <div className="flex gap-[3px] overflow-x-auto">
        {highlight.images.map((image, i) =>
          image.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={image.src} alt={image.label} className="h-[150px] w-full flex-none object-cover" />
          ) : (
            <div
              key={i}
              className="flex h-[150px] w-full flex-none items-center justify-center bg-[#efe6d3] text-center text-[11px] italic text-ink/35"
            >
              {image.label}
            </div>
          )
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            {PLATFORM_ICON[highlight.platform]}
            {PLATFORM_LABEL[highlight.platform]}
          </span>
          {highlight.images.length > 1 && (
            <span className="text-[11px] text-ink/40">{highlight.images.length} screenshots</span>
          )}
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{highlight.caption}</p>
        <div className="mt-3.5 text-xs text-ink/40">{highlight.date}</div>
      </div>
    </BentoCard>
  );
}
