"use client";

import Image from "next/image";

export default function Person() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#FAF6EF] to-[#EDEBE5] rounded-2xl shadow-xl backdrop-blur-md bg-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-8">
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
                                Shiv leads Bonn Moon, personally overseeing all aspects of importing goods to the UAE. She actively fosters strong ties with local distributors and businesses to facilitate successful market entry and drive growth within the UAE.
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
                            <div className="h-1 w-20 bg-[#E0B25B]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
