import { BadgeCheck, BarChart3, CreditCard, FileCheck, Package, Shield, Wallet, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Zero Upfront Costs',
      description: 'We supply the vaccines—you only pay after reimbursement. No inventory investment, no financial risk.',
      highlight: 'Eliminate cash flow stress',
    },
    {
      icon: CreditCard,
      title: 'Automated Billing',
      description: 'From claim submission to payment posting, we handle every step. Say goodbye to billing headaches.',
      highlight: '98% clean claim rate',
    },
    {
      icon: Zap,
      title: 'Real-Time Eligibility',
      description: 'Instant insurance verification at the point of care. Know coverage before you vaccinate.',
      highlight: 'Verify in seconds',
    },
    {
      icon: Package,
      title: 'Smart Inventory',
      description: 'Automated ordering, expiration tracking, and just-in-time delivery. Never waste a dose.',
      highlight: 'Zero waste guarantee',
    },
    {
      icon: BarChart3,
      title: 'Clear Reporting',
      description: 'Real-time dashboards showing usage, reimbursements, and profitability at a glance.',
      highlight: 'Full transparency',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'Temperature monitoring, CDC reporting, and documentation handled automatically.',
      highlight: 'Always audit-ready',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-muted-foreground text-lg">
            VaxFlow handles supply, billing, inventory, and compliance—so you can focus 
            on what matters: your patients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth border border-border/50 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:scale-105 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <BadgeCheck className="w-4 h-4" />
                  {feature.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
