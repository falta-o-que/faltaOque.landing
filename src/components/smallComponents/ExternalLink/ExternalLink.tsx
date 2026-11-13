import type {ReactNode} from 'react';
import {ArrowUpRight} from '@/assets/icons/export';
import styles from './ExternalLink.module.scss';

type ExternalLinkProps = {
    children: ReactNode;
    href: string;
    className?: string;
    iconSize?: number;
    accessibleLabel?: string;
};

export function ExternalLink({
                                 children,
                                 href,
                                 className,
                                 iconSize = 17,
                                 accessibleLabel = 'abre em outra aba'
                             }: ExternalLinkProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
            {children} <ArrowUpRight size={iconSize} aria-hidden="true"/>
            <span className={styles.srOnly}> ({accessibleLabel})</span>
        </a>
    );
}
