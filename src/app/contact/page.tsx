import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Phindi Ngcobo on TikTok at @phindingcobo. Email, phone, and a studio address are not published on this site.",
};

const unpublished = [
  {
    title: "Email",
    body: "Placeholder. An email address has not been published here.",
  },
  {
    title: "Phone",
    body: "Placeholder. A phone number has not been published here.",
  },
  {
    title: "Studio or office",
    body: "Placeholder. A place to visit has not been published here.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Find her on TikTok">
        <p>
          The one published way to reach {site.name} from this site is her
          TikTok. Other contact details are left blank on purpose.
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="bg-night px-7 py-10 text-gold-soft md:px-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-bright uppercase">
            TikTok
          </p>
          <h2 className="mt-3 text-4xl text-[#f6f1e8] md:text-5xl">{site.handle}</h2>
          <p className="mt-4 max-w-md leading-7">
            {site.followers} followers. Her bio reads “{site.bio}”, shown with
            the South African and UK flags {site.flags}.
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

        <div>
          <ul className="space-y-4">
            {unpublished.map((item) => (
              <li key={item.title} className="border border-border bg-card px-5 py-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                  Placeholder
                </p>
                <h2 className="mt-2 text-2xl text-night">{item.title}</h2>
                <p className="mt-2 leading-7 text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-7 text-muted-foreground">
            A session can be booked from the{" "}
            <Link
              href="/counselling"
              className="text-night underline decoration-gold-bright underline-offset-4"
            >
              counselling page
            </Link>
            . That booking is saved in this browser and is not sent.
          </p>
        </div>
      </div>
    </>
  );
}
