"use client";

import { useRef } from "react";

import Hero from "./components/Hero";
import About from "./components/WhyChooseUs";
import WhatWeBring from "./components/WhatWeBring";
import HowWeWork from "./components/HowWeWork";
import CoreValues from "./components/CoreValues";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {

  const aboutRef = useRef(null);

  return (
    <div className="relative">
      <Hero />

      <div className="mt-0"></div> {/* removed the self-closing bug */}


      <WhyChooseUs />
      <WhatWeBring />
      <HowWeWork />
      <CallToAction />
      <Footer />
    </div>
  );
}
