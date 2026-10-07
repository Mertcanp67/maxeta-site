import { Section, SectionBaslik } from "@/components/ui/Section";
import {
  HizalamaIkon,
  YapistiriciIkon,
  ZeminIkon,
} from "@/components/ui/Icons";

const maddeler = [
  { ikon: ZeminIkon, metin: "Doğru zemin hazırlığı" },
  { ikon: YapistiriciIkon, metin: "Kağıda uygun yapıştırıcı ve teknik" },
  {
    ikon: HizalamaIkon,
    metin: "Görünmeyen ek yerleri, birebir oturan desenler",
  },
] as const;

export function Craftsmanship() {
  return (
    <Section zemin="koyu" desen="damask">
      <SectionBaslik
        koyu
        etiket="İŞÇİLİK"
        baslik="Duvar Kağıdında İkinci Şans Yoktur"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-6 text-base leading-[1.85] text-krem/80 sm:text-[1.05rem]">
          <p>
            Duvar kağıdı, işçiliğin en çok belli olduğu malzemedir. Yanlış zemin
            hazırlığı, uygun olmayan yapıştırıcı ya da tecrübesiz bir el; birkaç
            hafta içinde ek yerlerinde açılma, kabarma, kayan desenler ve lekeler
            olarak geri döner.
          </p>
          <p>
            Sonuç her zaman aynıdır: Binlerce liralık kağıt çöpe gider, söküm ve
            yeniden uygulama masrafı çıkar, evinizde de her baktığınızda canınızı
            sıkan bir duvar kalır.
          </p>
          <p className="font-serif text-xl leading-snug text-krem sm:text-2xl">
            Pahalı kağıdı ucuz işçilik kurtarmaz. Biz işi bir kere ve doğru
            yaparız.
          </p>
        </div>

        <ul className="space-y-5 self-start rounded-lg border border-altin-acik/25 bg-white/[0.04] p-7">
          {maddeler.map(({ ikon: Ikon, metin }) => (
            <li key={metin} className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-altin-acik/40 text-altin-acik">
                <Ikon className="h-5 w-5" />
              </span>
              <span className="pt-2.5 text-[0.95rem] leading-relaxed text-krem/85 sm:text-base">
                {metin}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
