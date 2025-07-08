import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+919828822111';
  const message = 'Hi Rent Bee 👋, I visited your website and want to get started.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 btn-whatsapp flex items-center space-x-2 animate-pulse-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;