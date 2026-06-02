"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#222325]">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f8b62e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
            <Sparkles className="h-4 w-4 text-[#f8b62e]" />
            <span>Administração de Condomínios</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Gestão eficiente, <br />
            <span className="text-[#f8b62e] relative inline-block">
              transparente
              <span className="absolute bottom-2 left-0 w-full h-2 bg-[#f8b62e]/20 rounded-full" />
            </span>{" "}
            e prática.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            A <strong className="text-white">Habit</strong> é especializada em simplificar a rotina do seu condomínio. Oferecemos soluções completas para garantir a harmonia, valorização do patrimônio e tranquilidade para síndicos e moradores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contato"
              className="bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(248,182,46,0.4)] flex items-center justify-center gap-2 group"
            >
              Solicitar Proposta
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>

        {/* Right Column - Minimalist Elegant Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] group">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Arquitetura Moderna"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222325] via-transparent to-transparent" />
            
            {/* Minimalist Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#2d2e31]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-left">
              <p className="text-[#f8b62e] text-xs font-bold uppercase tracking-wider">Diferencial</p>
              <h3 className="text-white font-bold text-lg mt-1">Valorização Patrimonial</h3>
              <p className="text-gray-300 text-xs mt-1">Foco na conservação e modernização constante das áreas comuns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}