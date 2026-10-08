import { Section, SectionBaslik } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="hakkimizda" zemin="beyaz">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
        <SectionBaslik
          etiket="HAKKIMIZDA"
          baslik="Bir ailenin yarım asırlık mesleği"
        />

        <div className="space-y-6 text-base leading-[1.85] text-gri sm:text-[1.05rem]">
          <p>
            Maxeta Decor, 50 yılı aşkın bir aile mesleğinin bugünkü
            temsilcisidir. Duvar kağıdını yalnızca uygulamakla kalmıyor, her
            kağıdın yapısını, karakterini ve hangi mekâna yakışacağını çok iyi
            tanıyoruz. Türkiye&apos;nin ve yurt dışının önde gelen otellerinde
            yüz binlerce metrekarelik uygulamayı başarıyla tamamladık.
          </p>
          <p>
            Bizim için işin büyüğü küçüğü yoktur. Evinizin salonu, yatak odası,
            çocuk odası ya da tek bir dekoratif duvar; hepsine bir otel lobisi
            kadar özenle yaklaşırız. Kağıt seçiminden zemin hazırlığına, ek
            yerlerinden son kontrole kadar her adımda 50 yıllık tecrübemiz
            yanınızdadır. Keşif hizmetimiz ücretsizdir.
          </p>
        </div>
      </div>
    </Section>
  );
}
