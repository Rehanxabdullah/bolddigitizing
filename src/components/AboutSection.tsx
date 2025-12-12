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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gray/50 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
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
              About Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6"
            >
              Crafted with Obsessive
              <br />
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">Attention to Detail</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We're not just digitizers—we're craftspeople who understand the art of embroidery. 
              Every file we create is meticulously optimized for your machines, ensuring smooth 
              stitching and vibrant results that make your work shine.
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative text-center h-full"
              >
                {/* Card with gradient border */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-border via-primary/20 to-border overflow-hidden h-full">
                  <div className="relative rounded-2xl bg-card p-8 overflow-hidden h-full flex flex-col">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center flex-1">
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background border border-border mb-6 transition-all duration-300 group-hover:border-primary group-hover:shadow-gold"
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                      >
                        <value.icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
                      </motion.div>
                      <h3 className="text-xl font-display font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
