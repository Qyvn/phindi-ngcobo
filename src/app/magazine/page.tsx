import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SignupForm } from "@/components/signup-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Magazine",
  description: `The Magazine: coming soon, from ${site.name}.`,
};

const issues = ["01", "02", "03", "04"];

export default function MagazinePage() {
  return (
    <>
      <PageHeader eyebrow="The Magazine" title="The Magazine: coming soon">
        <p>
          A magazine from {site.name} is on its way. Leave your email if you
          would like to hear when the first issue is ready.
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
              <h2 className="mt-4 text-2xl text-night">The Magazine</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Coming soon from {site.name}.
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
