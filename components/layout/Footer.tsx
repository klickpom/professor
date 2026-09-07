import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { loc } from "@/lib/locale-text";
import { asLocale } from "@/lib/locale";
import { telLink, waLink } from "@/lib/whatsapp";

export async function Footer() {
  const t = await getTranslations();
  const locale = asLocale(await getLocale());

  return (
    <footer className="relative z-10 mt-16 border-t-2 border-ink bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <address className="not-italic">
          <p className="text-lg font-semibold text-ink">{loc(site.shortName, locale)}</p>
          <p className="mt-2 max-w-sm text-sm text-ink-dim">
            {loc(site.role, locale)} — {loc(site.city, locale)}، {loc(site.region, locale)}
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-dim">{t("footer.rights")}</p>
        </address>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/products" className="min-h-11 inline-flex items-center">
            {t("nav.products")}
          </Link>
          <Link href="/about" className="min-h-11 inline-flex items-center">
            {t("nav.about")}
          </Link>
          <Link href="/projects" className="min-h-11 inline-flex items-center">
            {t("nav.projects")}
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
