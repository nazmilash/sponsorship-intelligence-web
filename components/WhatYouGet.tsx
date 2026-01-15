import { content } from '@/content.config';

export default function WhatYouGet() {
    const { whatYouGet } = content;

    return (
        <section className="py-20 bg-slate-50">
            <div className="utility-container">
                <h2 className="text-center mb-16">What You Get</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Box 1: ATS CV System */}
                    <div className="utility-card p-8 bg-gradient-to-br from-white to-blue-50">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{whatYouGet.box1.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{whatYouGet.box1.intro}</p>
                        </div>

                        <ul className="space-y-3">
                            {whatYouGet.box1.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✓</span>
                                    <span className="text-slate-700">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Box 2: Sponsorship Company List */}
                    <div className="utility-card p-8 bg-gradient-to-br from-white to-green-50">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{whatYouGet.box2.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{whatYouGet.box2.intro}</p>
                        </div>

                        <ul className="space-y-3">
                            {whatYouGet.box2.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold text-lg mt-1 flex-shrink-0">✓</span>
                                    <span className="text-slate-700">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Power Line */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-xl md:text-2xl font-bold text-slate-900 border-t-4 border-blue-600 pt-8">
                        {whatYouGet.powerLine}
                    </p>
                </div>
            </div>
        </section>
    );
}
