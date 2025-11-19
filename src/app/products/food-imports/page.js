"use client";

import Image from "next/image";

export default function FoodImports() {
  return (
    <section className="min-h-screen bg-[#F9F6EE] py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">

        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1D2B3A]">
          Food Imports
        </h1>

        {/* Gold Underline */}
        <div className="w-20 h-1 bg-[#E0B25B] mx-auto mt-4 rounded-full"></div>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-[#445066] max-w-3xl mx-auto leading-relaxed">
          We bring authentic gourmet foods, spices, grains, oils, and specialty
          ingredients from trusted regions worldwide. Everything is sourced 
          directly from verified suppliers ensuring freshness, quality, and authenticity.
        </p>

        {/* Image with Premium Glow */}
        <div className="relative mx-auto mt-12">
          <div className="absolute inset-0 bg-[#E0B25B]/20 blur-3xl rounded-3xl"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl mx-auto w-full max-w-3xl">
            <Image
              src="/images/food-imports.jpg"
              alt="Food Imports"
              width={1600}
              height={900}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-md p-10 text-left border border-gray-100">
          <p className="text-[#384759] leading-relaxed mb-6">
            Our food import portfolio includes premium hand-picked items sourced 
            from regions renowned for quality — including India, Turkey, Italy, 
            Thailand, Morocco, and more.
          </p>

          <p className="text-[#384759] leading-relaxed mb-6">
            Whether you’re a restaurant, retailer, distributor, or wholesaler, 
            our wide range of food products ensures reliable supply with 
            competitive pricing.
          </p>

          <p className="text-[#384759] leading-relaxed">
            We ensure every product is quality-checked, professionally packed, 
            and shipped with care through our trusted logistics partners.
          </p>
        </div>
      </div>
    </section>
  );
}
