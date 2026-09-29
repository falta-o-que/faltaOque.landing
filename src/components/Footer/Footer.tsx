import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  ArrowUp,
  Code2
} from 'lucide-react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand info */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <Image
                  src="/icons/logo.svg"
                  alt="FaltaOquê? Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className={styles.brandName}>
                Falta<span className={styles.brandAccent}>Oquê?</span>
              </span>
            </div>

            <p className={styles.brandBio}>
              Aplicação completa para gestão de despensas, geração automática de listas
              de compras e relatórios de consumo. Desenvolvido para transformar a rotina
              doméstica e eliminar o desperdício alimentar.
            </p>

            <div className={styles.tccBadge}>
              <Sparkles size={14} color="#86efac" />
              <span>Projeto de Conclusão de Curso (TCC) • SENAI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linksList}>
              <li><a href="#recursos">Recursos do App</a></li>
              <li><a href="#simulador">Simulador Interativo</a></li>
              <li><a href="#calculadora">Calculadora de Preço/Kg</a></li>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#telas">Telas & Identidade Visual</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Standards & Tech */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Engenharia & Padrões</h4>
            <ul className={styles.linksList}>
              <li><span>Next.js 15 + TypeScript</span></li>
              <li><span>Sass / SCSS Puro Modular</span></li>
              <li><span>MySQL Relacional (drawDB)</span></li>
              <li><span>Arquitetura Desktop & Mobile</span></li>
              <li><span>Padrão Git: Conventional Commits</span></li>
              <li><span>Criptografia de Senhas (RNF 02)</span></li>
            </ul>
          </div>

          {/* Authors & SENAI */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Sobre o Projeto</h4>
            <p className={styles.senaiDesc}>
              Desenvolvido com carinho por Miguel Silva e equipe como projeto integrado
              no SENAI. Focado em usabilidade, inteligência de compras e impacto social.
            </p>
            <div className={styles.gitStatusBox}>
              <Code2 size={16} color="#86efac" />
              <div>
                <strong>Branches: main &amp; develop</strong>
                <small>Clean code &amp; PR review rigoroso</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyText}>
            © {new Date().getFullYear()} FaltaOquê? • Todos os direitos reservados.
          </p>

          <div className={styles.bottomLinks}>
            <span>Privacidade &amp; LGPD</span>
            <span>Termos de Uso</span>
            <a href="#download" className={styles.backToTop}>
              <ArrowUp size={14} /> Topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
