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
        <div className="flex justify-center mb-6">
          <Globe className="w-10 h-10 text-yellow-400" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Connecting Global <br className="hidden md:block" />
          Goodness to Dubai
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
            href="/partner"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-10">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
