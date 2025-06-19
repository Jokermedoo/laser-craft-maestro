
import React, { useState, useEffect } from 'react';
import { settingsService, CompanySettings } from '@/services/settingsService';
import Header from '@/components/Landing/Header';
import HeroSection from '@/components/Landing/HeroSection';
import AboutSection from '@/components/Landing/AboutSection';
import ServicesSection from '@/components/Landing/ServicesSection';
import GallerySection from '@/components/Landing/GallerySection';
import ContactSection from '@/components/Landing/ContactSection';
import Footer from '@/components/Landing/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import Loader from '@/components/common/Loader';

const Index: React.FC = () => {
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [loading, setLoading] = useState(true);
  const { sections } = useSectionConfig();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await settingsService.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSection = (sectionId: string) => {
    if (!settings) return null;
    
    switch (sectionId) {
      case 'hero':
        return (
          <HeroSection
            companyName={settings.name}
            description={settings.description || 'ورشة متخصصة في النقش والحفر بالليزر'}
            whatsappNumber={settings.whatsapp}
          />
        );
      case 'about':
        return (
          <AboutSection
            companyName={settings.name}
            description={settings.description || 'ورشة متخصصة في النقش والحفر بالليزر'}
            workingHours={settings.working_hours}
          />
        );
      case 'services':
        return <ServicesSection whatsappNumber={settings.whatsapp} />;
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return <ContactSection whatsappNumber={settings.whatsapp} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Loader text="جاري تحميل الموقع..." size="lg" />
      </div>
    );
  }

  const enabledSections = sections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      {settings && (
        <>
          <Header 
            companyName={settings.name} 
            whatsappNumber={settings.whatsapp} 
          />
          
          {enabledSections.map((section) => (
            <div key={section.id}>
              {renderSection(section.id)}
            </div>
          ))}
          
          <Footer 
            companyName={settings.name} 
            whatsappNumber={settings.whatsapp} 
          />
        </>
      )}
      
      <ThemeSwitcher />
    </div>
  );
};

export default Index;
