"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#222325]">
      {/* Background subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f8b62e]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10 space-y-10">
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gray-400">
          <span>Administração Condominial de Alto Padrão</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
          Gestão eficiente, <br />
          <span className="font-semibold text-[#f8b62e]">transparente</span> e prática.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          A <strong className="text-white font-medium">Habit</strong> simplifica a rotina do seu condomínio com soluções completas de administração, garantindo harmonia, valorização patrimonial e total tranquilidade para síndicos e moradores.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#contato"
            className="bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(248,182,46,0.3)] flex items-center justify-center gap-2 group"
          >
            Solicitar Proposta
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
          >
            Conhecer Serviços
          </a>
        </div>

        {/* Minimalist Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto border-t border-white/5">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-light text-white">100%</p>
            <p className="text-xs uppercase tracking-wider text-gray-500">Transparência</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-light text-white">Exclusivo</p>
            <p className="text-xs uppercase tracking-wider text-gray-500">Atendimento</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-light text-white">Seguro</p>
            <p className="text-xs uppercase tracking-wider text-gray-500">Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}