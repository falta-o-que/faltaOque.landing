import {About} from '@/components/About/About';
import {DownloadSection} from '@/components/DownloadSection/DownloadSection';
import {Faq} from '@/components/Faq/Faq';
import {Features} from '@/components/Features/Features';
import {Footer} from '@/components/Footer/Footer';
import {Header} from '@/components/Header/Header';
import {Hero} from '@/components/Hero/Hero';
import {HowItWorks} from '@/components/HowItWorks/HowItWorks';
import {SkipLink} from '@/components/smallComponents/SkipLink/SkipLink';

export default function Home() {
    return (
        <>
            <SkipLink/>
            <Header/>
            <main id="conteudo">
                <Hero/>
                <Features/>
                <HowItWorks/>
                <About/>
                <Faq/>
                <DownloadSection/>
            </main>
            <Footer/>
        </>
    );
}
