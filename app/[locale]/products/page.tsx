import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { products } from "@/data/products";
import { CatalogClient } from "@/components/products/CatalogClient";
import { LineupTable } from "@/components/seo/LineupTable";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const locale = asLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata(locale, "/products", t("productsTitle"), t("productsDescription"));
}

export default async function ProductsPage({ params }: Props) {
  const locale = asLocale((await params).locale);
  setRequestLocale(locale);
  const t = await getTranslations("productsPage");
  const tNav = await getTranslations("nav");
  const meta = await getTranslations("meta");

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <JsonLd
        data={webPageJsonLd(locale, "/products", meta("productsTitle"), meta("productsDescription"))}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: tNav("home"), href: "/" },
          { name: t("title"), href: "/products" },
        ])}
      />
      <JsonLd data={itemListJsonLd(locale)} />
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} as="h1" />
      <LineupTable nested />
      <Suspense>
        <CatalogClient items={products} />
      </Suspense>
    </div>
  );
}
