import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Embroidery Digitizing', href: '#' },
    { name: 'Vector Conversion', href: '#' },
    { name: 'Patch Design', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container-custom py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Ready to Transform Your{' '}
              <span className="text-primary">Workflow?</span>
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Join 500+ embroidery shops that trust StitchPro for precision digitizing. 
              Get your first design in hours, not days.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold group"
            >
              Request a Quote
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">StitchPro</span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Premium embroidery digitizing services trusted by professionals nationwide.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:hello@stitchpro.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@stitchpro.com
              </a>
              <a href="tel:+1-800-555-0123" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                1-800-555-0123
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} StitchPro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/40 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-background/40 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
