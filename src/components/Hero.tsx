import { Button } from "@/components/ui/Button";
import { WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Giris bolumu.
 *
 * Yukseklik `100svh`: mobil tarayicilarda adres cubugu acilip kapanirken
 * `vh` degisip sayfayi ziplatiyordu; `svh` kucuk (small) viewport'u baz alir,
 * boylece asagidaki "KEŞFEDİN" oku her zaman ekranin icinde kalir.
 *
 * Giris sirasi gecikmelerle kuruluyor (bkz. globals.css .hero-giris):
 * etiket → baslik → altin cizgi → alinti → butonlar → kaydirma isareti.
 */
export function Hero() {
  return (
    <section
      id="ust"
      className="relative flex min-h-[100svh] flex-col overflow-x-clip bg-antrasit text-krem"
    >
      <div
        aria-hidden="true"
        className="desen-damask-koyu desen-suzul pointer-events-none absolute inset-0"
      />
      {/* Basligin arkasindan gelen yumusak altin isik — derinlik veriyor.
          Opaklik bilerek dusuk: metin kontrasti bozulmamali. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_22%_38%,rgba(201,169,110,0.17),transparent_68%)]"
      />
      {/* Alinti plaketinin arkasina denk gelen ikinci, daha kucuk altin isik */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_30%_at_27%_64%,rgba(201,169,110,0.13),transparent_72%)]"
      />
      {/* Kenarlari karartan vinyet: goz merkeze, basliga odaklaniyor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_85%_at_50%_45%,transparent_38%,rgba(0,0,0,0.5))]"
      />
      {/* Kagit dokusu: en ustteki arka plan katmani, icerigin altinda kalir */}
      <div
        aria-hidden="true"
        className="doku-kagit pointer-events-none absolute inset-0"
      />
      {/* Alt kenarda yumusak koyulasma, bolum gecisini yumusatir */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/20"
      />

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-10 sm:px-8 sm:pt-32 sm:pb-20">
          <div className="max-w-4xl">
            <p className="hero-giris mb-5 text-xs font-medium tracking-[0.24em] text-altin-acik">
              DUVAR KAĞIDI UYGULAMA
            </p>

            {/* Akiskan punto: 360px'te ~37px, genis ekranda 92px'e kadar
                buyuyor. clamp sayesinde ara kirilimlarda da orantili. */}
            <h1 className="font-serif text-[clamp(2.35rem,8.6vw,5.75rem)] leading-[1.06] font-light tracking-[-0.018em] text-krem">
              <span className="hero-giris block [animation-delay:150ms]">
                Duvarlarınıza
              </span>
              <span className="hero-giris block [animation-delay:330ms]">
                <span className="altin-parilti text-altin-acik italic">
                  50 Yıllık Ustalık
                </span>
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="hero-cizgi mt-8 h-px w-20 bg-altin-acik/70 [animation-delay:350ms]"
            />

            {/* Alinti plaketi: hero'nun ikinci odak noktasi */}
            <figure className="plaket-giris relative mt-8 max-w-2xl sm:mt-10 rounded-sm border border-[rgba(201,169,110,0.45)] bg-gradient-to-b from-[rgba(201,169,110,0.10)] to-[rgba(201,169,110,0.03)] px-[22px] pt-7 pb-6 shadow-[0_0_40px_rgba(201,169,110,0.12)] sm:px-9 sm:pt-9 sm:pb-8">
              {/* Kosedeki kalin L cizgileri — cercevenin uzerine biner */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-altin-acik"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-altin-acik"
              />
              {/* Yukari tasan buyuk tirnak */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[52px] left-3 font-serif text-[110px] leading-none text-altin-acik/70 [text-shadow:0_0_18px_rgba(201,169,110,0.35)] select-none"
              >
                &ldquo;
              </span>

              <blockquote className="font-serif text-[27px] leading-[1.5] font-medium text-krem italic sm:text-[34px]">
                <p>
                  Duvar kağıdı bir dekor değil, mekânın{" "}
                  <span className="altin-kelime">imzasıdır.</span>
                </p>
                {/* Iki cumle arasinda bos satir */}
                <p className="mt-5">
                  Biz o imzayı{" "}
                  <span className="altin-kelime text-[1.25em]">50 yıldır</span>{" "}
                  atıyoruz.
                </p>
              </blockquote>

            </figure>

            <div className="hero-giris mt-8 flex flex-col gap-3 [animation-delay:650ms] sm:mt-10 sm:flex-row sm:gap-4">
              <Button
                href={whatsappUrl(
                  `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                varyant="dolu"
              >
                <WhatsAppIkon className="h-5 w-5" />
                WhatsApp&apos;tan Ulaşın
              </Button>
              <Button href="#iletisim" varyant="cerceveAcik">
                Ücretsiz Keşif İsteyin
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Asagi kaydir isareti — bir sonraki bolume (rakam kartlari) goturur.
          pb-28: lg altinda ekranin dibinde sabit MobileBar (~69px) var,
          ok onun altinda kalmasin diye fazladan bosluk birakiliyor. */}
      <a
        href="#rakamlar"
        className="hero-giris relative mx-auto flex flex-col items-center gap-2 pb-24 text-altin-acik transition-opacity duration-200 [animation-delay:850ms] hover:opacity-75 lg:pb-10"
      >
        <span className="text-[0.65rem] font-medium tracking-[0.22em]">
          KEŞFEDİN
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="ok-zipla h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
        <span className="sr-only">Sonraki bölüme geç</span>
      </a>
    </section>
  );
}
