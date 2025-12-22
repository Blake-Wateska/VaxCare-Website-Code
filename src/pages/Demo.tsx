import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Play, Shield, Zap, TrendingUp, Clock, DollarSign, Users, BarChart3, Bell, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Demo = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Eligibility Verification',
      description: 'Real-time insurance verification before every appointment, reducing claim denials by up to 95%.',
    },
    {
      icon: DollarSign,
      title: 'Zero Upfront Inventory Costs',
      description: 'We supply vaccines on consignment — you only pay after successful administration and reimbursement.',
    },
    {
      icon: FileCheck,
      title: 'Seamless Billing & Claims',
      description: 'Automated claim submission to all major payers with real-time status tracking.',
    },
    {
      icon: BarChart3,
      title: 'Revenue Analytics Dashboard',
      description: 'Track your vaccine program performance with detailed insights and revenue reports.',
    },
    {
      icon: Bell,
      title: 'Smart Inventory Alerts',
      description: 'Never run out of stock with predictive ordering and expiration tracking.',
    },
    {
      icon: Users,
      title: 'Patient Recall System',
      description: 'Automated reminders for follow-up doses and seasonal vaccines to maximize patient compliance.',
    },
  ];

  const stats = [
    { value: '98%', label: 'Claim Approval Rate' },
    { value: '5 min', label: 'Average Setup Time' },
    { value: '$50K+', label: 'Avg. Annual Revenue Increase' },
    { value: '500+', label: 'Practices Trust Vaxura' },
  ];

  const steps = [
    {
      step: '01',
      title: 'Sign Up & Connect',
      description: 'Create your account in minutes. Our team helps you integrate with your existing EHR system.',
    },
    {
      step: '02',
      title: 'Receive Vaccines',
      description: 'We ship vaccines directly to your practice at no upfront cost. Store them in your existing refrigerator.',
    },
    {
      step: '03',
      title: 'Administer & Scan',
      description: 'Give vaccines as usual. Simply scan the barcode and we handle all documentation automatically.',
    },
    {
      step: '04',
      title: 'Get Paid',
      description: 'We submit claims, track reimbursements, and deposit revenue directly to your account.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-smooth">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              See Vaxura in Action
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Discover how Vaxura transforms vaccine management for healthcare practices. 
              Explore our complete feature set and see why 500+ practices trust us.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Play className="w-5 h-5" />
                Watch Video Demo
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete vaccine management platform designed to maximize your revenue and minimize your workload.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Vaxura Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Getting started is simple. Here's how you'll transform your vaccine program in just a few steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-display font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Practices Choose Vaxura
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'No upfront vaccine inventory costs',
                'Automated insurance eligibility checks',
                'Real-time claim status tracking',
                'Integration with all major EHR systems',
                'Dedicated account manager support',
                'HIPAA compliant and SOC 2 certified',
                'Automatic reorder and inventory management',
                'Detailed revenue and analytics reporting',
                'Patient recall and reminder system',
                'Multi-location practice support',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join the 500+ practices already using Vaxura to simplify their vaccine program and boost revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Free Trial
              </Button>
              <Button variant="heroOutline" size="xl">
                Talk to Sales
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-6">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
