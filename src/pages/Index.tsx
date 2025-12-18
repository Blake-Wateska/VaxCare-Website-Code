import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>VaxFlow - Vaccine Management Without the Headaches</title>
        <meta
          name="description"
          content="Eliminate upfront costs, automate billing, and maximize revenue. One platform for all your vaccine supply, inventory, and reimbursement needs."
        />
        <meta name="keywords" content="vaccine management, vaccine billing, vaccine inventory, healthcare, medical practice" />
        <link rel="canonical" href="https://vaxflow.com" />
      </Helmet>

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
