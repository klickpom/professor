import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/data/site";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { telLink, waLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/brand/SectionHeading";

export async function KeyFacts({ nested = false }: { nested?: boolean } = {}) {
  const t = await getTranslations("extract");
  const locale = (await getLocale()) as AppLocale;
  const cities = site.cities.map((city) => loc(city, locale)).join("، ");

  const rows = [
    { k: t("napName"), v: loc(site.name, locale) },
    { k: t("napRole"), v: loc(site.role, locale) },
    { k: t("napRegion"), v: `${loc(site.region, locale)} — ${cities}` },
    { k: t("napCall"), v: site.phoneCallDisplay, href: telLink() },
    { k: t("napWa"), v: site.whatsappDisplay, href: waLink() },
    { k: t("napMap"), v: loc(site.city, locale) },
  ];

  return (
    <section
      className={
        nested ? "mt-8" : "relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6"
      }
    >
      <SectionHeading kicker={t("factsKicker")} title={t("factsTitle")} />
      <dl data-speakable className="window-frame divide-y divide-line">
        {rows.map((row) => (
          <div key={row.k} className="grid gap-1 px-5 py-3 sm:grid-cols-[12rem_1fr] sm:items-baseline">
            <dt className="text-sm font-medium text-ink-dim">{row.k}</dt>
            <dd className="text-base">
              {"href" in row && row.href ? (
                <a href={row.href} className="font-mono">
                  {row.v}
                </a>
              ) : (
                row.v
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
