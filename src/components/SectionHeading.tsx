export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-[13px] font-semibold text-accent">{eyebrow}</div>
      <h2 className="mx-auto mt-2 max-w-lg text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-[34px]">
        {title}
      </h2>
    </div>
  );
}
