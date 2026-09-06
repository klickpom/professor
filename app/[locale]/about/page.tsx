import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { site } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = asLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/about", t("aboutTitle"), t("aboutDescription"));
}

export default async function AboutPage({ params }: Props) {
  const locale = asLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} as="h1" />
      <p className="text-lg text-ink-dim">{t("body")}</p>
      <p className="mt-6 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-dim">
        {t("todoAddress")}
      </p>
      <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-xl border border-line">
        <Image
          src={site.logo}
          alt={site.name.ar}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
