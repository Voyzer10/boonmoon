"use client";

import { Search, ShieldCheck, Truck, Package } from "lucide-react";

const steps = [
  {
    title: "Sourcing",
    description:
      "We identify and partner with trusted suppliers from around the world.",
    icon: <Search className="w-8 h-8 text-[#1D2B3A]" />,
  },
  {
    title: "Quality Check",
    description:
      "Every product undergoes rigorous quality and authenticity verification.",
    icon: <ShieldCheck className="w-8 h-8 text-[#1D2B3A]" />,
  },
  {
    title: "Logistics",
    description:
      "Efficient shipping and customs handling for seamless import to Dubai.",
    icon: <Truck className="w-8 h-8 text-[#1D2B3A]" />,
  },
  {
    title: "Delivery",
    description:
      "Products reach the UAE market ready for distribution and retail.",
    icon: <Package className="w-8 h-8 text-[#1D2B3A]" />,
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
          How We Work
        </h2>
        <p className="text-lg text-[#384759] max-w-2xl mx-auto mb-20">
          Our transparent process ensures quality, authenticity, and efficiency
          from source to market.
        </p>

        {/* Process Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[#E0B25B]/60 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center max-w-xs z-10"
            >
              {/* Icon Circle */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[#E0B25B] border-4 border-[#1D2B3A] shadow-md mb-6">
                <div className="absolute inset-0 rounded-full bg-[#E0B25B] blur-xl opacity-40" />
                <div className="relative">{step.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1D2B3A] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#384759] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
