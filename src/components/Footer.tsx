import { EmailIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";

const LINKS = [
  { href: "mailto:siddhants01@hotmail.com", label: "Email", icon: EmailIcon },
  { href: "https://linkedin.com/in/siddhantsingh01", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/stillsid", label: "X", icon: XIcon },
  { href: "https://instagram.com/stillsid", label: "Instagram", icon: InstagramIcon },
];

export function Footer() {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-card-border pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
      <span className="text-[13px] text-ink/45">&copy; {new Date().getFullYear()} @stillsid</span>
      <div className="flex gap-5">
        {LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1.5 text-[13px] text-ink/45 hover:text-ink/70"
          >
            <Icon size={13} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
