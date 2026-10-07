import type { IkonAdi } from "@/components/ui/Icons";

export type Sebep = {
  baslik: string;
  aciklama: string;
  ikon: IkonAdi;
};

export const sebepler: Sebep[] = [
  {
    baslik: "İşini bilen ekip",
    aciklama: "50 yılı aşkın aile tecrübesi",
    ikon: "ekip",
  },
  {
    baslik: "Kağıdı tanıyoruz",
    aciklama: "Doğru kağıt, doğru uygulama",
    ikon: "rulo",
  },
  {
    baslik: "Güçlü müşteri ilişkisi",
    aciklama: "Keşiften teslime yanınızdayız",
    ikon: "elSikisma",
  },
  {
    baslik: "Ücretsiz keşif",
    aciklama: "Projenizi yerinde inceliyoruz",
    ikon: "metre",
  },
];
