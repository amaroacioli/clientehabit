"use client";

import React, { useEffect, useState, useRef } from "react";
import { CheckCircle, Award, Shield, HeartHandshake } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-24 bg-[#222325] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Image Grid with Reveal */}
          <div
            className={`lg:col-span-5 grid grid-cols-2 gap-4 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt="Modern Building"
                className="rounded-3xl object-cover h-64 w-full shadow-lg border border-white/5"
              />
              <div className="bg-[#f8b62e] p-6 rounded-3xl text-[#222325] text-left space-y-2">
                <Award className="h-8 w-8" />
                <h4 className="font-extrabold text-xl">Líder em Gestão</h4>
                <p className="text-xs font-medium opacity-90">Inovação e transparência premiadas.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-[#2d2e31] p-6 rounded-3xl text-white text-left space-y-2 border border-white/5">
                <Shield className="h-8 w-8 text-[#f8b62e]" />
                <h4 className="font-extrabold text-xl">100% Seguro</h4>
                <p className="text-xs text-gray-400">Processos auditados e em conformidade legal.</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80"
                alt="Condominium Life"
                className="rounded-3xl object-cover h-64 w-full shadow-lg border border-white/5"
              />
            </div>
          </div>

          {/* Right Column - Text Content with Reveal */}
          <div
            className={`lg:col-span-7 text-left space-y-8 transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <div className="space-y-4">
              <span className="text-[#f8b62e] font-bold tracking-wider uppercase text-sm">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Especialistas em Administração de Condomínios
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A <strong className="text-white">Habit</strong> nasceu com o propósito de descomplicar a vida em condomínio. Acreditamos que uma gestão eficiente e transparente é a chave para a harmonia entre moradores e a valorização do patrimônio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-[#f8b62e] shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Gestão Transparente</h4>
                  <p className="text-sm text-gray-400 mt-1">Prestação de contas digital e acessível a qualquer momento.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-[#f8b62e] shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Soluções Práticas</h4>
                  <p className="text-sm text-gray-400 mt-1">Aplicativo exclusivo para reservas, boletos e comunicados.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-[#f8b62e] shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Atendimento Humanizado</h4>
                  <p className="text-sm text-gray-400 mt-1">Gerente de contas dedicado para responder suas dúvidas rapidamente.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-[#f8b62e] shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Suporte Jurídico</h4>
                  <p className="text-sm text-gray-400 mt-1">Assessoria jurídica especializada inclusa para total segurança.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex items-center gap-4">
              <div className="bg-[#f8b62e]/10 p-3 rounded-2xl text-[#f8b62e]">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <div>
                <h5 className="font-bold text-white">Compromisso Habit</h5>
                <p className="text-sm text-gray-400">Garantimos uma transição tranquila e sem custos da sua administração atual.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}