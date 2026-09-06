import { getTranslations } from "next-intl/server";
import { site } from "@/data/site";
import { telLink, waLink } from "@/lib/whatsapp";

export async function MobileActionBar() {
  const t = await getTranslations("actions");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={telLink()}
          className="inline-flex min-h-14 flex-col items-center justify-center text-xs text-ink"
        >
          {t("call")}
        </a>
        <a
          href={waLink()}
          className="inline-flex min-h-14 flex-col items-center justify-center bg-wa text-xs font-semibold text-white"
        >
          {t("whatsapp")}
        </a>
        <a
          href={site.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 flex-col items-center justify-center text-xs text-ink"
        >
          {t("location")}
        </a>
      </div>
    </div>
  );
}
