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
  },
  {
    id: 2,
    title: 'Sports Team Emblem',
    category: 'Patches',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Brand Vector Conversion',
    category: 'Vector',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Vintage Badge Design',
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'Military Patch',
    category: 'Patches',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Monogram Digitizing',
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop',
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-light-gray/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Our Recent Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our collection of precision-digitized designs trusted by embroidery shops nationwide.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-background text-muted-foreground hover:bg-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-background"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-background text-lg font-display font-semibold flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
