
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

const Index = () => {
  const whatsappNumber = "201021911335";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar whatsappNumber={whatsappNumber} />
      <Hero whatsappNumber={whatsappNumber} />
      <About />
      <Services />
      <Gallery />
      <Features />
      <Contact whatsappNumber={whatsappNumber} />
      <CTA whatsappNumber={whatsappNumber} />
      <Footer whatsappNumber={whatsappNumber} />
    </div>
  );
};

export default Index;
