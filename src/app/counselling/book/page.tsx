import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingFlow } from "@/components/booking-flow";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Book a session with Phindi Ngcobo, online or in person. Fee on enquiry. Your request stays on this device.",
};

export default function BookSessionPage() {
  return (
    <>
      <PageHeader eyebrow="Booking" title="Book a session">
        <p>
          Choose a session, online or in person, a date and a time. Then leave
          your name, email, phone and a short note. Fee on enquiry. Your
          request stays on this device.
        </p>
      </PageHeader>
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <Suspense
          fallback={
            <p className="border border-border bg-card px-6 py-8 text-muted-foreground">
              Opening the booking form.
            </p>
          }
        >
          <BookingFlow />
        </Suspense>
      </div>
    </>
  );
}
