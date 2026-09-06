import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { products } from "@/data/products";
import { CatalogClient } from "@/components/products/CatalogClient";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

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

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: getSiteUrl() },
            { "@type": "ListItem", position: 2, name: t("title"), item: `${getSiteUrl()}/products` },
          ],
        }}
      />
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} as="h1" />
      <Suspense>
        <CatalogClient items={products} />
      </Suspense>
    </div>
  );
}
