import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Cpu, CheckCircle, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Design',
    description: 'Send us your artwork in any format. We accept JPG, PNG, PDF, AI, and more.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'We Digitize & Optimize',
    description: 'Our expert digitizers transform your design into machine-ready embroidery files.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Quality Review',
    description: 'Every file undergoes rigorous quality checks before delivery.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Receive your files within 3-4 hours, ready to stitch.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-foreground text-background overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-charcoal to-foreground" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>
      
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
            className="inline-block px-4 py-1.5 rounded-full bg-background/10 text-sm font-medium mb-4 border border-background/20"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight"
          >
            Simple. Fast.{' '}
            <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
              Reliable.
            </span>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - animated */}
          <motion.div 
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative text-center lg:text-left group"
              >
                {/* Step icon - original gold style */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background/10 border border-primary/30 mb-6 relative z-10 group-hover:border-primary group-hover:shadow-gold transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Number badge */}
                <motion.span 
                  className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-12 -translate-y-2 text-6xl font-display font-bold text-background/5 group-hover:text-background/10 transition-colors"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {step.number}
                </motion.span>

                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="sm:hidden w-0.5 h-8 mx-auto mt-6 bg-primary/30"
                    initial={{ height: 0, opacity: 0 }}
                    animate={isInView ? { height: 32, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
