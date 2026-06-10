import { MessageCircle } from "lucide-react";

const PHONE = "918793001079"; // +91 8793001079
const MESSAGE = "Hello, I would like to discuss a project.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat with us</span>
      <span className="absolute -top-1 -right-1 flex size-3">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
      </span>
    </a>
  );
}
