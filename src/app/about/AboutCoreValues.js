"use client";

import { Sparkles, Heart, ShieldCheck } from "lucide-react";

export default function AboutCoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-16">
          The principles that guide everything we do
        </p>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Transparency */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#F2E9DA] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#E0B25B]/20 rounded-full mx-auto mb-6">
              <Sparkles className="w-6 h-6 text-[#E0B25B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">
              Transparency
            </h3>
            <p className="text-[#384759] text-base leading-relaxed">
              Complete openness about product origins, sourcing practices, and
              supply chains.
            </p>
          </div>

          {/* Authenticity */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#F2E9DA] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#E0B25B]/20 rounded-full mx-auto mb-6">
              <Heart className="w-6 h-6 text-[#E0B25B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">
              Authenticity
            </h3>
            <p className="text-[#384759] text-base leading-relaxed">
              Genuine products sourced directly from their countries of origin
              with verified quality.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#F2E9DA] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-[#E0B25B]/20 rounded-full mx-auto mb-6">
              <ShieldCheck className="w-6 h-6 text-[#E0B25B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">
              Integrity
            </h3>
            <p className="text-[#384759] text-base leading-relaxed">
              Fair trade practices, ethical partnerships, and commitment to
              doing business right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
