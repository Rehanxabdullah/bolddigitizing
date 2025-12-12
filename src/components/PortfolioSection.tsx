import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Embroidery', 'Vector', 'Patches'];

const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Logo Digitizing',
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop',
    gradient: 'from-amber-500/80 to-orange-600/80',
  },
  {
    id: 2,
    title: 'Sports Team Emblem',
    category: 'Patches',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop',
    gradient: 'from-blue-500/80 to-indigo-600/80',
  },
  {
    id: 3,
    title: 'Brand Vector Conversion',
    category: 'Vector',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=500&fit=crop',
    gradient: 'from-emerald-500/80 to-teal-600/80',
  },
  {
    id: 4,
    title: 'Vintage Badge Design',
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    gradient: 'from-rose-500/80 to-pink-600/80',
  },
  {
    id: 5,
    title: 'Military Patch',
    category: 'Patches',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=500&fit=crop',
    gradient: 'from-slate-500/80 to-gray-600/80',
  },
  {
    id: 6,
    title: 'Monogram Digitizing',
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop',
    gradient: 'from-violet-500/80 to-purple-600/80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gray/50 via-background to-light-gray/30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-gold-light/10 text-sm font-medium text-foreground mb-4 border border-primary/20"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Our Recent Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Browse our collection of precision-digitized designs trusted by embroidery shops nationwide.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-foreground to-charcoal-light text-background shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-foreground/10 border border-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span 
                    className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground text-xs font-medium mb-3"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="text-background text-lg font-display font-semibold flex items-center gap-2">
                    {item.title}
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </h3>
                </div>
              </motion.div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
