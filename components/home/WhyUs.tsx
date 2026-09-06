import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const keys = ["agent", "bond", "stability", "finish"] as const;

export async function WhyUs() {
  const t = await getTranslations("why");

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} />
      <div className="divide-y divide-line border-y border-line">
        {keys.map((key, index) => (
          <Reveal key={key} delay={index * 0.05}>
            <article className="grid gap-3 py-8 md:grid-cols-[8rem_1fr]">
              <p className="font-mono text-gold">{index + 1}</p>
              <div>
                <h3 className="text-2xl">{t(`items.${key}.title`)}</h3>
                <p className="mt-2 max-w-2xl text-ink-dim">{t(`items.${key}.body`)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
