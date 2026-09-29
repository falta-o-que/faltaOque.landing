'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import styles from './Faq.module.scss';

interface FaqItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'O que é o FaltaOquê? e como ele me ajuda no dia a dia?',
      answer:
        'O FaltaOquê? é uma aplicação completa para gerenciar produtos da despensa, criar listas de compras automáticas e fornecer dashboards de gastos e consumo. Ele avisa antes dos alimentos vencerem, sincroniza itens em tempo real com sua família e elimina compras repetidas no supermercado.',
    },
    {
      question: 'Como funciona a importação de compras via Nota Fiscal (NFC-e)?',
      answer:
        'Você só precisa abrir a câmera no app e apontar para o QR Code impresso no cupom fiscal (NFC-e) do supermercado. O sistema consulta os dados da nota fiscal eletrônica e adiciona automaticamente todos os produtos à sua despensa com nomes, quantidades e valores pagos em questão de segundos. Também suporta escaneamento de código de barras e OCR da nota em papel.',
    },
    {
      question: 'Como funciona a sincronização entre membros da mesma despensa?',
      answer:
        'O criador da despensa gera um link de convite seguro e envia por WhatsApp ou e-mail. Quando as outras pessoas aceitam o convite, todos passam a ter acesso à mesma despensa. Se você estiver no supermercado e riscar um produto como adquirido, o app atualiza instantaneamente para quem está em casa (RF 15 e RF 16).',
    },
    {
      question: 'Posso criar mais de uma despensa no mesmo aplicativo?',
      answer:
        'Sim! Você pode ter múltiplas despensas simultâneas (RF 03). Por exemplo: "Despensa de Casa", "Despensa da Praia" ou "Despensa da República". Cada uma tem seu próprio título, cor de identificação e grupo de usuários compartilhados.',
    },
    {
      question: 'O aplicativo funciona em celulares e computadores?',
      answer:
        'Sim! O sistema foi desenvolvido com arquitetura responsiva e multiplataforma (RNF 01). Você pode utilizá-lo tanto no navegador do computador (versão Web) quanto no smartphone (versão mobile/PWA ou app Android).',
    },
    {
      question: 'Meus dados e senhas estão seguros?',
      answer:
        'Com certeza. Todas as senhas de usuários são rigorosamente criptografadas antes de serem armazenadas no banco de dados (RNF 02). Além disso, apenas o criador da despensa tem permissão para convidar novos participantes (Regra de Negócio 01).',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Dúvidas Frequentes
          </span>
          <h2 className={styles.sectionTitle}>
            Tudo o que você precisa saber
          </h2>
          <p className={styles.sectionSubtitle}>
            Respostas diretas sobre o funcionamento, regras de negócio e recursos do FaltaOquê?.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.cardOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.chevronWrap} ${isOpen ? styles.chevronRotated : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
