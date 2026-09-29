'use client';

import React, { useState } from 'react';
import {
  PackageCheck,
  QrCode,
  ShoppingCart,
  BarChart3,
  Users,
  Calculator,
  Bell,
  ScanLine,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Tag
} from 'lucide-react';
import styles from './Features.module.scss';

export const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pantry' | 'scanner' | 'lists' | 'dashboards'>('all');

  const features = [
    {
      id: 'pantry',
      category: 'pantry',
      badge: 'Despensa Viva',
      badgeColor: 'green',
      icon: <PackageCheck size={24} />,
      title: 'Controle de Validade & Alertas Proativos',
      description:
        'Chega de encontrar potes mofados no fundo da geladeira. O FaltaOquê? avisa dias antes de qualquer alimento vencer, com cores indicativas (Verde = Em dia, Amarelo = Vencendo, Vermelho = Em falta).',
      highlights: [
        'Classificação por categorias: grãos, laticínios, limpeza, frios e bebidas',
        'Notificação inteligente antes do prazo de validade',
        'Filtro rápido por status e dias restantes',
      ],
    },
    {
      id: 'scanner',
      category: 'scanner',
      badge: 'Entrada por IA & NFC-e',
      badgeColor: 'blue',
      icon: <QrCode size={24} />,
      title: 'Importe sua Nota Fiscal em Segundos',
      description:
        'Não perca tempo digitando produto por produto. Aponte a câmera para o QR Code da NFC-e ou leia o código de barras da embalagem. O app reconhece o nome, quantidade, marca e preço pago na hora.',
      highlights: [
        'Leitura instantânea de QR Code de Nota Fiscal Eletrônica (NFC-e)',
        'Scanner de código de barras para novos itens',
        'OCR avançado para escanear a lista de compras da nota física',
      ],
    },
    {
      id: 'lists',
      category: 'lists',
      badge: 'Lista Automatizada',
      badgeColor: 'amber',
      icon: <ShoppingCart size={24} />,
      title: 'Lista de Compras que se Monta Sozinha',
      description:
        'Quando a última manteiga ou o café acaba, você marca com 1 toque no app e ele entra automaticamente na lista da próxima compra. Toda a casa vê o que precisa ser comprado.',
      highlights: [
        'Geração automática baseada nos itens zerados da despensa',
        'Ordenação inteligente pelos corredores do mercado',
        'Atualização colaborativa em tempo real durante as compras',
      ],
    },
    {
      id: 'dashboards',
      category: 'dashboards',
      badge: 'Analytics & Economia',
      badgeColor: 'purple',
      icon: <BarChart3 size={24} />,
      title: 'Dashboards de Gastos e Variação de Preços',
      description:
        'Descubra quanto sua casa gasta por mês em cada categoria de produto, identifique aumento abusivo de preços com o histórico de compras e saiba a frequência ideal de idas ao supermercado.',
      highlights: [
        'Gráficos de barras de gastos mensais e semanais',
        'Gráfico donut com divisão percentual de categorias',
        'Histórico completo de compras e oscilação de valores',
      ],
    },
    {
      id: 'sharing',
      category: 'pantry',
      badge: 'Múltiplas Despensas',
      badgeColor: 'green',
      icon: <Users size={24} />,
      title: 'Compartilhamento Seguro via Link',
      description:
        'Crie quantas despensas quiser: Despensa de Casa, Casa de Praia, República dos Amigos ou Escritório. Cada uma com sua cor personalizada e convite instantâneo via link com expiração.',
      highlights: [
        'Convites via link único compartilhável com QR Code',
        'Identificação visual rápida por cores personalizadas',
        'Controle de permissões para cada membro da despensa',
      ],
    },
    {
      id: 'calculator',
      category: 'lists',
      badge: 'Ferramenta Embutida',
      badgeColor: 'amber',
      icon: <Calculator size={24} />,
      title: 'Calculadora de Custo por Unidade / Kg / Litro',
      description:
        'Embalagem econômica ou embalagem comum? O FaltaOquê? traz uma calculadora nativa para você digitar o preço e peso e saber imediatamente qual produto oferece o menor custo real por grama ou mililitro.',
      highlights: [
        'Comparação direta entre duas marcas ou tamanhos',
        'Cálculo de preço unitário por grama, kg, ml ou litro',
        'Fim das pegadinhas de embalagens "reduzidas"',
      ],
    },
  ];

  const filteredFeatures =
    activeCategory === 'all'
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section id="recursos" className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Funcionalidades Completas
          </span>
          <h2 className={styles.sectionTitle}>
            Tudo o que você precisa para uma casa organizada
          </h2>
          <p className={styles.sectionSubtitle}>
            Do escaneamento da nota fiscal até os gráficos de economia no final do mês,
            conheça cada recurso desenvolvido para descomplicar sua despensa.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.tabsFilter}>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todos os Recursos
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'pantry' ? styles.active : ''}`}
              onClick={() => setActiveCategory('pantry')}
            >
              Despensa & Validade
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'scanner' ? styles.active : ''}`}
              onClick={() => setActiveCategory('scanner')}
            >
              Scanner NFC-e & IA
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'lists' ? styles.active : ''}`}
              onClick={() => setActiveCategory('lists')}
            >
              Lista de Compras
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'dashboards' ? styles.active : ''}`}
              onClick={() => setActiveCategory('dashboards')}
            >
              Dashboards
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className={styles.featuresGrid}>
          {filteredFeatures.map((item) => (
            <div key={item.id} className={styles.featureCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrap} ${styles[item.badgeColor]}`}>
                  {item.icon}
                </div>
                <span className={`${styles.badge} ${styles[`badge_${item.badgeColor}`]}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              <div className={styles.cardHighlights}>
                {item.highlights.map((h, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
