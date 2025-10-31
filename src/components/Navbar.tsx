import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAnderson from "@/assets/logo-anderson-new.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5597981010113";
    const message = "Olá! Gostaria de saber mais sobre os treinos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src={logoAnderson} alt="Anderson Silva" className="h-10 sm:h-12 md:h-16 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-inter font-medium transition-colors ${
          scrolled ? "text-white" : "text-black"
        }`}>
          <button onClick={() => scrollToSection("transformations")} className="hover:text-accent transition-colors">
            Resultados
          </button>
          <button onClick={() => scrollToSection("method")} className="hover:text-accent transition-colors">
            Método
          </button>
          <button onClick={() => scrollToSection("protocol")} className="hover:text-accent transition-colors">
            Protocolo
          </button>
          <button onClick={() => scrollToSection("potential")} className="hover:text-accent transition-colors">
            Potencial
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="hover:text-accent transition-colors">
            Depoimentos
          </button>
        </div>

        {/* Desktop Button */}
        <Button 
          variant="gold" 
          size="sm" 
          className="hidden md:flex text-xs md:text-sm px-3 md:px-4"
          onClick={handleWhatsAppClick}
        >
          QUERO SER ALUNO
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" style={{ color: scrolled ? 'white' : 'black' }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: scrolled ? 'white' : 'black' }} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden z-50">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => { scrollToSection("transformations"); setMobileMenuOpen(false); }} 
                className="block w-full text-left font-inter font-medium hover:text-accent transition-colors py-2"
              >
                Resultados
              </button>
              <button 
                onClick={() => { scrollToSection("method"); setMobileMenuOpen(false); }} 
                className="block w-full text-left font-inter font-medium hover:text-accent transition-colors py-2"
              >
                Método
              </button>
              <button 
                onClick={() => { scrollToSection("protocol"); setMobileMenuOpen(false); }} 
                className="block w-full text-left font-inter font-medium hover:text-accent transition-colors py-2"
              >
                Protocolo
              </button>
              <button 
                onClick={() => { scrollToSection("potential"); setMobileMenuOpen(false); }} 
                className="block w-full text-left font-inter font-medium hover:text-accent transition-colors py-2"
              >
                Potencial
              </button>
              <button 
                onClick={() => { scrollToSection("testimonials"); setMobileMenuOpen(false); }} 
                className="block w-full text-left font-inter font-medium hover:text-accent transition-colors py-2"
              >
                Depoimentos
              </button>
              <Button 
                variant="gold" 
                size="sm" 
                className="w-full mt-4"
                onClick={handleWhatsAppClick}
              >
                QUERO SER ALUNO
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
