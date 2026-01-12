'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function ResumeWheel() {
    const cards = [1, 2, 3, 4, 5]

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-visible">
            <div className="absolute inset-0 bg-utility-black blur-xl opacity-50 z-0"></div>

            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="absolute z-10 w-48 h-64 bg-utility-gray/90 border border-utility-border rounded-lg p-4 shadow-2xl backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        rotate: [0, 5, -5, 0],
                        y: [0, -20, 0],
                        x: [(index - 2) * 60, (index - 2) * 80, (index - 2) * 60],
                        scale: [0.9, 1, 0.9],
                        zIndex: index === 2 ? 20 : 10
                    }}
                    transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "easeInOut"
                    }}
                >
                    {/* Abstract Resume Content */}
                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
                        <div className="w-8 h-8 rounded-full bg-utility-border"></div>
                        <div className="space-y-1">
                            <div className="w-20 h-2 bg-utility-border rounded"></div>
                            <div className="w-12 h-2 bg-utility-border/50 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-utility-border/30 rounded"></div>
                        <div className="w-full h-2 bg-utility-border/30 rounded"></div>
                        <div className="w-3/4 h-2 bg-utility-border/30 rounded"></div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <FileText className="text-utility-accent h-6 w-6 opacity-50" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
