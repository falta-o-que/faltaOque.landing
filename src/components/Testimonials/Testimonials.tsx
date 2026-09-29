import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './Testimonials.module.scss';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Camila & Lucas Rocha',
      role: 'Casal que trabalha fora',
      location: 'São Paulo - SP',
      text: 'Acabou a clássica briga: um voltava do mercado com 3 caixas de leite e o outro já tinha comprado no dia anterior. Agora, com a despensa compartilhada, a gente olha a lista sincronizada e nunca mais comprou nada duplicado.',
      rating: 5,
      tag: 'Economia de R$ 420/mês',
    },
    {
      name: 'Sarah Mendonça',
      role: 'Avaliadora Técnica de Software',
      location: 'Curitiba - PR',
      text: 'A experiência de usuário é impecável. A leitura de NFC-e via QR Code importa a nota em menos de 5 segundos e a regra de mandar produto zerado para a lista automaticamente resolveu a dor de cabeça da minha casa.',
      rating: 5,
      tag: 'Review da Sarah: Topzera!',
    },
    {
      name: 'Rodrigo Antunes',
      role: 'Mora em República com 4 amigos',
      location: 'Campinas - SP',
      text: 'Usamos o recurso de cores e múltiplas despensas: temos a despensa comunitária (arroz, café, papel higiênico) e cada um tem sua despensa pessoal. A transparência na divisão de custos é surreal.',
      rating: 5,
      tag: 'República sem confusão',
    },
  ];

  return (
    <section id="depoimentos" className={styles.testSection}>
      <div className={`container ${styles.testContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Casos de Sucesso & Avaliações
          </span>
          <h2 className={styles.sectionTitle}>
            Quem usa, não volta mais para a lista em papel
          </h2>
          <p className={styles.sectionSubtitle}>
            Veja como famílias, casais e repúblicas estão transformando a rotina de compras
            com o FaltaOquê?.
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((rev, i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.cardTop}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className={styles.cardTag}>{rev.tag}</span>
              </div>

              <p className={styles.reviewText}>
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className={styles.authorInfo}>
                <div className={styles.avatarMock}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <strong className={styles.authorName}>{rev.name}</strong>
                  <span className={styles.authorRole}>
                    {rev.role} • {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
