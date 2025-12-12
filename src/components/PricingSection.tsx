import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Sparkles } from 'lucide-react';
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
    gradient: 'from-slate-500/10 to-gray-500/10',
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
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/20',
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
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-light-gray/30 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Pricing
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Choose the plan that fits your business. No hidden fees, no surprises.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                plan.popular
                  ? 'bg-foreground text-background scale-[1.02]'
                  : 'bg-card border border-border'
              }`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} ${plan.popular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
              
              {/* Shine effect for popular */}
              {plan.popular && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" 
                    style={{ animation: 'shimmer 3s infinite' }}
                  />
                </motion.div>
              )}

              {/* Popular badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground text-sm font-medium shadow-gold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Content */}
              <div className="relative z-10">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold mb-2 flex items-center gap-2">
                    {plan.name}
                    {plan.popular && <Sparkles className="w-4 h-4 text-primary" />}
                  </h3>
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
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + featureIndex * 0.05 }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.popular ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mt-0.5`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-primary'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-background/90' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'gold' : 'outline'}
                  size="lg"
                  className="w-full group"
                >
                  {plan.cta}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>

              {/* Glow effect on hover for non-popular */}
              {!plan.popular && (
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: '0 0 40px -10px hsl(var(--gold) / 0.3)' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
