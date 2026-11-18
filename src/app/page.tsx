import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { SessionGrid } from "@/components/session-card";
import { site } from "@/lib/site";

const paths = [
  {
    href: "/counselling",
    title: "Counselling",
    text: "Faith-centred counselling for individuals, couples and families.",
    action: "Book a session",
  },
  {
    href: "/magazine",
    title: "The Magazine",
    text: "The Magazine: coming soon.",
    action: "See the magazine",
  },
  {
    href: "/books",
    title: "Books",
    text: "Books: coming soon.",
    action: "See the books",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Faith-centred counselling
            </p>
            <h1 className="mt-4 text-5xl leading-[1.02] text-night text-balance md:text-7xl">
              {site.name}
            </h1>
            <p className="mt-5 text-lg text-foreground">
              {site.bio}{" "}
              <span aria-hidden="true">{site.flags}</span>
              <span className="sr-only">{site.flagsLabel}</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              {site.welcome} Faith-centred counselling for individuals, couples
              and families.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/counselling/book" tone="gold">
                Book a session
              </CtaLink>
              <CtaLink href={site.tiktokUrl} tone="outline" external>
                Visit TikTok
              </CtaLink>
            </div>
          </div>

          <aside className="flex h-full flex-col justify-center bg-night px-7 py-9 text-gold-soft md:px-10 md:py-12">
            <p className="font-serif text-6xl leading-none text-gold-bright" aria-hidden="true">
              “
            </p>
            <blockquote className="mt-2">
              <p className="font-serif text-2xl leading-snug text-[#f7f1e6] md:text-[1.7rem]">
                I am a follower of Jesus Christ. You are welcome here, to be
                heard, prayed with and guided.
              </p>
            </blockquote>
            <p className="mt-6 text-sm tracking-wide text-gold-soft">{site.name}</p>
          </aside>
        </div>
      </section>

      <section id="sessions" className="scroll-mt-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Sessions
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-night md:text-5xl">
              Book a session
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Faith-centred counselling for individuals, couples and families.
              The fee is given on enquiry.
            </p>
          </div>
          <div className="mt-10">
            <SessionGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Also here
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-night md:text-5xl">
            The magazine and the books
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {paths.map((path) => (
            <article
              key={path.href}
              className="flex flex-col border border-border bg-card px-6 py-7"
            >
              <h3 className="text-3xl text-night">{path.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">{path.text}</p>
              <Link
                href={path.href}
                className="mt-6 text-sm font-semibold text-night underline decoration-gold-bright decoration-2 underline-offset-4"
              >
                {path.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl text-night">You are welcome</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{site.welcome}</p>
            <div className="mt-8">
              <CtaLink href="/about" tone="outline">
                About Phindi
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
