"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const next = locale === "ar" ? "en" : "ar";
  const href = pathname.replace(/^\/(ar|en)(?=\/|$)/, "") || "/";

  return (
    <Link
      href={href}
      locale={next}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-surface px-3 text-xs font-semibold text-ink"
      aria-label={label}
    >
      {next === "en" ? "EN" : "ع"}
    </Link>
  );
}
