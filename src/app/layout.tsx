import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00dd00',
};

export const metadata: Metadata = {
  title: 'FaltaOquê? • Controle Inteligente de Despensa e Listas de Compras',
  description: 'Organize a despensa, acompanhe produtos e planeje as compras da casa com o FaltaOquê?.',
  keywords: [
    'despensa inteligente',
    'lista de compras',
    'controle de validade',
    'scanner nota fiscal',
    'economia supermercado',
    'TCC Senai',
    'FaltaOquê',
  ],
  authors: [{ name: 'Miguel Silva & Equipe FaltaOquê' }],
  icons: {
    icon: '/brand/logo.png',
    shortcut: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
  openGraph: {
    title: 'FaltaOquê? • O App Inteligente para sua Despensa',
    description: 'Organize a despensa, acompanhe produtos e planeje as compras da casa.',
    siteName: 'FaltaOquê?',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/brand/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
