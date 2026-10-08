import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { asset } from "@/lib/paths";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı | Maxeta Decor",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-antrasit text-krem">
      <div
        aria-hidden="true"
        className="desen-damask-koyu pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8">
        <a
          href={asset("/")}
          className="inline-flex"
          aria-label="Maxeta Decor ana sayfa"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo/maxeta-logo-light.svg")}
            alt="Maxeta Decor"
            width={900}
            height={230}
            className="h-12 w-auto lg:h-14"
          />
        </a>

        <p className="mt-12 text-xs font-medium tracking-[0.24em] text-altin-acik">
          404
        </p>

        <h1 className="mt-4 font-serif text-3xl leading-tight font-light text-krem sm:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>

        <div
          aria-hidden="true"
          className="mx-auto mt-7 h-px w-16 bg-altin-acik/70"
        />

        <p className="mt-7 text-base leading-relaxed text-krem/75">
          Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfadan
          devam edebilir veya doğrudan bize yazabilirsiniz.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href={asset("/")} varyant="dolu">
            Ana sayfaya dön
          </Button>
          <Button
            href={whatsappUrl(
              `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            varyant="cerceveAcik"
          >
            <WhatsAppIkon className="h-5 w-5" />
            WhatsApp&apos;tan Ulaşın
          </Button>
        </div>
      </div>
    </main>
  );
}
