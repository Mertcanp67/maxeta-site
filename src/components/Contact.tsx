"use client";

import { useState, type FormEvent } from "react";
import { Section, SectionBaslik } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PostaIkon, TelefonIkon, WhatsAppIkon } from "@/components/ui/Icons";
import { site } from "@/config/site";
import { formMesaji, whatsappUrl } from "@/lib/whatsapp";

const projeTurleri = ["Otel", "Konut", "Ofis", "Diğer"] as const;

type Hatalar = { ad?: string; telefon?: string };

const alanSinifi =
  "min-h-12 w-full rounded-md border border-antrasit/15 bg-white px-4 py-3 text-base text-antrasit transition-colors placeholder:text-gri/60 hover:border-altin/60 focus:border-altin focus:outline-none";

export function Contact() {
  const [ad, setAd] = useState("");
  const [telefon, setTelefon] = useState("");
  const [projeTuru, setProjeTuru] = useState<string>(projeTurleri[0]);
  const [mesaj, setMesaj] = useState("");
  const [hatalar, setHatalar] = useState<Hatalar>({});

  function gonder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const yeniHatalar: Hatalar = {};
    if (!ad.trim()) yeniHatalar.ad = "Lütfen adınızı ve soyadınızı yazın.";
    if (!telefon.trim())
      yeniHatalar.telefon = "Lütfen size ulaşabileceğimiz bir telefon yazın.";

    setHatalar(yeniHatalar);
    if (Object.keys(yeniHatalar).length > 0) return;

    const url = whatsappUrl(formMesaji({ ad, telefon, projeTuru, mesaj }));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="iletisim" zemin="krem" desen="elmas">
      <SectionBaslik
        etiket="İLETİŞİM"
        baslik="Projenizi konuşalım"
        aciklama="Keşif hizmetimiz ücretsizdir. Formu doldurun, mesajınız doğrudan WhatsApp üzerinden bize ulaşsın."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Doğrudan iletişim */}
        <div>
          <h3 className="font-serif text-2xl text-antrasit">Doğrudan ulaşın</h3>
          <div aria-hidden="true" className="cizgi-ciz mt-4 h-px w-12 bg-altin" />

          <ul className="mt-7 space-y-4">
            <li>
              <a
                href={`tel:${site.phoneLink}`}
                className="inline-flex min-h-12 items-center gap-3.5 text-antrasit transition-colors hover:text-altin-koyu"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-altin/40 text-altin-koyu">
                  <TelefonIkon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.18em] text-gri">
                    TELEFON
                  </span>
                  <span className="text-lg">{site.phoneDisplay}</span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={whatsappUrl(
                  `Merhaba, ${site.name} ile duvar kağıdı uygulaması hakkında görüşmek istiyorum.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3.5 text-antrasit transition-colors hover:text-altin-koyu"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-altin/40 text-altin-koyu">
                  <WhatsAppIkon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.18em] text-gri">
                    WHATSAPP
                  </span>
                  <span className="text-lg">Hemen mesaj gönderin</span>
                </span>
              </a>
            </li>

            {/* E-posta yalnızca config'te doluysa görünür. */}
            {site.email && (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-12 items-center gap-3.5 text-antrasit transition-colors hover:text-altin-koyu"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-altin/40 text-altin-koyu">
                    <PostaIkon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.18em] text-gri">
                      E-POSTA
                    </span>
                    <span className="text-lg">{site.email}</span>
                  </span>
                </a>
              </li>
            )}
          </ul>

          {/* Çalışma saatleri yalnızca config'te doluysa görünür. */}
          {site.workingHours && (
            <div className="mt-7">
              <p className="text-xs tracking-[0.18em] text-gri">
                ÇALIŞMA SAATLERİ
              </p>
              <p className="mt-1 text-base text-antrasit">
                {site.workingHours}
              </p>
            </div>
          )}
        </div>

        {/* Form — backend yok, WhatsApp'a yönlendirir */}
        <form
          noValidate
          onSubmit={gonder}
          className="rounded-lg border border-altin/25 bg-white p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="ad"
                className="mb-2 block text-sm font-medium text-antrasit"
              >
                Ad Soyad <span className="text-altin-koyu">*</span>
              </label>
              <input
                id="ad"
                name="ad"
                type="text"
                autoComplete="name"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
                aria-invalid={hatalar.ad ? true : undefined}
                aria-describedby={hatalar.ad ? "ad-hata" : undefined}
                className={alanSinifi}
                placeholder="Adınız ve soyadınız"
              />
              {hatalar.ad && (
                <p
                  id="ad-hata"
                  role="alert"
                  className="mt-2 text-sm text-[#b3261e]"
                >
                  {hatalar.ad}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="telefon"
                className="mb-2 block text-sm font-medium text-antrasit"
              >
                Telefon <span className="text-altin-koyu">*</span>
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                aria-invalid={hatalar.telefon ? true : undefined}
                aria-describedby={hatalar.telefon ? "telefon-hata" : undefined}
                className={alanSinifi}
                placeholder="0 5XX XXX XX XX"
              />
              {hatalar.telefon && (
                <p
                  id="telefon-hata"
                  role="alert"
                  className="mt-2 text-sm text-[#b3261e]"
                >
                  {hatalar.telefon}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="projeTuru"
                className="mb-2 block text-sm font-medium text-antrasit"
              >
                Proje türü
              </label>
              <select
                id="projeTuru"
                name="projeTuru"
                value={projeTuru}
                onChange={(e) => setProjeTuru(e.target.value)}
                className={alanSinifi}
              >
                {projeTurleri.map((tur) => (
                  <option key={tur} value={tur}>
                    {tur}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mesaj"
                className="mb-2 block text-sm font-medium text-antrasit"
              >
                Mesaj
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                value={mesaj}
                onChange={(e) => setMesaj(e.target.value)}
                className={`${alanSinifi} resize-y`}
                placeholder="Projenizden kısaca bahsedin (metrekare, mekân türü, zamanlama…)"
              />
            </div>
          </div>

          <Button type="submit" varyant="dolu" className="mt-6 w-full sm:w-auto">
            <WhatsAppIkon className="h-5 w-5" />
            Gönder
          </Button>

          <p className="mt-4 text-xs leading-relaxed text-gri">
            Gönder&apos;e bastığınızda bilgileriniz hazır bir mesaj olarak
            WhatsApp&apos;ta açılır. Mesajı siz göndermeden bize ulaşmaz.
          </p>
        </form>
      </div>
    </Section>
  );
}
