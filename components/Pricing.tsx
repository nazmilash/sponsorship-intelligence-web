import { content } from '@/content.config';

export default function Pricing() {
    const { finalCTA, payhip } = content;

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="utility-container text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white mb-8">{finalCTA.headline}</h2>

                    <div className="mb-8">
                        <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                            ⚠️ {content.pricing.urgencyText}
                        </span>

                        <div className="flex items-center justify-center gap-4 mb-2">
                            <span className="text-blue-200 text-2xl line-through decoration-red-500 decoration-2">{content.pricing.original}</span>
                            <span className="text-white text-5xl font-extrabold">{content.pricing.current}</span>
                        </div>
                    </div>

                    <a
                        href={payhip.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-slate-100 transition shadow-2xl hover:scale-105 transform duration-300 mb-6"
                    >
                        {finalCTA.ctaPrimary} {content.pricing.current}
                    </a>

                    <p className="text-blue-100 text-lg">
                        {finalCTA.trustLine}
                    </p>
                </div>
            </div>
        </section>
    );
}
