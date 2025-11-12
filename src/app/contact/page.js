"use client";
import { useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "../compoments/Footer";
import Header from "../compoments/Header";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    if (!form.name || !form.email || !form.message) {
      return setStatus({ loading: false, error: "Please fill all required fields.", success: "" });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus({ loading: false, success: "Message sent successfully!", error: "" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Something went wrong.", success: "" });
    }
  }
  const [showHeader, setShowHeader] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        // ✅ Show header when hero scrolls out of view
        setShowHeader(rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <main className="flex flex-col min-h-screen">
      {/* 1️⃣ Hero Section */}
      <section 
      ref={aboutRef}
      className="relative flex flex-col items-center justify-center text-center text-white h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1624] via-[#0A1624] to-[#1A2229]" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's start a conversation about bringing quality products to your market.
          </p>
        </div>
      </section>
       {/* Floating Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <Header />
      </div>

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
                    <a
                      href="mailto:info@bonnmoontrading.com"
                      className="text-[#384759] hover:text-[#E0B25B]"
                    >
                      info@bonnmoontrading.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EDEBE5] rounded-full">
                    <Phone className="w-5 h-5 text-[#1D2B3A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D2B3A]">Phone</p>
                    <p className="text-[#384759]">+971 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#EDEBE5] rounded-full">
                    <MapPin className="w-5 h-5 text-[#1D2B3A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D2B3A]">Location</p>
                    <p className="text-[#384759]">Dubai, United Arab Emirates</p>
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

                {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
                {status.success && <p className="text-green-600 text-sm">{status.success}</p>}

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

      {/* 3️⃣ Location Section */}
      <section className="py-24 bg-[#FBF7EF] border-t border-[#EDEBE5]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D2B3A] mb-2">Visit Our Location</h2>
          <p className="text-[#384759]">
            Find us in the heart of Dubai&apos;s trading district
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-[#EDEBE5] rounded-2xl shadow-sm py-24 text-center">
          <MapPin className="w-12 h-12 text-[#0A1624] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#1D2B3A] mb-2">
            Dubai, United Arab Emirates
          </h3>
          <p className="text-[#384759]">Exact location shared upon inquiry</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
