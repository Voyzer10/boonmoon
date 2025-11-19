"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ShoppingBag, Package, Sparkles, Box, ArrowRight } from "lucide-react";
import Footer from "../compoments/Footer";
import Header from "../compoments/Header";

export default function ProductsPage() {

  // ⭐ Add smooth scrolling when arriving with #hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1624] via-[#0A1624] to-[#1A2229]" />
        <div className="relative z-10 px-6">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-[#2A3035]/80 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              <Globe className="w-4 h-4 text-[#E0B25B]" />
              <span>Sourced from 15+ Countries</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Quality products from around the world, carefully selected for the UAE market
          </p>
        </div>
      </section>

      {/* Floating Header */}
      <Header />

      {/* ---------- EVERYDAY ESSENTIALS (Now Correctly ID-linked) ---------- */}
      <section id="everyday-essentials" className="py-24 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-[#1D2B3A] mb-4">
            Global Quality, Local Trust
          </h2>
          <p className="text-[#384759] max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            At Bonn Moon Trading, we specialize in importing premium products across multiple
            categories...
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/everyday-essentials.jpg"
                alt="Everyday Essentials"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#F5EAD3] rounded-lg">
                <ShoppingBag className="w-5 h-5 text-[#1D2B3A]" />
              </div>
              <h3 className="text-3xl font-bold text-[#1D2B3A]">
                Everyday Essentials
              </h3>
            </div>

            <p className="text-[#384759] leading-relaxed text-lg">
              Premium household and personal care products sourced from trusted global brands.
            </p>

            <ul className="list-disc list-inside text-[#384759] space-y-2 text-base">
              <li>Household cleaning products</li>
              <li>Personal care items</li>
              <li>Paper products and tissues</li>
              <li>Laundry and fabric care</li>
              <li>Air fresheners and sanitizers</li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-[#E0B25B] hover:bg-[#D4A84E] text-[#1D2B3A] font-semibold px-6 py-3 rounded-lg mt-4 shadow-md transition">
              Inquire About This Category
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- FOOD IMPORTS ---------- */}
      <section id="food-imports" className="py-24 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row-reverse items-center gap-12">

          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/food-imports.jpg"
                alt="Food & Beverage Imports"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#F5EAD3] rounded-lg">
                <Package className="w-5 h-5 text-[#1D2B3A]" />
              </div>
              <h3 className="text-3xl font-bold text-[#1D2B3A]">Food & Beverage Imports</h3>
            </div>

            <p className="text-[#384759] leading-relaxed text-lg">
              Authentic flavors from around the world...
            </p>

            <ul className="list-disc list-inside text-[#384759] space-y-2 text-base">
              <li>International snacks</li>
              <li>Premium beverages</li>
              <li>Specialty sauces</li>
              <li>Canned and packaged foods</li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-[#E0B25B] hover:bg-[#D4A84E] text-[#1D2B3A] font-semibold px-6 py-3 rounded-lg mt-4 shadow-md transition">
              Inquire About This Category
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- SPECIALTY GOODS ---------- */}
      <section id="specialty-goods" className="py-24 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/specialty-goods.jpg"
                alt="Specialty Goods"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#F5EAD3] rounded-lg">
                <Sparkles className="w-5 h-5 text-[#1D2B3A]" />
              </div>
              <h3 className="text-3xl font-bold text-[#1D2B3A]">Specialty Goods</h3>
            </div>

            <p className="text-[#384759]">
              Unique products that stand out in the market...
            </p>

            <ul className="list-disc list-inside text-[#384759] space-y-2 text-base">
              <li>Seasonal and festive products</li>
              <li>International beauty products</li>
              <li>Premium gift items</li>
              <li>Unique imported goods</li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-[#E0B25B] hover:bg-[#D4A84E] text-[#1D2B3A] font-semibold px-6 py-3 rounded-lg mt-4 shadow-md transition">
              Inquire About This Category
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE (NO ID) ---------- */}
      <section className="py-24 bg-[#FBF7EF] text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#1D2B3A] mb-4">Why Choose Our Products?</h2>
          <p className="text-[#384759] text-lg mb-16">
            Every product we import meets our strict standards for quality and authenticity
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5EAD3] rounded-full mx-auto mb-6">
                <Box className="w-6 h-6 text-[#1D2B3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">Authentic & Genuine</h3>
              <p className="text-[#384759]">
                Direct partnerships ensure products are 100% authentic.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5EAD3] rounded-full mx-auto mb-6">
                <Globe className="w-6 h-6 text-[#1D2B3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">Global Standards</h3>
              <p className="text-[#384759]">
                All products meet UAE import regulations.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5EAD3] rounded-full mx-auto mb-6">
                <Sparkles className="w-6 h-6 text-[#1D2B3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D2B3A] mb-3">Competitive Pricing</h3>
              <p className="text-[#384759]">
                Efficient logistics = better prices for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#FBF7EF] flex justify-center">
        <div className="bg-gradient-to-b from-[#0A1624] to-[#1C252B] text-center rounded-2xl text-white p-12 max-w-4xl w-full shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stock Quality Products?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let’s discuss how we can help you source the best products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0A1624] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@bonnmoontrading.com"
              className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-[#0A1624] transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
