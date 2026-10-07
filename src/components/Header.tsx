"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import { asset } from "@/lib/paths";
import { whatsappUrl } from "@/lib/whatsapp";
import { KapatIkon, MenuIkon, WhatsAppIkon } from "@/components/ui/Icons";

export function Header() {
  const [kaydirildi, setKaydirildi] = useState(false);
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    const kontrol = () => setKaydirildi(window.scrollY > 8);
    kontrol();
    window.addEventListener("scroll", kontrol, { passive: true });
    return () => window.removeEventListener("scroll", kontrol);
  }, []);

  useEffect(() => {
    if (!menuAcik) return;
    const kapat = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAcik(false);
    };
    window.addEventListener("keydown", kapat);
    return () => window.removeEventListener("keydown", kapat);
  }, [menuAcik]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        kaydirildi ? "shadow-[0_1px_16px_rgba(46,46,46,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-24">
        <a
          href="#ust"
          className="inline-flex min-h-11 shrink-0 items-center"
          aria-label="Max Wall Decor – sayfanın başına dön"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo/maxwall-logo-dark.svg")}
            alt="Max Wall Decor"
            width={900}
            height={230}
            className="h-10 w-auto lg:h-14"
          />
        </a>

        {/* Masaustu menu */}
        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 text-[0.95rem] text-antrasit transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-altin after:transition-transform after:duration-300 hover:text-altin-koyu hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(
              `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-md border border-altin px-5 text-[0.9rem] font-medium text-antrasit transition-colors duration-200 hover:bg-altin/10 lg:inline-flex"
          >
            <WhatsAppIkon className="h-[18px] w-[18px] text-altin-koyu" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuAcik((a) => !a)}
            aria-expanded={menuAcik}
            aria-controls="mobil-menu"
            aria-label={menuAcik ? "Menüyü kapat" : "Menüyü aç"}
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-md text-antrasit transition-colors hover:text-altin-koyu lg:hidden"
          >
            {menuAcik ? (
              <KapatIkon className="h-6 w-6" />
            ) : (
              <MenuIkon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil menu */}
      <div
        id="mobil-menu"
        hidden={!menuAcik}
        className="border-t border-altin/25 bg-white lg:hidden"
      >
        <nav aria-label="Mobil menü" className="px-5 py-3 sm:px-8">
          <ul>
            {nav.map((link) => (
              <li key={link.href} className="border-b border-antrasit/8 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setMenuAcik(false)}
                  className="block py-4 text-base text-antrasit transition-colors hover:text-altin-koyu"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(
              `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAcik(false)}
            className="mt-4 mb-2 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md bg-altin-dolu px-6 font-medium text-antrasit transition-colors hover:bg-altin-acik"
          >
            <WhatsAppIkon className="h-5 w-5" />
            WhatsApp&apos;tan Ulaşın
          </a>
        </nav>
      </div>
    </header>
  );
}
