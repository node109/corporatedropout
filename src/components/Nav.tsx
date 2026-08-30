const LINKS = [
  { href: "#apps", label: "Apps" },
  { href: "#essays", label: "Essays" },
  { href: "#media", label: "Media" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <div className="flex items-center justify-between">
      <a href="#" className="font-serif text-lg italic font-semibold">
        @stillsid
      </a>
      <nav className="flex gap-4 sm:gap-7">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-ink/60 transition-colors hover:text-ink sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
