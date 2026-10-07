import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/config/site";
import { asset, basePath, siteUrl } from "@/lib/paths";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const aciklama =
  "50 yılı aşkın aile mesleğiyle otel, konut ve ofis projelerinde profesyonel duvar kağıdı uygulaması. Tekstil, ipek, hasır, akustik ve özel basım duvar kağıtları. Ücretsiz keşif.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Max Wall Decor | Duvar Kağıdı Uygulama – Ankara",
  description: aciklama,
  applicationName: site.name,
  // Not: metadataBase zaten basePath'i tasidigi icin asagidaki canonical ve
  // og/twitter gorsel yollari basePath'SIZ verilir; Next ikisini birlestirir.
  // Buna karsin icons alanina basePath'i elle eklemek gerekiyor (asset()).
  alternates: { canonical: "/" },
  keywords: [
    "duvar kağıdı uygulama",
    "otel duvar kağıdı",
    "tekstil duvar kağıdı",
    "ipek duvar kağıdı",
    "hasır duvar kağıdı",
    "akustik duvar kağıdı",
    "özel basım duvar kağıdı",
    "kumaş duvar kaplama",
    "Ankara duvar kağıdı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: site.name,
    title: "Max Wall Decor | Duvar Kağıdı Uygulama – Ankara",
    description: aciklama,
    images: [
      {
        url: "/logo/maxwall-logo-dark.png",
        width: 1800,
        height: 460,
        alt: "Max Wall Decor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Wall Decor | Duvar Kağıdı Uygulama – Ankara",
    description: aciklama,
    images: ["/logo/maxwall-logo-dark.png"],
  },
  icons: {
    icon: [
      { url: asset("/logo/favicon.svg"), type: "image/svg+xml" },
      {
        url: asset("/logo/favicon.png"),
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [{ url: asset("/logo/favicon.png"), sizes: "512x512" }],
  },
  // GitHub Pages taslagi (basePath dolu) arama motorlarina kapali kalir;
  // ayni icerik asil alan adiyla birlikte iki yerde indekslenmesin.
  robots: basePath
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2e2e2e",
  width: "device-width",
  initialScale: 1,
};

/**
 * Arama motorlari icin kurumsal veri.
 * ⚠️ Adres ve hizmet bolgesi alani bilerek YOK — musterinin acik talebi.
 * Telefon site.ts'den gelir, orasi doldurulunca burasi da duzelir.
 */
const kurumsalVeri = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/logo/maxwall-logo-dark.png`,
  description: aciklama,
  telephone: site.phoneLink,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneLink,
      contactType: "customer service",
      availableLanguage: ["tr"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Klavyeyle gezinenler icin: Tab'a basinca ilk cikan baglanti */}
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-antrasit focus:px-5 focus:py-3 focus:text-krem"
        >
          İçeriğe geç
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kurumsalVeri) }}
        />
      </body>
    </html>
  );
}
