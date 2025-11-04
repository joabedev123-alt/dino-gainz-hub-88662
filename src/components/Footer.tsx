import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black border-t border-primary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bebas text-xl sm:text-2xl mb-3 sm:mb-4 text-accent">CONTATO</h3>
            <div className="space-y-2 sm:space-y-3 font-inter text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(97)98101-0113</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(97)98459-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:andersonsilvabagalhe@hotmail.com" className="hover:text-accent transition-colors">
                  andersonsilvabagalhe@hotmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl sm:text-2xl mb-3 sm:mb-4 text-accent">LOCALIZAÇÃO</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 font-inter text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Rua Parque dos Franceses, nº 736 — Bairro Chapada</span>
              </div>
              <div className="relative w-full h-40 sm:h-32 rounded-lg overflow-hidden border border-primary/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.6!2d-67.8!3d-9.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTIuMCJTIDY3wrA0OCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr&q=Rua+Parque+dos+Franceses+736+Chapada+Rio+Branco+Acre"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Academia"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl sm:text-2xl mb-3 sm:mb-4 text-accent">REDES SOCIAIS</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/andersonnsilvatreinador?igsh=MTd3YzNxMDlmMm83aA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1KApTp2tbE/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 sm:pt-8 border-t border-primary/20">
          <p className="font-inter text-muted-foreground text-xs sm:text-sm">
            © 2025 Anderson Silva - Personal Trainer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
