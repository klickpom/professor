"use client";

import { useEffect, useId, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { landscapeWorks, portraitWorks, works, type WorkPiece } from "@/data/works";
import { loc } from "@/lib/locale-text";
import type { AppLocale } from "@/i18n/routing";

function Frame({
  item,
  locale,
  priority = false,
  onOpen,
}: {
  item: WorkPiece;
  locale: AppLocale;
  priority?: boolean;
  onOpen: () => void;
}) {
  const title = loc(item.title, locale);
  return (
    <figure className="window-frame overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-start"
        aria-label={title}
      >
        <img
          src={item.src}
          alt={loc(item.alt, locale)}
          width={item.width}
          height={item.height}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="mx-auto h-auto w-full bg-[#111] object-contain"
          style={{ maxWidth: item.width }}
        />
      </button>
      <figcaption className="border-t border-line px-4 py-3 text-sm font-medium text-ink">
        {title}
      </figcaption>
    </figure>
  );
}

export function WorksGallery() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("projects");
  const [active, setActive] = useState<string | null>(null);
  const titleId = useId();
  const current = works.find((item) => item.id === active) ?? null;

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [current]);

  return (
    <>
      <div className="grid gap-4">
        {landscapeWorks.slice(0, 1).map((item) => (
          <Frame
            key={item.id}
            item={item}
            locale={locale}
            priority
            onOpen={() => setActive(item.id)}
          />
        ))}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portraitWorks.map((item) => (
            <Frame
              key={item.id}
              item={item}
              locale={locale}
              onOpen={() => setActive(item.id)}
            />
          ))}
        </div>
        {landscapeWorks.slice(1).map((item) => (
          <Frame
            key={item.id}
            item={item}
            locale={locale}
            onOpen={() => setActive(item.id)}
          />
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-xl bg-surface p-2 sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-3 px-2">
              <p id={titleId} className="text-sm font-semibold text-ink">
                {loc(current.title, locale)}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line px-3 text-sm"
              >
                {t("close")}
              </button>
            </div>
            <img
              src={current.src}
              alt={loc(current.alt, locale)}
              width={current.width}
              height={current.height}
              decoding="async"
              className="mx-auto h-auto max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
