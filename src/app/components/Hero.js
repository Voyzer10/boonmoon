"use client";

import { Globe, MousePointerClick } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('./images/hero-bg.jpg')", // <-- replace path below
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bringing Global Goodness to UAE
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          We bring the best of every country to your doorstep — authentic
          products sourced directly from their origins.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Explore Products
            <MousePointerClick className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Contact Us 
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;
