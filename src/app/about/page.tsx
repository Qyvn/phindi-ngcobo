import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What is known here about Phindi Ngcobo: her name, her TikTok, her bio, and that she feels led toward counselling, a magazine, and books. The rest is left blank.",
};

const facts = [
  { label: "Name", value: site.name },
  { label: "TikTok", value: `${site.handle} · ${site.followers} followers` },
  { label: "Bio, in her words", value: `${site.bio} ${site.flags}` },
  {
    label: "Flags on that bio",
    value: "South Africa and the United Kingdom. The flags are not a biography of where she lives.",
  },
  {
    label: "What she has asked for",
    value: "A website, a magazine, and books, and a website or an app as she is led to do counselling.",
  },
];

const blanks = [
  {
    title: "Background",
    body: "Placeholder. Family, places, and the path that brought her here are not written on this site.",
  },
  {
    title: "Qualifications",
    body: "Placeholder. No training, certificate, or professional registration is listed, because none was provided.",
  },
  {
    title: "A longer story",
    body: "Placeholder. For Phindi to write, in her own words, when she wants to.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Only the facts she has shared">
        <p>
          {site.name} is a Christian content creator. She feels led to do
          counselling, and she wants a magazine and books as well. A fuller
          story is not filled in on her behalf.
        </p>
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
            <p className="font-serif text-2xl leading-snug text-night">{site.quote}</p>
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">{site.name}</figcaption>
        </figure>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {blanks.map((blank) => (
            <article key={blank.title} className="border border-border bg-card px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                Placeholder
              </p>
              <h2 className="mt-2 text-2xl text-night">{blank.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{blank.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-muted-foreground">
          The published way to find her from this site is{" "}
          <Link href="/contact" className="text-night underline decoration-gold-bright underline-offset-4">
            her TikTok, linked on the contact page
          </Link>
          .
        </p>
      </div>
    </>
  );
}
