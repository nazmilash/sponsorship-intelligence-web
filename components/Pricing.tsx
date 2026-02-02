import { content } from '@/content.config';

export default function Pricing() {
    const { finalCTA, payhip } = content;

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="utility-container text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white mb-8">{finalCTA.headline}</h2>

                    {/* Context Text */}
                    <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                        {content.pricing.contextText}
                    </p>

                    {/* Price Display - Clean, No Gimmicks */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-blue-200 text-3xl line-through">{content.pricing.original}</span>
                        <span className="text-white text-6xl font-extrabold">{content.pricing.current}</span>
                    </div>

                    <p className="text-blue-100 text-sm mb-8">{content.pricing.discountText}</p>

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
