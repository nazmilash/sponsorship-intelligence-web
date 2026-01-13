"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Lock, Table2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-foreground">
                            Stop applying to ghost jobs — target UK visa sponsors with confidence.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground-muted mb-8 leading-relaxed">
                            I landed a UK job in 25 days by stopping the guess-work. Get the only Verified Sponsorship List + ATS-Proven Template you need.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-purple hover:bg-brand-purple-hover text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Get Instant Access – £15 <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="flex flex-col gap-1 text-xs text-foreground-muted font-medium">
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-green" /> Instant Download</span>
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-brand-green" /> Updated Monthly</span>
                            </div>
                        </div>
                        <p className="text-sm text-foreground-muted/80 italic">Works for Grads • Skilled Workers • Career Switchers</p>
                    </motion.div>

                    {/* Right Visual - Split Product Shot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg relative"
                    >
                        {/* Composition Container */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] perspective-1000">

                            {/* Card 1: The Excel List (Back/Left) */}
                            <div className="absolute top-4 left-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl border border-utility-border transform -rotate-3 transition-transform hover:-rotate-1 z-10 overflow-hidden group">
                                <div className="bg-green-50 p-3 border-b border-green-100 flex items-center gap-2">
                                    <Table2 className="w-4 h-4 text-green-700" />
                                    <span className="text-xs font-bold text-green-800">Verified_Sponsors_2026.xlsx</span>
                                </div>
                                <div className="p-4 space-y-3 opacity-50 blur-[1px] group-hover:blur-0 transition-all duration-500">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex gap-2">
                                            <div className="w-24 h-3 bg-gray-100 rounded"></div>
                                            <div className="w-16 h-3 bg-gray-100 rounded"></div>
                                            <div className="w-8 h-3 bg-green-100 rounded ml-auto"></div>
                                        </div>
                                    ))}
                                </div>
                                {/* Badge */}
                                <div className="absolute bottom-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Verified Jan 2026
                                </div>
                            </div>

                            {/* Card 2: The Word Doc (Front/Right) */}
                            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl border border-utility-border transform rotate-3 transition-transform hover:rotate-1 z-20 overflow-hidden">
                                <div className="bg-blue-50 p-3 border-b border-blue-100 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-700" />
                                    <span className="text-xs font-bold text-blue-800">ATS_Optimized_CV.docx</span>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="w-1/3 h-4 bg-gray-900 rounded mb-6"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-2 bg-gray-200 rounded"></div>
                                        <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                                        <div className="w-4/6 h-2 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="pt-4 flex gap-2">
                                        <div className="px-2 py-1 bg-gray-100 rounded text-[10px] text-gray-500">Skills</div>
                                        <div className="px-2 py-1 bg-gray-100 rounded text-[10px] text-gray-500">Experience</div>
                                    </div>
                                </div>
                                {/* Tag */}
                                <div className="absolute top-12 right-2 bg-brand-purple/10 text-brand-purple text-[10px] font-bold px-2 py-1 rounded border border-brand-purple/20">
                                    ATS Proven
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-utility-gray/50 to-transparent -z-10"></div>
        </section>
    );
}
