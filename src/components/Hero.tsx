import { Button } from "@/components/ui/Button";
import { WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="ust"
      className="relative overflow-hidden bg-antrasit text-krem"
    >
      <div
        aria-hidden="true"
        className="desen-damask-koyu pointer-events-none absolute inset-0"
      />
      {/* Alt kenarda yumusak koyulasma, bolum gecisini yumusatir */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/20"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium tracking-[0.24em] text-altin-acik">
            DUVAR KAĞIDI UYGULAMA
          </p>

          <h1 className="font-serif text-[2.5rem] leading-[1.1] font-light text-krem sm:text-6xl lg:text-7xl">
            Duvarlarınıza
            <span className="block text-altin-acik italic">
              50 Yıllık Ustalık
            </span>
          </h1>

          <div aria-hidden="true" className="mt-8 h-px w-20 bg-altin-acik/70" />

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-krem/80 sm:text-lg">
            Otel, konut ve ofis projelerinde tekstil, ipek, hasır, akustik ve
            özel basım duvar kağıdı uygulamaları.
          </p>

          {/* Referans oteller yalnizca duz yazi — marka logosu kullanilmaz. */}
          <p className="mt-5 text-[0.6875rem] font-medium tracking-[0.2em] text-altin-acik sm:text-xs">
            HILTON · MARRIOTT · ELITE OTELLER
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
    </section>
  );
}
