"use client";

import { Eye, Zap, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Transparency",
    description:
      "We believe in open communication and clear processes. You know exactly where your products come from and how they reach you.",
    icon: <Eye className="w-8 h-8 text-[#1D2B3A]" />,
  },
  {
    title: "Simplicity",
    description:
      "Complex global trade made easy. We handle all the logistics, paperwork, and coordination so you can focus on your business.",
    icon: <Zap className="w-8 h-8 text-[#1D2B3A]" />,
  },
  {
    title: "Forward-Looking",
    description:
      "We anticipate market trends and source products that meet tomorrow's demands, keeping you ahead of the curve.",
    icon: <TrendingUp className="w-8 h-8 text-[#1D2B3A]" />,
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-[#F9F6EE]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-16">
          The principles that guide every partnership and every shipment
        </p>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-10 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="relative flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-[#E0B25B] shadow-md">
                <div className="absolute inset-0 bg-[#E0B25B] blur-xl opacity-40 rounded-xl" />
                <div className="relative">{value.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1D2B3A] mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#384759] text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
