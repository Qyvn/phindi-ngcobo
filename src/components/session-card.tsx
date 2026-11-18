import Link from "next/link";
import { bookHref, sessions } from "@/lib/sessions";

type Session = (typeof sessions)[number];

export function SessionCard({ session }: { session: Session }) {
  return (
    <article className="flex h-full flex-col border border-border bg-card px-6 py-7">
      <h3 className="text-3xl leading-tight text-night">{session.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted-foreground">{session.summary}</p>
      <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4">
        <div>
          <dt className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Duration
          </dt>
          <dd className="mt-1 text-night">Placeholder</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Fee
          </dt>
          <dd className="mt-1 text-night">Placeholder</dd>
        </div>
      </dl>
      <Link
        href={bookHref(session.id)}
        className="mt-6 inline-flex h-12 items-center justify-center bg-night px-5 text-center text-base text-primary-foreground hover:bg-night/90"
      >
        Book this session
      </Link>
    </article>
  );
}

export function SessionGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {sessions.map((session) => (
        <li key={session.id} className="h-full">
          <SessionCard session={session} />
        </li>
      ))}
    </ul>
  );
}
