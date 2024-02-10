/* eslint-disable max-len */
import '^/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '^/lib/utils';
import dynamic from 'next/dynamic';
import { i18n, type Locale } from '^/i18n';

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
});

const HeaderLazy = dynamic(() => import('../../components/Header'));
const FooterLazy = dynamic(() => import('../../components/Footer'));

const siteConfig = {
   title: 'Binance',
   description:
      'Trade BTC to USDT and other cryptocurrencies in the world’s largest cryptocurrency exchange. Find real-time live price with technical indicators to help you analyze BTC/USDT changes.',
   url: 'https://binance.roisuladib.vercel.app',
};

export async function generateStaticParams() {
   return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
   },
   keywords: [
      'Blockchain Crypto Exchange',
      'Cryptocurrency Exchange',
      'Bitcoin Trading',
      'Ethereum price trend',
      'BNB',
      'CZ',
      'BTC price',
      'ETH wallet registration',
      'LTC price',
      'Binance',
      'Poloniex',
      'Bittrex',
   ],
   description: siteConfig.description,
   authors: {
      name: 'roisuladib',
      url: siteConfig.url,
   },
   publisher: 'roisuladib',
   creator: 'roisuladib',
   robots: { index: true, follow: true },
   icons: [
      {
         rel: 'apple-touch-ico',
         url: '/favicon/apple-touch-icon.png',
         type: 'image/png',
         sizes: '180x180',
      },
      {
         rel: 'icon',
         url: '/favicon/favicon-32x32.png',
         type: 'image/png',
         sizes: '32x32',
      },
      {
         rel: 'icon',
         url: '/favicon/favicon-16x16.png',
         type: 'image/png',
         sizes: '16x16',
      },
   ],
   manifest: '/favicon/site.webmanifest',
   openGraph: {
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [`${siteConfig.url}/images/og.jpg`],
      type: 'website',
      locale: 'en_US',
   },
   twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/images/og.jpg`],
   },
};

export default function RootLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: { lang: Locale };
}>) {
   return (
      <html
         lang={params.lang}
         className="dark"
         suppressHydrationWarning>
         <body className={cn('min-h-svh bg-background font-sans antialiased', fontSans.variable)}>
            <div className="flex min-h-screen flex-col overflow-hidden">
               <HeaderLazy />
               <main className="flex grow flex-col">{children}</main>
               <FooterLazy />
            </div>
         </body>
      </html>
   );
}
