import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type Varyant = "dolu" | "cerceve" | "cerceveAcik";

const temel =
  "inline-flex items-center justify-center gap-2.5 min-h-12 rounded-md px-6 py-3 text-[0.95rem] font-medium tracking-wide transition-colors duration-200 sm:px-7";

const varyantlar: Record<Varyant, string> = {
  // Altin zemin, antrasit yazi
  dolu: "btn-parla bg-altin-dolu text-antrasit hover:bg-altin-acik",
  // Acik zeminde altin cerceve
  cerceve: "border border-altin text-antrasit hover:bg-altin/10",
  // Koyu zeminde altin cerceve
  cerceveAcik:
    "border border-altin-acik/70 text-krem hover:bg-altin-acik/15 hover:border-altin-acik",
};

type Ortak = {
  children: ReactNode;
  varyant?: Varyant;
  className?: string;
};

type LinkProps = Ortak &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type DugmeProps = Ortak &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: LinkProps | DugmeProps) {
  const { children, varyant = "dolu", className = "" } = props;
  const sinif = `${temel} ${varyantlar[varyant]} ${className}`.trim();

  if (props.href !== undefined) {
    const { children: _c, varyant: _v, className: _cn, ...rest } = props;
    return (
      <a className={sinif} {...rest}>
        {children}
      </a>
    );
  }

  const { children: _c, varyant: _v, className: _cn, ...rest } = props;
  return (
    <button className={sinif} {...rest}>
      {children}
    </button>
  );
}
