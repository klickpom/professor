import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { WorksGallery } from "@/components/works/WorksGallery";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const locale = asLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/projects", t("projectsTitle"), t("projectsDescription"));
}

export default async function ProjectsPage({ params }: Props) {
  const locale = asLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} as="h1" />
      <WorksGallery />
    </div>
  );
}
