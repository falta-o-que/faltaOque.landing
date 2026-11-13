import {ChevronDown} from '@/assets/icons/export';
import styles from './Faq.module.scss';

const questions = [
    {
        question: 'Como faço para instalar o FaltaOquê?',
        answer: 'Toque em “Baixar para Android” para baixar o arquivo APK. Depois, abra o arquivo no seu celular e siga as instruções de instalação. O Android pode solicitar autorização para instalar aplicativos da fonte utilizada.'
    },
    {
        question: 'O aplicativo funciona no iPhone?',
        answer: 'O download disponível nesta página é para Android. Uma versão para iPhone ainda não está disponível para download.'
    },
    {
        question: 'Como funciona a leitura da nota fiscal?',
        answer: 'O aplicativo lê o QR Code de uma NFC-e compatível de São Paulo. Antes de adicionar os itens à despensa, você pode revisar e corrigir as informações identificadas.'
    },
    {
        question: 'De onde vêm os preços das sugestões?',
        answer: 'As estimativas usam o histórico de compras registrado no aplicativo. Elas dependem dos dados disponíveis e podem variar em relação aos preços praticados nos mercados.'
    },
];

export function Faq() {
    return (
        <section className={styles.faq} id="duvidas">
            <div className={styles.container}>
                <div className={styles.faqIntro} data-reveal>
                    <p className={styles.kicker}>A gente explica</p>
                    <h2>Ficou alguma dúvida?</h2>
                    <p>Algumas respostas para você começar.</p>
                </div>
                <div className={styles.faqList}>
                    {questions.map(({question, answer}) => (
                        <details key={question} data-reveal>
                            <summary>{question}<ChevronDown size={20} aria-hidden="true"/></summary>
                            <p>{answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
