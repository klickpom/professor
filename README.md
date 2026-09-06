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
npm start
```

## النشر على Hostinger من GitHub

المستودع: [github.com/klickpom/professor](https://github.com/klickpom/professor)

الموقع يحتاج **Node.js Web App** على Hostinger. متستخدمش **متقدم → GIT → public_html** — ده بينسخ الكود خام ومش بيشغّل Next.js.

1. في hPanel: **Websites → Add Website → Node.js web app**.
2. **Import Git repository** واربط GitHub، واختار مستودع `professor` والفرع `main`.
3. تأكد من الإعدادات:
   - Framework: `next`
   - Node.js: **20** أو **22**
   - Build command: `build`
   - Output directory: `.next`
   - Entry file: فاضي (Hostinger يشغّل `npm start`)
4. Environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://professor-eg.online`
5. Deploy. كل push على `main` بيعمل نشر جديد.

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
