'use client';

import { content } from '@/content.config';

export default function Hero() {
    return (
        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/london-hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-white/90"></div>

            <div className="utility-container relative z-10 text-center py-20">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    {/* Main Headline */}
                    <h1 className="mb-6">
                        {content.hero.headline}
                    </h1>

                    {/* Visual Separator */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full my-8"></div>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
                        {content.hero.subheadline}
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-primary inline-block mb-4"
                    >
                        {content.hero.ctaPrimary}
                    </button>

                    {/* Trust Line */}
                    <p className="text-sm md:text-base text-slate-600 font-medium">
                        {content.hero.trustLine}
                    </p>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}
