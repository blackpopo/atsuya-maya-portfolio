import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Orbitron } from 'next/font/google';
import './globals.css';
import { site } from '@/data/content';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    images: ['/anime_atsuya.jpeg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#05060f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
