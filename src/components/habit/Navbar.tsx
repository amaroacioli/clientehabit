"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#222325]/95 backdrop-blur-md py-4 shadow-sm border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Oficial */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Habit Administradora de Condomínios" 
            className="h-10 w-auto object-contain brightness-100 transition-transform duration-300 group-hover:scale-102"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-gray-300 hover:text-[#f8b62e] transition-colors text-sm font-medium tracking-wide">
            Sobre Nós
          </a>
          <a href="#servicos" className="text-gray-300 hover:text-[#f8b62e] transition-colors text-sm font-medium tracking-wide">
            Serviços
          </a>
          <a href="#galeria" className="text-gray-300 hover:text-[#f8b62e] transition-colors text-sm font-medium tracking-wide">
            Diferenciais
          </a>
          <a href="#faq" className="text-gray-300 hover:text-[#f8b62e] transition-colors text-sm font-medium tracking-wide">
            Dúvidas
          </a>
          <a
            href="https://wa.me/554197747790?text=Olá! Gostaria de solicitar uma proposta para o meu condomínio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="h-3.5 w-3.5" />
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-[#f8b62e] transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#222325] border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 text-sm font-medium"
          >
            Sobre Nós
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 text-sm font-medium"
          >
            Serviços
          </a>
          <a
            href="#galeria"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 text-sm font-medium"
          >
            Diferenciais
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 text-sm font-medium"
          >
            Dúvidas
          </a>
          <a
            href="https://wa.me/554197747790?text=Olá! Gostaria de solicitar uma proposta para o meu condomínio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f8b62e] text-[#222325] font-bold py-3 rounded-full text-center transition-colors hover:bg-[#e0a120] flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
          >
            <Phone className="h-4 w-4" />
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}