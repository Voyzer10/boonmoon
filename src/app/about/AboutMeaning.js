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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4E5] rounded-full shadow-sm">
              <Moon className="w-4 h-4 text-[#E0B25B]" />
              <span className="text-sm font-medium text-[#6B4E2F]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] leading-tight font-serif">
              The Meaning Behind Bonn Moon
            </h2>

            {/* Description */}
            <div className="space-y-5 text-[#384759] text-lg leading-relaxed">
              <p>
                Our name tells our story.{" "}
                <span className="font-semibold text-[#1D2B3A]">"Bonn"</span>{" "}
                comes from the French word <em>"Bon"</em> meaning "good," while{" "}
                <span className="font-semibold text-[#1D2B3A]">"Moon"</span>{" "}
                represents the blessings of food and prosperity in Vedic
                astrology.
              </p>

              <p>
                Together, they embody our mission: to bring global goodness to
                the UAE market through transparent, simple, and forward-thinking
                trade practices.
              </p>

              <p>
                We source authentic products directly from their countries of
                origin, ensuring quality, authenticity, and fair trade at every
                step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
