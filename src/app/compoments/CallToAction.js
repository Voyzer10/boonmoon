"use client";

import { Moon } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-[#0A1624] text-center text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Moon Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full">
            <div className="absolute inset-0 bg-[#E0B25B] blur-2xl opacity-50" />
            <Moon className="relative w-8 h-8 text-[#E0B25B]" />
          </div>
        </div>

        {/* Quote */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          "The Good Moon Shines on Every Trade"
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Ready to bring global goodness to your business? Let's create a
          partnership built on transparency, quality, and trust.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111C2C] hover:bg-[#182437] text-white font-medium transition-all duration-300 relative"
          >
            <div className="absolute -inset-1 bg-[#E0B25B] blur-xl opacity-30 rounded-lg"></div>
            <span className="relative">Start a Partnership</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 relative"
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

        {/* Email Line */}
        <p className="mt-8 text-gray-400 text-sm">
          Or email us at{" "}
          <a
            href="mailto:info@bonnmoontrading.com"
            className="underline hover:text-[#E0B25B] transition-colors"
          >
            info@bonnmoontrading.com
          </a>
        </p>
      </div>

      {/* Soft radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#E0B25B]/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
}
