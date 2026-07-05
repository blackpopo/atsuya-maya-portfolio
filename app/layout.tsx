import type { Metadata, Viewport } from 'next';
import { EB_Garamond, Noto_Serif_JP } from 'next/font/google';
import './globals.css';
import { site } from '@/data/content';

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
});

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    images: ['/art/moth-hero.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0c17',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJp.className} ${garamond.variable}`}>
        {children}
      </body>
    </html>
  );
}
