"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "../compoments/Footer";
import Header from "../compoments/Header";

export default function ContactPage() {
  const aboutRef = useRef(null);

  // ✅ FIX: Add form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ FIX: Add submission status state
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    if (!form.name || !form.email || !form.message) {
      return setStatus({
        loading: false,
        error: "Please fill all required fields.",
        success: "",
      });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setStatus({
        loading: false,
        success: "Message sent successfully!",
        error: "",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        error: err.message || "Something went wrong.",
        success: "",
      });
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1️⃣ Hero Section */}
      <section
        ref={aboutRef}
        className="relative flex flex-col items-center justify-center text-center text-white h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1624] via-[#0A1624] to-[#1A2229]" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's start a conversation about bringing quality products to your market.
          </p>
        </div>
      </section>

      {/* Floating Header */}
      <Header />

      {/* 2️⃣ Contact Info + Form */}
      <section className="py-24 bg-[#FBF7EF]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1D2B3A] mb-4">Contact Information</h2>
              <p className="text-[#384759] mb-10 max-w-md">
                Reach out to us through any of these channels. We're here to help you find the
                perfect products for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EDEBE5] rounded-full">
                    <Mail className="w-5 h-5 text-[#1D2B3A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D2B3A]">Email</p>
                    <a href="mailto:info@bonnmoon.com" className="text-[#384759] hover:text-[#E0B25B]">
                      info@bonnmoon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EDEBE5] rounded-full">
                    <Phone className="w-5 h-5 text-[#1D2B3A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D2B3A]">Phone</p>
                    <p className="text-[#384759]">+971 52010055</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EDEBE5] rounded-full">
                    <MapPin className="w-5 h-5 text-[#1D2B3A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D2B3A]">Location</p>
                    <p className="text-[#384759]">63520-001, Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE,</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-semibold text-[#1D2B3A] mb-2">Business Hours</p>
                  <ul className="text-[#384759] space-y-1 text-sm">
                    <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
                    <li>Saturday: 10:00 AM – 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-md p-10 border border-[#EDEBE5]">
              <h3 className="text-2xl font-bold text-[#1D2B3A] mb-8">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#1D2B3A] mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E6E2D9] bg-[#FAF6EF] text-[#1D2B3A] focus:outline-none focus:ring-2 focus:ring-[#E0B25B]/40"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#1D2B3A] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E6E2D9] bg-[#FAF6EF] text-[#1D2B3A] focus:outline-none focus:ring-2 focus:ring-[#E0B25B]/40"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#1D2B3A] mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E6E2D9] bg-[#FAF6EF] text-[#1D2B3A] focus:outline-none focus:ring-2 focus:ring-[#E0B25B]/40"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#1D2B3A] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-[#E6E2D9] bg-[#FAF6EF] text-[#1D2B3A] focus:outline-none focus:ring-2 focus:ring-[#E0B25B]/40 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Status Messages */}
                {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
                {status.success && <p className="text-green-600 text-sm">{status.success}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-[#E0B25B] hover:bg-[#D4A84E] text-[#1D2B3A] font-semibold py-3 rounded-lg transition"
                >
                  <Send className="w-4 h-4" />
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </main>
  );
}
