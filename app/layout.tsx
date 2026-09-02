import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import RootLayout from '@/components/layout/RootLayout';
import './globals.css';

const grotesk = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'SSS Engineering — Moulded fibre egg trays & tray machinery',
    template: '%s — SSS Engineering',
  },
  description:
    'Twenty-five years manufacturing moulded fibre egg trays and tray-making machinery. Domestic bulk supply to poultry farms, export machinery to 45 countries.',
  metadataBase: new URL('https://sss-engineering.com'),
  openGraph: {
    title: 'SSS Engineering',
    description: 'Moulded fibre egg trays. Production machinery. Est. 1999.',
    siteName: 'SSS Engineering',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        ) : null}
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
