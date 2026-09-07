import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { localePath } from "@/lib/paths";
import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/data/site";

type Href = Parameters<typeof localePath>[1];

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
    languages[loc] = `${siteUrl}${localePath(loc, href)}`;
  }
  languages["x-default"] = `${siteUrl}${localePath("ar", href)}`;
  const canonical = `${siteUrl}${localePath(locale, href)}`;

  return {
    title,
    description,
    authors: [{ name: locale === "ar" ? site.shortName.ar : site.shortName.en }],
    creator: locale === "ar" ? site.name.ar : site.name.en,
    publisher: locale === "ar" ? site.name.ar : site.name.en,
    keywords:
      locale === "ar"
        ? [
            "البروفيسور",
            "إيتونج",
            "لاصق بورسلين",
            "الغربية",
            "طنطا",
            "روبة بلاط",
            "لاتكس",
          ]
        : [
            "Al-Professor",
            "ETONG",
            "porcelain adhesive",
            "Gharbia",
            "Tanta",
            "tile grout",
            "latex",
          ],
    category: "BuildingMaterials",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical,
      languages,
      types: {
        "text/plain": `${siteUrl}/llms.txt`,
      },
    },
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
