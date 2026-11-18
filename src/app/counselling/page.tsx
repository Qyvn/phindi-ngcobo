import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHeader } from "@/components/page-header";
import { SessionGrid } from "@/components/session-card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Counselling",
  description:
    "Counselling sessions with Phindi Ngcobo. Duration and fee are placeholders. Booking is saved in this browser and is not sent.",
};

export default function CounsellingPage() {
  return (
    <>
      <PageHeader eyebrow="Counselling" title="Sessions">
        <p>
          {site.name} feels led to offer counselling. These are the sessions
          you can book. Duration and fee are placeholders, because she has not
          set them. A booking stays in your browser. It is not sent to her, and
          it does not confirm a qualification.
        </p>
      </PageHeader>

      <section id="sessions" className="scroll-mt-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="text-3xl text-night md:text-4xl">Choose a session</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Each card shows a duration and a fee marked Placeholder. Book this
            session opens a short form: the type, online or in person, a date,
            a sample time, then your name, email, phone, and a note.
          </p>
          <div className="mt-10">
            <SessionGrid />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <section aria-label="Details still to come">
          <h2 className="text-3xl text-night md:text-4xl">Still to be written</h2>
          <article className="mt-6 border border-border bg-card px-5 py-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              Placeholder
            </p>
            <h3 className="mt-2 text-2xl text-night">Training and registration</h3>
            <p className="mt-2 leading-7 text-muted-foreground">
              No qualification, licence, or membership is listed, because none
              was provided. The session names above are the kinds of
              conversation this site can book. They are not a claim about a
              completed course of training.
            </p>
          </article>
          <p className="mt-6 leading-7 text-muted-foreground">
            An in-person choice does not name a room. Phindi has not published
            a place to meet.
          </p>
        </section>
        <div className="lg:sticky lg:top-28">
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}
