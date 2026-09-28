import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const SITE_NAME = 'North Peak';
const SITE_TAGLINE = "Protecting what's under your roof";
const SITE_DESCRIPTION =
  'North Peak provides trusted roof protection, restoration, gutters, and home exterior services. Licensed, insured, and ready with a free estimate.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://northpeak.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'roofing',
    'roof repair',
    'roof replacement',
    'storm damage restoration',
    'gutters',
    'siding',
    'home exterior contractor',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Home Services',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/northpeakextlogo.png',
    shortcut: '/northpeakextlogo.png',
    apple: '/northpeakextlogo.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/northpeakextlogo.png',
        width: 640,
        height: 640,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ['/northpeakextlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/northpeakextlogo.png`,
  logo: `${SITE_URL}/northpeakextlogo.png`,
  telephone: '+1-555-555-0123',
  email: 'hello@northpeak.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Anytown',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Sa 08:00-18:00',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans`}>
        {children}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
