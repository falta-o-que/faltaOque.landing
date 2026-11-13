import Image from 'next/image';
import { ArrowDown, ArrowDownToLine, ArrowUpRight, BarChart3, Check, ChevronDown, ClipboardList, PackageCheck, QrCode, ShoppingBasket, Store, UsersRound } from 'lucide-react';
import styles from './LandingPage.module.scss';
import { AnimatedHeader } from './AnimatedHeader';
import { MotionEffects } from './MotionEffects';

const downloadUrl = 'https://github.com/falta-o-que/faltaoque.Mobile/releases/download/v1.0.0/FaltaOque.apk';
const repositoryUrl = 'https://github.com/falta-o-que/faltaoque.Mobile';

const teamMembers = [
  { name: 'Manuela Vitória Barbosa de Andrade', url: 'https://github.com/Manuela0894' },
  { name: 'Miguel Zacharias da Silva', url: 'https://github.com/miguelzack' },
  { name: 'Nikollas Oliveira Andrade dos Santos', url: 'https://github.com/nikidsy' },
  { name: 'Sarah Santos de Jesus', url: 'https://github.com/sarahsj-dot' },
  { name: 'Thiago Soares Coelho da Costa', url: 'https://github.com/th-cs' },
];

const features = [
  { icon: ShoppingBasket, title: 'Sua despensa à vista', description: 'Acompanhe produtos, quantidades e validades para saber o que você já tem em casa.' },
  { icon: ClipboardList, title: 'Uma lista para organizar as compras', description: 'Planeje o que falta, acompanhe as quantidades e consulte suas listas anteriores.' },
  { icon: QrCode, title: 'A nota fiscal ajuda no cadastro', description: 'Leia o QR Code de uma NFC-e compatível de São Paulo e revise os produtos antes de adicioná-los.' },
  { icon: BarChart3, title: 'Entenda seus gastos', description: 'Veja seu histórico de compras e acompanhe gastos e variações de preço no dashboard.' },
  { icon: Store, title: 'Encontre opções de mercado', description: 'Compare sugestões e preços estimados com base nas suas compras anteriores.' },
  { icon: UsersRound, title: 'Organização para dividir', description: 'Compartilhe despensas e listas com quem faz parte da sua rotina.' },
];

const questions = [
  { question: 'Como faço para instalar o FaltaOquê?', answer: 'Toque em “Baixar para Android” para baixar o arquivo APK. Depois, abra o arquivo no seu celular e siga as instruções de instalação. O Android pode solicitar autorização para instalar aplicativos da fonte utilizada.' },
  { question: 'O aplicativo funciona no iPhone?', answer: 'O download disponível nesta página é para Android. Uma versão para iPhone ainda não está disponível para download.' },
  { question: 'Como funciona a leitura da nota fiscal?', answer: 'O aplicativo lê o QR Code de uma NFC-e compatível de São Paulo. Antes de adicionar os itens à despensa, você pode revisar e corrigir as informações identificadas.' },
  { question: 'De onde vêm os preços das sugestões?', answer: 'As estimativas usam o histórico de compras registrado no aplicativo. Elas dependem dos dados disponíveis e podem variar em relação aos preços praticados nos mercados.' },
];

function DownloadLink({ light = false }: { light?: boolean }) {
  return <a className={`${styles.button} ${light ? styles.buttonLight : styles.buttonDark}`} href={downloadUrl}><ArrowDownToLine size={19} aria-hidden="true" /> Baixar para Android</a>;
}

function Brand() {
  return <a className={styles.brand} href="#inicio" aria-label="FaltaOquê? — início"><Image src="/brand/logo.png" alt="" width={42} height={46} /><span>FaltaOquê<span className={styles.brandQuestion}>?</span></span></a>;
}

export function LandingPage() {
  return (
    <>
      <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>
      <MotionEffects />
      <AnimatedHeader downloadUrl={downloadUrl}><Brand /></AnimatedHeader>

      <main id="conteudo">
        <section className={styles.hero} id="inicio">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.availability}><span /> Sua casa abastecida na hora certa.</span>
              <h1>Sua casa organizada começa <em>na despensa.</em></h1>
              <p>Saiba o que você tem, planeje o que falta e acompanhe suas compras. Tudo em um só lugar.</p>
              <div className={styles.heroActions}><DownloadLink /><a className={styles.textLink} href="#recursos"><span>Veja o que o app faz</span><span className={styles.textLinkIcon}><ArrowDown size={17} aria-hidden="true" /></span></a></div>
              <span className={styles.downloadNote}>Disponível para Android</span>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroCircle} />
              <span className={styles.visualCaption}>Um jeito mais simples<br />de cuidar da casa.</span>
              <Image className={styles.groceries} src="/brand/groceries.png" alt="" width={1024} height={1024} priority />
              <div className={styles.visualLabel}><span className={styles.visualIcon}><Check size={19} aria-hidden="true" /></span><span><strong>Tá tudo aqui.</strong><small>Despensa, compras e você.</small></span></div>
            </div>
          </div>
          <div className={styles.heroBottom}><span>Mais clareza na rotina.</span><a href="#recursos" aria-label="Conheça os recursos"><ArrowDown size={19} /></a></div>
        </section>

        <section className={styles.intro} id="recursos">
          <div className={styles.container}>
            <div className={styles.sectionIntro} data-reveal><p className={styles.kicker}>Feito para a vida real</p><h2>Menos dúvidas.<br /><span>Mais tranquilidade.</span></h2><p>Do que ainda tem na despensa até a próxima ida ao mercado, o FaltaOquê? ajuda você a cuidar de cada etapa.</p></div>
            <div className={styles.featureGrid}>
              {features.map(({ icon: Icon, title, description }) => <article className={styles.feature} key={title} data-reveal><div className={styles.featureTop}><span className={styles.featureIcon}><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span></div><h3>{title}</h3><p>{description}</p></article>)}
            </div>
            <p className={styles.featureFootnote}>As sugestões de mercado são estimativas baseadas no histórico disponível e os preços podem variar.</p>
          </div>
        </section>

        <section className={styles.how} id="como-funciona">
          <div className={styles.container}><div className={styles.howHeading} data-reveal><div><p className={styles.kicker}>Simples de começar</p><h2>Da despensa<br />ao mercado.</h2></div><p>Uma rotina mais organizada cabe em poucos passos.</p></div>
            <div className={styles.steps}>
              <article data-reveal><span>01</span><PackageCheck size={29} strokeWidth={1.5} aria-hidden="true" /><h3>Crie sua despensa</h3><p>Comece organizando os produtos que você tem em casa.</p></article>
              <article data-reveal><span>02</span><ClipboardList size={29} strokeWidth={1.5} aria-hidden="true" /><h3>Planeje suas compras</h3><p>Monte listas com o que você precisa e acompanhe as quantidades.</p></article>
              <article data-reveal><span>03</span><QrCode size={29} strokeWidth={1.5} aria-hidden="true" /><h3>Registre e acompanhe</h3><p>Adicione suas compras e consulte seu histórico quando precisar.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.about} id="projeto">
          <div className={styles.container}>
            <div className={styles.aboutMark} data-reveal><Image src="/brand/logo.png" alt="" width={104} height={114} /></div>
            <div className={styles.aboutContent} data-reveal>
              <p className={styles.kicker}>Prazer, FaltaOquê?</p>
              <h2>Uma ideia para facilitar a vida de todo dia.</h2>
              <p>O FaltaOquê? nasceu da vontade de tornar mais simples o cuidado com a casa: saber o que tem na despensa, planejar as compras e entender melhor os gastos.</p>
              <p>Em um só aplicativo, reunimos despensa, listas de compras, leitura de QR Code de nota fiscal, dashboard e sugestões de mercado baseadas no seu histórico. Assim, as informações que ajudam você a se organizar ficam juntas.</p>
              <a href={repositoryUrl} target="_blank" rel="noreferrer" className={styles.aboutLink}>Conheça o projeto no GitHub <ArrowUpRight size={18} aria-hidden="true" /><span className={styles.srOnly}>(abre em outra aba)</span></a>
            </div>
            <div className={styles.projectDetails} data-reveal>
              <div className={styles.projectDetail}>
                <h3>Quem fez o FaltaOquê?</h3>
                <ul>
                  {teamMembers.map(({ name, url }) => (
                    <li key={url}><a href={url} target="_blank" rel="noreferrer"><span>{name}</span><ArrowUpRight size={14} aria-hidden="true" /><span className={styles.srOnly}> (GitHub, abre em outra aba)</span></a></li>
                  ))}
                </ul>
              </div>
              <div className={styles.projectDetail}>
                <h3>Feito com</h3>
                <p>React Native · Expo<br />Next.js · TypeScript · Sass</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq} id="duvidas"><div className={styles.container}><div className={styles.faqIntro} data-reveal><p className={styles.kicker}>A gente explica</p><h2>Ficou alguma dúvida?</h2><p>Algumas respostas para você começar.</p></div><div className={styles.faqList}>{questions.map(({ question, answer }) => <details key={question} data-reveal><summary>{question}<ChevronDown size={20} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>

        <section className={styles.cta}><div className={styles.container}><div data-reveal><p>Um pouco mais de organização, todos os dias.</p><h2>Vamos cuidar<br />da casa juntos?</h2></div><div className={styles.ctaAction} data-reveal><DownloadLink light /><span>Disponível para Android</span></div><Image src="/brand/logo.png" alt="" width={190} height={208} /></div></section>
      </main>

      <footer className={styles.footer}><div className={styles.container}><div><Brand /><p>Sua casa abastecida na hora certa.</p></div><div className={styles.footerLinks}><a href="#recursos">O aplicativo</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a><a href={repositoryUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /><span className={styles.srOnly}>(abre em outra aba)</span></a></div></div><div className={`${styles.container} ${styles.footerBottom}`}><span>© Projeto FaltaOquê?</span><span>Feito para facilitar a rotina.</span></div></footer>
    </>
  );
}
