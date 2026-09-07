import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { asLocale } from "@/lib/locale";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import { shareImage } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationGraph } from "@/lib/schema";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: site.name.ar,
  description: site.role.ar,
  applicationName: site.shortName.ar,
  verification: {
    google: "6scuIpy_tcjiq1ThwIWEcraL9lVIKnPPvNYNaiRnVG4",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    images: [shareImage()],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage()],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = asLocale(raw);
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geist.variable} ${geistMono.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ground text-ink">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="relative z-10 pb-24 md:pb-8">{children}</main>
          <Footer />
          <MobileActionBar />
        </NextIntlClientProvider>
        <JsonLd data={organizationGraph()} />
      </body>
    </html>
  );
}
