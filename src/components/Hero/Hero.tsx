import {ArrowDown, Check} from '@/assets/icons/export';
import {groceries} from '@/assets/images/export';
import {DownloadLink} from '@/components/smallComponents/DownloadLink/DownloadLink';
import styles from './Hero.module.scss';

export function Hero() {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.heroInner}>
                <div className={styles.heroCopy}>
                    <span className={styles.availability}><span/> Sua casa abastecida na hora certa.</span>
                    <h1><span className={styles.heroBrand}>FaltaOquê?</span>{' '}<span className={styles.heroHeadline}>Sua casa organizada começa <em>na despensa.</em></span></h1>
                    <p>Saiba o que você tem, planeje o que falta e acompanhe suas compras. Tudo em um só lugar.</p>
                    <div className={styles.heroActions}>
                        <DownloadLink/>
                        <a className={styles.textLink} href="#recursos">
                            <span>Veja o que o app faz</span>
                            <span className={styles.textLinkIcon}><ArrowDown size={17} aria-hidden="true"/></span>
                        </a>
                    </div>
                    <span className={styles.downloadNote}>Disponível para Android</span>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.heroCircle}/>
                    <img className={styles.groceries} src={groceries.src} alt="" width={1024} height={1024}
                         fetchPriority="high"/>
                    <div className={styles.visualLabel}>
                        <span className={styles.visualIcon}><Check size={19} aria-hidden="true"/></span>
                        <span><strong>Tá tudo aqui.</strong><small>Despensa, compras e você.</small></span>
                    </div>
                </div>
            </div>
            <div className={styles.heroBottom}>
                <span>Mais clareza na rotina.</span>
                <a href="#recursos" aria-label="Conheça os recursos"><ArrowDown size={19} aria-hidden="true"/></a>
            </div>
        </section>
    );
}
