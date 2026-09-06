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

البناء بيخرج ملفات HTML ثابتة في `out/`، وبعدين بتتنسخ لجذر المستودع عشان Hostinger.

## النشر على Hostinger من GitHub

المستودع: [github.com/klickpom/professor](https://github.com/klickpom/professor)

الموقع اتحول لصفحات ثابتة. Hostinger **متقدم → GIT → public_html** على فرع `main` يقدر يخدمه لأن `index.html` موجود على جذر المستودع.

1. اربط المستودع `klickpom/professor` والفرع `main` إلى `public_html`.
2. فعّل Auto Deployment.
3. Deploy. بعد كده كل تحديث يتبني ويترفع على `main` هيظهر على الدومين.
4. انشر التحديث من الجهاز بـ `npm run deploy` ثم commit/push للملفات الثابتة الجديدة.

فرع `hostinger` فيه نفس الملفات الثابتة فقط (من غير كود Next).

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
