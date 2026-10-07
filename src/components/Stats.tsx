import { rakamlar } from "@/data/stats";
import { Section } from "@/components/ui/Section";

export function Stats() {
  return (
    <Section zemin="krem" desen="elmas">
      <h2 className="sr-only">Rakamlarla Max Wall Decor</h2>

      <div className="grid gap-px overflow-hidden rounded-lg border border-altin/25 bg-altin/25 sm:grid-cols-3">
        {rakamlar.map((rakam) => (
          <div
            key={rakam.deger}
            className="flex flex-col items-center justify-center gap-3 bg-krem px-6 py-10 text-center sm:py-12"
          >
            <p
              className={`flex min-h-12 items-center justify-center font-serif leading-tight font-medium text-altin-koyu sm:min-h-14 ${
                rakam.boyut === "orta"
                  ? "text-2xl sm:text-[1.6rem]"
                  : "text-4xl sm:text-5xl"
              }`}
            >
              {rakam.deger}
            </p>
            <p className="text-sm tracking-wide text-gri sm:text-base">
              {rakam.aciklama}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
