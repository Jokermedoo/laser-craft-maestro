
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
import { CompanyProvider, useCompany } from '@/contexts/CompanyContext';

const IndexContent = () => {
  const { companyInfo } = useCompany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={companyInfo.whatsapp} />
      <Hero whatsappNumber={companyInfo.whatsapp} />
      <PromoBanner whatsappNumber={companyInfo.whatsapp} />
      <DailyOffers whatsappNumber={companyInfo.whatsapp} />
      <About />
      <Stats />
      <Services />
      <PriceCalculator whatsappNumber={companyInfo.whatsapp} />
      <Gallery />
      <Features />
      <Testimonials />
      <Contact whatsappNumber={companyInfo.whatsapp} />
      <CTA whatsappNumber={companyInfo.whatsapp} />
      <Footer whatsappNumber={companyInfo.whatsapp} />
    </div>
  );
};

const Index = () => {
  return (
    <CompanyProvider>
      <IndexContent />
    </CompanyProvider>
  );
};

export default Index;
