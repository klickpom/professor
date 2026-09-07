import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type { Product } from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { relatedProducts } from "@/lib/schema";

export async function RelatedProducts({
  product,
  locale,
}: {
  product: Product;
  locale: AppLocale;
}) {
  const items = relatedProducts(product);
  if (items.length === 0) return null;
  const t = await getTranslations("product");

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-semibold">{t("related")}</h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/products/${item.slug}`} className="window-frame block overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={item.images[0]}
                  alt={loc(item.name, locale)}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>
              <p className="border-t border-line px-4 py-3 font-mono text-sm">{item.code}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
