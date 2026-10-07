import { site } from "@/config/site";

/** Duz bir wa.me linki. Metin verilirse on dolu mesajla acilir. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type FormDegerleri = {
  ad: string;
  telefon: string;
  projeTuru: string;
  mesaj: string;
};

/** Iletisim formundaki alanlari tek bir WhatsApp mesajina cevirir. */
export function formMesaji({
  ad,
  telefon,
  projeTuru,
  mesaj,
}: FormDegerleri): string {
  const satirlar = [
    "Merhaba, web sitesi üzerinden ulaşıyorum.",
    "",
    `Ad Soyad: ${ad.trim()}`,
    `Telefon: ${telefon.trim()}`,
    `Proje türü: ${projeTuru}`,
  ];

  const temizMesaj = mesaj.trim();
  if (temizMesaj) {
    satirlar.push(`Mesaj: ${temizMesaj}`);
  }

  return satirlar.join("\n");
}
