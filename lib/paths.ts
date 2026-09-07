import { getPathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site-url";

type Href = Parameters<typeof getPathname>[0]["href"];

export function withTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  const [pathname, query] = path.split("?");
  const last = pathname.split("/").pop() ?? "";
  if (last.includes(".")) {
    return query ? `${pathname}?${query}` : pathname;
  }
  const slashed = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return query ? `${slashed}?${query}` : slashed;
}

export function localePath(locale: AppLocale, href: Href) {
  return withTrailingSlash(getPathname({ locale, href }));
}

export function absoluteUrl(locale: AppLocale, href: Href) {
  return `${getSiteUrl()}${localePath(locale, href)}`;
}
