# Max Wall Decor – web sitesi

Tek sayfalık tanıtım sitesi. Next.js (App Router) + TypeScript + Tailwind CSS,
statik export ile Cloudflare Pages'e yüklenir. Sunucu tarafı kod yoktur.

## Komutlar

```bash
npm install      # bağımlılıklar
npm run dev      # yerel geliştirme (http://localhost:3000)
npm run build    # statik çıktı -> out/
```

## ⚠️ Yayına almadan önce

`src/config/site.ts` içindeki üç alan hâlâ yer tutucu:

```ts
phoneDisplay: "0 5XX XXX XX XX",
phoneLink:    "+905XXXXXXXXX",
whatsapp:     "905XXXXXXXXX",   // wa.me formatı, başında + yok
```

Bunlar doldurulmadan arama ve WhatsApp linkleri çalışmaz. Tüm iletişim
bilgileri yalnızca bu dosyadadır; başka bir yeri değiştirmek gerekmez.

- `email` boş bırakılırsa sitede e-posta hiç görünmez.
- `workingHours` boş bırakılırsa çalışma saatleri hiç görünmez.

## İçeriği nereden değiştiririm?

| Ne | Dosya |
|---|---|
| Telefon, WhatsApp, e-posta, menü | `src/config/site.ts` |
| Referans projeler (ad, konum, metraj, kağıt türü) | `src/data/projects.ts` |
| Hizmetler / duvar kağıdı türleri | `src/data/services.ts` |
| Rakam kartları | `src/data/stats.ts` |
| "Neden biz?" maddeleri | `src/data/whyUs.ts` |
| Çalışma süreci adımları | `src/data/process.ts` |
| "Hangi kağıt nereye uygun?" tablosu | `src/data/wallpaperGuide.ts` |
| Renkler, fontlar, duvar kağıdı desenleri | `src/app/globals.css` |

Proje fotoğrafları geldiğinde `src/data/projects.ts` içindeki her projenin
`image` alanı doldurulabilir; alan şimdilik boş bırakılmıştır.

## Cloudflare Pages

Pages projesini bu repoya bağlayıp şu ayarları girin:

| Ayar | Değer |
|---|---|
| Framework preset | None (ya da Next.js **Static HTML Export**) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 veya üzeri (`NODE_VERSION` ortam değişkeni) |

Repo bağlamadan yüklemek isterseniz: `npm run build` çalıştırıp oluşan `out`
klasörünü Pages'in "Direct Upload" alanına sürükleyin.

Alan adı bağlandıktan sonra `src/config/site.ts` içindeki `domain` değerinin
doğru olduğundan emin olun — `sitemap.xml`, `robots.txt` ve Open Graph
etiketleri bu değerden üretilir.

## GitHub Pages (taslak yayını)

Taslak, `main` branch'e her push'ta `.github/workflows/deploy.yml` ile
otomatik derlenip `https://<kullanıcı>.github.io/maxwall-site/` adresinde
yayınlanır. Repo ayarlarında **Settings → Pages → Source = GitHub Actions**
seçili olmalıdır.

Site alt klasörde durduğu için derlemeye iki ortam değişkeni geçilir:

| Değişken | Örnek | Ne işe yarar |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | `/maxwall-site` | `basePath` + `assetPrefix`; logo, favicon ve `_next` yolları bununla üretilir |
| `NEXT_PUBLIC_SITE_ORIGIN` | `https://kullanici.github.io` | `sitemap.xml`, canonical ve Open Graph adresleri |

İkisi de **yalnızca** workflow içinde tanımlıdır. Cloudflare derlemesi ve
yerel `npm run dev` bu değişkenleri almadığı için site orada kök dizinde
çalışmaya devam eder — iki ortam için tek kod.

Repo adını değiştirirseniz `deploy.yml` içindeki `BASE_PATH` değerini de
güncelleyin, yoksa stil ve görseller 404 verir.

Yolların tamamı `src/lib/paths.ts` üzerinden geçer:

- `asset("/logo/...")` — `<img src>`, favicon ve kök linkleri için (Next bu
  alanlara basePath'i kendiliğinden eklemez).
- `siteUrl` — `sitemap.xml`, `robots.txt`, canonical ve JSON-LD için.
- Open Graph görselleri ve canonical'a basePath **elle eklenmez**; Next
  bunları `metadataBase` ile birleştirir, iki kez eklenirse yol bozulur.

`basePath` dolu olduğunda (yani yalnızca GitHub Pages taslağında) sayfa
`noindex, nofollow` ile işaretlenir ve `robots.txt` taramayı kapatır — aynı
içerik asıl alan adıyla birlikte iki yerde indekslenmesin diye. Asıl yayında
bu otomatik olarak devre dışı kalır.

## Altın tonları — hangisi nerede?

Markanın altını `#b08d57`. Küçük metinde ve dolu buton zemininde WCAG AA
kontrastını (4.5:1) karşılamadığı için aynı aileden iki varyant tanımlı.
Hepsi `src/app/globals.css` içindeki `@theme` bloğunda:

| Token | Kod | Nerede | Kontrast |
|---|---|---|---|
| `altin` | `#b08d57` | Çizgiler, çerçeveler, ayraçlar (dekoratif) | — |
| `altin-acik` | `#c9a96e` | Koyu zemin üzerindeki altın metin | 6.07:1 |
| `altin-koyu` | `#866639` | Açık zemin üzerindeki küçük altın metin | 5.29 / 4.61:1 |
| `altin-dolu` | `#b28f59` | Dolu butonun zemini (antrasit yazı ile) | 4.51:1 |

`altin-dolu`, `altin`'den kanal başına 2/255 farklı — gözle ayırt edilmiyor,
ama butonu AA eşiğinin üstüne çıkarıyor.

## Notlar

- Fontlar `next/font` ile derleme sırasında indirilip kendi sunucumuzdan
  servis edilir; sayfa çalışırken hiçbir dış isteğe çıkmaz.
- Görsellerin tamamı inline SVG veya `public/logo/` altındaki hazır logolardır.
- `body` üzerine `overflow-x: hidden` **eklemeyin**; body'yi kaydırma kabı
  yapıp `#bölüm` çapa linklerinin kaydırmasını bozar.
- Bölümlerin hafifçe belirmesi saf CSS'tir (`animation-timeline: view()`),
  JS yok. Desteklemeyen tarayıcıda ya da `prefers-reduced-motion` açıkken
  animasyon hiç çalışmaz, içerik doğrudan görünür.
- `src/app/not-found.tsx` markalı 404 sayfasıdır; export sırasında
  `out/404.html` olarak üretilir ve Cloudflare Pages bunu otomatik kullanır.
- `layout.tsx` içinde schema.org `Organization` JSON-LD'si var. Adres ve
  hizmet bölgesi alanı bilerek yok.
