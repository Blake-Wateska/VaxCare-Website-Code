import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the zero upfront cost model work?',
      answer: 'We provide vaccines to your practice on consignment. You only pay for what you administer, and payment comes from reimbursements—not out of pocket. This eliminates inventory investment and financial risk.',
    },
    {
      question: 'What happens to expired or unused vaccines?',
      answer: 'With our just-in-time delivery and smart inventory management, waste is virtually eliminated. In the rare case of expiration, we take back unused doses at no cost to you.',
    },
    {
      question: 'How does automated billing work?',
      answer: 'Our system integrates with your practice management software. When you administer a vaccine, we automatically generate claims, submit to payers, track payments, and follow up on any denials—all without manual intervention from your staff.',
    },
    {
      question: 'What types of practices can use VaxFlow?',
      answer: 'We serve solo practices, small and large group practices, retail clinics, and pharmacies. Our flexible platform adapts to your specific workflow and volume needs.',
    },
    {
      question: 'How quickly can we get started?',
      answer: 'Most practices are up and running within 2 weeks. Onboarding includes EHR integration, staff training, and initial inventory delivery. We handle all the heavy lifting.',
    },
    {
      question: 'What vaccines are available through VaxFlow?',
      answer: 'We supply the full CDC-recommended vaccine schedule for both pediatric and adult patients, including flu, COVID-19, shingles, pneumonia, and specialty vaccines. We handle sourcing from all major manufacturers.',
    },
    {
      question: 'How do you handle insurance eligibility?',
      answer: 'Our real-time eligibility verification checks patient coverage instantly at the point of care. You know exactly what is covered and what the patient responsibility is before you vaccinate.',
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'Our dashboard gives you real-time visibility into vaccine usage, reimbursement status, revenue per dose, inventory levels, and profitability trends. Export reports anytime for your records.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about VaxFlow. Can't find your answer? 
            Reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 shadow-soft px-6 data-[state=open]:shadow-card transition-smooth"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
