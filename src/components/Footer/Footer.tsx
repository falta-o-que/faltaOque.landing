import {Brand} from '@/components/smallComponents/Brand/Brand';
import {ExternalLink} from '@/components/smallComponents/ExternalLink/ExternalLink';
import {repositoryUrl} from '@/constants/links';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div><Brand/><p>Sua casa abastecida na hora certa.</p></div>
                <div className={styles.footerLinks}>
                    <a href="#recursos">O aplicativo</a>
                    <a href="#como-funciona">Como funciona</a>
                    <a href="#duvidas">Dúvidas</a>
                    <ExternalLink href={repositoryUrl}>GitHub</ExternalLink>
                </div>
            </div>
            <div className={`${styles.container} ${styles.footerBottom}`}>
                <span>© Projeto FaltaOquê?</span>
                <span>Feito para facilitar a rotina.</span>
            </div>
        </footer>
    );
}
