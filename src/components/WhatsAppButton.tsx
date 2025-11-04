import whatsappIcon from "@/assets/whatsapp-icon.webp";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "559784594321";
    const message = "Olá! Gostaria de saber mais sobre os treinos.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-transparent hover:bg-[#25D366]/20 p-2 rounded-full border-2 border-[#25D366] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      aria-label="Contato WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 sm:w-14 sm:h-14" />
    </button>
  );
};
