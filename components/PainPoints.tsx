"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, MessageSquare, HelpCircle } from "lucide-react";

const painPoints = [
    {
        icon: AlertTriangle,
        title: "The Visa Trap",
        description: "You waste hours applying to companies that legally cannot sponsor you."
    },
    {
        icon: FileWarning,
        title: "The ATS Black Hole",
        description: "Your CV gets rejected instantly because it's not optimized for UK software."
    },
    {
        icon: MessageSquare,
        title: "The Silent Treatment",
        description: "You send 100s of applications and get zero replies."
    },
    {
        icon: HelpCircle,
        title: "The Generic Advice",
        description: "You follow career coaches who don't understand the International Student struggle."
    }
];

export default function PainPoints() {
    return (
        <section className="py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        You are in the right place if you are facing:
                    </h2>
                    <div className="h-1 w-24 bg-brand-purple mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-start border-t-4 border-transparent hover:border-brand-purple"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-brand-purple">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
