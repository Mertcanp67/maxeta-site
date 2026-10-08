/**
 * Sosyal paylasim karti (og:image) uretir -> public/og/og-kart.png
 *
 * Calistirmak icin:  npm run og
 *
 * Neden ayri bir script?
 *   Paylasim karti 1200x630 olmali; logo dosyasi 2220x690'lik genis bir serit
 *   oldugu icin WhatsApp/LinkedIn onizlemesinde kenarlardan kirpiliyordu.
 *
 * Neden logo SVG'sinden besleniyor?
 *   Logodaki yazi outline'a cevrilmis vektor yollari; boylece kart Cormorant
 *   fontu kurulu olmayan makinede de birebir ayni render oluyor. Alttaki iki
 *   satir icin sistem serif/sans fontu yetiyor.
 *
 * Cikti commit'lenir — derleme sirasinda uretilmez, yani Pages/Cloudflare
 * derlemesinin sharp'a ihtiyaci yoktur.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");

const EN = 1200;
const BOY = 630;
const ANTRASIT = "#2e2e2e";
const ALTIN = "#c9a96e";
const KREM = "#f4efe4";

// Logo SVG'sinin ic icerigi (740x230 koordinat uzayinda)
const logoSvg = readFileSync(join(kok, "public/logo/maxeta-logo-light.svg"), "utf8");
const logoIc = logoSvg.slice(logoSvg.indexOf(">", logoSvg.indexOf("<svg")) + 1, logoSvg.lastIndexOf("</svg>")).trim();

const LOGO_EN = 600;
const olcek = LOGO_EN / 740;

const kart = `<svg xmlns="http://www.w3.org/2000/svg" width="${EN}" height="${BOY}" viewBox="0 0 ${EN} ${BOY}">
  <defs>
    <pattern id="damask" width="72" height="72" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="rgba(201,169,110,0.10)" stroke-width="1">
        <path d="M36 9 C45 19 45 27 36 36 C27 27 27 19 36 9 Z"/>
        <path d="M36 36 C45 45 45 53 36 63 C27 53 27 45 36 36 Z"/>
        <path d="M9 36 C19 27 27 27 36 36 C27 45 19 45 9 36 Z"/>
        <path d="M36 36 C45 27 53 27 63 36 C53 45 45 45 36 36 Z"/>
      </g>
    </pattern>
  </defs>

  <rect width="${EN}" height="${BOY}" fill="${ANTRASIT}"/>
  <rect width="${EN}" height="${BOY}" fill="url(#damask)"/>
  <rect x="40" y="40" width="${EN - 80}" height="${BOY - 80}" fill="none" stroke="rgba(201,169,110,0.28)" stroke-width="1"/>

  <g transform="translate(${(EN - LOGO_EN) / 2} 135) scale(${olcek})">${logoIc}</g>

  <rect x="${EN / 2 - 60}" y="378" width="120" height="1" fill="${ALTIN}" opacity="0.75"/>

  <text x="${EN / 2}" y="452" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="44" fill="${KREM}">Duvarlarınıza 50 Yıllık Ustalık</text>

  <text x="${EN / 2}" y="508" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif"
        font-size="19" letter-spacing="4.5" fill="${ALTIN}">DUVAR KAĞIDI UYGULAMA · ANKARA</text>
</svg>`;

const hedef = join(kok, "public/og/og-kart.png");
const bilgi = await sharp(Buffer.from(kart)).png().toFile(hedef);
console.log(`og-kart.png uretildi: ${bilgi.width}x${bilgi.height}, ${(bilgi.size / 1024).toFixed(0)} KB`);
