"use client";

import React, { useState, useEffect } from "react";
import { Building2, Menu, X, Phone } from "lucide-react";

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
          ? "bg-[#222325]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#f8b62e] p-2 rounded-xl transition-transform duration-300 group-hover:scale-110">
            <Building2 className="h-6 w-6 text-[#222325]" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            HABIT<span className="text-[#f8b62e]">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-gray-300 hover:text-[#f8b62e] transition-colors font-medium">
            Sobre Nós
          </a>
          <a href="#servicos" className="text-gray-300 hover:text-[#f8b62e] transition-colors font-medium">
            Serviços
          </a>
          <a href="#galeria" className="text-gray-300 hover:text-[#f8b62e] transition-colors font-medium">
            Diferenciais
          </a>
          <a href="#faq" className="text-gray-300 hover:text-[#f8b62e] transition-colors font-medium">
            Dúvidas
          </a>
          <a
            href="#contato"
            className="bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,182,46,0.4)] flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
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
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 font-medium"
          >
            Sobre Nós
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 font-medium"
          >
            Serviços
          </a>
          <a
            href="#galeria"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 font-medium"
          >
            Diferenciais
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-300 hover:text-[#f8b62e] py-2 border-b border-white/5 font-medium"
          >
            Dúvidas
          </a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#f8b62e] text-[#222325] font-bold py-3 rounded-full text-center transition-colors hover:bg-[#e0a120] flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}