import type { ReactNode } from "react";
import { BentoCard } from "@/components/BentoCard";
import { LinkedInIcon, XIcon } from "@/components/SocialIcons";

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
  // Overrides the auto "View comment/thread on <platform>" link text — for
  // entries that aren't your own comment (e.g. someone else's post that
  // features or mentions you).
  linkLabel?: string;
}

const PLATFORM_ICON: Record<SocialPlatform, ReactNode> = {
  linkedin: <LinkedInIcon size={13} />,
  x: <XIcon size={13} />,
};

const PLATFORM_LABEL: Record<SocialPlatform, string> = { linkedin: "LinkedIn", x: "X" };

export function SocialCard({ highlight }: { highlight: SocialHighlight }) {
  return (
    <BentoCard hoverEffect={false} className="w-[270px] flex-none snap-start !p-0 sm:w-[300px]">
      <div className="flex gap-[3px] overflow-x-auto">
        {highlight.images.map((image, i) =>
          image.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={image.src}
              alt={image.label}
              className="h-[150px] w-full flex-none object-cover object-top"
            />
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
      <a
        href={highlight.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-card-border px-5 py-2 text-xs font-medium text-accent hover:underline"
      >
        {highlight.linkLabel ??
          `View ${highlight.images.length > 1 ? "thread" : "comment"} on ${PLATFORM_LABEL[highlight.platform]}`}{" "}
        ↗
      </a>
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
