import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MagneticCta } from "@/components/motion/MagneticCta";
import { getProduct } from "@/data/products";
import { loc } from "@/lib/locale-text";
import { waLink } from "@/lib/whatsapp";
import { getPathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

const heroSlugs = [
  "etong-fix-700-c2te",
  "etone-tile-grout-cg2",
  "etong-bond-latex",
] as const;

export async function Hero() {
  const t = await getTranslations();
  const locale = (await getLocale()) as AppLocale;
  const catalogHref = getPathname({ locale, href: "/products" });
  const plates = heroSlugs
    .map((slug) => getProduct(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-16">
      <div className="max-w-xl">
        <p className="text-sm font-semibold text-gold">{t("hero.eyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-xl text-ink">{t("hero.role")}</p>
        <p className="mt-5 max-w-md text-base text-ink-dim sm:text-lg">{t("hero.lede")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticCta href={waLink()} variant="wa" external>
            {t("actions.whatsapp")}
          </MagneticCta>
          <MagneticCta href={catalogHref} variant="ghost">
            {t("actions.catalog")}
          </MagneticCta>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {plates.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="window-frame overflow-hidden p-2"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={product.images[0]}
                alt={loc(product.name, locale)}
                fill
                priority
                sizes="(max-width: 768px) 30vw, 180px"
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[11px] text-ink">{product.code}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
