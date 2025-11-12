"use client";

import { Globe2, Sparkles } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-16">
          Building bridges between authentic global products and the UAE market
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#FBF7EF] rounded-2xl p-10 shadow-sm border border-[#F2E9DA] text-left hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#E0B25B]/20 rounded-lg mb-6">
              <Globe2 className="w-6 h-6 text-[#E0B25B]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D2B3A] mb-4">
              Our Mission
            </h3>
            <p className="text-[#384759] text-base leading-relaxed">
              To connect authentic products from around the world to the UAE
              market with complete transparency and care, ensuring every product
              tells its origin story and maintains the highest standards of
              quality and authenticity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#FBF7EF] rounded-2xl p-10 shadow-sm border border-[#F2E9DA] text-left hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#E0B25B]/20 rounded-lg mb-6">
              <Sparkles className="w-6 h-6 text-[#E0B25B]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1D2B3A] mb-4">
              Our Vision
            </h3>
            <p className="text-[#384759] text-base leading-relaxed">
              To become the most trusted bridge between global authentic goods
              and the UAE market, known for our commitment to transparency,
              ethical sourcing, and bringing the world's best products to local
              consumers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
