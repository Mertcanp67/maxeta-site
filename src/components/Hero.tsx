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
      {/* Kenarlari karartan vinyet: goz merkeze, basliga odaklaniyor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_85%_at_50%_45%,transparent_38%,rgba(0,0,0,0.5))]"
      />
      {/* Kagit dokusu: en ustteki arka plan katmani, icerigin altinda kalir */}
      <div
        aria-hidden="true"
        className="doku-kagit pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
      />
      {/* Alt kenarda yumusak koyulasma, bolum gecisini yumusatir */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/20"
      />

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20">
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

            {/* Hero'nun ikinci odak noktasi: solunda ince dikey altin cizgiyle
                alinti gibi duran, buyuk italik serif metin. */}
            <p className="hero-giris mt-8 max-w-2xl border-l border-altin-acik/55 pl-5 font-serif text-[1.45rem] leading-[1.6] text-krem italic [animation-delay:450ms] sm:pl-6 sm:text-[2rem]">
              <span className="block">
                Duvar kağıdı bir dekor değil, mekânın{" "}
                <span className="text-altin-acik">imzasıdır</span>.
              </span>
              <span className="block">
                Biz o imzayı <span className="text-altin-acik">50 yıldır</span>{" "}
                atıyoruz.
              </span>
            </p>

            <div className="hero-giris mt-10 flex flex-col gap-3 [animation-delay:650ms] sm:flex-row sm:gap-4">
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
        className="hero-giris relative mx-auto flex flex-col items-center gap-2 pb-28 text-altin-acik transition-opacity duration-200 [animation-delay:850ms] hover:opacity-75 lg:pb-10"
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
