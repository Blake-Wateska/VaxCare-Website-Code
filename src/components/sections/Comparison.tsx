import { Check, X } from 'lucide-react';

const Comparison = () => {
  const comparisonItems = [
    { feature: 'Upfront Inventory Costs', traditional: true, vaxura: false },
    { feature: 'Risk of Expired Vaccines', traditional: true, vaxura: false },
    { feature: 'Manual Billing & Claims', traditional: true, vaxura: false },
    { feature: 'Insurance Eligibility Delays', traditional: true, vaxura: false },
    { feature: 'Multiple Vendor Relationships', traditional: true, vaxura: false },
    { feature: 'Automated Reimbursement', traditional: false, vaxura: true },
    { feature: 'Real-Time Reporting', traditional: false, vaxura: true },
    { feature: 'Guaranteed Revenue per Dose', traditional: false, vaxura: true },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            The Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Traditional vs. Vaxura
          </h2>
          <p className="text-muted-foreground text-lg">
            See why practices are switching to a smarter way to manage vaccines.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary">
              <div className="p-6 font-display font-semibold text-foreground">
                Feature
              </div>
              <div className="p-6 text-center font-display font-semibold text-muted-foreground border-l border-border">
                Traditional
              </div>
              <div className="p-6 text-center font-display font-semibold text-primary border-l border-border bg-primary/5">
                Vaxura
              </div>
            </div>

            {/* Rows */}
            {comparisonItems.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                }`}
              >
                <div className="p-5 text-foreground font-medium">
                  {item.feature}
                </div>
                <div className="p-5 flex justify-center items-center border-l border-border">
                  {item.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="p-5 flex justify-center items-center border-l border-border bg-primary/5">
                  {item.vaxura ? (
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
