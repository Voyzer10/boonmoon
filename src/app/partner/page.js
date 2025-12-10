"use client";
import { useRef } from "react";
import { Handshake, Globe, Package, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PartnerPage() {
  const aboutRef = useRef(null);
  return (
    <main className="flex flex-col min-h-screen bg-[#FBF7EF]">
      {/* 1️⃣ Hero Section */}
      <section
        ref={aboutRef}
        className="relative flex flex-col items-center justify-center text-center text-white h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1624] via-[#0D1928] to-[#1D2B3A]" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Together, let’s build bridges of trade — empowering businesses across borders
            with quality, reliability, and shared growth.
          </p>
        </div>
      </section>
      <div>
        <Header />
      </div>

      {/* 2️⃣ Why Partner With Us */}
      <section className="py-24 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-6 leading-tight">
              Why Partner with Bonn Moon Trading
            </h2>
            <p className="text-[#384759] text-lg leading-relaxed mb-6">
              We collaborate with manufacturers, distributors, and retailers to bring
              authentic, high-quality products to the UAE and MENA region. Our partnership
              model is built on transparency, shared value, and long-term success.
            </p>
            <p className="text-[#384759] text-lg leading-relaxed">
              Whether you are a brand looking to expand globally or a business seeking
              reliable sourcing partners — we make international trade simple and rewarding.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#F5EAD3] rounded-full">
                <Handshake className="w-6 h-6 text-[#1D2B3A]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1D2B3A] mb-2">
                  Trusted by Global Brands
                </h3>
                <p className="text-[#384759] text-base leading-relaxed">
                  We’ve built partnerships with suppliers and clients in
                  <span className="font-semibold"> 15+ countries</span> — ensuring
                  smooth logistics and unmatched product quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Partnership Benefits */}
      <section className="py-24 bg-[#FBF7EF]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">
            Partnership Benefits
          </h2>
          <p className="text-[#384759] text-lg">
            Our global infrastructure and expertise help your business grow faster and smarter
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="w-6 h-6 text-[#1D2B3A]" />,
              title: "Global Reach",
              desc: "Access our strong international network of suppliers, distributors, and logistics partners.",
            },
            {
              icon: <Package className="w-6 h-6 text-[#1D2B3A]" />,
              title: "End-to-End Support",
              desc: "From sourcing and customs to warehousing and distribution — we handle it all for you.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-[#1D2B3A]" />,
              title: "Business Growth",
              desc: "Expand your market presence with reliable imports and exports tailored to your needs.",
            },
            {
              icon: <Handshake className="w-6 h-6 text-[#1D2B3A]" />,
              title: "Long-Term Trust",
              desc: "We believe in ethical trade and transparent collaboration — ensuring mutual success.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#F5EAD3] rounded-full mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1D2B3A] text-center mb-2">{item.title}</h3>
              <p className="text-[#384759] text-center leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Partnership Process / How It Works */}
      <section className="py-24 bg-[#FBF7EF]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] mb-4">How We Work</h2>
          <p className="text-[#384759] text-lg">
            Simple, structured, and transparent process for every new partner
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-10">
          {[
            {
              step: "1",
              title: "Initial Consultation",
              desc: "We discuss your business goals, product requirements, and target markets.",
            },
            {
              step: "2",
              title: "Sourcing & Proposal",
              desc: "Our experts identify suppliers and create a detailed proposal for your review.",
            },
            {
              step: "3",
              title: "Agreement & Onboarding",
              desc: "We finalize the partnership terms and begin seamless operations together.",
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center text-white font-bold rounded-full bg-gradient-to-b from-[#0A1624] to-[#C7A33F] shadow-md text-xl">
                {step.step}
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#1D2B3A] mb-2">{step.title}</h3>
                <p className="text-[#384759]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ Final CTA */}
      <section className="py-20 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="rounded-3xl bg-gradient-to-b from-[#0A1624] to-[#1F2C39] text-white text-center py-16 px-6 md:px-12">
            <h2 className="text-4xl font-bold mb-6">Become Our Partner Today</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our global trade network and unlock new opportunities for your business
              across continents. Let’s grow together — ethically and sustainably.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F5EAD3] text-[#0A1624] font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#EAD59B] transition"
              >
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="border border-[#F5EAD3] text-[#F5EAD3] font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#F5EAD3] hover:text-[#0A1624] transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
