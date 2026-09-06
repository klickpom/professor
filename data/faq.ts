import type { LocaleText } from "./products";

export type FaqItem = {
  q: LocaleText;
  a: LocaleText;
};

export const faqs: readonly FaqItem[] = [
  {
    q: {
      ar: "أنتوا وكيل إيتونج فين؟",
      en: "Where are you the ETONG agent?",
    },
    a: {
      ar: "البروفيسور وكيل معتمد لمادة لصق البورسلين إيتونج في محافظة الغربية.",
      en: "Al-Professor is an authorized agent for ETONG porcelain adhesive in Gharbia Governorate.",
    },
  },
  {
    q: {
      ar: "إزاي أطلب عرض سعر؟",
      en: "How do I request a quote?",
    },
    a: {
      ar: "من صفحة المنتج اضغط اطلب عرض سعر، أو ابعت على واتساب اسم الكود والكمية.",
      en: "Open a product page and tap request a quote, or WhatsApp the product code and quantity.",
    },
  },
  {
    q: {
      ar: "التغطية لكل كجم مكتوبة؟",
      en: "Is coverage per kg listed?",
    },
    a: {
      ar: "لأ. التغطية لكل كجم مش مطبوعة على الشكاير اللي عندنا. ابعت نشرة إيتونج لو عندك، أو اسأل على واتساب حسب نوع البلاطة.",
      en: "No. Coverage per kg is not printed on the bags we have. Send an ETONG datasheet if you have one, or ask on WhatsApp for your tile type.",
    },
  },
  {
    q: {
      ar: "بتبيعوا بورسلين وسيراميك كمان؟",
      en: "Do you also sell porcelain and ceramics?",
    },
    a: {
      ar: "النشاط بورسلين وسيراميك وكيماويات البناء. الكتالوج الحالي يعرض خط إيتونج المصوّر. للبورسلين تواصل مباشرة.",
      en: "The business covers porcelain, ceramics, and construction chemicals. This catalog lists the photographed ETONG line. For porcelain tiles, contact us directly.",
    },
  },
];
