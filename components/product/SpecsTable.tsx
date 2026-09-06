import { getTranslations } from "next-intl/server";
import type { Product } from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";

export async function SpecsTable({
  product,
  locale,
}: {
  product: Product;
  locale: AppLocale;
}) {
  const t = await getTranslations("product");
  const tc = await getTranslations("categories");
  const rows = [
    { k: t("code"), v: product.code },
    { k: t("class"), v: product.classification ?? "—" },
    { k: t("pack"), v: loc(product.packSize, locale) },
    { k: t("color"), v: product.printedColor ? loc(product.printedColor, locale) : "—" },
    { k: t("tech"), v: loc(product.technology, locale) },
    { k: t("category"), v: tc(product.category) },
    { k: t("coverage"), v: t("coverageTodo") },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <h2 className="border-b border-line px-5 py-4 text-xl">{t("specs")}</h2>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.k} className="border-b border-line last:border-b-0">
              <th className="w-1/3 px-5 py-3 text-start font-medium text-ink-dim">{row.k}</th>
              <td className="px-5 py-3">{row.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
