"use client";

import Image from "next/image";
import { Moon, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24 bg-[#FFFDF9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/connection.jpg"
                alt="Global trade connections"
                fill
                className="object-cover"
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
              The Meaning Behind <br /> Bonn Moon
            </h2>

            {/* Description */}
            <div className="space-y-5 text-[#384759] text-lg leading-relaxed">
              <p>
                Our name tells our story.{" "}
                <span className="font-semibold text-[#1D2B3A]">"Bonn"</span> comes
                from the French word <em>"Bon"</em> meaning "good," while{" "}
                <span className="font-semibold text-[#1D2B3A]">"Moon"</span>{" "}
                represents the blessings of food and prosperity in Vedic astrology.
              </p>


            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 bg-[#FFF4E5] px-4 py-2 rounded-lg shadow-sm">
                <Sparkles className="w-5 h-5 text-[#E0B25B]" />
                <span className="font-medium text-[#1D2B3A]">Transparency</span>
              </div>

              <div className="flex items-center gap-2 bg-[#FFF4E5] px-4 py-2 rounded-lg shadow-sm">
                <Heart className="w-5 h-5 text-[#E0B25B]" />
                <span className="font-medium text-[#1D2B3A]">Authenticity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
