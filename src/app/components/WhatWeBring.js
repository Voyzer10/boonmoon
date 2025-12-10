"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Everyday Food & Essential items",
    description: "Premium daily food and lifestyle essentials...",
    image: "/images/food-and-essentials.png",
    link: "/products#food-imports",
  },
  {
    title: "Specialty Goods",
    description: "Curated artisan products...",
    image: "/images/specialty-goods.jpg",
    link: "/products#specialty-goods",
  },
  {
    title: "Industrial supplies",
    description: "Genuine raw materials and components…",
    image: "/images/industrial-supplies.png",
    link: "/products#industrial-supplies",
  },
];

export default function WhatWeBring() {
  return (
    <section className="py-24 bg-[#F9F6EE]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4 font-playfair">
          What We Bring to UAE
        </h2>

        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-16">
          From specialty foods to everyday essentials, we source the finest
          products from their countries of origin.
        </p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl border border-gray-200 shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-500 overflow-hidden group
              "
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                  priority={index === 0}
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#1D2B3A] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#384759] text-base mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={item.link}
                  scroll={false}   // ⭐ prevents Next.js from blocking scroll-to-anchor
                  className="
                    inline-flex items-center gap-2 text-[#E0B25B]
                    font-medium transition-all duration-300 group-hover:gap-3
                  "
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
