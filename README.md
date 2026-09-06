# البروفيسور — موقع تسويقي ثنائي اللغة

موقع Next.js للبروفيسور للبورسلين والسيراميك، وكيل إيتونج المعتمد في محافظة الغربية.

عربي افتراضي (RTL) + إنجليزي.

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000). العربي على `/` والإنجليزي على `/en`.

```bash
npm run build
```

البناء العادي (`npm run build`) يجهّز سيرفر Next.js لـ Hostinger Node.js.

## النشر على Hostinger من GitHub

المستودع: [github.com/klickpom/professor](https://github.com/klickpom/professor)

الدومين الحالي: [https://professor-eg.hostingersite.com](https://professor-eg.hostingersite.com)

لو الموقع Node.js web app: Build = `build`، Start = `npm start` أو الملف `server.js`، Output = `.next`. كل push على `main` بيعمل Deploy جديد.

لو GIT على `public_html`: فرع `main` فيه `index.html`. استخدم `npm run deploy` قبل الدفع عشان تحدّث الملفات الثابتة.

## إضافة منتج

1. ضع صورة العبوة في `public/assets/products/` (يفضّل تصوير واضح، خلفية سادة).
2. أضف عنصر في `data/products.ts` بنفس شكل العناصر الحالية.
3. اكتب الاسم والملخص والمميزات بالعربي والإنجليزي **من المكتوب على العبوة فقط**.
4. لو التغطية لكل كجم مش مطبوعة، خلّي `coveragePerKg: null`.
5. أضف ترجمة الفئة فقط لو فئة جديدة، في `messages/ar.json` و `messages/en.json` تحت `categories`.

لا تضع أسعار أو شهادات غير موجودة على العبوة.

## تغيير النصوص

- واجهة الموقع: `messages/ar.json` و `messages/en.json`
- بيانات النشاط (هواتف، مدن): `data/site.ts`
- الأسئلة: `data/faq.ts`

## أصول لسه ناقصة

- عنوان شارع للخريطة
- نشرات إيتونج لو عايز تغطية لكل كجم من غير TODO
