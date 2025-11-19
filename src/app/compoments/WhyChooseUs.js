"use client";

import { Globe, ShieldCheck, Truck, BadgePercent } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Globe className="w-7 h-7 text-[#E0B25B]" />,
      title: "Direct Global Sourcing",
      desc: "We work closely with verified suppliers worldwide, ensuring authentic, high-quality products straight from the source.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#E0B25B]" />,
      title: "Transparent Trade Practices",
      desc: "Clear pricing, consistent communication, and full visibility across sourcing, logistics, and delivery.",
    },
    {
      icon: <Truck className="w-7 h-7 text-[#E0B25B]" />,
      title: "Reliable Logistics Network",
      desc: "Trusted shipping partners ensure timely deliveries with secure handling and real-time tracking.",
    },
    {
      icon: <BadgePercent className="w-7 h-7 text-[#E0B25B]" />,
      title: "Competitive Pricing Advantage",
      desc: "Exclusive global partnerships allow us to offer premium-quality products at competitive prices.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-[#0A1624] mb-4">
          Why Businesses Choose{" "}
          <span className="text-[#E0B25B]">Bonn Moon Trading</span>
        </h2>

        <div className="w-20 h-1 bg-[#E0B25B] mx-auto rounded-full mb-16"></div>

        {/* Tiles */}
        <div className="grid md:grid-cols-4 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#0A1624] 
                text-white 
                p-8 rounded-2xl
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                border border-white/10
                transition-all duration-300 ease-out
                hover:-translate-y-3 
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                hover:border-[#E0B25B]/40
                relative overflow-hidden
              "
            >
              {/* Soft Gold Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E0B25B]/5 to-transparent opacity-60"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold font-playfair mb-3 text-[#E0B25B]">
                  {item.title}
                </h3>

                <p className="text-sm font-inter text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
