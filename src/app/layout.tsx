import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { favicon } from '@/assets/images/export';
import './globals.scss';

const siteTitle = 'FaltaOquê? | Despensa e lista de compras';
const siteDescription = 'Organize sua despensa, crie listas de compras, acompanhe gastos e leia notas fiscais por QR Code com o aplicativo FaltaOquê?.';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'optional',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00dd00',
};

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: 'FaltaOquê?',
  keywords: [
    'controle de despensa',
    'lista de compras',
    'controle de validade',
    'leitura de nota fiscal por QR Code',
    'gastos de supermercado',
    'FaltaOquê?',
  ],
  authors: [{ name: 'Projeto FaltaOquê?' }],
  robots: { index: true, follow: true },
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: 'FaltaOquê?',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary', title: siteTitle, description: siteDescription },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
