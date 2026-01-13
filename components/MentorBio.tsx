"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MentorBio() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 relative inline-block">
                            My Journey
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-purple opacity-30 rounded-full"></span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans">
                            <p>
                                I was an international student just like you. I wasted months applying to non-sponsors, receiving rejection after rejection.
                            </p>
                            <p className="font-bold text-brand-purple text-xl">
                                Then I built a system.
                            </p>
                            <p>
                                Now I’m a Payroll Supervisor managing 1500+ employees. I’m sharing my exact targeting system so you don't repeat my mistakes.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                            <div className="text-sm font-bold text-gray-900 uppercase tracking-widest border-l-4 border-brand-purple pl-3">
                                Mohammed Kokkancherry
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Circular Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow"></div>
                            <div className="absolute -inset-4 rounded-full border border-gray-100"></div>

                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <Image
                                    src="/MK_PFP.png"
                                    alt="Mohammed Kokkancherry"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce-subtle">
                                <span className="text-2xl">🇬🇧</span>
                                <div className="text-xs font-bold text-gray-900 leading-tight">
                                    UK <br />Settled
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
