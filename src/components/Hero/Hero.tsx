'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Users2,
  Clock,
  QrCode,
  CheckCircle2
} from 'lucide-react';
import { PhoneMockup } from '../AppPreview/PhoneMockup';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background decorations */}
      <div className={styles.bgBlobTop} />
      <div className={styles.bgBlobBottom} />
      <div className={styles.gridPattern} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Pitch & CTAs */}
        <div className={styles.contentCol}>
          <div className={styles.tagBadge}>
            <span className={styles.pulseDot} />
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Inovação para o seu dia a dia • TCC SENAI</span>
          </div>

          <h1 className={styles.title}>
            Sua despensa inteligente.{' '}
            <span className={styles.highlightText}>Zero desperdício.</span>{' '}
            Zero compras repetidas.
          </h1>

          <p className={styles.description}>
            O <strong>FaltaOquê?</strong> conecta sua casa em uma despensa viva em tempo real:
            receba alertas antes da comida vencer, cadastre suas compras em 5 segundos
            escaneando o QR Code da nota fiscal e tenha sua lista de mercado gerada
            automaticamente no momento exato em que um item acaba.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#simulador" className={styles.btnPrimary}>
              <span>Experimentar Simulador</span>
              <ArrowRight size={18} />
            </a>
            <a href="#telas" className={styles.btnSecondary}>
              <span>Conhecer as Telas</span>
            </a>
          </div>

          {/* Quick Platform tags */}
          <div className={styles.platforms}>
            <span className={styles.platformLabel}>Disponível para:</span>
            <div className={styles.platformPills}>
              <span className={styles.platformItem}>
                <CheckCircle2 size={13} color="#16a34a" /> Web App PWA
              </span>
              <span className={styles.platformItem}>
                <CheckCircle2 size={13} color="#16a34a" /> Android (APK)
              </span>
              <span className={styles.platformItem}>
                <CheckCircle2 size={13} color="#16a34a" /> Multi-usuário
              </span>
            </div>
          </div>

          {/* Value Stats mini cards */}
          <div className={styles.heroMetrics}>
            <div className={styles.metricCard}>
              <div className={styles.metricIconWrap}>
                <TrendingDown size={18} />
              </div>
              <div className={styles.metricText}>
                <strong>-35%</strong>
                <span>Desperdício no 1º mês</span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricIconWrap}>
                <Users2 size={18} />
              </div>
              <div className={styles.metricText}>
                <strong>100%</strong>
                <span>Despensas Compartilhadas</span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricIconWrap}>
                <QrCode size={18} />
              </div>
              <div className={styles.metricText}>
                <strong>5 seg</strong>
                <span>Cadastro via NFC-e</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Phone Mockup */}
        <div className={styles.mockupCol}>
          <div className={styles.mockupHeaderHint}>
            <span className={styles.hintDot} />
            <span>📱 Interaja com a tela abaixo: aumente/diminua quantidades ou simule o scanner</span>
          </div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
