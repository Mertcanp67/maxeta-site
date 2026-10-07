# Max Wall Decor – Kurumsal Web Sitesi

Bu dosya projenin ana brifidir. Kod yazmadan önce tamamını oku ve buradaki kurallara uy.

## Proje özeti

Max Wall Decor, 50 yılı aşkın aile mesleği olan bir **duvar kağıdı uygulama** firması. Ankara merkezli çalışıyor; Hilton ve Marriott gibi otellerde büyük ölçekli projeler yapmış. Site **tanıtım amaçlı**, e-ticaret yok.

- **Hedef kitle:** Oteller, müteahhitler, toplu konut firmaları ve üst segment konut sahipleri
- **Sitenin amacı:** Güven vermek ve ziyaretçiyi WhatsApp ya da telefonla iletişime geçirmek
- **Dil:** Türkçe
- **Ton:** Samimi ama profesyonel, kurumsal ve lüks. Abartılı reklam dili kullanma.

## Teknik gereksinimler

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **Statik export:** `next.config` içinde `output: 'export'` ve `images: { unoptimized: true }`. Site **Cloudflare Pages**'e yüklenecek, sunucu tarafı kod olmayacak.
- Tek sayfa (one-page) yapı. Menüdeki linkler ilgili bölüme yumuşak kaydırmayla gitsin.
- **Mobil öncelikli:** Ziyaretçilerin çoğu telefondan gelecek. 360px genişlikte kusursuz görünmeli.
- Hızlı açılmalı. Gereksiz kütüphane ekleme; animasyonlar CSS ile ve hafif olsun.
- Erişilebilirlik: anlamlı başlık sıralaması (tek `h1`), alt metinler, yeterli renk kontrastı, klavyeyle gezinme.

### SEO

- `title`: "Max Wall Decor | Duvar Kağıdı Uygulama – Ankara"
- `meta description`: "50 yılı aşkın aile mesleğiyle otel, konut ve ofis projelerinde profesyonel duvar kağıdı uygulaması. Tekstil, ipek, hasır, akustik ve özel basım duvar kağıtları. Ücretsiz keşif."
- Open Graph etiketleri (`og:image` için `public/logo/maxwall-logo-dark.png` kullan)
- `sitemap.xml` ve `robots.txt` (alan adı: `https://maxwalldecor.com`)
- `lang="tr"`
- Favicon: `public/logo/favicon.svg` ve `public/logo/favicon.png`

## İletişim bilgileri – tek yerde tut

Bütün iletişim bilgilerini **tek bir dosyada** tut (örneğin `src/config/site.ts`). Bilgiler henüz kesin değil, sonradan sadece bu dosyayı değiştireceğim.

```ts
export const site = {
  name: "Max Wall Decor",
  domain: "https://maxwalldecor.com",
  phoneDisplay: "0 5XX XXX XX XX",   // YER TUTUCU
  phoneLink: "+905XXXXXXXXX",        // YER TUTUCU
  whatsapp: "905XXXXXXXXX",          // YER TUTUCU, wa.me formatında (başında + yok)
  email: "",                         // Henüz yok. Boşsa sitede e-posta hiç gösterilmesin.
  workingHours: "",                  // Henüz yok. Boşsa gösterilmesin.
};
```

## ⚠️ Kesin kurallar

1. **Adres, harita ve hizmet bölgesi YOK.** Sitede hiçbir yerde ofis adresi, Google Haritalar ya da semt veya bölge listesi olmayacak. Bu müşterinin açık talebi.
2. **Başka markaların logosu YOK.** Hilton, Marriott vb. otel isimleri sadece düz yazı olarak geçebilir. Logolarını, görsellerini ya da marka renklerini kullanma.
3. **İnternetten fotoğraf YOK.** Otel fotoğrafları veya telifli görseller kullanma. Henüz firmaya ait fotoğraf da yok. Görsel zenginliği SVG duvar kağıdı desenleri, tipografi ve renklerle sağla.
4. **Rakamları değiştirme.** Aşağıdaki metrajlar müşteriden geldi, yuvarlama ya da abartma yapma.
5. **Logoyu yeniden çizme.** `public/logo/` içindeki hazır dosyaları kullan. Logoyu metin ya da font ile yeniden oluşturma.

## Marka ve tasarım

### Logo dosyaları (`public/logo/`)

| Dosya | Kullanım |
|---|---|
| `maxwall-logo-dark.svg` / `.png` | Açık zemin üzerinde (antrasit yazı, altın "DECOR") |
| `maxwall-logo-light.svg` / `.png` | Koyu zemin üzerinde (krem yazı, altın "DECOR") |
| `favicon.svg` / `.png` | Favicon ve uygulama ikonu (antrasit kare, altın "M") |

Logo amblemsizdir: büyük harflerle "MAX WALL", altında ince çizgiler arasında "DECOR". Header'da SVG'yi `<img>` ile kullan. Her ekranda net okunacak boyutta olsun (mobilde yaklaşık 140–160px, masaüstünde 200–240px genişlik).

### Renkler

| Ad | Kod | Kullanım |
|---|---|---|
| Antrasit | `#2e2e2e` | Ana metin, koyu bölümler |
| Altın | `#b08d57` | Vurgular, çizgiler, butonlar |
| Açık altın | `#c9a96e` | Koyu zemin üzerinde altın |
| Krem | `#f4efe4` | Koyu zemin üzerindeki metin, açık bölüm zeminleri |
| Beyaz | `#ffffff` | Ana zemin |
| Gri metin | `#6b6b6b` | İkincil metinler |

### Tipografi

- **Başlıklar:** Cormorant Garamond (Google Fonts, `next/font` ile yükle), zarif serif
- **Metinler:** Inter (Google Fonts, `next/font` ile yükle)
- Küçük etiketlerde ve bölüm üst başlıklarında geniş harf aralıklı büyük harf kullan (logodaki "DECOR" gibi)

### Genel görünüm

- Lüks, sade, ferah. Bol boşluk ve ince altın çizgiler.
- Koyu (antrasit) ve açık (beyaz veya krem) bölümler sırayla gelsin.
- Arka planlarda çok hafif, düşük opaklıkta duvar kağıdı desenleri (eşkenar dörtgen, damask benzeri motifler) kullan. Desen metnin okunmasını asla zorlaştırmasın.
- Butonlar: altın zemin ve antrasit yazı ya da altın çerçeveli; köşeler hafif yuvarlak.

## Sayfa yapısı ve içerik

Aşağıdaki metinler taslaktır. Anlamı koruyarak akıcılaştırabilirsin, ama bilgi ekleme ya da çıkarma.

### 1. Header

- Solda logo; sağda menü: Hakkımızda · Hizmetler · Referanslar · İletişim
- Mobilde hamburger menü
- Kaydırınca header sabit kalsın ve hafif gölge alsın.

### 2. Hero (koyu zemin)

- Logo değil, başlık: **"Duvarlarınıza 50 Yıllık Ustalık"** (`h1`)
- Alt metin: "Otel, konut ve ofis projelerinde tekstil, ipek, hasır, akustik ve özel basım duvar kağıdı uygulamaları."
- Butonlar: **"WhatsApp'tan Ulaşın"** (wa.me linki) ve **"Ücretsiz Keşif İsteyin"** (iletişim bölümüne kaydırır)

### 3. Rakamlarla Max Wall Decor

Üç büyük rakam kartı:
- **50+** yıllık aile mesleği
- **147.000 m²+** uygulama
- **Türkiye ve yurt dışında** otel projeleri

### 4. Hakkımızda

> Max Wall Decor, 50 yılı aşkın bir aile mesleğinin bugünkü temsilcisidir. Duvar kağıdını yalnızca uygulamakla kalmıyor, her kağıdın yapısını, karakterini ve hangi mekâna yakışacağını çok iyi tanıyoruz. Türkiye'nin ve yurt dışının önde gelen otellerinde yüz binlerce metrekarelik uygulamayı başarıyla tamamladık.
>
> Bizim için her proje uzun soluklu bir müşteri ilişkisinin başlangıcıdır. Keşiften teslime kadar her aşamada yanınızdayız ve keşif hizmetimiz ücretsizdir.

### 5. Hizmetler – Duvar Kağıdı Türleri

Kartlar halinde, her birine kısa bir açıklama yaz:
- Tekstil Tabanlı Duvar Kağıdı
- İpek Duvar Kağıdı
- Hasır Duvar Kağıdı
- Akustik Duvar Kağıdı
- Kumaş Duvar Kaplama
- Özel Basım Duvar Kağıdı

Altına kısa bir not ekle: "Otel, toplu konut, rezidans, ofis ve özel konut projelerinde uygulama yapıyoruz."

### 6. Referans Projeler (koyu zemin)

Başlık: "Tamamladığımız Projelerden Bazıları". Fotoğrafsız, şık kartlar. Her kartta proje adı, konum, metraj (büyük ve altın renkte) ve kağıt türü olsun.

| Proje | Konum | Metraj | Kağıt türü |
|---|---|---|---|
| Elite Oteller | Yenibosna, Taksim, Sapanca, Kuşadası | 75.000 m² | Tekstil tabanlı duvar kağıdı |
| Hilton Otel | Yenibosna, İstanbul | 15.000 m² | Tekstil tabanlı duvar kağıdı |
| Marriott Otel | Ataşehir, İstanbul | 20.000 m² | Tekstil ve kumaş duvar kağıdı |
| Marriott Otel | Uşak | 23.000 m² | Tekstil ve özel duvar kağıdı |
| Marriott Otel | Belgrad, Sırbistan | 14.000 m² | Tekstil ve özel basım duvar kağıdı |
| Rams | Maslak, İstanbul | – | Tekstil ve özel basım duvar kağıdı |

- Rams kartında metraj yok. O kartta metraj alanını gösterme, düzen bozulmasın.
- Liste bir veri dosyasında dursun (örneğin `src/data/projects.ts`). İleride fotoğraf eklenecek; her projeye boş bırakılabilen bir `image` alanı koy.
- Kartların altına küçük yazı: "ve daha birçok proje…"
- Not: "Elite Oteller" yazımı müşteriyle teyit edilecek, şimdilik böyle kalsın.

### 7. Neden Max Wall Decor?

Dört madde, ikonlu (ikonlar sade, çizgi tarzında, inline SVG):
- **İşini bilen ekip:** 50 yılı aşkın aile tecrübesi
- **Kağıdı tanıyoruz:** Doğru kağıt, doğru uygulama
- **Güçlü müşteri ilişkisi:** Keşiften teslime yanınızdayız
- **Ücretsiz keşif:** Projenizi yerinde inceliyoruz

### 8. İletişim

- Başlık: "Projenizi Konuşalım"
- Telefon (tıklanınca arar), WhatsApp butonu; e-posta sadece config'te doluysa görünsün
- **Form (backend yok):** Ad Soyad, Telefon, Proje türü (Otel / Konut / Ofis / Diğer), Mesaj. "Gönder"e basınca bu bilgilerle hazırlanmış bir mesajla `https://wa.me/<whatsapp>?text=...` açılsın. Basit doğrulama yap (ad ve telefon zorunlu).
- **Adres veya harita koyma.**

### 9. Footer (koyu zemin)

- Açık renkli logo, kısa bir cümle, telefon, WhatsApp, (varsa) e-posta
- Menü linkleri
- "© 2026 Max Wall Decor. Tüm hakları saklıdır."

### 10. Sabit WhatsApp butonu

Tüm sayfada sağ altta sabit, yuvarlak, yeşil WhatsApp butonu. Mobilde başparmakla kolayca basılabilecek boyutta olsun ve içerikle çakışmasın.

## Çalışma şekli

1. Kodlamaya başlamadan önce **proje yapısını ve bileşen listesini planla, bana göster, onay bekle.**
2. Bileşenleri küçük ve okunur tut (`Header`, `Hero`, `Stats`, `About`, `Services`, `Projects`, `WhyUs`, `Contact`, `Footer`, `WhatsAppButton`).
3. Her büyük adımdan sonra `npm run build` ile derlemenin hatasız olduğunu kontrol et.
4. Bitince Cloudflare Pages'e nasıl yükleneceğini kısaca anlat (build komutu: `npm run build`, çıktı klasörü: `out`).
