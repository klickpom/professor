import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-4 pt-8">
      <p className="font-mono text-gold">404</p>
      <h1 className="mt-4 text-4xl font-semibold">{t("title")}</h1>
      <p className="mt-3 text-ink-dim">{t("lede")}</p>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center font-semibold text-ink">
        {t("home")}
      </Link>
    </div>
  );
}
