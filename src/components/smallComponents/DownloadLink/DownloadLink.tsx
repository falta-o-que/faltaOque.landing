import {ArrowDownToLine} from '@/assets/icons/export';
import {downloadUrl} from '@/constants/links';
import styles from './DownloadLink.module.scss';

type DownloadLinkProps = { light?: boolean };

export function DownloadLink({light = false}: DownloadLinkProps) {
    return (
        <a className={`${styles.button} ${light ? styles.buttonLight : styles.buttonDark}`} href={downloadUrl}>
            <ArrowDownToLine size={19} aria-hidden="true"/> Baixar para Android
        </a>
    );
}
