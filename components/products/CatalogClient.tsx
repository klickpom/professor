"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { categories, type CategoryId, type Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function CatalogClient({ items }: { items: readonly Product[] }) {
  const t = useTranslations("productsPage");
  const tc = useTranslations("categories");
  const params = useSearchParams();
  const initial = (params.get("category") as CategoryId | "all" | null) ?? "all";
  const [category, setCategory] = useState<string>(
    categories.includes(initial as CategoryId) ? initial : "all",
  );
  const [query, setQuery] = useState(params.get("q") ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const categoryOk = category === "all" || item.category === category;
      if (!categoryOk) return false;
      if (!q) return true;
      const hay = `${item.code} ${item.slug} ${item.name.ar} ${item.name.en} ${item.classification ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, category, query]);

  return (
    <>
      <div className="sticky top-[4.5rem] z-30 -mx-4 mb-8 border-y border-line bg-surface px-4 py-3 sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("search")}
            className="min-h-11 flex-1 rounded-md border border-line bg-surface px-4 text-sm text-ink"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`min-h-11 rounded-md px-4 text-sm ${
                category === "all" ? "bg-ink text-surface" : "border border-line bg-surface"
              }`}
            >
              {t("all")}
            </button>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-md px-4 text-sm ${
                  category === item ? "bg-ink text-surface" : "border border-line bg-surface"
                }`}
              >
                {tc(item)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="mb-4 font-mono text-xs text-ink-dim">{t("count", { count: filtered.length })}</p>
      {filtered.length === 0 ? (
        <p className="text-ink-dim">{t("empty")}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
