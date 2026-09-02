import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ESSAYS } from "@/lib/essays";

export function generateStaticParams() {
  return ESSAYS.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const essay = ESSAYS.find((e) => e.slug === slug);
  return { title: essay ? `${essay.title} — @stillsid` : "Essay" };
}

export default async function EssayPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const essay = ESSAYS.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-16">
      <Link href="/#writing" className="text-xs font-medium text-ink/50 hover:text-ink">
        ← Back to writing
      </Link>

      <article className="mx-auto mt-8 max-w-2xl">
        <div className="text-[13px] font-semibold text-accent">{essay.date}</div>
        <h1 className="font-serif mt-2 text-2xl font-semibold leading-tight sm:text-3xl">{essay.title}</h1>
        {essay.subtitle && <p className="mt-3 text-base italic leading-relaxed text-ink/60">{essay.subtitle}</p>}
        <div className="mt-4 text-sm text-ink/45">By Siddhant Singh</div>

        <div className="mt-6 rounded-2xl border border-dashed border-[#d8cbae] px-5 py-3.5 text-sm italic leading-relaxed text-ink/55">
          {essay.note}
        </div>

        <div className="mt-9 space-y-5">
          {essay.body.map((block, i) =>
            block.type === "heading" ? (
              <h2 key={i} className="pt-2 text-lg font-semibold">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="text-[15px] leading-[1.8] text-ink/80">
                {block.text}
              </p>
            )
          )}
        </div>
      </article>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        <Footer />
      </div>
    </main>
  );
}
