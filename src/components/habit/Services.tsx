"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  ShieldCheck,
  Wrench,
  Users2,
  Smartphone,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <FileText className="h-8 w-8 text-[#f8b62e]" />,
      title: "Gestão Financeira & Contábil",
      description: "Controle rigoroso de contas, emissão de boletos e prestação de contas transparente.",
      details: [
        "Emissão e envio de boletos com QR Code Pix",
        "Prestação de contas mensal detalhada e digital",
        "Cobrança ativa e amigável de inadimplentes",
        "Previsão orçamentária anual personalizada"
      ]
    },
    {
      id: 2,
      icon: <ShieldCheck className="h-8 w-8 text-[#f8b62e]" />,
      title: "Assessoria Jurídica & Compliance",
      description: "Segurança legal completa para o síndico e para as decisões do condomínio.",
      details: [
        "Análise e elaboração de contratos de prestadores",
        "Cobrança judicial de cotas em atraso",
        "Adequação à LGPD no condomínio",
        "Suporte em assembleias e convenções"
      ]
    },
    {
      id: 3,
      icon: <Wrench className="h-8 w-8 text-[#f8b62e]" />,
      title: "Manutenção & Engenharia",
      description: "Planejamento preventivo para valorizar o patrimônio e evitar surpresas.",
      details: [
        "Cronograma de manutenção preventiva",
        "Cotação e fiscalização de obras e reformas",
        "Vistoria técnica periódica das áreas comuns",
        "Gestão de contratos de elevadores, bombas e geradores"
      ]
    },
    {
      id: 4,
      icon: <Users2 className="h-8 w-8 text-[#f8b62e]" />,
      title: "Gestão de Pessoas & RH",
      description: "Administração completa de funcionários próprios ou terceirizados.",
      details: [
        "Admissão, demissão e folha de pagamento",
        "Escalas de revezamento e controle de ponto",
        "Treinamentos de segurança e atendimento",
        "Gestão de contratos de terceirização"
      ]
    },
    {
      id: 5,
      icon: <Smartphone className="h-8 w-8 text-[#f8b62e]" />,
      title: "Tecnologia & Portal do Morador",
      description: "Aplicativo exclusivo para facilitar a comunicação e reservas no dia a dia.",
      details: [
        "Reserva de salão de festas e churrasqueira online",
        "Assembleias virtuais e votações seguras",
        "Abertura de chamados e ocorrências",
        "Mural de avisos e comunicados digitais"
      ]
    },
    {
      id: 6,
      icon: <TrendingUp className="h-8 w-8 text-[#f8b62e]" />,
      title: "Valorização Patrimonial",
      description: "Estratégias inteligentes para modernizar o condomínio e valorizar os imóveis.",
      details: [
        "Projetos de eficiência energética e sustentabilidade",
        "Modernização de portarias (remota ou híbrida)",
        "Revitalização de áreas de lazer e convivência",
        "Auditoria de custos para redução de despesas"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = parseInt(entry.target.getAttribute("data-id") || "0");
            if (targetId && !visibleItems.includes(targetId)) {
              setVisibleItems((prev) => [...prev, targetId]);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".service-card-trigger");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [visibleItems]);

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-[#222325] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[#f8b62e] font-bold tracking-wider uppercase text-sm">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Serviços Completos para o seu Condomínio
          </h2>
          <p className="text-gray-400 text-lg">
            Cuidamos de toda a burocracia e operação para que você possa aproveitar o melhor do seu lar com total tranquilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const isVisible = visibleItems.includes(service.id);
            return (
              <div
                key={service.id}
                data-id={service.id}
                className={`service-card-trigger bg-[#2d2e31] p-8 rounded-3xl border border-white/5 hover:border-[#f8b62e]/30 transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                } hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between group`}
              >
                <div className="space-y-6">
                  {/* Icon Container */}
                  <div className="bg-[#222325] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#f8b62e]/40 transition-colors duration-300">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#f8b62e] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Details */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5 text-left">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#f8b62e] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}