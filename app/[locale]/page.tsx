import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { HomeCatalog } from "@/components/home/HomeCatalog";
import { AdhesiveAdvisor } from "@/components/home/AdhesiveAdvisor";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { WhyUs } from "@/components/home/WhyUs";
import { CoverageMap } from "@/components/home/CoverageMap";
import { ContactForm } from "@/components/home/ContactForm";
import { HomeFaq } from "@/components/home/HomeFaq";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = asLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/", t("homeTitle"), t("homeDescription"));
}

export default async function HomePage({ params }: Props) {
  const locale = asLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("contactTeaser");

  return (
    <>
      <Hero />
      <TrustBar />
      <HomeCatalog />
      <AdhesiveAdvisor />
      <CategoryStrip />
      <WhyUs />
      <CoverageMap />
      <ContactForm kicker={t("kicker")} title={t("title")} lede={t("lede")} />
      <HomeFaq />
    </>
  );
}
