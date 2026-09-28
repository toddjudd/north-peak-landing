'use client';

/* ------------------------------------------------------------------ */
/*  TEMPORARY: hero photo switcher.                                    */
/*  Remove this file (and its usages in page.tsx) once a final hero    */
/*  photo is chosen.                                                   */
/* ------------------------------------------------------------------ */

import Image from 'next/image';
import { createContext, useContext, useState } from 'react';

const HERO_PHOTOS = [
  {
    src: '/photos/heros/saul-flores-7xkra7YbSgw-unsplash.jpg',
    alt: 'Roofline against a mountain sky',
  },
  {
    src: '/photos/heros/daniel-shapiro-WRL2FysCfds-unsplash.jpg',
    alt: 'Home exterior with a freshly finished roof',
  },
  {
    src: '/photos/heros/courtney-smith-n9AqVBfKHv8-unsplash.jpg',
    alt: 'Close view of shingles on a residential roof',
  },
];

const HeroPhotoContext = createContext<{
  index: number;
  total: number;
  next: () => void;
} | null>(null);

function useHeroPhoto() {
  const ctx = useContext(HeroPhotoContext);
  if (!ctx)
    throw new Error('useHeroPhoto must be used inside HeroPhotoProvider');
  return ctx;
}

export function HeroPhotoProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % HERO_PHOTOS.length);

  return (
    <HeroPhotoContext.Provider
      value={{ index, total: HERO_PHOTOS.length, next }}
    >
      {children}
    </HeroPhotoContext.Provider>
  );
}

export function HeroPhotoBackground() {
  const { index } = useHeroPhoto();

  return (
    <div className='pointer-events-none absolute inset-0'>
      {HERO_PHOTOS.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          priority={i === 0}
          sizes='100vw'
          className={`object-cover transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(21, 33, 58, 0.55) 0%, rgba(21, 33, 58, 0.75) 50%, rgba(12, 22, 38, 0.92) 100%)',
        }}
      />
    </div>
  );
}

export function HeroPhotoSwitchButton() {
  const { index, total, next } = useHeroPhoto();

  return (
    <button
      type='button'
      onClick={next}
      className='rounded-lg border border-dashed border-slate-400 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-navy-900 hover:text-navy-900'
      title='Temporary: cycle hero photo'
    >
      Hero photo {index + 1}/{total}
    </button>
  );
}
