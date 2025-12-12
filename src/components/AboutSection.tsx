import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Clock, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every stitch matters. Our digitizers ensure pixel-perfect accuracy for flawless embroidery output.',
  },
  {
    icon: Clock,
    title: 'Speed',
    description: '3-4 hour turnaround on standard orders. Your deadlines are our priority.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Premium files that work flawlessly on any embroidery machine, every single time.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-light-gray/50">
      <div className="container-custom">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Crafted with Obsessive
              <br />
              <span className="text-primary">Attention to Detail</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're not just digitizers—we're craftspeople who understand the art of embroidery. 
              Every file we create is meticulously optimized for your machines, ensuring smooth 
              stitching and vibrant results that make your work shine.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background border border-border mb-6 transition-all duration-300 group-hover:border-primary group-hover:shadow-gold">
                  <value.icon className="w-6 h-6 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
