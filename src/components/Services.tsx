import { hizmetler } from "@/data/services";
import { PaperGuide } from "@/components/PaperGuide";
import { Section, SectionBaslik } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id="hizmetler" zemin="krem" desen="damask">
      <SectionBaslik
        etiket="HİZMETLER"
        baslik="Duvar kağıdı türleri"
        aciklama="Mekânın karakterine ve kullanım yoğunluğuna göre doğru kağıdı birlikte seçiyoruz."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hizmetler.map((hizmet) => (
          <li
            key={hizmet.ad}
            className="group relative flex flex-col gap-3 rounded-lg border border-altin/30 bg-white p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-altin hover:shadow-[0_8px_28px_rgba(46,46,46,0.08)]"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rotate-45 bg-altin transition-colors duration-300 group-hover:bg-antrasit"
            />
            <h3 className="font-serif text-xl leading-snug text-antrasit sm:text-[1.4rem]">
              {hizmet.ad}
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-gri">
              {hizmet.aciklama}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 border-l-2 border-altin pl-5 text-[0.95rem] leading-relaxed text-gri sm:text-base">
        Evler, rezidanslar, ofisler, oteller ve toplu konut projeleri; tek bir
        duvardan binlerce metrekareye kadar her ölçekte uygulama yapıyoruz.
      </p>

      <PaperGuide />
    </Section>
  );
}
