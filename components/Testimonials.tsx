import { content } from '@/content.config';
import Image from 'next/image';

export default function Testimonials() {
    const { testimonials } = content;

    return (
        <section className="py-24 bg-white">
            <div className="utility-container">
                <div className="text-center mb-16">
                    <h2 className="mb-4">{testimonials.title}</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {testimonials.subtitle}
                    </p>
                </div>

                {/* Single Column Stacked Layout */}
                <div className="max-w-4xl mx-auto space-y-4 mb-16">
                    {testimonials.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-transparent"
                        >
                            <div className="relative w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                />
                            </div>
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
