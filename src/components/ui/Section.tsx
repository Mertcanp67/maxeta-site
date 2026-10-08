import type { ReactNode } from "react";

export type Zemin = "beyaz" | "krem" | "koyu";
export type Desen = "elmas" | "damask" | "yok";

const zeminler: Record<Zemin, string> = {
  beyaz: "bg-white text-antrasit",
  krem: "bg-krem text-antrasit",
  koyu: "bg-antrasit text-krem",
};

const desenler: Record<Desen, string> = {
  elmas: "desen-elmas",
  damask: "desen-damask",
  yok: "",
};

const desenlerKoyu: Record<Desen, string> = {
  elmas: "desen-elmas-koyu",
  damask: "desen-damask-koyu",
  yok: "",
};

type SectionProps = {
  id?: string;
  zemin?: Zemin;
  desen?: Desen;
  className?: string;
  /** Ic kapsayicinin genisligi. Varsayilan 72rem. */
  genis?: boolean;
  children: ReactNode;
};

export function Section({
  id,
  zemin = "beyaz",
  desen = "yok",
  className = "",
  genis = false,
  children,
}: SectionProps) {
  const koyuMu = zemin === "koyu";
  const desenSinifi = koyuMu ? desenlerKoyu[desen] : desenler[desen];

  return (
    <section
      id={id}
      className={`relative overflow-x-clip ${zeminler[zemin]} ${className}`.trim()}
    >
      {desenSinifi && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${desenSinifi}`}
        />
      )}
      <div
        className={`belir relative mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${
          genis ? "max-w-7xl" : "max-w-6xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

type BaslikProps = {
  /** Kucuk ust etiket. Kaynakta BUYUK HARFLE yazilir. */
  etiket?: string;
  baslik: string;
  aciklama?: ReactNode;
  koyu?: boolean;
  ortala?: boolean;
  /** Varsayilan h2. */
  seviye?: "h2" | "h3";
};

export function SectionBaslik({
  etiket,
  baslik,
  aciklama,
  koyu = false,
  ortala = false,
  seviye = "h2",
}: BaslikProps) {
  const Baslik = seviye;

  return (
    <header className={`${ortala ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} mb-12 sm:mb-16`}>
      {etiket && (
        <p
          className={`mb-4 text-xs font-medium tracking-[0.22em] ${
            koyu ? "text-altin-acik" : "text-altin-koyu"
          }`}
        >
          {etiket}
        </p>
      )}
      <Baslik
        className={`font-serif text-3xl leading-tight font-light sm:text-4xl lg:text-[2.75rem] ${
          koyu ? "text-krem" : "text-antrasit"
        }`}
      >
        {baslik}
      </Baslik>
      <div
        aria-hidden="true"
        className={`cizgi-ciz mt-6 h-px w-16 ${
          ortala ? "cizgi-ciz-orta mx-auto" : ""
        } ${koyu ? "bg-altin-acik/70" : "bg-altin"}`}
      />
      {aciklama && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            koyu ? "text-krem/75" : "text-gri"
          }`}
        >
          {aciklama}
        </p>
      )}
    </header>
  );
}
