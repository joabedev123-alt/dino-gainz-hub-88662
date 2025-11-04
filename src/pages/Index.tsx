import { Hero } from "@/components/Hero";
import { TransformationGallery } from "@/components/TransformationGallery";
import { AppProtocol } from "@/components/AppProtocol";
import { TrainingPillars } from "@/components/TrainingPillars";
import { PotentialSection } from "@/components/PotentialSection";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TransformationGallery />
      <AppProtocol />
      <TrainingPillars />
      <PotentialSection />
      <CTASection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
