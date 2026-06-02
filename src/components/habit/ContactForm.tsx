"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { showSuccess } from "@/utils/toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condoName: "",
    units: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      showSuccess("Proposta solicitada com sucesso! Entraremos em contato em breve.");
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-[#222325] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f8b62e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[#f8b62e] font-bold tracking-wider uppercase text-sm">
                Contato
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Pronto para valorizar seu condomínio?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Solicite uma proposta personalizada sem compromisso. Nossa equipe de especialistas está pronta para apresentar as melhores soluções para a sua gestão.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#f8b62e]/10 p-3 rounded-xl text-[#f8b62e]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Telefone / WhatsApp</h4>
                  <p className="text-gray-400 text-sm mt-1">(11) 99999-8888</p>
                  <p className="text-gray-400 text-sm">(11) 3333-4444</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f8b62e]/10 p-3 rounded-xl text-[#f8b62e]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">E-mail</h4>
                  <p className="text-gray-400 text-sm mt-1">contato@habitcondominios.com.br</p>
                  <p className="text-gray-400 text-sm">comercial@habitcondominios.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f8b62e]/10 p-3 rounded-xl text-[#f8b62e]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Endereço</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Av. Paulista, 1000 - Bela Vista
                  </p>
                  <p className="text-gray-400 text-sm">São Paulo - SP, 01310-100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#2d2e31] p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="inline-flex items-center justify-center bg-emerald-500/10 p-4 rounded-full text-emerald-400">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    Agradecemos o contato. Um de nossos especialistas em gestão condominial entrará em contato nas próximas horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#f8b62e] hover:underline font-semibold text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: João Silva"
                        className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        E-mail Corporativo / Pessoal
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: joao@email.com"
                        className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Nome do Condomínio
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.condoName}
                        onChange={(e) => setFormData({ ...formData, condoName: e.target.value })}
                        placeholder="Ex: Edifício Bella Vista"
                        className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Quantidade de Unidades (Apartamentos/Casas)
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.units}
                      onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                      placeholder="Ex: 48"
                      className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Mensagem / Observações adicionais
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos um pouco sobre as necessidades atuais do seu condomínio..."
                      className="w-full bg-[#222325] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#f8b62e] focus:ring-1 focus:ring-[#f8b62e] outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f8b62e] hover:bg-[#e0a120] text-[#222325] font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,182,46,0.4)] flex items-center justify-center gap-2"
                  >
                    Solicitar Proposta Comercial
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}