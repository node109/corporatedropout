import type { ReactNode } from "react";
import Link from "next/link";

interface BentoCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  dashed?: boolean;
}

export function BentoCard({ children, href, className = "", dashed = false }: BentoCardProps) {
  const base = dashed
    ? "flex w-full items-center justify-center rounded-2xl border border-dashed border-[#d8cbae] p-6"
    : "group relative w-full overflow-hidden rounded-2xl border border-card-border p-6 transition-colors duration-200 hover:bg-white hover:border-accent/40";

  const content = (
    <>
      {!dashed && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top left, rgba(185,134,46,0.10), transparent 60%)" }}
        />
      )}
      {children}
      {href && !dashed && (
        <span className="absolute bottom-4 right-4 z-10 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-[#f1e4c8] opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[-6px] group-hover:rotate-0 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`block ${base} ${className}`}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`block ${base} ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{content}</div>;
}
