import { site } from "@/config/site";

/**
 * Sitenin yayina alindigi yer iki farkli olabilir:
 *
 *   1. Cloudflare Pages (asil yayin) — kok dizin, basePath yok.
 *   2. GitHub Pages (taslak/onizleme) — <kullanici>.github.io/maxeta-site
 *      alt klasoru, yani basePath var.
 *
 * Fark yalnizca iki ortam degiskeniyle kuruluyor; kod tek kalsin diye
 * butun yollar bu dosyadan gecer. Degiskenler bos oldugunda (yerel gelistirme
 * ve Cloudflare derlemesi) her sey eskisi gibi kok dizinde calisir.
 *
 *   NEXT_PUBLIC_BASE_PATH    ornek: /maxeta-site
 *   NEXT_PUBLIC_SITE_ORIGIN  ornek: https://kullanici.github.io
 */

/** Alt klasor yolu. Kok dizinde bos string. Sonunda / birakmaz. */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/+$/,
  "",
);

/** Sitenin kok adresi (sema + alan adi), sonunda / olmadan. */
export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN || site.domain
).replace(/\/+$/, "");

/** Sitenin tam adresi: kok adres + alt klasor. sitemap/OG/JSON-LD burayi kullanir. */
export const siteUrl = `${siteOrigin}${basePath}`;

/**
 * public/ altindaki bir dosyanin tarayicida gecerli yolu.
 * `<img src>`, favicon ve `<a href="/">` gibi Next'in kendiliginden
 * basePath eklemedigi yerlerde MUTLAKA bunu kullan.
 */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
