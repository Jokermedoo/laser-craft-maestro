
import Header from '@/components/landing/Header';
import About from '@/components/landing/About';
import Gallery from '@/components/landing/Gallery';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import Services from '@/components/landing/Services';

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <About />
        <Services />
        <Gallery />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
