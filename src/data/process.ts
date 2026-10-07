export type Adim = {
  baslik: string;
  aciklama: string;
};

/** "Nasil Calisiyoruz?" bolumundeki 5 adim. Sira onemli; numaralar otomatik. */
export const surecAdimlari: Adim[] = [
  {
    baslik: "Ücretsiz Keşif",
    aciklama: "Mekânı yerinde görüyor, ihtiyacınızı dinliyoruz.",
  },
  {
    baslik: "Ölçü ve Kağıt Seçimi",
    aciklama:
      "Kesin ölçüyü alıyor, mekâna en uygun kağıdı birlikte seçiyoruz.",
  },
  {
    baslik: "Net Teklif",
    aciklama: "Metraj ve işçilik içeren açık bir fiyat sunuyoruz.",
  },
  {
    baslik: "Uygulama",
    aciklama: "Zemin hazırlığından son kata kadar işi titizlikle yapıyoruz.",
  },
  {
    baslik: "Teslim",
    aciklama: "Son kontrolü sizinle birlikte yapıp işi teslim ediyoruz.",
  },
];
