"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { waLink } from "@/lib/whatsapp";

export function ContactForm({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  const t = useTranslations("contactTeaser");
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = `${name}\n${need}`.trim();
    window.location.href = waLink(text || undefined);
  };

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="window-frame p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">{kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-lg text-ink-dim">{lede}</p>
        <form onSubmit={onSubmit} className="relative mt-8 grid max-w-lg gap-3">
          <label className="text-sm">
            {t("formName")}
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 min-h-11 w-full rounded-md border border-line bg-ground px-3 text-ink"
            />
          </label>
          <label className="text-sm">
            {t("formNeed")}
            <textarea
              name="need"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-md border border-line bg-ground px-3 py-3 text-ink"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-wa px-6 text-sm font-semibold text-white"
          >
            {t("formSubmit")}
          </button>
        </form>
      </div>
    </section>
  );
}
