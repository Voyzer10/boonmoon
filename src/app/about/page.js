"use client";
import { useEffect, useState, useRef } from "react";
import { Moon } from "lucide-react";
import AboutMeaning from "./AboutMeaning";
import AboutMissionVision from "./AboutMissionVision";
import AboutCoreValues from "./AboutCoreValues";
import AboutPartner from "./AboutPartner";
import Footer from "../compoments/Footer";
import Header from "../compoments/Header";

export default function AboutPage() {
  const [showHeader, setShowHeader] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        // ✅ Show header when hero scrolls out of view
        setShowHeader(rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* 1️⃣ Hero Section */}
      <section
        ref={aboutRef} // ✅ Attach ref here
        className="relative flex flex-col items-center justify-center text-center text-white h-[80vh] overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="absolute inset-0 bg-[#E0B25B] blur-2xl opacity-40 rounded-full" />
              <Moon className="relative w-8 h-8 text-[#E0B25B]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Bonn Moon Trading
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Bringing Global Goodness Home — where{" "}
            <span className="text-[#E0B25B]">"Bon"</span> meets blessings
          </p>
        </div>
      </section>

      {/* Floating Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <Header />
      </div>

      {/* 2️⃣ The Meaning Behind Bonn Moon */}
      <AboutMeaning />

      {/* 3️⃣ Mission & Vision */}
      <AboutMissionVision />

      {/* 4️⃣ Core Values */}
      <AboutCoreValues />

      {/* 5️⃣ Partner With Us */}
      <AboutPartner />

      {/* 6️⃣ Footer */}
      <Footer />
    </main>
  );
}
