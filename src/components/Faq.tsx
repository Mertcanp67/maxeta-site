import { sorular } from "@/data/faq";
import { Section, SectionBaslik } from "@/components/ui/Section";

/**
 * Sik sorulan sorular.
 *
 * Acilir kapanir yapi icin native <details>/<summary> kullaniliyor: JS yok,
 * klavyeyle gezilebilir, ekran okuyucular kendiliginden dogru okuyor.
 *
 * FAQPage schema'si bilerek BU dosyada duruyor (layout.tsx'teki Organization
 * verisinin yaninda degil): Google soru-cevaplarin sayfada gorunur olmasini
 * sart kosuyor, ikisi de ayni `sorular` dizisinden beslendigi icin bolum
 * kaldirilirsa schema da onunla birlikte gider. Ikisi ayri yerde olsa
 * biri silindiginde digeri yalan soylemeye devam ederdi.
 */
const sssVerisi = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sorular.map(({ soru, cevap }) => ({
    "@type": "Question",
    name: soru,
    acceptedAnswer: { "@type": "Answer", text: cevap },
  })),
};

export function Faq() {
  return (
    <Section id="sss" zemin="krem" desen="damask">
      <SectionBaslik
        etiket="SIK SORULANLAR"
        baslik="Merak edilenler"
        aciklama="Aklınızdaki soru burada yoksa telefonla ya da WhatsApp'tan sorabilirsiniz."
      />

      <ul className="belir-kademeli max-w-3xl border-t border-altin/30">
        {sorular.map(({ soru, cevap }) => (
          <li key={soru} className="border-b border-altin/30">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 transition-colors duration-200 hover:text-altin-koyu [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg leading-snug font-normal text-antrasit sm:text-xl">
                  {soru}
                </h3>
                {/* Acikken 45 derece donup carpiya yakin bir hal aliyor */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-1 h-4 w-4 shrink-0 text-altin-koyu transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>

              <p className="pr-9 pb-6 text-[0.95rem] leading-relaxed text-gri">
                {cevap}
              </p>
            </details>
          </li>
        ))}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sssVerisi) }}
      />
    </Section>
  );
}
