"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Quais são os principais diferenciais da Habit?",
      answer: "A Habit une tecnologia de ponta com atendimento humanizado. Oferecemos um aplicativo exclusivo para moradores, prestação de contas 100% digital e transparente em tempo real, além de assessoria jurídica própria inclusa no contrato."
    },
    {
      question: "Como funciona a transição da administração antiga para a Habit?",
      answer: "Nós cuidamos de todo o processo de transição! Fazemos a migração de documentos, auditoria das contas anteriores, cadastro de moradores e parametrização do sistema sem nenhum custo adicional ou dor de cabeça para o síndico."
    },
    {
      question: "O condomínio terá um gerente de contas exclusivo?",
      answer: "Sim! Cada condomínio parceiro da Habit possui um gerente de contas dedicado, que conhece a fundo a rotina, as necessidades e os desafios específicos do seu condomínio, garantindo respostas rápidas e eficientes."
    },
    {
      question: "Como é feita a prestação de contas?",
      answer: "Nossa prestação de contas é totalmente digital e transparente. Os moradores e o conselho fiscal podem acompanhar as receitas, despesas, notas fiscais e extratos bancários diretamente pelo nosso aplicativo ou portal web a qualquer momento."
    },
    {
      question: "A Habit oferece suporte para assembleias virtuais?",
      answer: "Com certeza! Disponibilizamos uma plataforma completa e segura para a realização de assembleias virtuais ou híbridas, com sistema de votação auditável, chat em tempo real e gravação da sessão."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#222325] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#f8b62e] font-bold tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-400 text-lg">
            Encontre respostas rápidas para as principais perguntas sobre nossos serviços de administração.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#2d2e31] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-[#f8b62e]/40 shadow-lg" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-[#f8b62e]" : "text-gray-400"}`} />
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#f8b62e]" : "text-gray-400"}`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 text-gray-300 text-sm sm:text-base leading-relaxed bg-[#222325]/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}