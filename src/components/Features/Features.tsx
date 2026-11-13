import {BarChart3, ClipboardList, QrCode, ShoppingBasket, Store, UsersRound} from '@/assets/icons/export';
import {FeatureCard} from '@/components/smallComponents/FeatureCard/FeatureCard';
import styles from './Features.module.scss';

const features = [
    {
        icon: ShoppingBasket,
        title: 'Sua despensa à vista',
        description: 'Acompanhe produtos, quantidades e validades para saber o que você já tem em casa.'
    },
    {
        icon: ClipboardList,
        title: 'Uma lista para organizar as compras',
        description: 'Planeje o que falta, acompanhe as quantidades e consulte suas listas anteriores.'
    },
    {
        icon: QrCode,
        title: 'A nota fiscal ajuda no cadastro',
        description: 'Leia o QR Code de uma NFC-e compatível de São Paulo e revise os produtos antes de adicioná-los.'
    },
    {
        icon: BarChart3,
        title: 'Entenda seus gastos',
        description: 'Veja seu histórico de compras e acompanhe gastos e variações de preço no dashboard.'
    },
    {
        icon: Store,
        title: 'Encontre opções de mercado',
        description: 'Compare sugestões e preços estimados com base nas suas compras anteriores.'
    },
    {
        icon: UsersRound,
        title: 'Organização para dividir',
        description: 'Compartilhe despensas e listas com quem faz parte da sua rotina.'
    },
];

export function Features() {
    return (
        <section className={styles.intro} id="recursos">
            <div className={styles.container}>
                <div className={styles.sectionIntro} data-reveal>
                    <p className={styles.kicker}>Feito para a vida real</p>
                    <h2>Menos dúvidas. <span>Mais tranquilidade.</span></h2>
                    <p>Do que ainda tem na despensa até a próxima ida ao mercado, o FaltaOquê? ajuda você a cuidar de
                        cada etapa.</p>
                </div>
                <div className={styles.featureGrid}>
                    {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
                </div>
                <p className={styles.featureFootnote}>As sugestões de mercado são estimativas baseadas no histórico
                    disponível e os preços podem variar.</p>
            </div>
        </section>
    );
}
