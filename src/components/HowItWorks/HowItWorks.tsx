import {ClipboardList, PackageCheck, QrCode} from '@/assets/icons/export';
import {StepCard} from '@/components/smallComponents/StepCard/StepCard';
import styles from './HowItWorks.module.scss';

const steps = [
    {
        number: '01',
        icon: PackageCheck,
        title: 'Crie sua despensa',
        description: 'Comece organizando os produtos que você tem em casa.'
    },
    {
        number: '02',
        icon: ClipboardList,
        title: 'Planeje suas compras',
        description: 'Monte listas com o que você precisa e acompanhe as quantidades.'
    },
    {
        number: '03',
        icon: QrCode,
        title: 'Registre e acompanhe',
        description: 'Adicione suas compras e consulte seu histórico quando precisar.'
    },
];

export function HowItWorks() {
    return (
        <section className={styles.how} id="como-funciona">
            <div className={styles.container}>
                <div className={styles.howHeading} data-reveal>
                    <div><p className={styles.kicker}>Simples de começar</p><h2>Da despensa ao mercado.</h2></div>
                    <p>Uma rotina mais organizada cabe em poucos passos.</p>
                </div>
                <div className={styles.steps}>
                    {steps.map((step) => <StepCard key={step.number} {...step} />)}
                </div>
            </div>
        </section>
    );
}
