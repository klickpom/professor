import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site-url";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export const dynamic = "force-static";

const paths = ["/", "/products", "/about", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const href of paths) {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${siteUrl}${getPathname({ locale, href })}`,
      ]),
    );
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${getPathname({ locale, href })}`,
        lastModified: new Date(),
        alternates: { languages },
      });
    }
  }

  for (const product of products) {
    const href = `/products/${product.slug}`;
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${siteUrl}${getPathname({ locale, href })}`,
      ]),
    );
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${getPathname({ locale, href })}`,
        lastModified: new Date(),
        alternates: { languages },
      });
    }
  }

  return entries;
}
