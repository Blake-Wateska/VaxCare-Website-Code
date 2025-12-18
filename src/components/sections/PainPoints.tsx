import { AlertTriangle, Clock, DollarSign, FileX, Package, Thermometer } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Upfront Vaccine Costs',
      description: 'Tying up capital in expensive inventory before you see a single reimbursement.',
    },
    {
      icon: FileX,
      title: 'Complex Billing',
      description: 'Losing revenue to coding errors, denied claims, and endless follow-ups.',
    },
    {
      icon: Clock,
      title: 'Manual Eligibility Checks',
      description: 'Wasting staff time verifying insurance before every vaccination.',
    },
    {
      icon: Package,
      title: 'Expired Doses',
      description: 'Throwing money away when vaccines expire on the shelf.',
    },
    {
      icon: AlertTriangle,
      title: 'Stock Shortages',
      description: 'Turning patients away because you ran out of critical vaccines.',
    },
    {
      icon: Thermometer,
      title: 'Storage Compliance',
      description: 'Stressing over temperature monitoring and regulatory requirements.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vaccine Management Shouldn't Be This Hard
          </h2>
          <p className="text-muted-foreground text-lg">
            You went into healthcare to help patients—not to battle inventory spreadsheets, 
            chase denied claims, or worry about expiring doses.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-smooth border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-foreground font-display font-medium">
            Sound familiar?{' '}
            <span className="text-primary">There's a better way.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
