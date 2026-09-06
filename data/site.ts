export const site = {
  name: {
    ar: "البروفيسور للبورسلين والسيراميك",
    en: "Al-Professor for Porcelain and Ceramics",
  },
  shortName: { ar: "البروفيسور", en: "Al-Professor" },
  partner: { ar: "إيتونج", en: "ETONG" },
  role: {
    ar: "وكيل معتمد لمادة لصق البورسلين",
    en: "Authorized agent for porcelain adhesive",
  },
  phoneCall: "+201116527671",
  phoneCallDisplay: "01116527671",
  whatsapp: "201080458042",
  whatsappDisplay: "01080458042",
  region: { ar: "محافظة الغربية", en: "Gharbia Governorate" },
  city: { ar: "طنطا", en: "Tanta" },
  country: "EG",
  mapQuery: "Tanta, Gharbia, Egypt",
  mapEmbed:
    "https://www.google.com/maps?q=Tanta%2C+Gharbia%2C+Egypt&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Tanta%2C+Gharbia%2C+Egypt",
  cities: [
    { ar: "طنطا", en: "Tanta" },
    { ar: "المحلة الكبرى", en: "El Mahalla El Kubra" },
    { ar: "سمنود", en: "Samannoud" },
    { ar: "كفر الزيات", en: "Kafr El Zayat" },
    { ar: "زفتى", en: "Zefta" },
    { ar: "السنطة", en: "Al Santa" },
    { ar: "قطور", en: "Qutour" },
    { ar: "بسيون", en: "Basyoun" },
  ],
  logo: "/assets/brand/logo-circle.jpg",
  streetAddress: null,
} as const;

export type SiteLocale = "ar" | "en";
