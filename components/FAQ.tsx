'use client';

import { content } from '@/content.config';
import { useState } from 'react';

export default function FAQ() {
    const { faq } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="utility-container max-w-3xl">
                <h2 className="text-center mb-12">{faq.title}</h2>

                <div className="space-y-4 mb-8">
                    {faq.items.map((item, idx) => (
                        <div key={idx} className="utility-card overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition"
                            >
                                <h4 className="font-semibold text-lg pr-4">{item.question}</h4>
                                <svg
                                    className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Risk Reversal */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-slate-700 leading-relaxed">
                        {faq.riskReversal}
                    </p>
                </div>
            </div>
        </section>
    );
}
