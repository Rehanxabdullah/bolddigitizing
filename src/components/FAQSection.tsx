import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What file formats do you deliver?',
    answer: 'We deliver all major embroidery formats including DST, PES, JEF, EXP, XXX, VP3, and more. Just let us know what format you need and we\'ll include it with your order.',
  },
  {
    question: 'What is your turnaround time?',
    answer: 'Our standard turnaround is 3-4 hours for most designs. Complex designs may take up to 24 hours. Rush service is available for urgent projects.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We offer unlimited revisions until you\'re completely satisfied with your design. Our goal is to ensure every file runs perfectly on your machines.',
  },
  {
    question: 'How do I submit my artwork?',
    answer: 'You can submit artwork in any format - JPG, PNG, PDF, AI, EPS, or even a sketch. We\'ll work with whatever you have and create a clean embroidery file.',
  },
  {
    question: 'What stitch counts can you handle?',
    answer: 'We handle everything from simple logos (under 5,000 stitches) to complex jacket backs (100,000+ stitches). Our pricing is transparent and based on design complexity.',
  },
  {
    question: 'Do you offer bulk pricing for shops?',
    answer: 'Absolutely! Our retainer plans offer significant savings for shops with regular digitizing needs. Contact us to discuss a custom plan that fits your volume.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
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
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-border rounded-xl px-6 bg-card hover:bg-yellow-50/20 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
