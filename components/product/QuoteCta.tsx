import { getTranslations } from "next-intl/server";
import { MagneticCta } from "@/components/motion/MagneticCta";
import { waLink } from "@/lib/whatsapp";

export async function QuoteCta({ name, code }: { name: string; code: string }) {
  const t = await getTranslations("product");
  const ta = await getTranslations("actions");
  const text = t("quoteText", { name, code });

  return (
    <div className="window-frame p-6">
      <MagneticCta href={waLink(text)} variant="wa" external className="w-full">
        {ta("quote")}
      </MagneticCta>
    </div>
  );
}
