import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Vaccine Program?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join 500+ practices that have eliminated vaccine headaches and maximized 
            their revenue. Get started with a free consultation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule Demo
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
            <a
              href="tel:1-800-VAX-URA"
              className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
            >
              <Phone className="w-5 h-5" />
              <span>1-800-VAX-URA</span>
            </a>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <a
              href="mailto:hello@vaxura.com"
              className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
            >
              <Mail className="w-5 h-5" />
              <span>hello@vaxura.com</span>
            </a>
          </div>

          {/* Trust Badge */}
          <p className="text-primary-foreground/60 text-sm mt-10">
            ✓ No credit card required &nbsp;&nbsp; ✓ Setup in 5 minutes &nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
