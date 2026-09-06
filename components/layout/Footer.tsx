import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { telLink, waLink } from "@/lib/whatsapp";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="relative z-10 mt-16 border-t-2 border-ink bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">{site.shortName.ar}</p>
          <p className="mt-2 max-w-sm text-sm text-ink-dim">{t("footer.rights")}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/products" className="min-h-11 inline-flex items-center">
            {t("nav.products")}
          </Link>
          <Link href="/about" className="min-h-11 inline-flex items-center">
            {t("nav.about")}
          </Link>
          <Link href="/contact" className="min-h-11 inline-flex items-center">
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex flex-col gap-2 font-mono text-sm">
          <a href={telLink()} className="min-h-11 inline-flex items-center">
            {site.phoneCallDisplay}
          </a>
          <a href={waLink()} className="min-h-11 inline-flex items-center text-wa">
            {site.whatsappDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
