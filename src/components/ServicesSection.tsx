import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Embroidery Digitizing',
    description: 'Transform any artwork into machine-ready embroidery files with precision stitching for logos, monograms, and complex designs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    gradient: 'from-amber-500/20 via-orange-400/10 to-yellow-500/20',
    iconGradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Vector Art Conversion',
    description: 'Convert raster images to crisp, scalable vector files. Perfect for print, signage, and high-resolution applications.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    gradient: 'from-blue-500/20 via-indigo-400/10 to-purple-500/20',
    iconGradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Custom Patch Design',
    description: 'Create stunning embroidered patches with detailed edge finishing. Ideal for uniforms, merchandise, and brand applications.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop',
    gradient: 'from-emerald-500/20 via-teal-400/10 to-green-500/20',
    iconGradient: 'from-emerald-500 to-teal-500',
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

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-animated-gradient">
      <div className="container-custom">
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
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight"
          >
            Everything Your Shop Needs
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border overflow-hidden bg-card"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} z-10`}
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.5 }}
                />
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5 z-20" />
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-display font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <motion.div 
                    className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${service.iconGradient} flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                {/* Animated accent line */}
                <motion.div 
                  className="mt-6 h-0.5 bg-gradient-to-r from-primary via-gold-light to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
