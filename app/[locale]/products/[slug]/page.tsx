import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getProduct, products } from "@/data/products";
import { loc } from "@/lib/locale-text";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { Gallery } from "@/components/product/Gallery";
import { SpecsTable } from "@/components/product/SpecsTable";
import { UsageSteps } from "@/components/product/UsageSteps";
import { QuoteCta } from "@/components/product/QuoteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = asLocale(raw);
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(
    locale,
    `/products/${slug}`,
    loc(product.name, locale),
    loc(product.summary, locale),
  );
}

export default async function ProductPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = asLocale(raw);
  setRequestLocale(locale);
  const product = getProduct(slug);
  if (!product) notFound();
  const locCode = locale;
  const tNav = await getTranslations("nav");
  const name = loc(product.name, locCode);
  const siteUrl = getSiteUrl();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name,
          brand: product.brand,
          sku: product.code,
          image: `${siteUrl}${product.images[0]}`,
          description: loc(product.summary, locCode),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: tNav("home"), item: siteUrl },
            { "@type": "ListItem", position: 2, name: tNav("products"), item: `${siteUrl}/products` },
            { "@type": "ListItem", position: 3, name },
          ],
        }}
      />
      <p className="mb-6 text-sm text-ink-dim">
        <Link href="/products">{tNav("products")}</Link>
        <span className="mx-2">/</span>
        <span>{product.code}</span>
      </p>
      <div className="grid gap-10 lg:grid-cols-2">
        <Gallery images={product.images} alt={name} />
        <div className="space-y-6">
          <p className="font-mono text-gold">{product.code}</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">{name}</h1>
          <p className="text-ink-dim">{loc(product.summary, locCode)}</p>
          <ul className="space-y-2 text-sm">
            {product.features.map((feature) => (
              <li key={feature.en} className="border-b border-line py-2">
                {loc(feature, locCode)}
              </li>
            ))}
          </ul>
          <QuoteCta name={name} code={product.code} />
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <SpecsTable product={product} locale={locCode} />
        <UsageSteps />
      </div>
    </div>
  );
}
