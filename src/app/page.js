"use client";

import { useRef } from "react";

import Hero from "./compoments/Hero";
import About from "./compoments/WhyChooseUs";
import WhatWeBring from "./compoments/WhatWeBring";
import HowWeWork from "./compoments/HowWeWork";
import CoreValues from "./compoments/CoreValues";
import CallToAction from "./compoments/CallToAction";
import Footer from "./compoments/Footer";
import WhyChooseUs from "./compoments/WhyChooseUs";

export default function Home() {

  const aboutRef = useRef(null);

  return (
    <div className="relative">
      <Hero />

      <div className="mt-0"></div> {/* removed the self-closing bug */}

      
      <WhyChooseUs/>
      <WhatWeBring />
      <HowWeWork />
      <CallToAction />
      <Footer />
    </div>
  );
}
