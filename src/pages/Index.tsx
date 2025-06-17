
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import PromoBanner from '@/components/marketing/PromoBanner';
import Testimonials from '@/components/marketing/Testimonials';
import Stats from '@/components/marketing/Stats';
import PriceCalculator from '@/components/calculator/PriceCalculator';
import DailyOffers from '@/components/offers/DailyOffers';
import FlashOfferBanner from '@/components/marketing/FlashOfferBanner';
import InteractiveFAQ from '@/components/enhanced/InteractiveFAQ';
import ProductShowcase from '@/components/enhanced/ProductShowcase';
import SpecialOffers from '@/components/enhanced/SpecialOffers';
import AnimatedContainer from '@/components/enhanced/AnimatedContainer';
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';

const IndexContent = React.memo(() => {
  const { companyInfo } = useCompany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      <AnimatedContainer type="slide" delay={0.1}>
        <FlashOfferBanner whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <AnimatedContainer type="fade" delay={0.2}>
        <Navbar whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <AnimatedContainer type="scale" delay={0.3}>
        <Hero whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <AnimatedContainer type="slide" delay={0.4}>
        <PromoBanner whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <AnimatedContainer type="fade" delay={0.5}>
        <SpecialOffers whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <AnimatedContainer type="slide" delay={0.6}>
        <DailyOffers whatsappNumber={companyInfo.whatsapp} />
      </AnimatedContainer>
      
      <About />
      <Stats />
      <Services />
      <ProductShowcase whatsappNumber={companyInfo.whatsapp} />
      <PriceCalculator whatsappNumber={companyInfo.whatsapp} />
      <Gallery />
      <Features />
      <Testimonials />
      <InteractiveFAQ whatsappNumber={companyInfo.whatsapp} />
      <Contact whatsappNumber={companyInfo.whatsapp} />
      <CTA whatsappNumber={companyInfo.whatsapp} />
      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
});

IndexContent.displayName = 'IndexContent';

const Index = () => {
  return (
    <CompanyProvider>
      <IndexContent />
    </CompanyProvider>
  );
};

export default Index;
