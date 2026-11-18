import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find ${site.name} on TikTok at ${site.handle}, or book a session.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Come and talk">
        <p>
          Find {site.name} on TikTok, or book a session. {site.bio}.
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="bg-night px-7 py-10 text-gold-soft md:px-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-bright uppercase">
            TikTok
          </p>
          <h2 className="mt-3 text-4xl text-[#f6f1e8] md:text-5xl">{site.handle}</h2>
          <p className="mt-4 max-w-md leading-7">
            {site.bio}{" "}
            <span aria-hidden="true">{site.flags}</span>
            <span className="sr-only">{site.flagsLabel}</span>
          </p>
          <a
            href={site.tiktokUrl}
            className="mt-4 inline-block text-sm break-all text-[#f6f1e8] underline decoration-gold-bright underline-offset-4"
          >
            {site.tiktokUrl}
          </a>
          <div className="mt-8">
            <CtaLink href={site.tiktokUrl} tone="gold" external>
              Open TikTok
            </CtaLink>
          </div>
        </section>

        <div className="flex flex-col justify-center border border-border bg-card px-6 py-8">
          <h2 className="text-3xl text-night">Book a session</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Faith-centred counselling for individuals, couples and families.
            Fee on enquiry.
          </p>
          <div className="mt-8">
            <CtaLink href="/counselling/book" tone="night">
              Book a session
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
