import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Comparison from '@/components/sections/Comparison';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <Features />
          <HowItWorks />
          <Benefits />
          <Comparison />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
