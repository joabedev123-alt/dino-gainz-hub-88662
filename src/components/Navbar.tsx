import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logoAnderson from "@/assets/logo-anderson-new.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src={logoAnderson} alt="Anderson Silva" className="h-12 md:h-16 w-auto" />
        </div>
        
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

        <Button variant="gold" size="sm" className="text-xs md:text-sm px-3 md:px-4">
          QUERO SER ALUNO
        </Button>
      </nav>
    </header>
  );
};
