export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] text-night text-balance md:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {children}
        </div>
      </div>
    </header>
  );
}
