"use client";
import { useEffect, useState, useRef } from "react";
import Hero from "./compoments/Hero";
import About from "./compoments/About";
import WhatWeBring from "./compoments/WhatWeBring";
import HowWeWork from "./compoments/HowWeWork";
import CoreValues from "./compoments/CoreValues";
import CallToAction from "./compoments/CallToAction";
import Footer from "./compoments/Footer";
import Header from "./compoments/Header"; // 👈 create or import your header

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        // If the top of About section is above viewport top, show header
        setShowHeader(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Conditional Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <Header />
      </div>

      {/* Sections */}
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <WhatWeBring />
      <HowWeWork />
      <CoreValues />
      <CallToAction />
      <Footer />
    </div>
  );
}