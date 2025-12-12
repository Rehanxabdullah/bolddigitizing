import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CursorTracker } from '@/components/CursorTracker';

// Lazy load below-the-fold components to reduce initial bundle size
const SocialProofSection = lazy(() => import('@/components/SocialProofSection').then(m => ({ default: m.SocialProofSection })));
const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import('@/components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection').then(m => ({ default: m.HowItWorksSection })));
const PricingSection = lazy(() => import('@/components/PricingSection').then(m => ({ default: m.PricingSection })));
const PortfolioSection = lazy(() => import('@/components/PortfolioSection').then(m => ({ default: m.PortfolioSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('@/components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const CTASection = lazy(() => import('@/components/CTASection').then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const SectionDivider = () => (
  <div className="container-custom py-4">
    <div className="border-t border-dashed border-border/50" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden cursor-none">
      <CursorTracker />
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <SocialProofSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <ServicesSection />
          <SectionDivider />
          <HowItWorksSection />
          <SectionDivider />
          <PricingSection />
          <SectionDivider />
          <PortfolioSection />
          <SectionDivider />
          <TestimonialsSection />
          <SectionDivider />
          <FAQSection />
          <SectionDivider />
          <ContactSection />
          <SectionDivider />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
