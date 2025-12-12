import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PricingSection } from '@/components/PricingSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <PricingSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
