"use client";

import React from "react";
import { ArrowRight, Shield, Users, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#222325]">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#f8b62e]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#f8b62e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 animate-bounce">
            <Sparkles className="h-4 w-4 text-[#f8b62e]" />
            <span>Administração Inteligente de Condomínios</span>
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
            A <strong className="text-white">Habit</strong> é especializada em transformar a rotina do seu condomínio. Oferecemos soluções completas para garantir a harmonia, valorização do patrimônio e tranquilidade para síndicos e moradores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contato"
              className="bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(248,182,46,0.5)] flex items-center justify-center gap-2 group"
            >
              Solicitar Proposta
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              Conhecer Serviços
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-extrabold text-[#f8b62e]">100%</p>
              <p className="text-sm text-gray-400 mt-1">Transparência Digital</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#f8b62e]">24h</p>
              <p className="text-sm text-gray-400 mt-1">Suporte Emergencial</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#f8b62e]">98%</p>
              <p className="text-sm text-gray-400 mt-1">Satisfação de Clientes</p>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-gradient-to-br from-[#2d2e31] to-[#222325] p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group hover:border-[#f8b62e]/30 transition-all duration-500">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f8b62e]/20 rounded-full blur-2xl group-hover:bg-[#f8b62e]/30 transition-all duration-500" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f8b62e]/10 p-2.5 rounded-xl">
                    <Shield className="h-6 w-6 text-[#f8b62e]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Gestão Segura</h4>
                    <p className="text-xs text-gray-400">Auditoria e Compliance</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                  Ativo
                </span>
              </div>

              {/* Simulated App Interface */}
              <div className="bg-[#222325] p-5 rounded-2xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Saldo do Condomínio</span>
                  <span className="text-xs text-[#f8b62e] font-semibold">Atualizado hoje</span>
                </div>
                <div className="text-2xl font-bold text-white">R$ 142.850,00</div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#f8b62e] h-full w-4/5 rounded-full" />
                </div>
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>Fundo de Reserva: R$ 35.000</span>
                  <span>80% Meta</span>
                </div>
              </div>

              {/* Resident Portal Preview */}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="bg-[#f8b62e] text-[#222325] p-2 rounded-lg font-bold text-sm">
                  APP
                </div>
                <div className="flex-1 text-left">
                  <h5 className="text-sm font-bold text-white">Portal do Morador</h5>
                  <p className="text-xs text-gray-400">Boletos, reservas e assembleias online.</p>
                </div>
              </div>

              {/* Interactive Badge */}
              <div className="flex items-center gap-2 text-xs text-gray-400 justify-center pt-2">
                <Users className="h-4 w-4 text-[#f8b62e]" />
                <span>Mais de 5.000 moradores integrados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}