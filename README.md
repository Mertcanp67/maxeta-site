# Maxeta Decor – web sitesi

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

## GitHub Pages (kendi alan adıyla)

`main` branch'e her push'ta `.github/workflows/deploy.yml` ile otomatik
derlenip `https://maxetadecor.com` adresinde yayınlanır. Repo ayarlarında
**Settings → Pages → Source = GitHub Actions** seçili olmalı ve **Custom
domain** alanına `maxetadecor.com` yazılmalıdır.

Alan adı iki yerden gelir:

- `public/CNAME` — tek satır, `maxetadecor.com`. Derlemede `out/CNAME` olarak
  kopyalanır; Pages özel alan adını buradan okur.
- `src/config/site.ts` içindeki `domain` — `sitemap.xml`, `robots.txt`,
  canonical, Open Graph ve JSON-LD adresleri bu değerden üretilir. Alan adı
  değişirse **yalnızca** bu iki dosyayı güncellemek yeterlidir.

Site kök dizinde (`/`) çalışır: `basePath` ve `assetPrefix` yoktur, derlemeye
alan adıyla ilgili ortam değişkeni geçilmez. Bu yüzden logo, favicon ve
`_next` yolları doğrudan kök yollardır (`/logo/favicon.svg` gibi) ve yerel
`npm run dev` ile yayındaki davranış birebir aynıdır.

`siteUrl` (`src/lib/paths.ts`) `sitemap.xml`, `robots.txt`, canonical ve
JSON-LD için tam adresi verir. Open Graph görselleri ve canonical kök yol
olarak yazılır; Next bunları `metadataBase` ile birleştirir.

DNS tarafında `maxetadecor.com` için GitHub'ın apex IP'leri (`185.199.108.153`
ve devamı) ya da `www` için `<kullanıcı>.github.io` CNAME kaydı gerekir.

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
