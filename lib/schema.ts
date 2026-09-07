import { products, type Product } from "@/data/products";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { loc } from "@/lib/locale-text";
import { absoluteUrl } from "@/lib/paths";
import { getSiteUrl } from "@/lib/site-url";
import type { AppLocale } from "@/i18n/routing";

const CATEGORY_LABEL: Record<Product["category"], { ar: string; en: string }> = {
  adhesive: { ar: "لاصق بلاط", en: "Tile adhesive" },
  grout: { ar: "روبة بلاط", en: "Tile grout" },
  additive: { ar: "إضافة لاتكس", en: "Latex additive" },
};

function brandName(product: Product) {
  return product.category === "grout" ? "etone" : "ETONG";
}

function packQuantity(product: Product) {
  const en = product.packSize.en.toLowerCase();
  if (en.includes("kg")) {
    return {
      "@type": "QuantitativeValue",
      value: Number.parseFloat(en),
      unitCode: "KGM",
    };
  }
  if (en.includes("lt") || en.includes("l")) {
    return {
      "@type": "QuantitativeValue",
      value: Number.parseFloat(en),
      unitCode: "LTR",
    };
  }
  return undefined;
}

export function orgIds() {
  const url = getSiteUrl();
  return {
    organization: `${url}/#organization`,
    localBusiness: `${url}/#localbusiness`,
    website: `${url}/#website`,
    catalog: `${url}/#catalog`,
  };
}

export function organizationGraph() {
  const url = getSiteUrl();
  const ids = orgIds();
  const cityList = site.cities.map((city) => ({
    "@type": "City",
    name: city.en,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: site.region.en,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: site.name.ar,
        alternateName: [site.name.en, site.shortName.ar, site.shortName.en],
        url,
        logo: `${url}${site.logo}`,
        image: [`${url}${site.logo}`, `${url}/og.jpg`],
        telephone: site.phoneCall,
        brand: { "@type": "Brand", name: "ETONG" },
        knowsAbout: [
          "ETONG",
          "etong FIX",
          "porcelain tile adhesive",
          "tile grout CG2",
          "Etong Bond Latex",
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": ids.localBusiness,
        name: site.name.ar,
        alternateName: site.name.en,
        url,
        image: `${url}${site.logo}`,
        logo: `${url}${site.logo}`,
        telephone: [site.phoneCall, `+${site.whatsapp}`],
        currenciesAccepted: "EGP",
        parentOrganization: { "@id": ids.organization },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city.en,
          addressRegion: "Gharbia",
          addressCountry: site.country,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: site.region.en,
            containedInPlace: { "@type": "Country", name: "Egypt" },
          },
          ...cityList,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phoneCall,
            contactType: "customer service",
            areaServed: "EG",
            availableLanguage: ["ar", "en"],
          },
          {
            "@type": "ContactPoint",
            telephone: `+${site.whatsapp}`,
            contactType: "sales",
            areaServed: "EG",
            availableLanguage: ["ar", "en"],
          },
        ],
        hasOfferCatalog: { "@id": ids.catalog },
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url,
        name: site.shortName.ar,
        alternateName: site.shortName.en,
        inLanguage: ["ar-EG", "en"],
        publisher: { "@id": ids.organization },
      },
      {
        "@type": "OfferCatalog",
        "@id": ids.catalog,
        name: "Photographed ETONG line",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl("ar", `/products/${product.slug}`),
          name: product.name.ar,
        })),
      },
    ],
  };
}

export function webPageJsonLd(
  locale: AppLocale,
  path: Parameters<typeof absoluteUrl>[1],
  name: string,
  description: string,
) {
  const url = absoluteUrl(locale, path);
  const ids = orgIds();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "ar" ? "ar-EG" : "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.localBusiness },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };
}

export function breadcrumbJsonLd(
  locale: AppLocale,
  items: readonly { name: string; href: Parameters<typeof absoluteUrl>[1] }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.href),
    })),
  };
}

export function faqJsonLd(locale: AppLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: loc(item.q, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: loc(item.a, locale),
      },
    })),
  };
}

export function howToQuoteJsonLd(locale: AppLocale) {
  const steps =
    locale === "ar"
      ? [
          {
            name: "اختار المنتج",
            text: "افتح صفحة المنتج من الكتالوج المصوّر واكتب الكود المطبوع على العبوة.",
          },
          {
            name: "حدد الكمية",
            text: "اكتب الكمية المطلوبة بالشكاير أو العبوات.",
          },
          {
            name: "ابعت واتساب أو اتصل",
            text: `واتساب ${site.whatsappDisplay} أو اتصال ${site.phoneCallDisplay} داخل الغربية.`,
          },
        ]
      : [
          {
            name: "Choose the product",
            text: "Open the photographed catalog page and use the code printed on the pack.",
          },
          {
            name: "State the quantity",
            text: "Send the number of bags or packs you need.",
          },
          {
            name: "WhatsApp or call",
            text: `WhatsApp ${site.whatsappDisplay} or call ${site.phoneCallDisplay} in Gharbia.`,
          },
        ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      locale === "ar"
        ? "طلب عرض سعر من البروفيسور في الغربية"
        : "Request a quote from Al-Professor in Gharbia",
    description:
      locale === "ar"
        ? "خطوات طلب عرض سعر على خط إيتونج المصوّر. مفيش أسعار على الموقع."
        : "Steps to request a quote on the photographed ETONG line. No prices are listed on the site.",
    totalTime: "PT5M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function productJsonLd(product: Product, locale: AppLocale) {
  const url = absoluteUrl(locale, `/products/${product.slug}`);
  const additionalProperty = [
    {
      "@type": "PropertyValue",
      name: locale === "ar" ? "الكود" : "Code",
      value: product.code,
    },
    product.classification
      ? {
          "@type": "PropertyValue",
          name: locale === "ar" ? "التصنيف المطبوع" : "Printed classification",
          value: product.classification,
        }
      : null,
    {
      "@type": "PropertyValue",
      name: locale === "ar" ? "العبوة" : "Pack size",
      value: loc(product.packSize, locale),
    },
    product.technology
      ? {
          "@type": "PropertyValue",
          name: locale === "ar" ? "التكنولوجيا" : "Technology",
          value: loc(product.technology, locale),
        }
      : null,
    product.printedColor
      ? {
          "@type": "PropertyValue",
          name: locale === "ar" ? "اللون" : "Color",
          value: loc(product.printedColor, locale),
        }
      : null,
    ...product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: locale === "ar" ? "خاصية مطبوعة" : "Printed feature",
      value: loc(feature, locale),
    })),
  ].filter((item): item is NonNullable<typeof item> => item != null);

  const weight = packQuantity(product);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: loc(product.name, locale),
    sku: product.code,
    mpn: product.code,
    description: loc(product.summary, locale),
    image: product.images.map((src) => `${getSiteUrl()}${src}`),
    url,
    brand: { "@type": "Brand", name: brandName(product) },
    category: loc(CATEGORY_LABEL[product.category], locale),
    additionalProperty,
    ...(weight ? { weight } : {}),
  };
}

export function itemListJsonLd(locale: AppLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "ar"
        ? "كتالوج إيتونج المصوّر لدى البروفيسور"
        : "Photographed ETONG catalog at Al-Professor",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(locale, `/products/${product.slug}`),
      name: loc(product.name, locale),
    })),
  };
}

export function relatedProducts(product: Product) {
  return products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);
}
