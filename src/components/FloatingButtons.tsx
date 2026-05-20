import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+971562427288";
const WHATSAPP = "971562427288";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-background" />
      </a>
      <a
        href={`tel:${PHONE}`}
        className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6 text-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
