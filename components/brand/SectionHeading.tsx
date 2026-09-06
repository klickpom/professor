type Props = {
  kicker: string;
  title: string;
  lede?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ kicker, title, lede, as = "h2" }: Props) {
  const Heading = as;
  return (
    <header className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">{kicker}</p>
      <Heading className="mt-2 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {lede ? <p className="mt-4 text-base text-ink-dim sm:text-lg">{lede}</p> : null}
    </header>
  );
}
