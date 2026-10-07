export type KagitRehberi = {
  /** Kagit turu — Hizmetler bolumundeki kart adlariyla ayni aileden. */
  tur: string;
  /** En uygun oldugu mekanlar. */
  yerler: string;
  /** One cikan ozelligi. */
  ozellik: string;
};

/**
 * "Hangi kagit nereye uygun?" tablosunun verisi.
 * Satir eklemek/cikarmak icin yalnizca bu diziyi duzenleyin;
 * tablo ve mobil kart gorunumu kendiliginden guncellenir.
 */
export const kagitRehberi: KagitRehberi[] = [
  {
    tur: "Tekstil tabanlı",
    yerler: "Otel odaları, koridorlar, salonlar",
    ozellik: "Dayanıklı, uzun ömürlü",
  },
  {
    tur: "İpek",
    yerler: "Yatak odaları, misafir odaları",
    ozellik: "Zarif ve parlak doku",
  },
  {
    tur: "Hasır",
    yerler: "Salonlar, lobiler, restoranlar",
    ozellik: "Doğal ve sıcak görünüm",
  },
  {
    tur: "Akustik",
    yerler: "Toplantı odaları, sinema odaları, çocuk odaları",
    ozellik: "Ses yalıtımına katkı",
  },
  {
    tur: "Kumaş duvar kaplama",
    yerler: "Lobiler, makam odaları, yatak başlıkları",
    ozellik: "Lüks ve yumuşak doku",
  },
  {
    tur: "Özel basım",
    yerler: "Mağazalar, restoranlar, dekoratif duvarlar",
    ozellik: "Size özel tasarım",
  },
];
