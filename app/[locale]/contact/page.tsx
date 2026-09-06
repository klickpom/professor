import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { ContactForm } from "@/components/home/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { site } from "@/data/site";
import { telLink, waLink } from "@/lib/whatsapp";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = asLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/contact", t("contactTitle"), t("contactDescription"));
}

export default async function ContactPage({ params }: Props) {
  const locale = asLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const teaser = await getTranslations("contactTeaser");

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} as="h1" />
      <div className="mb-6 flex flex-wrap gap-3 font-mono text-sm">
        <a href={telLink()} className="min-h-11 rounded-md border border-ink px-4 py-2">
          {site.phoneCallDisplay}
        </a>
        <a href={waLink()} className="min-h-11 rounded-md bg-wa px-4 py-2 font-semibold text-white">
          {site.whatsappDisplay}
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-line">
        <iframe
          title={t("mapTitle")}
          src={site.mapEmbed}
          className="h-80 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <ContactForm kicker={teaser("kicker")} title={teaser("title")} lede={teaser("lede")} />
    </div>
  );
}
