import type { LocaleText } from "./products";

export type FaqItem = {
  q: LocaleText;
  a: LocaleText;
};

export const faqs: readonly FaqItem[] = [
  {
    q: {
      ar: "مين البروفيسور؟",
      en: "Who is Al-Professor?",
    },
    a: {
      ar: "البروفيسور للبورسلين والسيراميك وكيل معتمد لمادة لصق البورسلين إيتونج في محافظة الغربية، مصر. الكتالوج على الموقع هو العبوات المصوّرة: لاصق فيكس، روبة CG2، ولاتكس بوند.",
      en: "Al-Professor for Porcelain and Ceramics is an authorized ETONG porcelain-adhesive agent in Gharbia Governorate, Egypt. The site catalog is the photographed packs: FIX adhesive, CG2 grout, and Bond Latex.",
    },
  },
  {
    q: {
      ar: "أنتوا وكيل إيتونج فين؟",
      en: "Where are you the ETONG agent?",
    },
    a: {
      ar: "الوكالة داخل محافظة الغربية. مدن التوزيع المذكورة: طنطا، المحلة الكبرى، سمنود، كفر الزيات، زفتى، السنطة، قطور، وبسيون.",
      en: "The agency is inside Gharbia Governorate. Named distribution cities: Tanta, El Mahalla El Kubra, Samannoud, Kafr El Zayat, Zefta, Al Santa, Qutour, and Basyoun.",
    },
  },
  {
    q: {
      ar: "أرقام التليفون وإيه الفرق؟",
      en: "What are the phone numbers?",
    },
    a: {
      ar: "الاتصال: 01116527671. واتساب: 01080458042. دول الرقمين الظاهرين على الموقع.",
      en: "Call 01116527671. WhatsApp 01080458042. Those are the two numbers published on the site.",
    },
  },
  {
    q: {
      ar: "إزاي أطلب عرض سعر؟",
      en: "How do I request a quote?",
    },
    a: {
      ar: "من صفحة المنتج اضغط اطلب عرض سعر، أو ابعت على واتساب اسم الكود المطبوع والكمية. مفيش أسعار على الموقع.",
      en: "Open a product page and tap request a quote, or WhatsApp the printed product code and quantity. No prices are listed on the site.",
    },
  },
  {
    q: {
      ar: "إيه المنتجات المصوّرة؟",
      en: "Which products are listed?",
    },
    a: {
      ar: "ثماني عبوات مصوّرة: فيكس 500 C1T، 600 C1TE، 700 C2TE، 740 C2TES، 800 C2TES1، ألترا فيكس فايبر 840 C2TES2، روبة etone CG2 وزن 5 كجم، ولاتكس إيتونغ بوند 1 لتر.",
      en: "Eight photographed packs: FIX 500 C1T, 600 C1TE, 700 C2TE, 740 C2TES, 800 C2TES1, Ultra Fix Fiber 840 C2TES2, etone TILE GROUT CG2 5 kg, and Etong Bond Latex 1 LT.",
    },
  },
  {
    q: {
      ar: "الحمام والمسبح أنهي كود؟",
      en: "Which code is for bathrooms and pools?",
    },
    a: {
      ar: "حسب المكتوب على الشكارة، ألترا فيكس فايبر 840 C2TES2 خاص للحمامات وحمام السباحة. الترشيح على الموقع من نص العبوة بس.",
      en: "As printed on the bag, Ultra Fix Fiber 840 C2TES2 is special for bathrooms and swimming pools. Site recommendations use printed pack text only.",
    },
  },
  {
    q: {
      ar: "التغطية لكل كجم مكتوبة؟",
      en: "Is coverage per kg listed?",
    },
    a: {
      ar: "التغطية لكل كجم مش مكتوبة على العبوات المعروضة. اسأل على واتساب حسب نوع البلاطة.",
      en: "Coverage per kg is not printed on the packs shown here. Ask on WhatsApp for your tile type.",
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
