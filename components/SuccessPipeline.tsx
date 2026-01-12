"use client";

import { motion } from "framer-motion";
import { FileText, Crosshair, MessageSquare, Briefcase, Banknote } from "lucide-react";

const steps = [
    { id: 1, label: "Optimised CV", icon: FileText },
    { id: 2, label: "Targeted Apply", icon: Crosshair },
    { id: 3, label: "Interview Booked", icon: MessageSquare },
    { id: 4, label: "Offer Received", icon: Briefcase },
    { id: 5, label: "Hired & Paid", icon: Banknote },
];

export default function SuccessPipeline() {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-utility-accent"
                    />
                </div>

                {/* Steps */}
                <div className="relative flex justify-between items-start">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center gap-4 z-10">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.5, duration: 0.4, type: "spring" }}
                                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-utility-border shadow-sm
                  ${index === 4 ? "bg-utility-accent text-white" : "bg-white text-utility-accent"}`}
                            >
                                <step.icon className={`w-8 h-8 ${index === 4 ? "text-white" : ""}`} />
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.5 + 0.2 }}
                                className="text-sm font-medium text-utility-text text-center max-w-[100px]"
                            >
                                {step.label}
                            </motion.span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
