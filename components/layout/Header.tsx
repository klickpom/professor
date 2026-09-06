import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { telLink, waLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { asLocale } from "@/lib/locale";

export async function Header() {
  const t = await getTranslations();
  const locale = asLocale(await getLocale());

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center gap-2 pe-2">
          <Image
            src={site.logo}
            alt={t("common.brandAlt")}
            width={44}
            height={44}
            priority
            className="size-11 rounded-full object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-ink">{site.shortName[locale]}</span>
            <span className="hidden text-[11px] text-ink-dim sm:block">{t("hero.eyebrow")}</span>
          </span>
        </Link>
        <nav className="order-last w-full overflow-x-auto border-t border-line pt-1 md:order-none md:w-auto md:flex-1 md:overflow-visible md:border-0 md:pt-0">
          <ul className="flex flex-nowrap items-center gap-1 text-sm text-ink md:flex-wrap md:justify-center">
            <li>
              <Link href="/products" className="inline-flex min-h-11 items-center px-3">
                {t("nav.products")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="inline-flex min-h-11 items-center px-3">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="inline-flex min-h-11 items-center px-3">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-flex min-h-11 items-center px-3">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <a
            href={telLink()}
            className="hidden min-h-11 items-center px-2 font-mono text-sm text-ink md:inline-flex"
          >
            {site.phoneCallDisplay}
          </a>
          <a
            href={waLink()}
            className="inline-flex min-h-11 items-center rounded-md bg-wa px-4 text-sm font-semibold text-white"
          >
            {t("actions.whatsapp")}
          </a>
          <LanguageSwitcher label={t("nav.switchLabel")} />
        </div>
      </div>
    </header>
  );
}
