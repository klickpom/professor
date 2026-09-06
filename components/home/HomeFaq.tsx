import { getLocale } from "next-intl/server";
import { faqs } from "@/data/faq";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

export async function HomeFaq() {
  const locale = (await getLocale()) as AppLocale;
  const siteUrl = getSiteUrl();

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: loc(item.q, locale),
            acceptedAnswer: {
              "@type": "Answer",
              text: loc(item.a, locale),
            },
          })),
          url: siteUrl,
        }}
      />
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
