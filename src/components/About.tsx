import { Section, SectionBaslik } from "@/components/ui/Section";
import { asset } from "@/lib/paths";

/**
 * Hakkimizda.
 *
 * Fotograf `asset()` ile veriliyor: Next, <img src> icin basePath'i
 * kendiliginden eklemiyor, GitHub Pages taslaginda kirik kalirdi.
 *
 * Kaynak gorsel 533x803 (2:3). Cerceve 4:5 oldugu icin `object-cover`
 * ustten/alttan bir miktar kirpiyor — istenen davranis bu.
 */
export function About() {
  return (
    <Section id="hakkimizda" zemin="beyaz">
      <SectionBaslik
        etiket="HAKKIMIZDA"
        baslik="Bir ailenin yarım asırlık mesleği"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        <figure className="mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
          <div className="relative">
            {/* Arkada 12px kaymis ikinci cerceve — katmanli gorunum */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-altin"
            />
            <img
              src={asset("/images/mustafa-ascibasi.jpg")}
              alt="Maxeta Decor yetkilisi Mustafa Aşçıbaşı"
              width={320}
              height={400}
              loading="lazy"
              className="relative block aspect-[4/5] w-full border border-altin object-cover"
            />
          </div>

          <figcaption className="mt-6">
            <p className="font-serif text-2xl leading-snug text-antrasit sm:text-[1.75rem]">
              Mustafa Aşçıbaşı
            </p>
            <p className="mt-2 text-[0.7rem] font-medium tracking-[0.22em] text-altin-koyu">
              YETKİLİ
            </p>
          </figcaption>
        </figure>

        <div>
          <div className="space-y-6 text-base leading-[1.85] text-gri sm:text-[1.05rem]">
            <p>
              Maxeta Decor, 50 yılı aşkın bir aile mesleğinin bugünkü
              temsilcisidir. Duvar kağıdını yalnızca uygulamakla kalmıyor, her
              kağıdın yapısını, karakterini ve hangi mekâna yakışacağını çok iyi
              tanıyoruz. Türkiye&apos;nin ve yurt dışının önde gelen otellerinde
              yüz binlerce metrekarelik uygulamayı başarıyla tamamladık.
            </p>
            <p>
              Bizim için işin büyüğü küçüğü yoktur. Evinizin salonu, yatak
              odası, çocuk odası ya da tek bir dekoratif duvar; hepsine bir otel
              lobisi kadar özenle yaklaşırız. Kağıt seçiminden zemin
              hazırlığına, ek yerlerinden son kontrole kadar her adımda 50
              yıllık tecrübemiz yanınızdadır. Keşif hizmetimiz ücretsizdir.
            </p>
          </div>

          <blockquote className="mt-10 border-l border-altin pl-5 sm:pl-6">
            <p className="font-serif text-[1.3rem] leading-[1.6] text-antrasit italic sm:text-[1.6rem]">
              “Bizim için iş, duvar kağıdı bitince bitmez. Müşterimiz memnun
              kalmadıysa iş bitmemiştir. 50 yıldır kazancımızı değil, adımızı
              koruyoruz.”
            </p>
            <footer className="mt-4 text-sm tracking-wide text-gri">
              — Mustafa Aşçıbaşı
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
