export const site = {
  name: "Phindi Ngcobo",
  handle: "@phindingcobo",
  tiktokUrl: "https://www.tiktok.com/@phindingcobo",
  bio: "A follower of Jesus Christ",
  flags: "🇿🇦 🇬🇧",
  flagsLabel: "South African and UK flags",
  welcome:
    "Phindi Ngcobo is a follower of Jesus Christ, offering a safe place to be heard, prayed with and guided.",
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
