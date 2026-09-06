import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getSiteUrl } from "@/lib/site-url";

type Href = Parameters<typeof getPathname>[0]["href"];

export function shareImage() {
  const url = `${getSiteUrl()}/og.jpg`;
  return {
    url,
    secureUrl: url,
    width: 1200,
    height: 630,
    type: "image/jpeg" as const,
    alt: "البروفيسور للبورسلين والسيراميك — وكيل إيتونج المعتمد في الغربية",
  };
}

export function pageMetadata(
  locale: AppLocale,
  href: Href,
  title: string,
  description: string,
): Metadata {
  const siteUrl = getSiteUrl();
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${siteUrl}${getPathname({ locale: loc, href })}`;
  }
  languages["x-default"] = `${siteUrl}${getPathname({ locale: "ar", href })}`;
  const canonical = `${siteUrl}${getPathname({ locale, href })}`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: canonical,
      type: "website",
      siteName: locale === "ar" ? "البروفيسور" : "Al-Professor",
      images: [shareImage()],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage()],
    },
  };
}
