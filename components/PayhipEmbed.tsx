'use client'

import { content } from '@/content.config'
import { Ticket } from 'lucide-react'

export default function PayhipEmbed() {
    return (
        <section className="py-24 px-6 bg-utility-black border-t border-utility-border">
            <div className="max-w-md mx-auto">
                <div className="bg-utility-black border border-white/20 p-8 md:p-12 relative overflow-hidden group hover:border-utility-accent/50 transition-colors duration-500">

                    {/* Decorators */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-utility-text"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-utility-text"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-utility-text"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-utility-text"></div>

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-utility-border rounded-full">
                            <Ticket className="w-5 h-5 text-utility-accent" />
                        </div>
                        <h3 className="text-sm font-mono text-utility-text/60 uppercase tracking-widest mb-2">Early Access</h3>
                        <div className="text-6xl font-mono font-bold text-white mb-4">£39<span className="text-2xl text-utility-text/40">GBP</span></div>
                        <p className="text-utility-text/60 text-sm">List updated monthly. One-time payment.</p>
                    </div>

                    <a
                        href={content.payhip.embedUrl}
                        className="block w-full py-4 bg-utility-accent text-white font-bold text-center uppercase tracking-widest hover:bg-red-600 transition-all hover:scale-[1.02]"
                    >
                        {content.payhip.buttonText}
                    </a>

                    <div className="mt-6 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-utility-text/30">Secured via Payhip</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
