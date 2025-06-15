
import Header from '@/components/landing/Header';
import About from '@/components/landing/About';
import Gallery from '@/components/landing/Gallery';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import Services from '@/components/landing/Services';
import Navbar from '@/components/landing/Navbar';
import ContactForm from '@/components/landing/ContactForm';
import BackToTop from '@/components/ui/BackToTop';

const Index = () => {
  return (
    <div id="top" className="bg-background">
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
        <Gallery />
        <Features />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
