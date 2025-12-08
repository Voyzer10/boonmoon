"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-[#0A1624] text-center text-white overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 max-w-3xl">

        {/* Logo Glow */}
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center w-14 h-14">
            <div className="absolute inset-0 bg-[#E0B25B] blur-xl opacity-40 rounded-full" />

            <img
              src="/images/header@2x.png"
              alt="Logo"
              className="relative w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Quote */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-playfair">
          "Your Gateway to Global Goodness"
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 font-inter">
          Ready to bring global goodness to your business?
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="
              relative inline-flex items-center gap-2 px-8 py-3 
              rounded-xl bg-[#E0B25B] text-black font-medium 
              shadow-[0_0_40px_rgba(224,178,91,0.5)]
              hover:shadow-[0_0_60px_rgba(224,178,91,0.8)]
              hover:bg-[#f0c978]
              transition-all duration-300 transform hover:scale-105 active:scale-95
            "
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Email */}
        {/* <p className="mt-6 text-gray-400 text-sm font-inter">
          Or email us at{" "}
          <a
            href="mailto:info@bonnmoontrading.com"
            className="underline hover:text-[#E0B25B] transition-colors"
          >
            info@bonnmoontrading.com
          </a>
        </p> */}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#E0B25B]/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
}
