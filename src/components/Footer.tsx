export function Footer() {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-card-border pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <span className="text-[13px] text-ink/45">&copy; {new Date().getFullYear()} @stillsid</span>
      <div className="flex gap-5">
        <a href="#" className="text-[13px] text-ink/45 hover:text-ink/70">
          Email
        </a>
        <a href="#" className="text-[13px] text-ink/45 hover:text-ink/70">
          X / Twitter
        </a>
        <a href="#" className="text-[13px] text-ink/45 hover:text-ink/70">
          Instagram
        </a>
      </div>
    </div>
  );
}
