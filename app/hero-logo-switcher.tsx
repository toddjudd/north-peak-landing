'use client';

/* ------------------------------------------------------------------ */
/*  TEMPORARY: hero logo style switcher.                               */
/*  Remove this file (and its usages in page.tsx) once a final hero    */
/*  logo treatment is chosen.                                          */
/* ------------------------------------------------------------------ */

import Image from 'next/image';
import { createContext, useContext, useState } from 'react';

const LOGO_STYLES = [
  {
    label: 'White',
    className: 'h-24 sm:h-28 brightness-0 invert drop-shadow-lg',
  },
  {
    label: 'Color',
    className: 'h-24 sm:h-28 drop-shadow-lg',
  },
  {
    label: 'Large color',
    className: 'h-36 sm:h-48 drop-shadow-xl',
  },
  {
    label: 'Large white',
    className: 'h-36 sm:h-48 brightness-0 invert drop-shadow-xl',
  },
];

const HeroLogoStyleContext = createContext<{
  index: number;
  total: number;
  label: string;
  next: () => void;
} | null>(null);

function useHeroLogoStyle() {
  const ctx = useContext(HeroLogoStyleContext);
  if (!ctx)
    throw new Error(
      'useHeroLogoStyle must be used inside HeroLogoStyleProvider',
    );
  return ctx;
}

export function HeroLogoStyleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % LOGO_STYLES.length);

  return (
    <HeroLogoStyleContext.Provider
      value={{
        index,
        total: LOGO_STYLES.length,
        label: LOGO_STYLES[index].label,
        next,
      }}
    >
      {children}
    </HeroLogoStyleContext.Provider>
  );
}

export function HeroLogo({ alt }: { alt: string }) {
  const { index } = useHeroLogoStyle();

  return (
    <Image
      src='/logo.png'
      alt={alt}
      width={368}
      height={218}
      priority
      className={`mx-auto mb-8 w-auto transition-all duration-300 ${LOGO_STYLES[index].className}`}
    />
  );
}

export function HeroLogoStyleSwitchButton() {
  const { index, total, label, next } = useHeroLogoStyle();

  return (
    <button
      type='button'
      onClick={next}
      className='rounded-lg border border-dashed border-slate-400 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-navy-900 hover:text-navy-900'
      title='Temporary: cycle hero logo style'
    >
      Logo {index + 1}/{total}: {label}
    </button>
  );
}
