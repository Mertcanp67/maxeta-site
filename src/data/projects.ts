export type Proje = {
  ad: string;
  konum: string;
  /** Metraj yoksa alan hic render edilmez (orn. Rams). */
  metraj?: string;
  kagitTuru: string;
  /** Ileride proje fotografi eklenecek. Bos kalabilir. */
  image?: string;
};

/**
 * ⚠️ Metrajlar musteriden geldigi gibidir. Yuvarlama veya degisiklik YAPILMAZ.
 * Not: "Elite Oteller" yazimi musteriyle teyit edilecek.
 */
export const projeler: Proje[] = [
  {
    ad: "Elite Oteller",
    konum: "Yenibosna, Taksim, Sapanca, Kuşadası",
    metraj: "75.000 m²",
    kagitTuru: "Tekstil tabanlı duvar kağıdı",
    image: "",
  },
  {
    ad: "Hilton Otel",
    konum: "Yenibosna, İstanbul",
    metraj: "15.000 m²",
    kagitTuru: "Tekstil tabanlı duvar kağıdı",
    image: "",
  },
  {
    ad: "Marriott Otel",
    konum: "Ataşehir, İstanbul",
    metraj: "20.000 m²",
    kagitTuru: "Tekstil ve kumaş duvar kağıdı",
    image: "",
  },
  {
    ad: "Marriott Otel",
    konum: "Uşak",
    metraj: "23.000 m²",
    kagitTuru: "Tekstil ve özel duvar kağıdı",
    image: "",
  },
  {
    ad: "Marriott Otel",
    konum: "Belgrad, Sırbistan",
    metraj: "14.000 m²",
    kagitTuru: "Tekstil ve özel basım duvar kağıdı",
    image: "",
  },
  {
    ad: "Rams",
    konum: "Maslak, İstanbul",
    // metraj yok — kartta gosterilmez
    kagitTuru: "Tekstil ve özel basım duvar kağıdı",
    image: "",
  },
];
