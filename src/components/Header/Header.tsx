'use client';

import {useEffect, useRef, useState} from 'react';
import {ArrowDownToLine} from '@/assets/icons/export';
import {Brand} from '@/components/smallComponents/Brand/Brand';
import {downloadUrl} from '@/constants/links';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import styles from './Header.module.scss';

export function Header() {
    useScrollReveal();
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let previousPosition = window.scrollY;
        let frame = 0;

        function updateHeader() {
            const currentPosition = Math.max(0, window.scrollY);
            const distance = currentPosition - previousPosition;

            if (currentPosition < 80) {
                setHidden(false);
                previousPosition = currentPosition;
            } else if (Math.abs(distance) > 8) {
                setHidden(distance > 0);
                if (distance > 0) setMenuOpen(false);
                previousPosition = currentPosition;
            }
            frame = 0;
        }

        function handleScroll() {
            if (!frame) frame = window.requestAnimationFrame(updateHeader);
        }

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <header className={`${styles.header} ${hidden ? styles.headerHidden : ''}`} onKeyDown={(event) => {
            if (event.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
                menuButton.current?.focus();
            }
        }}>
            <div className={styles.headerInner}>
                <Brand/>
                <nav id="main-navigation" className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`}
                     aria-label="Navegação principal">
                    <a href="#recursos" onClick={() => setMenuOpen(false)}>O aplicativo</a><a href="#como-funciona"
                                                                                              onClick={() => setMenuOpen(false)}>Como
                    funciona</a><a href="#projeto" onClick={() => setMenuOpen(false)}>O projeto</a><a href="#duvidas"
                                                                                                      onClick={() => setMenuOpen(false)}>Dúvidas</a>
                </nav>
                <div className={styles.headerActions}>
                    <a className={styles.headerDownload} href={downloadUrl} aria-label="Baixar app para Android"><span>Baixar app</span>
                        <ArrowDownToLine size={16} aria-hidden="true"/></a>
                    <button ref={menuButton} type="button" className={styles.menuButton}
                            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}
                            aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
                        <span className={styles.menuIcon} aria-hidden="true"><span/><span/><span/></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
