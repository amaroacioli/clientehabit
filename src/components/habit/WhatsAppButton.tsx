"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "554197747790"; // Número oficial da Habit
  const message = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para o meu condomínio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#222325] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
        Fale Conosco no WhatsApp
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
      
      <MessageSquare className="h-6 w-6 relative z-10 fill-white" />
    </a>
  );
}