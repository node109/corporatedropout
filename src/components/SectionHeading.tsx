export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="text-center">
      {eyebrow && <div className="text-[13px] font-semibold text-accent">{eyebrow}</div>}
      <h2 className={`mx-auto max-w-lg text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-[34px] ${eyebrow ? "mt-2" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
