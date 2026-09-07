import { getLocale, getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { howToQuoteJsonLd } from "@/lib/schema";
import { asLocale } from "@/lib/locale";

export async function QuoteHowTo({ nested = false }: { nested?: boolean } = {}) {
  const t = await getTranslations("extract");
  const locale = asLocale(await getLocale());

  return (
    <section
      className={
        nested ? "mt-10" : "relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6"
      }
    >
      <JsonLd data={howToQuoteJsonLd(locale)} />
      <SectionHeading kicker={t("howKicker")} title={t("howTitle")} lede={t("howLede")} />
      <ol className="window-frame divide-y divide-line">
        {[t("how1"), t("how2"), t("how3")].map((step, index) => (
          <li key={step} className="flex gap-4 px-5 py-4">
            <span className="font-mono text-gold">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
