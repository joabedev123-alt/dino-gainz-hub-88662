import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "559784594321";
    const message = "Quero garantir minha vaga na consultoria. Pode me mandar o questionário pra responder.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-secondary/50 to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-up">
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-sm sm:text-base md:text-lg px-8 sm:px-12 md:px-16 py-2.5 sm:py-3 md:py-4 h-auto gap-2 font-bebas tracking-wide w-full"
              onClick={handleWhatsAppClick}
            >
              QUERO SER ALUNO
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

