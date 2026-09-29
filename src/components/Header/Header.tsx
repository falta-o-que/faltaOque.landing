'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Smartphone, Globe } from 'lucide-react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Telas do App', href: '#telas' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topAnnouncement}>
        <div className={styles.announcementInner}>
          <span className={styles.announcementBadge}>
            <Sparkles size={13} />
            Projeto SENAI • TCC
          </span>
          <span className={styles.announcementText}>
            FaltaOquê? — Gestão inteligente de despensa e compras colaborativas
          </span>
          <a href="#simulador" className={styles.announcementLink}>
            Testar demo interativa <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIconWrapper}>
              <Image
                src="/icons/logo.svg"
                alt="FaltaOquê? Logo"
                width={36}
                height={36}
                priority
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandTitle}>
                Falta<span className={styles.brandAccent}>Oquê?</span>
              </span>
              <span className={styles.brandSubtitle}>Despensa & Compras</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.navActions}>
            <a
              href="#telas"
              className={styles.webBtn}
              title="Acessar versão Web"
            >
              <Globe size={16} />
              <span>Versão Web</span>
            </a>
            <a
              href="#download"
              className={styles.primaryBtn}
            >
              <Smartphone size={16} />
              <span>Baixar App</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.mobileActions}>
              <a
                href="#telas"
                className={styles.mobileWebBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe size={18} />
                <span>Versão Web</span>
              </a>
              <a
                href="#download"
                className={styles.mobilePrimaryBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Smartphone size={18} />
                <span>Baixar Aplicativo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
