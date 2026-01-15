import { content } from '@/content.config';
import Image from 'next/image';

export default function SocialProof() {
    const { testimonials } = content;

    return (
        <section className="py-20 bg-slate-50">
            <div className="utility-container">
                <p className="text-center text-lg text-slate-600 mb-12 font-medium">
                    {testimonials.title}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.items.map((item, idx) => (
                        <div key={idx} className="utility-card p-4 bg-white">
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
