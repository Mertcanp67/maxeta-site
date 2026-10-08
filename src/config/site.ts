/**
 * TUM iletisim bilgileri ve site genel ayarlari BU DOSYADA tutulur.
 * Bilgi degisirse baska hicbir dosyaya dokunmak gerekmez.
 *
 * Telefon ucu uc yerde kullanilir ve hepsi buradan beslenir:
 *   phoneDisplay -> ekranda gorunen bicim
 *   phoneLink    -> tel: baglantisi, uluslararasi bicim
 *   whatsapp     -> wa.me yolu, basinda + ve bosluk olmadan
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
  name: "Maxeta Decor",
  domain: "https://maxetadecor.com",

  phoneDisplay: "0553 371 58 49",
  phoneLink: "+905533715849",
  whatsapp: "905533715849", // wa.me formatinda: basinda + yok, bosluk yok

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
