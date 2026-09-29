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
  themeColor: '#16a34a',
};

export const metadata: Metadata = {
  title: 'FaltaOquê? • Controle Inteligente de Despensa e Listas de Compras',
  description: 'Gerencie produtos da sua despensa, acompanhe datas de validade, gere listas de compras automáticas e economize tempo e dinheiro com leitura de notas fiscais.',
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
    icon: '/icons/logo.svg',
    shortcut: '/icons/logo.svg',
    apple: '/icons/logo.svg',
  },
  openGraph: {
    title: 'FaltaOquê? • O App Inteligente para sua Despensa',
    description: 'Nunca mais compre o que já tem. Nunca mais esqueça o que acabou. Controle sua despensa, economize dinheiro e reduza o desperdício.',
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
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
