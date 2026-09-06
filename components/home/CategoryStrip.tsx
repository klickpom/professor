import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProduct } from "@/data/products";
import { SectionHeading } from "@/components/brand/SectionHeading";

const items = [
  { id: "adhesive" as const, slug: "etong-fix-700-c2te" },
  { id: "grout" as const, slug: "etone-tile-grout-cg2" },
  { id: "additive" as const, slug: "etong-bond-latex" },
];

export async function CategoryStrip() {
  const t = await getTranslations("categories");

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const product = getProduct(item.slug);
          return (
            <Link
              key={item.id}
              href={`/products?category=${item.id}`}
              className="window-frame overflow-hidden"
            >
              {product ? (
                <div className="relative h-48 bg-surface-2/40">
                  <Image
                    src={product.images[0]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              ) : null}
              <div className="border-t border-line p-5">
                <h3 className="text-2xl font-semibold">{t(item.id)}</h3>
                <p className="mt-2 text-sm text-ink-dim">{t(`${item.id}Desc`)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
