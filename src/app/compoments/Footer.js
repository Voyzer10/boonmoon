"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1624] text-gray-300 pt-16 pb-10 border-t border-[#1E2A3B]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 pb-10 border-b border-[#1E2A3B]">
          {/* Left: Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/footer-logo@2x.svg" // ✅ from /public/images/
                alt="Bonn Moon Trading Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3 max-w-sm">
              Bringing Global Goodness Home. We connect authentic products from
              around the world to the UAE market with transparency and care.
            </p>
            <p className="italic text-[#E0B25B]">
              Bonn Moon — where "Bon" meets blessings
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#E0B25B] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#F5EAD3] transition">
                Home
              </Link>
            </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                  <Link href="/contact" 
                  className="hover:text-[#E0B25B] transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-[#E0B25B] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E0B25B]" />
                <a
                  href="mailto:info@bonnmoontrading.com"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  info@bonnmoontrading.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E0B25B]" />
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E0B25B]" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E2A3B] hover:bg-[#E0B25B] hover:text-[#0A1624] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E2A3B] hover:bg-[#E0B25B] hover:text-[#0A1624] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-sm text-center text-gray-400">
          © 2025 Bonn Moon Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
