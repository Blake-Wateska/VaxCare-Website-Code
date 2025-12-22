import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Benefits = () => {
  const stats = [
    {
      icon: DollarSign,
      value: '$0',
      label: 'Upfront Costs',
      description: 'Zero inventory investment required',
    },
    {
      icon: TrendingUp,
      value: '35%',
      label: 'Revenue Increase',
      description: 'Average improvement in vaccine revenue',
    },
    {
      icon: Clock,
      value: '10hrs',
      label: 'Weekly Time Saved',
      description: 'Staff hours freed from billing tasks',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Practices Trust Us',
      description: 'From solo to large group practices',
    },
  ];

  const testimonial = {
    quote: "Vaxura transformed our vaccine program. We went from losing money on vaccines to it being one of our most profitable services—with less work for our staff.",
    author: "Dr. Sarah Chen",
    role: "Internal Medicine, Family Care Associates",
  };

  return (
    <section id="benefits" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Vaxura
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of practices that have transformed their vaccine programs 
            with measurable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group text-center p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:scale-105 transition-smooth">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative quotes */}
          <div className="absolute -top-8 -left-4 text-8xl font-serif text-primary/10 select-none">
            "
          </div>
          <div className="absolute -bottom-8 -right-4 text-8xl font-serif text-primary/10 select-none rotate-180">
            "
          </div>

          <div className="bg-gradient-hero rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <footer>
                <cite className="not-italic">
                  <div className="font-display font-semibold text-lg text-primary-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-primary-foreground/70">
                    {testimonial.role}
                  </div>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
