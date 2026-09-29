import React from 'react';
import { PiggyBank, Utensils, QrCode, Users, CheckCircle, Sparkles } from 'lucide-react';
import styles from './ValueStats.module.scss';

export const ValueStats: React.FC = () => {
  const stats = [
    {
      icon: <PiggyBank size={28} />,
      value: 'R$ 380+',
      label: 'Economia média mensal',
      description: 'Corte compras duplicadas e aproveite 100% dos alimentos antes do prazo de validade.',
    },
    {
      icon: <Utensils size={28} />,
      value: '-35%',
      label: 'Desperdício de comida',
      description: 'Alertas automáticos proativos antes que iogurtes, grãos e frios expirem no armário.',
    },
    {
      icon: <QrCode size={28} />,
      value: '5 seg',
      label: 'Leitura de Nota Fiscal',
      description: 'Aponte a câmera para o QR Code da NFC-e ou código de barras e importe todos os itens.',
    },
    {
      icon: <Users size={28} />,
      value: '100%',
      label: 'Sincronia Colaborativa',
      description: 'Toda a família, parceiro ou colegas de república com acesso instantâneo à mesma despensa.',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statsHeader}>
          <span className={styles.statsPill}>
            <Sparkles size={14} /> Impacto Real na sua Rotina
          </span>
          <h2 className={styles.statsTitle}>
            Menos lixo no prato, mais dinheiro no bolso
          </h2>
          <p className={styles.statsSubtitle}>
            O FaltaOquê? foi projetado no SENAI para resolver a dor de cabeça real do brasileiro:
            a bagunça nas compras do mês e a comida esquecida no fundo do armário.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIconWrapper}>{item.icon}</div>
              <div className={styles.statNumber}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
              <p className={styles.statDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
