import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHeader } from "@/components/page-header";
import { SessionGrid } from "@/components/session-card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Counselling",
  description:
    "Faith-centred counselling for individuals, couples and families with Phindi Ngcobo. Book a session. Fee on enquiry.",
};

export default function CounsellingPage() {
  return (
    <>
      <PageHeader eyebrow="Counselling" title="Faith-centred counselling">
        <p>
          {site.welcome} Sessions are for individuals, couples and families.
          Book a session when you are ready. Fee on enquiry.
        </p>
      </PageHeader>

      <section id="sessions" className="scroll-mt-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="text-3xl text-night md:text-4xl">Book a session</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Choose a conversation, then say whether you would like to meet
            online or in person. Length on enquiry. Fee on enquiry.
          </p>
          <div className="mt-10">
            <SessionGrid />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-xl">
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}
