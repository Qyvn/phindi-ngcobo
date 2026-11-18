import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-deep text-gold-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-[#f6f1e8]">{site.name}</p>
          <p className="mt-3 max-w-md text-base leading-7 text-gold-soft">
            {site.bio}{" "}
            <span aria-hidden="true">{site.flags}</span>
            <span className="sr-only">{site.flagsLabel}</span>
          </p>
          <p className="mt-6 max-w-md text-sm leading-6 text-[#d9d0c2]">
            Faith-centred counselling for individuals, couples and families.
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <nav aria-label="Footer">
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#f6f1e8] underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs tracking-[0.18em] text-gold-bright uppercase">
              TikTok
            </p>
            <a
              href={site.tiktokUrl}
              className="mt-2 inline-block text-[#f6f1e8] underline decoration-gold-bright underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.handle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
