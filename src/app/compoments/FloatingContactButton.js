"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#E0B25B] text-black px-5 py-3 rounded-full shadow-lg hover:bg-[#d6b45a] transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      Contact Us
    </Link>
  );
}
