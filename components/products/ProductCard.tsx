"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";

export function ProductCard({ product }: { product: Product; index?: number }) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("actions");

  return (
    <Link href={`/products/${product.slug}`} className="group window-frame overflow-hidden">
      <div className="relative h-56 bg-surface-2/40">
        <span
          className="absolute inset-y-0 inset-inline-start-0 w-1.5"
          style={{ background: product.packAccent }}
        />
        <Image
          src={product.images[0]}
          alt={loc(product.name, locale)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-5"
        />
      </div>
      <div className="border-t border-line p-4">
        <p className="font-mono text-xs text-gold">{product.code}</p>
        <h2 className="mt-1 text-lg font-semibold">{loc(product.name, locale)}</h2>
        <p className="mt-2 line-clamp-2 text-sm text-ink-dim">{loc(product.summary, locale)}</p>
        <p className="mt-3 text-sm font-medium text-ink">{t("viewProduct")}</p>
      </div>
    </Link>
  );
}
