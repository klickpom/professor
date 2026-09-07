import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { SectionHeading } from "@/components/brand/SectionHeading";

export async function LineupTable({ nested = false }: { nested?: boolean } = {}) {
  const t = await getTranslations("extract");
  const locale = (await getLocale()) as AppLocale;

  return (
    <section
      className={
        nested ? "mt-8 mb-10" : "relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6"
      }
    >
      <SectionHeading kicker={t("lineupKicker")} title={t("lineupTitle")} lede={t("lineupLede")} />
      <div className="window-frame overflow-x-auto">
        <table className="w-full min-w-[40rem] text-sm">
          <thead>
            <tr className="border-b border-line text-start">
              <th className="px-4 py-3 font-medium">{t("colCode")}</th>
              <th className="px-4 py-3 font-medium">{t("colClass")}</th>
              <th className="px-4 py-3 font-medium">{t("colPack")}</th>
              <th className="px-4 py-3 font-medium">{t("colUse")}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.slug} className="border-b border-line last:border-b-0">
                <td className="px-4 py-3 font-mono">
                  <Link href={`/products/${product.slug}`} className="underline-offset-2 hover:underline">
                    {product.code}
                  </Link>
                </td>
                <td className="px-4 py-3">{product.classification ?? ""}</td>
                <td className="px-4 py-3">{loc(product.packSize, locale)}</td>
                <td className="px-4 py-3 text-ink-dim">{loc(product.features[0], locale)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
