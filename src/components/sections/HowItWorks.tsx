import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Practice',
      description: 'Simple onboarding in under 30 minutes. We integrate with your existing EHR and practice management system.',
      details: ['EHR integration', 'Staff training included', 'No workflow disruption'],
    },
    {
      number: '02',
      title: 'We Supply & You Vaccinate',
      description: 'Receive vaccines with zero upfront payment. Focus on patient care while we handle the logistics.',
      details: ['Just-in-time delivery', 'Cold chain guaranteed', 'Auto-replenishment'],
    },
    {
      number: '03',
      title: 'Billing Happens Automatically',
      description: 'Our system submits claims, tracks payments, and follows up on denials—all without your staff lifting a finger.',
      details: ['Real-time claim submission', 'Automatic denial management', 'Payment reconciliation'],
    },
    {
      number: '04',
      title: 'Maximize Your Revenue',
      description: 'Get paid faster with higher reimbursement rates. See clear reporting on every dose administered.',
      details: ['Faster payments', 'Higher capture rates', 'Full transparency'],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Steps to Stress-Free Vaccines
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes, not months. Here's how Vaxura transforms your vaccine program.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-soft hidden md:block" />

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 1 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-display font-bold text-primary/20">
                      {step.number}
                    </span>
                    <h3 className="font-display font-semibold text-2xl text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-foreground bg-secondary px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="accent" size="lg">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
