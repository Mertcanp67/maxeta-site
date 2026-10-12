import { site } from "@/config/site";

/**
 * Site kendi alan adinda kok dizinden yayinlanir: alt klasor (basePath)
 * yoktur, bu yuzden public/ altindaki dosyalara dogrudan "/logo/..." gibi
 * kok yollarla erisilir.
 *
 * Tek is burada kaldi: sitemap, robots, OG ve JSON-LD'nin kullandigi tam
 * adres. Alan adi src/config/site.ts icindeki `domain` alanindan gelir;
 * degisirse yalnizca orayi duzeltmek yeterli.
 */

/** Sitenin tam adresi (sema + alan adi), sonunda / olmadan. */
export const siteUrl = site.domain.replace(/\/+$/, "");
