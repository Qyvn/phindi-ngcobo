import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.welcome,
};

const facts = [
  { label: "Name", value: site.name },
  { label: "Faith", value: `${site.bio} ${site.flags}` },
  {
    label: "Counselling",
    value: "Faith-centred counselling for individuals, couples and families.",
  },
  { label: "TikTok", value: site.handle },
];

const offerings = [
  {
    title: "To be heard",
    body: "A quiet conversation, for one person or for two, with room to speak honestly.",
  },
  {
    title: "Prayer",
    body: "Prayer and spiritual guidance, for anyone who comes to be prayed with.",
  },
  {
    title: "Coming soon",
    body: "The Magazine: coming soon. Books: coming soon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={site.name}>
        <p>{site.welcome}</p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <dl className="max-w-3xl divide-y divide-border border-y border-border">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="text-sm font-semibold tracking-wide text-gold uppercase">
                {fact.label}
              </dt>
              <dd className="text-lg leading-8 text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-12 max-w-3xl border-l-2 border-gold-bright bg-card px-6 py-6">
          <blockquote>
            <p className="font-serif text-2xl leading-snug text-night">
              I am a follower of Jesus Christ. You are welcome here, to be
              heard, prayed with and guided.
            </p>
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">{site.name}</figcaption>
        </figure>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offerings.map((item) => (
            <article key={item.title} className="border border-border bg-card px-5 py-6">
              <h2 className="text-2xl text-night">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/counselling/book" tone="gold">
            Book a session
          </CtaLink>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center border border-border bg-background px-6 text-base text-night"
          >
            Find her on TikTok
          </Link>
        </div>
      </div>
    </>
  );
}
