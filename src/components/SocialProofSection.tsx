import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    number: '5,000+',
    label: 'Designs Delivered',
    accent: true,
  },
  {
    number: '500+',
    label: 'Embroidery Shops Trust Us',
    accent: false,
  },
  {
    number: '99%',
    label: 'On-Time Delivery',
    accent: false,
  },
  {
    number: '3-4hrs',
    label: 'Average Turnaround',
    accent: true,
  },
];

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {value}
    </motion.span>
  );
}

export function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 border-y border-border/50">
      <div className="container-custom">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-center"
            >
              <div className="relative inline-block">
                {stat.accent && (
                  <div className="absolute -top-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
                <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
                  <AnimatedNumber value={stat.number} inView={isInView} />
                </p>
                {stat.accent && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
