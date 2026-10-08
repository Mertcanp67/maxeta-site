import { nav, site } from "@/config/site";
import { PostaIkon, TelefonIkon, WhatsAppIkon } from "@/components/ui/Icons";
import { asset } from "@/lib/paths";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-antrasit text-krem">
      <div
        aria-hidden="true"
        className="desen-damask-koyu pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-[calc(7rem+env(safe-area-inset-bottom))] sm:px-8 sm:pt-20 sm:pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Marka */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/logo/maxeta-logo-light.svg")}
              alt="Maxeta Decor"
              width={900}
              height={230}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-krem/70">
              50 yılı aşkın aile mesleğiyle otel, konut ve ofis projelerinde
              duvar kağıdı uygulaması.
            </p>
          </div>

          {/* Menu */}
          <nav aria-label="Alt menü">
            <h2 className="text-xs tracking-[0.22em] text-altin-acik">MENÜ</h2>
            <ul className="mt-5 space-y-1">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-krem/75 transition-colors hover:text-altin-acik"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Iletisim */}
          <div>
            <h2 className="text-xs tracking-[0.22em] text-altin-acik">
              İLETİŞİM
            </h2>
            <ul className="mt-5 space-y-1">
              <li>
                <a
                  href={`tel:${site.phoneLink}`}
                  className="inline-flex min-h-11 items-center gap-3 text-[0.95rem] text-krem/75 transition-colors hover:text-altin-acik"
                >
                  <TelefonIkon className="h-[18px] w-[18px] shrink-0 text-altin-acik" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(
                    `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 text-[0.95rem] text-krem/75 transition-colors hover:text-altin-acik"
                >
                  <WhatsAppIkon className="h-[18px] w-[18px] shrink-0 text-altin-acik" />
                  WhatsApp
                </a>
              </li>

              {/* E-posta yalnızca config'te doluysa görünür. */}
              {site.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-11 items-center gap-3 text-[0.95rem] text-krem/75 transition-colors hover:text-altin-acik"
                  >
                    <PostaIkon className="h-[18px] w-[18px] shrink-0 text-altin-acik" />
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-14 h-px w-full bg-altin-acik/20"
        />

        <p className="mt-6 text-sm text-krem/55">
          © 2026 Maxeta Decor. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
