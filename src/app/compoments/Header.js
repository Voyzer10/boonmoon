"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#0a1624] backdrop-blur-md shadow-sm border-b border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌙 Left: Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/images/header@2x.png"
              alt="Bonn Moon Trading Logo"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Bonn <span className="text-[#e6daae]">Moon</span> Trading
          </h1>
        </div>

        {/* 🌍 Right: Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[#e6daae] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-[#e6daae] hover:bg-[#1a2332] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1624] border-t border-[#1f2937]">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-[#e6daae] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
