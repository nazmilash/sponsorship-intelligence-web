import { content } from '@/content.config';
import Image from 'next/image';

export default function SocialProof() {
    const { testimonials } = content;

    return (
        <section className="py-20 bg-slate-50">
            <div className="utility-container">
                <p className="text-center text-lg text-slate-600 mb-12 font-medium max-w-2xl mx-auto">
                    {testimonials.title}
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.items.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
