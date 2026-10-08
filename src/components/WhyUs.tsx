import { sebepler } from "@/data/whyUs";
import { ikonlar } from "@/components/ui/Icons";
import { Section, SectionBaslik } from "@/components/ui/Section";

export function WhyUs() {
  return (
    <Section zemin="beyaz">
      <SectionBaslik
        ortala
        etiket="NEDEN BİZ?"
        baslik="Neden Maxeta Decor?"
      />

      <ul className="belir-kademeli grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {sebepler.map((sebep) => {
          const Ikon = ikonlar[sebep.ikon];
          return (
            <li key={sebep.baslik} className="flex flex-col items-center text-center">
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-altin/40 text-altin-koyu">
                <Ikon className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-xl text-antrasit">
                {sebep.baslik}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-gri">
                {sebep.aciklama}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
