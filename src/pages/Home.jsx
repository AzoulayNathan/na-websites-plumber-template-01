import React, { useState } from 'react';
import { LanguageProvider } from '../lib/LanguageContext';
import Header from '../components/flow/Header';
import MobileStickyCTA from '../components/flow/MobileStickyCTA';
import HeroSection from '../components/flow/HeroSection';
import PillarsSection from '../components/flow/PillarsSection';
import ServicesFlowSection from '../components/flow/ServicesFlowSection';
import QuoteClaritySection from '../components/flow/QuoteClaritySection';
import ComfortSection from '../components/flow/ComfortSection';
import ProcessSection from '../components/flow/ProcessSection';
import LocalSection from '../components/flow/LocalSection';
import FAQSection from '../components/flow/FAQSection';
import FinalCTASection from '../components/flow/FinalCTASection';
import Footer from '../components/flow/Footer';
import SplashScreen from '../components/flow/SplashScreen';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-ceramic">
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <ServicesFlowSection />
        <QuoteClaritySection />
        <ComfortSection />
        <ProcessSection />
        <LocalSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
    </LanguageProvider>
  );
}