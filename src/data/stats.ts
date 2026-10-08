export type Rakam = {
  /** Buyuk, vurgulu kisim. ⚠️ Musteriden gelen rakamlar — degistirilmez. */
  deger: string;
  aciklama: string;
  /** Uzun ifadeler icin daha kucuk punto. */
  boyut?: "buyuk" | "orta";
};

/**
 * Not: 147.000 m² rakami bu kartlardan cikarildi; Referanslar bolumunun
 * baslik alaninda duruyor (bkz. components/Projects.tsx).
 */
export const rakamlar: Rakam[] = [
  { deger: "50+", aciklama: "yıllık aile mesleği", boyut: "buyuk" },
  { deger: "Usta İşi", aciklama: "her detayda el işçiliği", boyut: "buyuk" },
  { deger: "Ücretsiz", aciklama: "yerinde keşif", boyut: "buyuk" },
];
