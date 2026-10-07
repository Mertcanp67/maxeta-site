import { WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Masaüstünde sağ altta duran sabit WhatsApp butonu.
 * Mobilde gizlidir; orada ekranın altındaki iki butonlu MobileBar çalışır,
 * ikisi birlikte görünüp üst üste binmesin.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(
        `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden mesaj gönderin"
      className="fixed right-4 bottom-4 z-40 hidden h-[60px] w-[60px] items-center justify-center rounded-full lg:inline-flex bg-[#25d366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIkon className="h-8 w-8" />
    </a>
  );
}
