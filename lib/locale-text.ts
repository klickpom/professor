import type { LocaleText } from "@/data/products";
import type { AppLocale } from "@/i18n/routing";

export function loc(text: LocaleText, locale: AppLocale) {
  return text[locale];
}
