/**
 * TUM iletisim bilgileri ve site genel ayarlari BU DOSYADA tutulur.
 * Bilgi degisirse baska hicbir dosyaya dokunmak gerekmez.
 *
 * ⚠️ TODO — YAYINA ALMADAN ONCE DOLDUR:
 *   phoneDisplay, phoneLink ve whatsapp su an yer tutucu.
 *   Bunlar doldurulmadan arama ve WhatsApp linkleri calismaz.
 */
type SiteConfig = {
  name: string;
  domain: string;
  phoneDisplay: string;
  phoneLink: string;
  whatsapp: string;
  /** Bos string ise sitede e-posta hic gosterilmez. */
  email: string;
  /** Bos string ise sitede calisma saati hic gosterilmez. */
  workingHours: string;
};

export const site: SiteConfig = {
  name: "Max Wall Decor",
  domain: "https://maxwalldecor.com",

  phoneDisplay: "0 5XX XXX XX XX", // YER TUTUCU
  phoneLink: "+905XXXXXXXXX", // YER TUTUCU
  whatsapp: "905XXXXXXXXX", // YER TUTUCU, wa.me formatinda (basinda + yok)

  email: "", // Henuz yok. Bossa sitede e-posta hic gosterilmez.
  workingHours: "", // Henuz yok. Bossa gosterilmez.
};

/** Header ve footer menusu. Hedefler sayfa icindeki bolum id'leri. */
export const nav = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
] as const;
