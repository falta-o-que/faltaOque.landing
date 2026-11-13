import type {ComponentType} from 'react';
import type {IconProps} from '@/assets/icons/export';
import styles from './FeatureCard.module.scss';

type FeatureCardProps = {
    icon: ComponentType<IconProps>;
    title: string;
    description: string;
};

export function FeatureCard({icon: Icon, title, description}: FeatureCardProps) {
    return (
        <article className={styles.feature} data-reveal>
            <div className={styles.featureTop}>
                <span className={styles.featureIcon}><Icon size={23} strokeWidth={1.7} aria-hidden="true"/></span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
