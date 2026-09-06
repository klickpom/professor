export type WorkPiece = {
  id: string;
  src: `/assets/works/${string}`;
  width: number;
  height: number;
  title: { ar: string; en: string };
  alt: { ar: string; en: string };
};

export const works: readonly WorkPiece[] = [
  {
    id: "smart-solutions",
    src: "/assets/works/smart-solutions.jpg",
    width: 1024,
    height: 571,
    title: { ar: "حلول ذكية للمحترفين", en: "Smart solutions for professionals" },
    alt: {
      ar: "بوستر البروفيسور: حلول ذكية للمحترفين مع خط إيتونج على منصات العرض",
      en: "Al-Professor campaign: Smart solutions for professionals with the ETONG line on display",
    },
  },
  {
    id: "grout-stability",
    src: "/assets/works/grout-stability.jpg",
    width: 764,
    height: 1024,
    title: { ar: "روبة CG2 — ثبات دائم", en: "CG2 grout — lasting joints" },
    alt: {
      ar: "بوستر روبة إيتونج CG2 مع عبارة ثبات دائم مكتوبة بالروبة على البلاط",
      en: "ETONG CG2 grout poster with lasting-stability lettering in grout on tiles",
    },
  },
  {
    id: "ultra-fix-fiber",
    src: "/assets/works/ultra-fix-fiber.jpg",
    width: 764,
    height: 1024,
    title: { ar: "ألترا فيكس فايبر — ثبات فوري", en: "Ultra Fix Fiber — instant hold" },
    alt: {
      ar: "بوستر إيتونج ألترا فيكس فايبر 840 مع عبارة ثبات فوري",
      en: "ETONG Ultra Fix Fiber 840 poster with instant-hold lettering",
    },
  },
  {
    id: "egypt-coverage",
    src: "/assets/works/egypt-coverage.jpg",
    width: 764,
    height: 1024,
    title: { ar: "من قلب مصر", en: "From the heart of Egypt" },
    alt: {
      ar: "بوستر البروفيسور مع خريطة مصر وخط شكاير فيكس",
      en: "Al-Professor campaign with a map of Egypt and the FIX bag line",
    },
  },
  {
    id: "integrated-system",
    src: "/assets/works/integrated-system.jpg",
    width: 1024,
    height: 571,
    title: { ar: "منظومة البناء المتكاملة", en: "The integrated building system" },
    alt: {
      ar: "بوستر منظومة البناء المتكاملة مع شعار البروفيسور وعبوات إيتونج",
      en: "Integrated building system campaign with the Al-Professor emblem and ETONG packs",
    },
  },
];

export const landscapeWorks = works.filter((item) => item.width >= item.height);
export const portraitWorks = works.filter((item) => item.height > item.width);
