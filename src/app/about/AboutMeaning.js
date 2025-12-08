"use client";

import Image from "next/image";
import { Moon } from "lucide-react";

export default function AboutMeaning() {
  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-square bg-black rounded-3xl">
              <Image
                src="/images/connection.jpg" // ✅ from /public/images/
                alt="Global connection map"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Label */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4E5] rounded-full shadow-sm">
              <Moon className="w-4 h-4 text-[#E0B25B]" />
              <span className="text-sm font-medium text-[#6B4E2F]">
                Our Story
              </span>
            </div> */}

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] leading-tight font-serif">
              The Meaning Behind Bonn Moon
            </h2>

            {/* Description */}
            <div className="space-y-5 text-[#384759] text-lg leading-relaxed">
              <p>
                Our name tells our story. It is believed that <span className="font-bold text-[#1D2B3A]">“Bonn”</span> in Old Irish refers to a “piece of money,” while <span className="font-bold text-[#1D2B3A]">“Bon”</span> in French means “good.” The word <span className="font-bold text-[#1D2B3A]">“Moon”</span> often symbolizes blessings of food and prosperity in a variety of cultural and traditional contexts.
              </p>
              <p>
                By combining these meanings, our name reflects our commitment to bringing “global goodness” to the UAE—fostering ethical trade, cultural exchange, and shared prosperity. This approach inspires us to build business partnerships that are both mutually beneficial and harmonious, guided by
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section >
  );
}
