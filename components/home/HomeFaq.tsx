import { getLocale, getTranslations } from "next-intl/server";
import { faqs } from "@/data/faq";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { SectionHeading } from "@/components/brand/SectionHeading";

export async function HomeFaq() {
  const locale = (await getLocale()) as AppLocale;
  const t = await getTranslations("extract");

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd data={faqJsonLd(locale)} />
      <SectionHeading kicker={t("faqKicker")} title={t("faqTitle")} lede={t("faqLede")} />
      <div className="space-y-4">
        {faqs.map((item) => (
          <details key={item.q.en} className="window-frame px-5 py-4">
            <summary className="min-h-11 cursor-pointer text-lg">{loc(item.q, locale)}</summary>
            <p className="mt-3 text-ink-dim">{loc(item.a, locale)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
