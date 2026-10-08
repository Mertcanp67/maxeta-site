import { projeler } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Section, SectionBaslik } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="referanslar" zemin="koyu" desen="elmas">
      <SectionBaslik
        koyu
        etiket="REFERANSLAR"
        baslik="Tamamladığımız projelerden bazıları"
        aciklama={
          <>
            <span className="font-serif text-2xl text-altin-acik sm:text-3xl">
              147.000 m²
            </span>
            &apos;den fazla uygulama
          </>
        }
      />

      <ul className="belir-kademeli grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projeler.map((proje, i) => (
          <li
            key={`${proje.ad}-${proje.konum}-${i}`}
            className="flex h-full flex-col rounded-lg border border-altin-acik/25 bg-white/[0.04] p-7 transition-[border-color,background-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-altin-acik/60 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
          >
            <h3 className="font-serif text-2xl leading-snug text-krem">
              {proje.ad}
            </h3>
            <p className="mt-2 text-sm text-krem/60">{proje.konum}</p>

            {/* Metrajı olmayan projede (Rams) bu alan hiç render edilmez. */}
            {proje.metraj && (
              <p className="mt-7 font-serif text-[2rem] leading-none font-medium text-altin-acik">
                {proje.metraj}
              </p>
            )}

            {/* Esnek bosluk: kartlarin alt satiri hizali kalir. */}
            <div aria-hidden="true" className="min-h-7 flex-1" />

            <p className="border-t border-altin-acik/20 pt-5 text-sm leading-relaxed text-krem/70">
              {proje.kagitTuru}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm tracking-wide text-krem/55">
        ve daha birçok proje…
      </p>

      {/* Otel ve mueteahhitlere yonelik kisa kutu — ayri bolum degil. */}
      <div className="mt-12 rounded-lg border border-altin-acik/30 bg-white/[0.05] p-7 sm:mt-14 sm:p-9">
        <h3 className="font-serif text-2xl leading-snug text-krem sm:text-[1.75rem]">
          Otel ve Müteahhitler İçin
        </h3>
        <div aria-hidden="true" className="cizgi-ciz mt-5 h-px w-16 bg-altin-acik/70" />
        <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-krem/80 sm:text-base">
          Büyük projelerde metraj üzerinden yazılı teklif veriyor, şantiye
          takvimine uyumlu çalışıyoruz. İşi bölüm bölüm planlayabilir, otel
          faaliyetteyken misafirleri rahatsız etmeden uygulama yapabiliriz.
        </p>
        <Button href="#iletisim" varyant="cerceveAcik" className="mt-8">
          Proje Teklifi İsteyin
        </Button>
      </div>
    </Section>
  );
}
