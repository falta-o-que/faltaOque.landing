import React from 'react';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { ValueStats } from '@/components/ValueStats/ValueStats';
import { Features } from '@/components/Features/Features';
import { InteractivePantry } from '@/components/InteractivePantry/InteractivePantry';
import { PriceCalculator } from '@/components/PriceCalculator/PriceCalculator';
import { ScreensGallery } from '@/components/ScreensGallery/ScreensGallery';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { Comparison } from '@/components/Comparison/Comparison';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Faq } from '@/components/Faq/Faq';
import { CtaBanner } from '@/components/CtaBanner/CtaBanner';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStats />
        <Features />
        <InteractivePantry />
        <PriceCalculator />
        <ScreensGallery />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
