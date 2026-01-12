"use client";

import { motion } from "framer-motion";
import SuccessPipeline from "./SuccessPipeline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-12 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
                        It’s Not About Applying to 100 Jobs. <br className="hidden md:block" />
                        It’s About Applying to the <span className="text-utility-accent">Right</span> Ones.
                    </h1>

                    <p className="text-xl md:text-2xl text-utility-subtext mb-10 max-w-3xl mx-auto leading-relaxed">
                        I landed my UK job in 25 days. The secret? I stopped guessing.
                        <br className="hidden md:block" /> Access the only verified list of sponsors hiring right now.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="px-8 py-4 bg-utility-accent text-white text-lg font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                            Get The List - £15 <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-utility-subtext sm:hidden">Includes verified sponsor list & strategy guide</p>
                    </div>
                </motion.div>

                {/* Visual: Success Pipeline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white/50 backdrop-blur-sm rounded-3xl p-2 border border-utility-border/50 shadow-sm"
                >
                    <SuccessPipeline />
                </motion.div>
            </div>

            {/* Background Gradient Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-utility-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
    );
}
