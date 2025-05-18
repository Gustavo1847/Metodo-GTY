
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductSection from "@/components/ProductSection";
import ProofSection from "@/components/ProofSection";
import ContentSection from "@/components/ContentSection";
import OfferSection from "@/components/OfferSection";
import MentorSection from "@/components/MentorSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PainSection />
      <ProductSection />
      <ProofSection />
      <ContentSection />
      <OfferSection />
      <MentorSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
