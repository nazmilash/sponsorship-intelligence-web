import { content } from '@/content.config';
import Image from 'next/image';

export default function Testimonials() {
    const { testimonials } = content;

    return (
        <section className="py-24 bg-slate-50">
            <div className="utility-container">
                <div className="text-center mb-16">
                    <h2 className="mb-4">{testimonials.title}</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {testimonials.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {testimonials.items.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                            {/* For real screenshots, we show the image. For placeholders, we simulate a card */}
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {/* Optional: Add name/role if available and not just a screenshot */}
                            {item.name && (
                                <div className="mt-4 text-center">
                                    <p className="font-semibold text-slate-900">{item.name}</p>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href={testimonials.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <span>{testimonials.ctaText}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
