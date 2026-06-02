"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Building, Shield, Heart, Sparkles } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
}

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      title: "Condomínios Modernos e Valorizados",
      subtitle: "Implementamos melhorias estruturais e tecnológicas que aumentam o valor de mercado do seu patrimônio.",
      badge: "Valorização",
      icon: <Building className="h-5 w-5 text-[#222325]" />
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      title: "Segurança e Tranquilidade Absoluta",
      subtitle: "Portaria inteligente, controle de acesso rigoroso e auditoria constante para a paz da sua família.",
      badge: "Segurança",
      icon: <Shield className="h-5 w-5 text-[#222325]" />
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1576085898323-218337e3343c?auto=format&fit=crop&w=1200&q=80",
      title: "Convivência Harmoniosa e Lazer",
      subtitle: "Gestão eficiente de áreas comuns e mediação profissional de conflitos para um ambiente feliz.",
      badge: "Harmonia",
      icon: <Heart className="h-5 w-5 text-[#222325]" />
    }
  ];

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

  // Auto-play carousel
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-24 bg-[#222325] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#f8b62e] font-bold tracking-wider uppercase text-sm">
            Vida em Condomínio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Como Transformamos o seu Dia a Dia
          </h2>
          <p className="text-gray-400 text-lg">
            Veja os pilares que norteiam nossa administração para criar condomínios mais seguros, valorizados e felizes.
          </p>
        </div>

        {/* Carousel Container with Scroll Reveal */}
        <div
          className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[#2d2e31] transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          {/* Slides Wrapper */}
          <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  {/* Image with dark overlay */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222325] via-[#222325]/60 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-left space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-[#f8b62e] text-[#222325] px-4 py-1.5 rounded-full text-xs font-bold">
                      {slide.icon}
                      <span>{slide.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#222325]/80 hover:bg-[#f8b62e] text-white hover:text-[#222325] p-3 rounded-full transition-all duration-300 border border-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#222325]/80 hover:bg-[#f8b62e] text-white hover:text-[#222325] p-3 rounded-full transition-all duration-300 border border-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-8 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#f8b62e]" : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}