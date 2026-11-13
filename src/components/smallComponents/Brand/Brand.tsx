import Image from 'next/image';
import {logo} from '@/assets/images/export';
import styles from './Brand.module.scss';

export function Brand() {
    return (
        <a className={styles.brand} href="#inicio" aria-label="FaltaOquê? — início">
            <Image src={logo} alt="" width={42} height={46}/>
            <span>FaltaOquê<span className={styles.brandQuestion}>?</span></span>
        </a>
    );
}
