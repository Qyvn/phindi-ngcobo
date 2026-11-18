import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 md:py-32">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
        Missing page
      </p>
      <h1 className="mt-3 text-5xl leading-tight text-night">This page is not here</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        The address does not match a page on this site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center bg-night px-6 text-primary-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
