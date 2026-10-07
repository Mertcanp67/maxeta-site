import { TelefonIkon, WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Yalnizca mobilde (lg altinda) ekranin altinda sabit duran iki butonlu bar.
 * Masaustunde gizlenir; orada sag alttaki yuvarlak WhatsApp butonu kullanilir.
 * Icerikle cakismamasi icin Footer'a mobilde fazladan alt bosluk verildi.
 */
export function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-altin/30 bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_16px_rgba(46,46,46,0.12)] lg:hidden"
      role="group"
      aria-label="Hızlı iletişim"
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${site.phoneLink}`}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-altin-dolu text-[0.95rem] font-medium text-antrasit transition-colors active:bg-altin-acik"
        >
          <TelefonIkon className="h-5 w-5" />
          Ara
        </a>
        <a
          href={whatsappUrl(
            `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-[#1ebe5d] text-[0.95rem] font-medium text-white transition-colors active:bg-[#25d366]"
        >
          <WhatsAppIkon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
