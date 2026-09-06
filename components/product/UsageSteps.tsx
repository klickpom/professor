import { getTranslations } from "next-intl/server";

export async function UsageSteps() {
  const t = await getTranslations("product");
  const steps = [t("steps.one"), t("steps.two"), t("steps.three"), t("steps.four")];

  return (
    <section>
      <h2 className="text-xl">{t("usage")}</h2>
      <p className="mt-2 text-sm text-ink-dim">{t("usageNote")}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="font-mono text-gold">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
