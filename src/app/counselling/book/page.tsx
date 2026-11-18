import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingFlow } from "@/components/booking-flow";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Choose a counselling session, online or in person, a date, and a sample time. The booking is saved in this browser and is not sent.",
};

export default function BookSessionPage() {
  return (
    <>
      <PageHeader eyebrow="Booking" title="Book a session">
        <p>
          Choose the session, whether you would meet online or in person, a
          date, and one of the sample times. Then add your name, email, phone,
          and a short note. The result stays on this device.
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
