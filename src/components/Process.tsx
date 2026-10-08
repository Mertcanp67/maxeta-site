import { surecAdimlari } from "@/data/process";
import { Section, SectionBaslik } from "@/components/ui/Section";

export function Process() {
  return (
    <Section zemin="beyaz">
      <SectionBaslik
        ortala
        etiket="ÇALIŞMA SÜRECİ"
        baslik="Nasıl Çalışıyoruz?"
      />

      {/* Mobilde alt alta, masaustunde bes adim yan yana. */}
      <ol className="belir-kademeli grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {surecAdimlari.map((adim, i) => (
          <li key={adim.baslik} className="relative flex gap-5 lg:block">
            <div className="flex shrink-0 flex-col items-center lg:block">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-altin/40 font-serif text-lg font-medium text-altin-koyu">
                {i + 1}
              </span>
              {/* Mobilde adimlari birlestiren dikey cizgi; son adimda yok. */}
              {i < surecAdimlari.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mt-2 w-px flex-1 bg-altin/30 lg:hidden"
                />
              )}
            </div>

            <div className="pb-2 lg:pb-0">
              <h3 className="font-serif text-xl leading-snug text-antrasit lg:mt-5">
                {adim.baslik}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-gri">
                {adim.aciklama}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
