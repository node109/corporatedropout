import { AppPreview } from "@/components/AppPreview";
import { BentoCard } from "@/components/BentoCard";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialCard, type SocialHighlight } from "@/components/SocialCard";

const ESSAYS = [
  { title: "[Essay title]", summary: "[One-line summary of what this essay is about.]", date: "[Month Year]" },
  { title: "[Essay title]", summary: "[One-line summary of what this essay is about.]", date: "[Month Year]" },
  { title: "[Essay title]", summary: "[One-line summary of what this essay is about.]", date: "[Month Year]" },
];

// Placeholder entries until the capture extension feeds real screenshots in.
// Each highlight can hold more than one image, for when a comment thread
// runs long enough to need a few screenshots.
const SOCIAL_HIGHLIGHTS: SocialHighlight[] = [
  {
    platform: "linkedin",
    caption:
      "On a mentor's advice from working with the J&K government: it's better to spend and reach some of the people who need it than let hesitation guarantee zero impact.",
    date: "September 2026",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7500531621691863041?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7500531621691863041%2C7500613576307474432%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287500613576307474432%2Curn%3Ali%3Aactivity%3A7500531621691863041%29",
    images: [{ src: "/socials/linkedin-funding-comment.jpg", label: "LinkedIn comment screenshot" }],
  },
  {
    platform: "x",
    caption: "[What this post was about]",
    date: "[Month Year]",
    href: "https://x.com/",
    images: [{ label: "Screenshot" }],
  },
  {
    platform: "linkedin",
    caption: "[A longer comment thread — spans a few screenshots]",
    date: "[Month Year]",
    href: "https://www.linkedin.com/in/",
    images: [{ label: "Screenshot 1" }, { label: "Screenshot 2" }, { label: "Screenshot 3" }],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-16">
      <Nav />

      <section className="mt-16 text-center sm:mt-20 lg:mt-[72px]">
        <h1 className="font-serif mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.12]">
          I build, I write, and sometimes I start talking and don&rsquo;t{" "}
          <span className="relative inline-block">
            stop
            <svg
              width="150"
              height="12"
              viewBox="0 0 150 12"
              fill="none"
              className="absolute -bottom-1.5 left-0 w-[110px] sm:w-[150px]"
            >
              <path
                d="M2 8C25 2 45 2 55 6C65 10 85 2 95 5C105 8 125 2 148 6"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-ink/60 sm:text-base">
          A running index of what I&rsquo;m building, writing, and recording &mdash; updated whenever something&rsquo;s
          worth sharing.
        </p>
      </section>

      <section id="about" className="mt-16 scroll-mt-8 sm:mt-20 lg:mt-[88px]">
        <SectionHeading eyebrow="About" title="A quick word on who's behind this" />

        <div className="mt-9 grid grid-cols-1 gap-2.5 md:grid-cols-12">
          <div className="flex md:col-span-5">
            <BentoCard className="flex items-center gap-4">
              <div className="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full bg-accent font-serif text-2xl font-semibold text-bg">
                S
              </div>
              <div>
                <div className="text-base font-semibold">Hey, I&rsquo;m Sid</div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  [One or two lines about you &mdash; what you do, what you&rsquo;re into, what you&rsquo;re working
                  toward.]
                </p>
              </div>
            </BentoCard>
          </div>

          <div id="apps" className="flex scroll-mt-8 md:col-span-7">
            <BentoCard href="https://phdtracker.corporatedropout.in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">Featured app</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold tracking-wide text-accent">LIVE</span>
                </div>
              </div>

              <div className="mt-3.5 flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="flex-1">
                  <div className="text-xl font-semibold sm:text-[22px]">PhD Tracker</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    An interactive dashboard for tracking PhD applications end to end &mdash; pipeline, contacts,
                    documents, deadlines.
                  </p>
                </div>
                <AppPreview />
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <section id="media" className="mt-16 scroll-mt-8 sm:mt-20 lg:mt-[88px]">
        <SectionHeading eyebrow="Media" title="Conversations and recordings" />

        <div className="mt-9 grid grid-cols-1 gap-2.5 md:grid-cols-12">
          <div className="flex md:col-span-7">
            <BentoCard hoverEffect={false} className="!p-0">
              <video className="block w-full" controls preload="metadata" playsInline poster="/videos/hi-sid-poster.jpg">
                <source src="/videos/hi-sid.mp4" type="video/mp4" />
              </video>
              <div className="p-5">
                <div className="text-[17px] font-semibold">hi! this is sid ^_^</div>
              </div>
            </BentoCard>
          </div>
          <div className="flex md:col-span-5">
            <BentoCard dashed>
              <span className="text-[13px] italic text-ink/40">More recordings &mdash; coming soon</span>
            </BentoCard>
          </div>
        </div>
      </section>

      <section id="essays" className="mt-16 scroll-mt-8 sm:mt-20 lg:mt-[88px]">
        <SectionHeading eyebrow="Essays" title="Occasional writing, mostly for myself" />

        <div className="mt-9 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {ESSAYS.map((essay, i) => (
            <BentoCard key={i} href="#" className="!p-0">
              <div className="flex h-[120px] items-center justify-center bg-[#efe6d3]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="text-base font-semibold">{essay.title}</div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/55">{essay.summary}</p>
                <div className="mt-3.5 text-xs text-ink/40">{essay.date}</div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section id="socials" className="mt-16 scroll-mt-8 sm:mt-20 lg:mt-[88px]">
        <SectionHeading eyebrow="Socials Corner" title="Bits worth keeping from elsewhere" />

        <div className="mt-9 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:thin] sm:snap-x sm:snap-mandatory">
          {SOCIAL_HIGHLIGHTS.map((highlight, i) => (
            <SocialCard key={i} highlight={highlight} />
          ))}
        </div>
      </section>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        <Footer />
      </div>
    </main>
  );
}
