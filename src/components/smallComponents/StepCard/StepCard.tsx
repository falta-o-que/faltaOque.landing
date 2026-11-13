import type {ComponentType} from 'react';
import type {IconProps} from '@/assets/icons/export';
import styles from './StepCard.module.scss';

type StepCardProps = {
    number: string;
    icon: ComponentType<IconProps>;
    title: string;
    description: string;
};

export function StepCard({number, icon: Icon, title, description}: StepCardProps) {
    return (
        <article className={styles.step} data-reveal>
            <span>{number}</span>
            <Icon size={29} strokeWidth={1.5} aria-hidden="true"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
