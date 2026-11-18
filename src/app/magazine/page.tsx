import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Magazine",
  description:
    "A coming-soon shelf for a magazine Phindi Ngcobo wants to make. No issue titles are announced. The sign-up does not store email addresses.",
};

const issues = ["01", "02", "03", "04"];

export default function MagazinePage() {
  return (
    <>
      <PageHeader eyebrow="Magazine" title="Issues, when she is ready">
        <p>
          Phindi has said she wants a magazine. No issue has been announced.
          The grid below is a shelf for what is coming. The numbers are empty
          slots, not the names of real editions.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {issues.map((number) => (
            <li key={number} className="flex min-h-72 flex-col border border-border bg-card p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                Coming soon
              </p>
              <p className="mt-6 font-serif text-5xl text-night">Issue {number}</p>
              <h2 className="mt-4 text-2xl text-night">Title to be announced</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Cover, theme, and date will be added when Phindi chooses them.
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-xl">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
