import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import BeautySection from "./components/BeautySection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FoundersSection from "./components/FoundersSection.jsx";
import ContactCTA from "./components/ContactCTA.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <BeautySection />
      <HowItWorks />
      <AboutSection />
      <FoundersSection />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
