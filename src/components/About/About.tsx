import Image from 'next/image';
import {logo} from '@/assets/images/export';
import {ExternalLink} from '@/components/smallComponents/ExternalLink/ExternalLink';
import {repositoryUrl} from '@/constants/links';
import styles from './About.module.scss';

const teamMembers = [
    {name: 'Manuela Vitória Barbosa de Andrade', url: 'https://github.com/Manuela0894'},
    {name: 'Miguel Zacharias da Silva', url: 'https://github.com/miguelzack'},
    {name: 'Nikollas Oliveira Andrade dos Santos', url: 'https://github.com/nikidsy'},
    {name: 'Sarah Santos de Jesus', url: 'https://github.com/sarahsj-dot'},
    {name: 'Thiago Soares Coelho da Costa', url: 'https://github.com/th-cs'},
];

export function About() {
    return (
        <section className={styles.about} id="projeto">
            <div className={styles.container}>
                <div className={styles.aboutMark} data-reveal><Image src={logo} alt="" width={104} height={114}/></div>
                <div className={styles.aboutContent} data-reveal>
                    <p className={styles.kicker}>Prazer, FaltaOquê?</p>
                    <h2>Uma ideia para facilitar a vida de todo dia.</h2>
                    <p>O FaltaOquê? nasceu da vontade de tornar mais simples o cuidado com a casa: saber o que tem na
                        despensa, planejar as compras e entender melhor os gastos.</p>
                    <p>Em um só aplicativo, reunimos despensa, listas de compras, leitura de QR Code de nota fiscal,
                        dashboard e sugestões de mercado baseadas no seu histórico. Assim, as informações que ajudam
                        você a se organizar ficam juntas.</p>
                    <ExternalLink href={repositoryUrl} className={styles.aboutLink} iconSize={18}>Conheça o projeto no
                        GitHub</ExternalLink>
                </div>
                <div className={styles.projectDetails} data-reveal>
                    <div className={styles.projectDetail}>
                        <h3>Quem fez o FaltaOquê?</h3>
                        <ul>
                            {teamMembers.map(({name, url}) => (
                                <li key={url}><ExternalLink href={url} iconSize={14}
                                                            accessibleLabel="GitHub, abre em outra aba"><span>{name}</span></ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.projectDetail}>
                        <h3>Feito com</h3>
                        <p>React Native · Expo</p>
                        <p>Next.js · TypeScript · Sass</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
