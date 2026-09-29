import React from 'react';
import {
  Users2,
  QrCode,
  Sparkles,
  ArrowRight,
  BellRing,
  ShoppingCart,
  CheckCircle2
} from 'lucide-react';
import styles from './HowItWorks.module.scss';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Crie sua despensa e convide a casa',
      desc: 'Defina um nome (ex: "Despensa do Apê"), escolha uma cor personalizada e envie o link de convite seguro para parceiro, filhos ou colegas de república.',
      icon: <Users2 size={28} />,
      badge: 'Passo 1',
    },
    {
      number: '02',
      title: 'Escaneie a nota fiscal ou código de barras',
      desc: 'Chegou do supermercado? Aponte a câmera para o QR Code da NFC-e ou código de barras. O app importa instantaneamente todos os itens com preços e marcas.',
      icon: <QrCode size={28} />,
      badge: 'Passo 2',
    },
    {
      number: '03',
      title: 'Alertas de validade & Lista automática',
      desc: 'O app notifica antes dos alimentos estragarem. Conforme você consome os produtos, o que acaba vira lista de compras em tempo real para a próxima ida ao mercado.',
      icon: <ShoppingCart size={28} />,
      badge: 'Passo 3',
    },
  ];

  return (
    <section id="como-funciona" className={styles.howSection}>
      <div className={`container ${styles.howContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Passo a Passo Simples
          </span>
          <h2 className={styles.sectionTitle}>
            Como o FaltaOquê? simplifica sua vida
          </h2>
          <p className={styles.sectionSubtitle}>
            Três passos práticos para colocar a gestão da sua cozinha no piloto automático
            e nunca mais esquecer um ingrediente essencial.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIconWrap}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <span className={styles.stepBadge}>{step.badge}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
