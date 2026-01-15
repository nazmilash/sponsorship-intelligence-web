import { content } from '@/content.config';
import Image from 'next/image';

export default function MentorBio() {
    const { story } = content;

    return (
        <section className="py-20 bg-white">
            <div className="utility-container">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <div className="order-2 md:order-1">
                            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={story.image}
                                    alt="Mohammed - Creator of UK Sponsorship System"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Story Text */}
                        <div className="order-1 md:order-2">
                            <h2 className="mb-6">{story.title}</h2>
                            <div className="utility-separator mb-6"></div>
                            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                                {story.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
