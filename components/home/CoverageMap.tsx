import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/data/site";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { SectionHeading } from "@/components/brand/SectionHeading";

export async function CoverageMap() {
  const t = await getTranslations("coverage");
  const locale = (await getLocale()) as AppLocale;

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} />
      <ul className="flex flex-wrap gap-2">
        {site.cities.map((city) => (
          <li
            key={city.en}
            className="min-h-11 rounded-full border border-line px-4 py-2 text-sm"
          >
            {loc(city, locale)}
          </li>
        ))}
      </ul>
    </section>
  );
}
