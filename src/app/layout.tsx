import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/analytics/Analytics';
import GTMNoscript from '@/components/analytics/GTMNoscript';
import WakeDB from '@/components/wake-db/WakeDB';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SileoTube | Master Your Attention',
  description: 'SileoTube redesigns YouTube to respect your time. Eliminate Shorts, hide feeds, and focus on what matters.',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicons/favicon.ico'],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'SileoTube',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <WakeDB />
        <Analytics />
        <GTMNoscript />
        {children}
      </body>
    </html>
  );
}

