export const site = {
  name: "Phindi Ngcobo",
  handle: "@phindingcobo",
  tiktokUrl: "https://www.tiktok.com/@phindingcobo",
  followers: "283K",
  bio: "A follower of Jesus Christ",
  flags: "🇿🇦 🇬🇧",
  flagsLabel: "South African and UK flags",
  quote:
    "I do want a Website. I also want a Magazine yes and books, too. I'm looking at having a website or an app as I'm led to do counselling.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/counselling", label: "Counselling" },
  { href: "/magazine", label: "Magazine" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function isCurrent(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}
