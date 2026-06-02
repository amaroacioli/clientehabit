"use client";

import React from "react";
import Navbar from "@/components/habit/Navbar";
import Hero from "@/components/habit/Hero";
import About from "@/components/habit/About";
import Services from "@/components/habit/Services";
import CarouselSection from "@/components/habit/CarouselSection";
import InteractiveFAQ from "@/components/habit/InteractiveFAQ";
import ContactForm from "@/components/habit/ContactForm";
import Footer from "@/components/habit/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#222325] text-white selection:bg-[#f8b62e] selection:text-[#222325] scroll-smooth">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Carousel Section */}
      <CarouselSection />

      {/* FAQ Section */}
      <InteractiveFAQ />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Made with Dyad Badge */}
      <div className="bg-[#1a1b1d] py-4 border-t border-white/5">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;