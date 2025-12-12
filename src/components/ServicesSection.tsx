import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Embroidery Digitizing',
    description: 'Transform any artwork into machine-ready embroidery files with precision stitching for logos, monograms, and complex designs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    title: 'Vector Art Conversion',
    description: 'Convert raster images to crisp, scalable vector files. Perfect for print, signage, and high-resolution applications.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    title: 'Custom Patch Design',
    description: 'Create stunning embroidered patches with detailed edge finishing. Ideal for uniforms, merchandise, and brand applications.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
];

export function ServicesSection() {
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Everything Your Shop Needs
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative bg-background rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} z-10`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10 z-20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-display font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                {/* Accent line */}
                <div className="mt-6 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
