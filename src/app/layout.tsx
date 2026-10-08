import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/config/site";
import { asset, basePath, siteUrl } from "@/lib/paths";
import "./globals.css";

// `weight` BILEREK verilmiyor: sabit agirlik listesi verildiginde next/font
// her agirlik icin ayri dosya uretiyor ve hangisinin gerekli oldugunu
// bilemedigi icin HICBIRINI preload etmiyor. Degisken (variable) fontta
// subset basina tek dosya olusuyor ve preload kendiliginden ekleniyor —
// 92px'lik hero basliginin Georgia'dan Cormorant'a zipladigi an ortadan kalkar.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
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
  title: "Maxeta Decor | Duvar Kağıdı Uygulama – Ankara",
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
    title: "Maxeta Decor | Duvar Kağıdı Uygulama – Ankara",
    description: aciklama,
    images: [
      {
        // Paylasim karti: scripts/og-kart.mjs uretir (npm run og).
        // Logo dosyasi genis bir serit oldugu icin onizlemede kirpiliyordu.
        url: "/og/og-kart.png",
        width: 1200,
        height: 630,
        alt: "Maxeta Decor — Duvarlarınıza 50 Yıllık Ustalık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxeta Decor | Duvar Kağıdı Uygulama – Ankara",
    description: aciklama,
    images: ["/og/og-kart.png"],
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
  logo: `${siteUrl}/logo/maxeta-logo-dark.png`,
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
        {/*
          Belirme animasyonunu baslatan kucuk script. Kutuphane yok.
          Icerigi gizleyen CSS yalnizca `.belirme-acik` sinifi varken devreye
          girdigi icin; script calismazsa, IntersectionObserver yoksa ya da
          kullanici hareket azaltma istiyorsa her sey oldugu gibi gorunur.
          <body>'nin basinda duruyor ki sinif icerik boyanmadan once eklensin.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
if(!('IntersectionObserver' in window))return;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var d=document.documentElement;d.classList.add('belirme-acik');
var g=new IntersectionObserver(function(ler){for(var i=0;i<ler.length;i++){if(ler[i].isIntersecting){ler[i].target.classList.add('gorundu');g.unobserve(ler[i].target);}}},{rootMargin:'0px 0px -5% 0px',threshold:0.01});
function kur(){var e=document.querySelectorAll('.belir, .belir-kademeli > *, .cizgi-ciz');for(var i=0;i<e.length;i++)g.observe(e[i]);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',kur);}else{kur();}
/* Emniyet agi: sayfa gorunur hale geldikten 1.5sn sonra HICBIR oge
   isaretlenmediyse gozlemci calismiyor demektir -> gizlemeyi tamamen kaldir.
   Boylece en kotu ihtimalde animasyon olmaz, icerik asla gizli kalmaz. */
function emniyet(){if(document.hidden){document.addEventListener('visibilitychange',function h(){if(!document.hidden){document.removeEventListener('visibilitychange',h);setTimeout(emniyet,1500);}});return;}
if(!document.querySelector('.gorundu'))d.classList.remove('belirme-acik');}
if(document.readyState==='complete'){setTimeout(emniyet,1500);}else{window.addEventListener('load',function(){setTimeout(emniyet,1500);});}
}catch(_){document.documentElement.classList.remove('belirme-acik');}})();`,
          }}
        />

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
