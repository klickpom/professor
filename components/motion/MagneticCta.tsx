type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "ghost" | "wa";
  external?: boolean;
};

const variants = {
  gold: "btn-ink font-semibold",
  ghost: "border border-ink bg-surface text-ink hover:bg-surface-2",
  wa: "bg-wa font-semibold text-white",
};

export function MagneticCta({
  href,
  children,
  className = "",
  variant = "gold",
  external,
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-6 py-3 text-sm ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
