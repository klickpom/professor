import { getTranslations } from "next-intl/server";

export async function TrustBar() {
  const t = await getTranslations("trust");

  return (
    <div className="relative z-10 mx-auto grid max-w-6xl border-y-2 border-ink bg-surface md:grid-cols-3">
      <div className="px-6 py-6">
        <p className="font-mono text-[11px] tracking-[0.2em] text-gold">{t("statusK")}</p>
        <p className="mt-2 text-lg text-ink">{t("statusV")}</p>
      </div>
      <div className="border-y border-line px-6 py-6 md:border-x md:border-y-0">
        <p className="font-mono text-[11px] tracking-[0.2em] text-gold">{t("coverageK")}</p>
        <p className="mt-2 text-lg text-ink">{t("coverageV")}</p>
      </div>
      <div className="px-6 py-6">
        <p className="font-mono text-[11px] tracking-[0.2em] text-gold">{t("lineK")}</p>
        <p className="mt-2 text-lg text-ink">{t("lineV")}</p>
      </div>
    </div>
  );
}
