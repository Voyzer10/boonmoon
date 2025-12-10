"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER WRAPPER — NO CLICK BLOCKING */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[200] w-full flex justify-center pointer-events-none">


        {/* REAL HEADER CONTENT */}
        <div
          className={`
            pointer-events-auto
            w-full max-w-[90rem]
            flex items-center justify-between px-10 gap-10
            backdrop-blur-xl border border-white/20
            shadow-[0_8px_35px_rgba(0,0,0,0.35)]
            transition-all duration-300 ease-in-out
            ${scrolled ? "py-3 bg-[#0a1624]/90" : "py-6 bg-[#0a1624]/60"}
          `}
        >
          {/* LOGO */}
          <div className="flex items-center space-x-4">
            <div className="relative w-11 h-11 md:w-12 md:h-12">
              <Image src="/images/header@2x.png" alt="Logo" fill className="object-contain" />
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-white font-playfair">
              Bonn <span className="text-[#e6daae]">Moon</span> Trading
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-6 font-inter font-medium text-[16px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-full transition-all duration-300
                    ${isActive
                      ? "text-black font-semibold bg-[#e6daae] shadow-[0_0_18px_rgba(230,218,174,0.55)]"
                      : "text-[#e6daae] hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#e6daae] hover:bg-[#1a2332] transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU — OUTSIDE HEADER SO IT RECEIVES CLICKS PERFECTLY */}
      {isOpen && (
        <div
          className="
            fixed top-[90px] left-1/2 -translate-x-1/2
            w-[85%] bg-[#0a1624]/95 border border-white/10 
            backdrop-blur-xl shadow-2xl p-6 space-y-4 md:hidden
            text-[#e6daae] font-inter z-[999]
          "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-3 px-4 rounded-xl text-lg transition-all duration-300
                  ${isActive
                    ? "bg-[#e6daae] text-black font-semibold shadow-lg"
                    : "hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
