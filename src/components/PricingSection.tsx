import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Per-File Pricing',
    description: 'Perfect for occasional orders',
    popular: false,
    features: [
      'Left chest & cap logos: $10',
      'Jacket back & large logos: $25',
      'Vector files: $10',
      '24-hour turnaround',
      'Unlimited revisions',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Retainer Plan',
    price: '$500',
    period: '/month',
    description: 'Best value for busy shops',
    popular: true,
    features: [
      'Dedicated digitizer assigned',
      '8 hours/day, 5 days/week',
      '3-4 hour priority turnaround',
      'Unlimited designs',
      'Unlimited revisions',
      'Direct communication channel',
    ],
    cta: 'Request a Quote',
  },
  {
    name: 'Enterprise',
    description: 'For high-volume operations',
    popular: false,
    features: [
      'Custom pricing based on volume',
      'Multiple dedicated digitizers',
      'Same-day turnaround available',
      'API integration available',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-foreground text-background border-2 border-primary shadow-xl scale-[1.02]'
                  : 'bg-background border border-border hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                {plan.price && (
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className={plan.popular ? 'text-background/60' : 'text-muted-foreground'}>
                      {plan.period}
                    </span>
                  </div>
                )}
                <p className={plan.popular ? 'text-background/70' : 'text-muted-foreground'}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-primary'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-background/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'gold' : 'outline'}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
