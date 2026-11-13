import Image from 'next/image';
import {logo} from '@/assets/images/export';
import {DownloadLink} from '@/components/smallComponents/DownloadLink/DownloadLink';
import styles from './DownloadSection.module.scss';

export function DownloadSection() {
    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <div data-reveal>
                    <p>Um pouco mais de organização, todos os dias.</p>
                    <h2>Vamos cuidar <span>da casa juntos?</span></h2>
                </div>
                <div className={styles.ctaAction} data-reveal>
                    <DownloadLink light/>
                    <span>Disponível para Android</span>
                </div>
                <Image src={logo} alt="" width={190} height={208}/>
            </div>
        </section>
    );
}
