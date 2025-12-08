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
            {/* <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/footer-logo@2x.svg" // ✅ from /public/images/
                alt="Bonn Moon Trading Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div> */}
            <p className="text-gray-300 leading-relaxed mb-3 max-w-sm">
              Bonn Moon Trading - FZCO is a licensed Freezone company,
              established under the Dubai Integrated Economic Zones Authority with license number 63520.
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
                  Products
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/partners"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  Partner With Us
                </Link> */}
              </li>
              <li>
                <Link href="/contact"
                  className="hover:text-[#E0B25B] transition-colors">

                  Contact US
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
                <Mail className="w-4 h-4 text-[#E0B25B] flex-shrink-0" />
                <a
                  href="mailto:info@bonnmoon.com"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  info@bonnmoon.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E0B25B] flex-shrink-0" />
                <a
                  href="tel:+97152010055"
                  className="hover:text-[#E0B25B] transition-colors"
                >
                  +971 52010055
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#E0B25B] flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Building+A1,+IFZA+Business+Park,+Dubai+Silicon+Oasis,+Dubai,+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0B25B] transition-colors leading-relaxed"
                >
                  63520-001, Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE
                </a>
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
