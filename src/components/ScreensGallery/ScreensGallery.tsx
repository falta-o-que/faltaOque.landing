'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Layers,
  Palette,
  BarChart,
  ShoppingCart,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import styles from './ScreensGallery.module.scss';

interface ScreenItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  req: string;
  imageSrc: string;
  description: string;
  points: string[];
}

export const ScreensGallery: React.FC = () => {
  const screens: ScreenItem[] = [
    {
      id: 'dash',
      title: 'Dashboards & Métricas',
      subtitle: 'Visão analítica de gastos e consumo',
      tag: 'Analytics',
      req: 'RF 17',
      imageSrc: '/screens/screen_10_dashboard.png',
      description:
        'Acompanhe seus gastos totais, evolução semanal, média de preços e distribuição por categorias em um gráfico donut dinâmico.',
      points: [
        'Gráficos de barras por período e média de preço',
        'Gráfico donut com divisão por categoria (alimentos, limpeza, bebidas)',
        'Análise de frequência de ida ao mercado para melhor planejamento',
      ],
    },
    {
      id: 'pantry',
      title: 'Despensa & Estoque',
      subtitle: 'Gestão visual de alimentos e validades',
      tag: 'Principal',
      req: 'RF 05 / 06 / 08',
      imageSrc: '/screens/screen_05_pantry_list.png',
      description:
        'Controle tudo o que está guardado no seu armário e geladeira com fotos, marcas, quantidade restante e alerta de validade.',
      points: [
        'Busca rápida com filtros por categoria e status',
        'Controle de quantidade com incremento e decremento em 1 toque',
        'Indicador visual de dias restantes antes do vencimento',
      ],
    },
    {
      id: 'color',
      title: 'Personalização & Cores',
      subtitle: 'Crie despensas com identidade visual única',
      tag: 'Colaboração',
      req: 'RF 02 / 03 / Schema',
      imageSrc: '/screens/screen_03_color_picker.png',
      description:
        'Diferencie a despensa da sua casa, da república ou do sítio escolhendo paletas de cores exclusivas e compartilhando via link.',
      points: [
        'Paleta com cores vivas para identificação imediata',
        'Criação de link compartilhável com expiração segura',
        'Permissões personalizadas por participante da despensa',
      ],
    },
    {
      id: 'product',
      title: 'Detalhes & Cadastro',
      subtitle: 'Entrada manual, código de barras ou nota fiscal',
      tag: 'Cadastro',
      req: 'RF 09 / 10 / 11 / 12',
      imageSrc: '/screens/screen_06_product_detail.png',
      description:
        'Adicione produtos com preço, marca, data de compra, local e validade. Ou deixe a IA preencher tudo ao escanear a nota fiscal.',
      points: [
        'Campos flexíveis com preenchimento assistido',
        'Cálculo de preço unitário por quilo ou litro',
        'Histórico de preços pagos em compras anteriores',
      ],
    },
    {
      id: 'login',
      title: 'Autenticação & Perfil',
      subtitle: 'Acesso seguro com criptografia',
      tag: 'Segurança',
      req: 'RF 01 / RNF 02',
      imageSrc: '/screens/screen_01_login.png',
      description:
        'Crie sua conta com validação robusta de senha, escolha de avatar colorido e conformidade total com privacidade de dados.',
      points: [
        'Senhas criptografadas antes do armazenamento no banco',
        'Avatares customizados para cada membro da casa',
        'Sessão sincronizada entre celular e computador',
      ],
    },
  ];

  const [activeScreen, setActiveScreen] = useState<ScreenItem>(screens[0]);

  return (
    <section id="telas" className={styles.gallerySection}>
      <div className={`container ${styles.galleryContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Identidade Visual & Design System
          </span>
          <h2 className={styles.sectionTitle}>
            As telas reais do aplicativo FaltaOquê?
          </h2>
          <p className={styles.sectionSubtitle}>
            Desenvolvido com foco total na experiência do usuário, visual limpo,
            alta legibilidade e acessibilidade para todas as idades (RNF 05).
          </p>
        </div>

        {/* Showcase Stage */}
        <div className={styles.showcaseStage}>
          {/* Navigation Tabs */}
          <div className={styles.tabsCol}>
            {screens.map((item) => {
              const isSelected = item.id === activeScreen.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.navTabCard} ${isSelected ? styles.activeTab : ''}`}
                  onClick={() => setActiveScreen(item)}
                >
                  <div className={styles.tabBadgeRow}>
                    <span className={styles.reqBadge}>{item.req}</span>
                    <span className={styles.tagText}>{item.tag}</span>
                  </div>
                  <h3 className={styles.tabTitle}>{item.title}</h3>
                  <p className={styles.tabSub}>{item.subtitle}</p>
                </div>
              );
            })}
          </div>

          {/* Active Screen Display in Phone Bezel */}
          <div className={styles.screenPreviewCol}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} />
              <div className={styles.screenImageWrapper}>
                <Image
                  src={activeScreen.imageSrc}
                  alt={activeScreen.title}
                  width={280}
                  height={580}
                  className={styles.screenImg}
                  priority
                />
              </div>
            </div>

            {/* Screen Annotation Card */}
            <div className={styles.annotationCard}>
              <div className={styles.annotHeader}>
                <span className={styles.annotReq}>{activeScreen.req}</span>
                <h4>{activeScreen.title}</h4>
              </div>
              <p className={styles.annotDesc}>{activeScreen.description}</p>

              <div className={styles.annotPoints}>
                {activeScreen.points.map((pt, idx) => (
                  <div key={idx} className={styles.pointRow}>
                    <CheckCircle2 size={15} color="#16a34a" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* App Architecture & Database Banner */}
        <div className={styles.architectureBanner}>
          <div className={styles.archContent}>
            <div className={styles.archIcon}>
              <Layers size={24} />
            </div>
            <div>
              <strong>Modelagem Relacional de Alta Performance</strong>
              <p>
                Arquitetura pensada para escalabilidade com tabelas normalizadas
                (users, pantries, pantry_products, grocery_lists, purchases e pantries_invites).
              </p>
            </div>
          </div>
          <div className={styles.archBadges}>
            <span className={styles.archBadge}>TypeScript</span>
            <span className={styles.archBadge}>MySQL / MariaDB</span>
            <span className={styles.archBadge}>Next.js</span>
            <span className={styles.archBadge}>PWA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
