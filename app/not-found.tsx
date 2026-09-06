import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#E8E6E1] p-8 text-[#161513]">
        <p className="font-mono">404</p>
        <h1 className="mt-4 text-3xl">الصفحة مش موجودة</h1>
        <Link href="/" className="mt-6 inline-block font-semibold">
          الرئيسية
        </Link>
      </body>
    </html>
  );
}
