"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function Person() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F1EA] rounded-full w-fit">
                            <span className="text-sm font-semibold text-[#6B4E2F] uppercase tracking-wider">
                                The “Bonn” Person
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B3A] font-serif">
                            Shiv Deol
                        </h2>

                        <div className="space-y-4 text-lg text-[#384759] leading-relaxed">
                            <p>
                                Shiv leads Bonn Moon, personally overseeing all aspects of importing goods from India to the UAE. She actively fosters strong ties with local distributors and businesses to facilitate successful market entry and drive growth within the UAE.
                            </p>
                            <p>
                                With 18 years of wide-ranging experience in investment banking, consultancy, and corporate banking throughout India and North America, Shiv offers substantial expertise to her venture.
                            </p>
                            <p>
                                Her three years working purely on commission enhanced her abilities in business development, networking, and transforming cold outreach into valuable sales leads. Drawing on her extensive technical understanding of international trade, Shiv has built reliable relationships in India's export and import industries.
                            </p>
                        </div>

                        {/* Signature or Quote decoration */}
                        <div className="pt-4">
                            {/* Optional decorative element */}
                            <div className="h-1 w-20 bg-[#E0B25B]"></div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 md:order-2 relative">
                        <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto ">
                            {/* Background accent */}
                            <div className="absolute inset-0 bg-[#E0B25B]/20 rounded-tr-[4rem] rounded-bl-[4rem] transform translate-x-4 translate-y-4 -z-10"></div>

                            <div className="relative h-full w-full overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl bg-gray-200">
                                <Image
                                    src="/images/shiv_deol.png"
                                    alt="Shiv Deol - Bonn Moon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
