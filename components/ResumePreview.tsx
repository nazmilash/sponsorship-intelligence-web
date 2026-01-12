'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { content } from '@/content.config'

export default function ResumePreview() {
    return (
        <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
            <div className="swiss-card p-12 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-black bg-gray-100 uppercase rounded-full">
                            {content.assetPreview.label}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-black mb-4">
                            {content.assetPreview.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {content.assetPreview.description}
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative p-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center min-h-[300px]"
                    >
                        {/* Abstract visual for resume */}
                        <div className="relative w-48 h-64 bg-white border border-gray-200 shadow-sm flex flex-col p-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                                <span className="font-bold text-gray-400">MK</span>
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-gray-100 rounded" />
                                <div className="w-3/4 h-2 bg-gray-100 rounded" />
                                <div className="w-full h-12 bg-transparent" />
                                <div className="w-full h-2 bg-gray-100 rounded" />
                                <div className="w-5/6 h-2 bg-gray-100 rounded" />
                            </div>
                            <div className="absolute bottom-4 right-4 text-gray-300">
                                <FileText className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
