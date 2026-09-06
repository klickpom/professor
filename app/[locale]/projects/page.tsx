import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = { params: Promise<{ locale: string }> };

const brandPlates = [
  "/assets/brand/gharbia-agent.jpg",
  "/assets/brand/facebook-banner.jpg",
  "/assets/brand/logo-circle.jpg",
];

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
      <p className="mb-8 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-dim">{t("todo")}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {brandPlates.map((src) => (
          <figure key={src} className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="relative aspect-[4/5]">
              <Image src={src} alt={t("placeholder")} fill sizes="33vw" className="object-cover" />
            </div>
            <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-dim">
              {t("placeholder")}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
