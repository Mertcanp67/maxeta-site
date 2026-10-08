import { kagitRehberi } from "@/data/wallpaperGuide";

/**
 * "Hangi kagit nereye uygun?" tablosu.
 * Tek bir semantik <table>; mobilde (sm altinda) satirlar kart olarak,
 * sm ve uzerinde klasik tablo olarak dizilir. Yatay kaydirma yok.
 * Veri: src/data/wallpaperGuide.ts
 */
export function PaperGuide() {
  return (
    <div className="mt-14">
      <h3 className="font-serif text-2xl leading-snug text-antrasit sm:text-[1.75rem]">
        Hangi kağıt nereye uygun?
      </h3>
      <div aria-hidden="true" className="cizgi-ciz mt-5 h-px w-16 bg-altin" />

      <table className="mt-8 w-full border-collapse text-left">
        <caption className="sr-only">
          Duvar kağıdı türleri, en uygun oldukları mekânlar ve öne çıkan
          özellikleri
        </caption>

        <thead className="hidden sm:table-header-group">
          <tr>
            <th
              scope="col"
              className="border-b border-altin/40 pb-3 pr-6 text-xs font-medium tracking-[0.18em] text-altin-koyu"
            >
              KAĞIT TÜRÜ
            </th>
            <th
              scope="col"
              className="border-b border-altin/40 pb-3 pr-6 text-xs font-medium tracking-[0.18em] text-altin-koyu"
            >
              EN UYGUN OLDUĞU YERLER
            </th>
            <th
              scope="col"
              className="border-b border-altin/40 pb-3 text-xs font-medium tracking-[0.18em] text-altin-koyu"
            >
              ÖNE ÇIKAN ÖZELLİĞİ
            </th>
          </tr>
        </thead>

        <tbody className="block sm:table-row-group">
          {kagitRehberi.map((satir) => (
            <tr
              key={satir.tur}
              className="mb-4 block rounded-lg border border-altin/30 bg-white p-5 last:mb-0 sm:mb-0 sm:table-row sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
            >
              <th
                scope="row"
                className="block font-serif text-xl leading-snug font-normal text-antrasit sm:table-cell sm:border-b sm:border-antrasit/10 sm:py-5 sm:pr-6 sm:align-top sm:text-[1.15rem]"
              >
                {satir.tur}
              </th>

              <td className="mt-3 block text-[0.95rem] leading-relaxed text-gri sm:mt-0 sm:table-cell sm:border-b sm:border-antrasit/10 sm:py-5 sm:pr-6 sm:align-top">
                <span className="mb-1 block text-[0.7rem] tracking-[0.16em] text-altin-koyu sm:hidden">
                  EN UYGUN OLDUĞU YERLER
                </span>
                {satir.yerler}
              </td>

              <td className="mt-3 block text-[0.95rem] leading-relaxed text-gri sm:mt-0 sm:table-cell sm:border-b sm:border-antrasit/10 sm:py-5 sm:align-top">
                <span className="mb-1 block text-[0.7rem] tracking-[0.16em] text-altin-koyu sm:hidden">
                  ÖNE ÇIKAN ÖZELLİĞİ
                </span>
                {satir.ozellik}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
