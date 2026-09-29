'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send
} from 'lucide-react';
import styles from './CtaBanner.module.scss';

export const CtaBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
    }
  };

  return (
    <section id="download" className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaCard}>
          <div className={styles.bgGlow} />

          <div className={styles.cardContent}>
            <span className={styles.ctaBadge}>
              <Sparkles size={14} /> Comece Gratuitamente
            </span>

            <h2 className={styles.ctaTitle}>
              Pronto para transformar a rotina da sua despensa?
            </h2>

            <p className={styles.ctaSubtitle}>
              Economize tempo, corte o desperdício de comida e mantenha toda a casa
              sincronizada. O FaltaOquê? é gratuito e multiplataforma.
            </p>

            {submitted ? (
              <div className={styles.successBox}>
                <CheckCircle2 size={24} color="#86efac" />
                <div>
                  <strong>Acesso solicitado com sucesso!</strong>
                  <p>Enviamos o convite e as instruções para {email}. Fique de olho na sua caixa de entrada!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.ctaForm}>
                <input
                  type="email"
                  required
                  placeholder="Digite seu melhor e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitBtn}>
                  <span>Pedir Acesso Antecipado</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <div className={styles.downloadRow}>
              <a href="#telas" className={styles.downloadBtn}>
                <Smartphone size={20} />
                <div className={styles.btnText}>
                  <small>Disponível para</small>
                  <strong>Android APK / PWA</strong>
                </div>
              </a>

              <a href="#telas" className={styles.downloadBtn}>
                <Globe size={20} />
                <div className={styles.btnText}>
                  <small>Acesse no Navegador</small>
                  <strong>Versão Web Desktop</strong>
                </div>
              </a>
            </div>

            <div className={styles.securityNote}>
              <ShieldCheck size={16} />
              <span>
                Desenvolvido no padrão de excelência SENAI • Senhas criptografadas e dados protegidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
