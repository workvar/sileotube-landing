import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/analytics/Analytics';
import GTMNoscript from '@/components/analytics/GTMNoscript';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SileoTube | Master Your Attention',
  description: 'SileoTube redesigns YouTube to respect your time. Eliminate Shorts, hide feeds, and focus on what matters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Analytics />
        <GTMNoscript />
        {children}
      </body>
    </html>
  );
}

