"use client";

import { Users } from "lucide-react";
import Link from "next/link";

export default function AboutPartner() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center w-12 h-12">
            <div className="absolute inset-0 bg-[#E0B25B] blur-2xl opacity-40 rounded-full" />
            <Users className="relative w-8 h-8 text-[#E0B25B]" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          Partner With Us
        </h2>

        {/* Subtext */}
        <p className="text-lg text-[#384759] mb-10">
          Join us in bringing authentic global products to the UAE market. Let's
          build something great together.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0A1624] hover:bg-[#182437] text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(224,178,91,0.25)]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
