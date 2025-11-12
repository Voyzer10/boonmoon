"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Food Imports",
    description:
      "Authentic gourmet products, spices, and specialty ingredients from around the world.",
    image: "/images/food-imports.jpg", // ✅ from /public/images/
    link: "/products/food",
  },
  {
    title: "Specialty Goods",
    description:
      "Curated artisan products and premium items that tell stories of craftsmanship.",
    image: "/images/specialty-goods.jpg",
    link: "/products/specialty",
  },
  {
    title: "Everyday Essentials",
    description:
      "Quality household products and everyday items sourced from trusted international brands.",
    image: "/images/everyday-essentials.jpg",
    link: "/products/essentials",
  },
];

export default function WhatWeBring() {
  return (
    <section className="py-24 bg-[#F9F6EE]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          What We Bring to Dubai
        </h2>
        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-16">
          From specialty foods to everyday essentials, we source the finest
          products from their countries of origin.
        </p>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#1D2B3A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#384759] text-base mb-4">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#E0B25B] font-medium hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
