import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site-url";
import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/paths";

export const dynamic = "force-static";

const paths = [
  { href: "/", changeFrequency: "weekly" as const, priority: 1 },
  { href: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
  { href: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { href: "/projects", changeFrequency: "monthly" as const, priority: 0.6 },
  { href: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2026-09-07");
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const languages: Record<string, string> = {
      "x-default": absoluteUrl("ar", path.href),
    };
    for (const locale of routing.locales) {
      languages[locale] = absoluteUrl(locale, path.href);
    }
    for (const locale of routing.locales) {
      entries.push({
        url: absoluteUrl(locale, path.href),
        lastModified,
        changeFrequency: path.changeFrequency,
        priority: path.priority,
        alternates: { languages },
        ...(path.href === "/" ? { images: [`${siteUrl}/og.jpg`] } : {}),
      });
    }
  }

  for (const product of products) {
    const href = `/products/${product.slug}`;
    const languages: Record<string, string> = {
      "x-default": absoluteUrl("ar", href),
    };
    for (const locale of routing.locales) {
      languages[locale] = absoluteUrl(locale, href);
    }
    for (const locale of routing.locales) {
      entries.push({
        url: absoluteUrl(locale, href),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages },
        images: product.images.map((src) => `${siteUrl}${src}`),
      });
    }
  }

  return entries.concat([
    {
      url: `${siteUrl}/llms.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/llms-full.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]);
}
