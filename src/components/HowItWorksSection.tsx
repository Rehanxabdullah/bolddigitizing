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

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-foreground text-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/10 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Simple. Fast. <span className="text-primary">Reliable.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-background/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm mb-6 relative z-10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Number badge */}
                <span className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-12 -translate-y-2 text-6xl font-display font-bold text-background/5">
                  {step.number}
                </span>

                <h3 className="text-xl font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden w-0.5 h-8 bg-background/20 mx-auto mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
