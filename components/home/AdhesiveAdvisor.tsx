"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  adviseProducts,
  type AdvisorPlace,
  type PrintedClass,
} from "@/data/products";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";
import { SectionHeading } from "@/components/brand/SectionHeading";

export function AdhesiveAdvisor() {
  const t = useTranslations("advisor");
  const tp = useTranslations("actions");
  const locale = useLocale() as AppLocale;
  const [place, setPlace] = useState<AdvisorPlace>("wallsFloors");
  const [printedClass, setPrintedClass] = useState<PrintedClass | "all">("all");

  const matches = useMemo(() => {
    const klass = printedClass === "all" ? undefined : printedClass;
    return adviseProducts(place, klass);
  }, [place, printedClass]);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading kicker={t("kicker")} title={t("title")} lede={t("lede")} />
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <fieldset>
          <legend className="mb-2 text-xs text-ink-dim">{t("placeLabel")}</legend>
          <div className="flex gap-2">
            {(["wallsFloors", "wet"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setPlace(value)}
                className={`min-h-11 rounded-md px-4 text-sm ${
                  place === value ? "bg-ink text-surface" : "border border-line bg-surface"
                }`}
              >
                {t(value)}
              </button>
            ))}
          </div>
        </fieldset>
        {place === "wallsFloors" ? (
          <fieldset>
            <legend className="mb-2 text-xs text-ink-dim">{t("classLabel")}</legend>
            <div className="flex gap-2">
              {(["all", "C1", "C2"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPrintedClass(value)}
                  className={`min-h-11 rounded-md px-4 font-mono text-sm ${
                    printedClass === value ? "bg-ink text-surface" : "border border-line bg-surface"
                  }`}
                >
                  {value === "all" ? t("classAny") : t(value === "C1" ? "classC1" : "classC2")}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-ink-dim">{t("classHint")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {matches.length === 0 ? (
          <p className="text-ink-dim">{t("empty")}</p>
        ) : (
          matches.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group window-frame overflow-hidden"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="relative h-52 bg-surface-2/40">
                <span
                  className="absolute inset-y-0 inset-inline-start-0 w-1"
                  style={{ background: product.packAccent }}
                />
                <Image
                  src={product.images[0]}
                  alt={loc(product.name, locale)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-line p-4">
                <p className="font-mono text-xs text-gold">{product.code}</p>
                <p className="mt-1 text-lg">{loc(product.name, locale)}</p>
                <p className="mt-3 text-sm font-medium text-ink">{tp("viewProduct")}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <p className="mt-6 text-sm text-ink-dim">{t("note")}</p>
    </section>
  );
}
