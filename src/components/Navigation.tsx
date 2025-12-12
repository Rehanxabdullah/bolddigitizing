import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      <nav
        className={`container-custom mx-auto flex items-center justify-between rounded-3xl px-6 py-3 transition-all duration-300 border border-gold/50 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-background" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">StitchPro</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeLink === link.name
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="nav" size="nav">
            Request a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 mx-4 rounded-2xl bg-background/95 backdrop-blur-md shadow-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-lg font-medium transition-colors ${
                    activeLink === link.name
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4 w-full">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
