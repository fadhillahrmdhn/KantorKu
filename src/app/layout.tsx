import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'KantorKu - Rent Luxurious & Affordable Offices',
    template: '%s | KantorKu',
  },
  description: 'Rent luxurious offices at affordable prices in Jakarta, Surabaya, Bandung, Bali, and other major cities. Find your dream office with complete facilities and affordable prices at KantorKu.',
  keywords: [
    // Indonesian Keywords
    'sewa kantor',
    'kantor murah',
    'kantor mewah',
    'kantor jakarta',
    'kantor surabaya',
    'kantor bandung',
    'kantor bali',
    // English Keywords
    'office for rent',
    'cheap office',
    'luxury office',
    'jakarta office',
    'surabaya office',
    'bandung office',
    'bali office',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'KantorKu - Rent Luxurious & Affordable Offices',
    description: 'Rent luxurious offices at affordable prices in Jakarta, Surabaya, Bandung, Bali, and other major cities. Find your dream office with complete facilities and affordable prices at KantorKu.',
    siteName: 'KantorKu',
    url: 'https://kantorku.com',
    images: [
      {
        url: '/assets/images/thumbnails/thumbnails-1.png',
        width: 1200,
        height: 630,
        alt: 'KantorKu',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
