import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Books",
  description:
    "A coming-soon shelf for books Phindi Ngcobo hopes to make. No titles are invented.",
};

const books = [
  { slot: "One", tone: "bg-night", height: "h-64" },
  { slot: "Two", tone: "bg-[#1c2a4a]", height: "h-72" },
  { slot: "Three", tone: "bg-[#312055]", height: "h-60" },
  { slot: "Four", tone: "bg-deep", height: "h-[17rem]" },
];

export default function BooksPage() {
  return (
    <>
      <PageHeader eyebrow="Books" title="A shelf with no titles yet">
        <p>
          Phindi wants to make books. None have been named, so this page does
          not invent titles, descriptions, or dates. Each place below is only
          a marker that a book may stand here later.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <ul className="grid gap-4 md:hidden">
          {books.map((book) => (
            <li key={book.slot} className="border border-border bg-card px-5 py-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                Placeholder · Coming soon
              </p>
              <h2 className="mt-2 text-2xl text-night">Title to be announced</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Book {book.slot.toLowerCase()}. Author line, cover, and release
                date are not set.
              </p>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <div className="mx-auto flex max-w-3xl items-end justify-center gap-5 bg-muted/70 px-8 pt-12">
            {books.map((book) => (
              <div
                key={book.slot}
                className={`${book.tone} ${book.height} flex w-28 flex-col justify-between px-3 py-4 text-[#f6f1e8]`}
              >
                <p className="text-[10px] font-semibold tracking-[0.14em] text-gold-soft uppercase">
                  Coming soon
                </p>
                <p className="font-serif text-lg leading-tight [writing-mode:vertical-rl] rotate-180">
                  Title to be announced
                </p>
                <p className="text-[10px] tracking-wide text-gold-soft">Book {book.slot}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto h-3 max-w-3xl bg-gold-bright" />
          <p className="mt-4 text-sm text-muted-foreground">
            Four empty places. None of these is a published book.
          </p>
        </div>
      </div>
    </>
  );
}
