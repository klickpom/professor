export type CategoryId = "adhesive" | "grout" | "additive";
export type AdvisorPlace = "wet" | "wallsFloors";
export type PrintedClass = "C1" | "C2";
export type LocaleText = { ar: string; en: string };

export type Product = {
  slug: string;
  code: string;
  brand: "ETONG";
  category: CategoryId;
  packAccent: string;
  packSize: LocaleText;
  images: readonly string[];
  classification: string | null;
  printedColor: LocaleText | null;
  technology: LocaleText | null;
  name: LocaleText;
  summary: LocaleText;
  features: readonly LocaleText[];
  advisorPlaces: readonly AdvisorPlace[];
  printedClass: PrintedClass | null;
  coveragePerKg: null;
};

export const products: readonly Product[] = [
  {
    slug: "etong-fix-500-c1t",
    code: "500 C1T",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#5A5A5A",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/fix-500-c1t.jpg"],
    classification: "C1T",
    printedColor: null,
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: { ar: "إيتونج فيكس 500 C1T", en: "etong FIX 500 C1T" },
    summary: {
      ar: "مادة لاصقة. الاستخدامات المطبوعة على الشكارة: سيراميك وبورسلين، حوائط وأرضيات.",
      en: "Adhesive material. Printed on the bag: ceramic and porcelain tiles, walls and floors.",
    },
    features: [
      { ar: "للسيراميك والبورسلين", en: "For ceramic and porcelain tiles" },
      { ar: "للحوائط والأرضيات", en: "For walls and floors" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "مقاوم للصقيع", en: "Frost resistant" },
    ],
    advisorPlaces: ["wallsFloors"],
    printedClass: "C1",
    coveragePerKg: null,
  },
  {
    slug: "etong-fix-600-c1te",
    code: "600 C1TE",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#F27022",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/fix-600-c1te.jpg"],
    classification: "C1TE",
    printedColor: null,
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: { ar: "إيتونج فيكس 600 C1TE", en: "etong FIX 600 C1TE" },
    summary: {
      ar: "مادة لاصقة. الاستخدامات المطبوعة على الشكارة: سيراميك وبورسلين، حوائط وأرضيات.",
      en: "Adhesive material. Printed on the bag: ceramic and porcelain tiles, walls and floors.",
    },
    features: [
      { ar: "للسيراميك والبورسلين", en: "For ceramic and porcelain tiles" },
      { ar: "للحوائط والأرضيات", en: "For walls and floors" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "وقت مفتوح محسّن", en: "Enhanced open time" },
      { ar: "مقاوم للصقيع", en: "Frost Resistant" },
    ],
    advisorPlaces: ["wallsFloors"],
    printedClass: "C1",
    coveragePerKg: null,
  },
  {
    slug: "etong-fix-700-c2te",
    code: "700 C2TE",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#D32F2F",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/fix-700-c2te.jpg"],
    classification: "C2TE",
    printedColor: null,
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: { ar: "إيتونج فيكس 700 C2TE", en: "etong FIX 700 C2TE" },
    summary: {
      ar: "مادة لاصقة. الاستخدامات المطبوعة على الشكارة: سيراميك وبورسلين، حوائط وأرضيات.",
      en: "Adhesive material. Printed on the bag: ceramic and porcelain tiles, walls and floors.",
    },
    features: [
      { ar: "للسيراميك والبورسلين", en: "For ceramic and porcelain tiles" },
      { ar: "للحوائط والأرضيات", en: "For walls and floors" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "مقاوم للصقيع", en: "Frost resistant" },
    ],
    advisorPlaces: ["wallsFloors"],
    printedClass: "C2",
    coveragePerKg: null,
  },
  {
    slug: "etong-fix-740-c2tes",
    code: "740 C2TES",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#6B3FA0",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/fix-740-c2tes.jpg"],
    classification: "C2TES",
    printedColor: null,
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: { ar: "إيتونج فيكس 740 C2TES", en: "etong FIX 740 C2TES" },
    summary: {
      ar: "مادة لاصقة. الاستخدامات المطبوعة على الشكارة: سيراميك وبورسلين، حوائط وأرضيات.",
      en: "Adhesive material. Printed on the bag: ceramic and porcelain tiles, walls and floors.",
    },
    features: [
      { ar: "للسيراميك والبورسلين", en: "For ceramic and porcelain tiles" },
      { ar: "للحوائط والأرضيات", en: "For walls and floors" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "مقاوم للصقيع", en: "Frost resistant" },
    ],
    advisorPlaces: ["wallsFloors"],
    printedClass: "C2",
    coveragePerKg: null,
  },
  {
    slug: "etong-fix-800-c2tes1",
    code: "800 C2TES1",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#2B547E",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/fix-800-c2tes1.jpg"],
    classification: "C2TES1",
    printedColor: null,
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: { ar: "إيتونج فيكس 800 C2TES1", en: "etong FIX 800 C2TES1" },
    summary: {
      ar: "مادة لاصقة. الاستخدامات المطبوعة على الشكارة: سيراميك وبورسلين، حوائط وأرضيات.",
      en: "Adhesive material. Printed on the bag: ceramic and porcelain tiles, walls and floors.",
    },
    features: [
      { ar: "للسيراميك والبورسلين", en: "For ceramic and porcelain tiles" },
      { ar: "للحوائط والأرضيات", en: "For walls and floors" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "مقاوم للصقيع", en: "Frost resistant" },
    ],
    advisorPlaces: ["wallsFloors"],
    printedClass: "C2",
    coveragePerKg: null,
  },
  {
    slug: "etong-ultra-fix-fiber-840",
    code: "840 C2TES2",
    brand: "ETONG",
    category: "adhesive",
    packAccent: "#0033A0",
    packSize: { ar: "25 كجم", en: "25 kg" },
    images: ["/assets/products/ultra-fix-fiber-840.jpg"],
    classification: "C2TES2",
    printedColor: { ar: "أبيض", en: "White" },
    technology: { ar: "تكنولوجيا إيطالية", en: "ITALY TECHNOLOGY" },
    name: {
      ar: "إيتونج ألترا فيكس فايبر 840",
      en: "etong FIX Ultra Fix Fiber 840",
    },
    summary: {
      ar: "لاصق بلاط البورسلين عالي الجودة مدعم بالألياف. مكتوب على الشكارة: خاص للحمامات وحمام السباحة.",
      en: "High-quality fiber-reinforced porcelain tile adhesive. Printed on the bag: special for bathrooms and swimming pools.",
    },
    features: [
      { ar: "مدعم بالألياف", en: "Fiber reinforced" },
      { ar: "خاص للحمامات وحمام السباحة", en: "For bathrooms and swimming pools" },
      { ar: "التصاق عالي", en: "High bond strength" },
      { ar: "مقاوم للماء والمسابح", en: "Water and pool resistant" },
      { ar: "مانع للانزلاق", en: "Non slip" },
      { ar: "وقت مفتوح ممتد", en: "Extended open time" },
      { ar: "جودة فاخرة", en: "PREMIUM Quality" },
    ],
    advisorPlaces: ["wet"],
    printedClass: "C2",
    coveragePerKg: null,
  },
  {
    slug: "etone-tile-grout-cg2",
    code: "CG2",
    brand: "ETONG",
    category: "grout",
    packAccent: "#00A651",
    packSize: { ar: "5 كجم", en: "5 kg" },
    images: ["/assets/products/grout-cg2.jpg"],
    classification: "CG2",
    printedColor: null,
    technology: null,
    name: { ar: "روبة بلاط فاخرة CG2", en: "etone TILE GROUT CG2" },
    summary: {
      ar: "روبة بلاط فاخرة CG2 وزن 5 كجم حسب المكتوب على العبوة.",
      en: "Luxury tile grout CG2, 5 kg, as printed on the pack.",
    },
    features: [
      { ar: "مرن للغاية، للداخل والخارج", en: "Ultra Flexible, Interior & Exterior" },
      { ar: "للسيراميك والبورسلين", en: "Universal for Ceramic & Porcelain" },
      { ar: "سهل الاستخدام", en: "Easy application" },
      { ar: "مقاوم للماء", en: "Water resistant" },
      { ar: "مقاوم للتجمد", en: "Frost resistant" },
    ],
    advisorPlaces: [],
    printedClass: null,
    coveragePerKg: null,
  },
  {
    slug: "etong-bond-latex",
    code: "BOND LATEX",
    brand: "ETONG",
    category: "additive",
    packAccent: "#C41E3A",
    packSize: { ar: "1 لتر", en: "1 LT" },
    images: ["/assets/products/bond-latex.jpg"],
    classification: null,
    printedColor: null,
    technology: null,
    name: { ar: "لاتكس إيتونغ بوند", en: "Etong Bond Latex" },
    summary: {
      ar: "إضافة لاتكس إيتونغ بوند. العبوة 1 لتر حسب الملصق.",
      en: "Etong Bond Latex additive. 1 litre pack as labeled.",
    },
    features: [
      { ar: "لاتكس إيتونغ بوند", en: "Etong Bond Latex" },
      { ar: "عبوة 1 لتر حسب الملصق", en: "1 LT as labeled" },
    ],
    advisorPlaces: [],
    printedClass: null,
    coveragePerKg: null,
  },
];

export const categories: readonly CategoryId[] = [
  "adhesive",
  "grout",
  "additive",
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function adviseProducts(place: AdvisorPlace, printedClass?: PrintedClass) {
  if (place === "wet") {
    return products.filter((item) => item.advisorPlaces.includes("wet"));
  }
  return products.filter((item) => {
    if (!item.advisorPlaces.includes("wallsFloors")) return false;
    if (!printedClass) return true;
    return item.printedClass === printedClass;
  });
}
