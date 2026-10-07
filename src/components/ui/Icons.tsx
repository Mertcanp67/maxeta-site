import type { SVGProps } from "react";

/** WhyUs bolumunde kullanilan ikon adlari. */
export type IkonAdi = "ekip" | "rulo" | "elSikisma" | "metre";

const cizgi = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type Props = SVGProps<SVGSVGElement>;

function Cerceve({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
      {...cizgi}
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- WhyUs ikonlari --------------------------------------------------- */

function Ekip(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
      <circle cx="10" cy="8" r="3.5" />
      <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.6-3.38" />
      <path d="M15.5 4.7a3.5 3.5 0 0 1 0 6.6" />
    </Cerceve>
  );
}

function Rulo(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M12 3 3 7.5l9 4.5 9-4.5z" />
      <path d="M3 16.5 12 21l9-4.5" />
      <path d="M3 12 12 16.5 21 12" />
    </Cerceve>
  );
}

function ElSikisma(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M12 21s7.5-3.9 7.5-9.6V5.2L12 2.5 4.5 5.2v6.2C4.5 17.1 12 21 12 21z" />
      <path d="m9 11.8 2 2 4-4" />
    </Cerceve>
  );
}

function Metre(props: Props) {
  return (
    <Cerceve {...props}>
      <rect x="2.5" y="8.5" width="19" height="7" rx="1.2" />
      <path d="M7 8.5v2.8M12 8.5v3.8M17 8.5v2.8" />
    </Cerceve>
  );
}

export const ikonlar: Record<IkonAdi, (props: Props) => React.ReactElement> = {
  ekip: Ekip,
  rulo: Rulo,
  elSikisma: ElSikisma,
  metre: Metre,
};

/* --- Iscilik ikonlari ("Ikinci Sans Yoktur" bolumu) -------------------- */

/** Macun/spatula ile duzeltilmis zemin. */
export function ZeminIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M3 20h18" />
      <path d="M5 16.5h14" />
      <path d="M9 13 15.5 3.2a1.4 1.4 0 0 1 2.3 1.5L12.6 13z" />
      <path d="M9 13h3.6" />
    </Cerceve>
  );
}

/** Yapistirici kovasi ve firca. */
export function YapistiriciIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M4 8h10l-1 11.2a1.5 1.5 0 0 1-1.5 1.3H6.5A1.5 1.5 0 0 1 5 19.2z" />
      <path d="M6.2 5.5a3 3 0 0 1 5.6 0" />
      <path d="M17.5 3.5v6" />
      <path d="M15.5 9.5h4l-.5 4h-3z" />
    </Cerceve>
  );
}

/** Birebir oturan iki panel; ek yeri gorunmez. */
export function HizalamaIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <rect x="2.5" y="4" width="8" height="16" rx="1" />
      <rect x="13.5" y="4" width="8" height="16" rx="1" />
      <path d="M12 2.5v19" strokeDasharray="2.4 2.4" />
    </Cerceve>
  );
}

/* --- Arayuz ikonlari -------------------------------------------------- */

export function TelefonIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M21 16.9v2.6a1.8 1.8 0 0 1-2 1.8 18.6 18.6 0 0 1-8.1-2.9 18.3 18.3 0 0 1-5.6-5.6A18.6 18.6 0 0 1 2.4 4.7a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.6 11.7 11.7 0 0 0 .64 2.57 1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14.9 14.9 0 0 0 5.6 5.6l1.1-1.1a1.8 1.8 0 0 1 1.9-.4 11.7 11.7 0 0 0 2.57.64A1.8 1.8 0 0 1 21 16.9z" />
    </Cerceve>
  );
}

export function PostaIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.6" />
      <path d="m3 6 9 6.5L21 6" />
    </Cerceve>
  );
}

export function MenuIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </Cerceve>
  );
}

export function KapatIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Cerceve>
  );
}

export function OkIkon(props: Props) {
  return (
    <Cerceve {...props}>
      <path d="M4 12h15" />
      <path d="m13.5 6.5 6 5.5-6 5.5" />
    </Cerceve>
  );
}

/** WhatsApp marka glifi (dolu). Buton icinde taniniyor olmasi onemli. */
export function WhatsAppIkon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.35-.35.52-.52.17-.18.23-.3.35-.5.11-.2.06-.37-.02-.52-.07-.15-.66-1.59-.9-2.17-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.46 6.6 2.03 12.05 2.03c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.4z" />
    </svg>
  );
}
