"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, Star, MoveRight } from "lucide-react";

export default function GhostJobGrid() {
    return (
        <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Card 1: The Problem (Large - Spans 2 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 utility-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between group"
                >
                    <div className="z-10 relative">
                        <h3 className="text-2xl font-bold mb-2">The "Ghost Job" Trap</h3>
                        <p className="text-utility-subtext text-lg max-w-md">
                            Most students apply to 100+ jobs. They hear nothing because 40% of those listings aren't even real.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-red-50/50 flex flex-col items-center justify-center gap-4 opacity-50 group-hover:opacity-80 transition-opacity">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex gap-2">
                                <X className="w-6 h-6 text-red-400" />
                                <div className="w-24 h-6 bg-red-100 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Card 2: The Solution (Standard) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="utility-card rounded-2xl p-8 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 border-utility-accent/20"
                >
                    <div>
                        <div className="bg-green-100 w-fit px-3 py-1 rounded-full text-green-700 text-xs font-bold mb-4 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> VERIFIED
                        </div>
                        <h3 className="text-xl font-bold">Jan 2026 List</h3>
                        <p className="text-utility-subtext mt-2 text-sm">Target only companies actively hiring international talent now.</p>
                    </div>
                    <div className="space-y-2 mt-4 opacity-100 blur-[0.5px]">
                        <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm">
                            <div className="w-4 h-4 rounded-full bg-utility-accent"></div>
                            <div className="h-2 w-20 bg-gray-100 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm">
                            <div className="w-4 h-4 rounded-full bg-utility-accent"></div>
                            <div className="h-2 w-20 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: The Mentality (Standard) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="utility-card rounded-2xl p-8 flex flex-col justify-center items-center text-center bg-utility-black"
                >
                    <h3 className="text-3xl font-bold tracking-tight">
                        Stop <span className="text-utility-subtext line-through">Guessing</span>.
                    </h3>
                    <h3 className="text-3xl font-bold tracking-tight text-utility-accent mt-1">
                        Start Strategizing.
                    </h3>
                </motion.div>

                {/* Card 4: Social Proof (Large - Spans 2 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-2 utility-card rounded-2xl p-8 flex flex-row items-center justify-between"
                >
                    <div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <blockquote className="text-xl font-medium max-w-lg">
                            "I applied to 4 jobs from the list. Got 2 interviews. Landed my Tier 2 visa in 25 days."
                        </blockquote>
                        <p className="font-bold mt-4 text-utility-accent">— Former Student, Now Consultant</p>
                    </div>
                    <div className="hidden md:flex h-24 w-24 bg-utility-gray rounded-full items-center justify-center">
                        <span className="text-2xl font-bold text-utility-subtext">25d</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
