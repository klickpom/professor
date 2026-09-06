import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { SectionHeading } from "@/components/brand/SectionHeading";

export async function HomeCatalog() {
  const t = await getTranslations("homeCatalog");
  const ta = await getTranslations("actions");
  const locale = (await getLocale()) as AppLocale;

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="window-frame overflow-hidden"
          >
            <div className="relative h-52 bg-surface-2/40">
              <span
                className="absolute inset-y-0 inset-inline-start-0 w-1.5"
                style={{ background: product.packAccent }}
              />
              <Image
                src={product.images[0]}
                alt={loc(product.name, locale)}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-contain p-4"
              />
            </div>
            <div className="border-t border-line p-4">
              <p className="font-mono text-xs text-gold">{product.code}</p>
              <h3 className="mt-1 text-base font-semibold">{loc(product.name, locale)}</h3>
              <p className="mt-1 text-sm text-ink-dim">{loc(product.packSize, locale)}</p>
              <p className="mt-3 text-sm font-medium text-ink">{ta("viewProduct")}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
