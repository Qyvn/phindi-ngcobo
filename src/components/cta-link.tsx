"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: "gold" | "night" | "outline";
  external?: boolean;
  className?: string;
};

export function CtaLink({
  href,
  children,
  tone = "night",
  external = false,
  className,
}: CtaLinkProps) {
  const classes = cn(
    buttonVariants({
      variant: tone === "outline" ? "outline" : "default",
      size: "lg",
    }),
    "h-12 px-6 text-base",
    tone === "gold" && "bg-gold-bright text-deep hover:bg-gold-bright/90",
    tone === "night" && "bg-night text-primary-foreground hover:bg-night/90",
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
