"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { content } from "@/content.config";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Heavy Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/london_overlay.png')" }}
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Stop applying to ghost jobs — target UK visa sponsors with confidence.
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-sans">
                        I landed a UK job in 25 days by stopping the guess-work. Get the only Verified Sponsorship List + ATS-Proven Template you need.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href={content.payhip.embedUrl}
                            className="payhip-buy-button w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-white hover:bg-transparent hover:text-white text-lg font-serif font-bold rounded-none uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(255,255,255,0.3)]"
                            data-payhip
                        >
                            Get Access Now <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-300 font-sans tracking-wide">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Instant Download</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Updated Monthly</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Verified Sponsors</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
