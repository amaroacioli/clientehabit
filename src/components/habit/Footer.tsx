"use client";

import React from "react";
import { Building2, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1b1d] border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-[#f8b62e] p-2 rounded-xl">
                <Building2 className="h-6 w-6 text-[#222325]" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                HABIT<span className="text-[#f8b62e]">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em administração de condomínios. Gestão eficiente, transparente e soluções práticas para o dia a dia dos moradores.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 hover:bg-[#f8b62e] text-gray-400 hover:text-[#222325] p-2.5 rounded-full transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#f8b62e] text-gray-400 hover:text-[#222325] p-2.5 rounded-full transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#f8b62e] text-gray-400 hover:text-[#222325] p-2.5 rounded-full transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Gestão Financeira
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Assessoria Jurídica
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#f8b62e] transition-colors">
                  Portal do Morador
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Fale Conosco</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Entre em contato para agendar uma reunião ou solicitar uma visita técnica ao seu condomínio.
            </p>
            <a
              href="#contato"
              className="inline-block bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,182,46,0.3)]"
            >
              Solicitar Visita
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Habit Condomínios. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          <button
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-[#f8b62e] text-gray-400 hover:text-[#222325] p-3 rounded-full transition-all duration-300 border border-white/10"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}