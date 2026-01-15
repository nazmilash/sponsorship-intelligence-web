import { content } from '@/content.config';

export default function PainPoints() {
    const { painPoints } = content;

    return (
        <section className="py-20 bg-white">
            <div className="utility-container max-w-3xl">
                <h2 className="text-center mb-12">{painPoints.title}</h2>

                <ul className="checkmark-list space-y-4 mb-8">
                    {painPoints.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>

                <p className="text-center text-xl md:text-2xl font-bold text-slate-900 mt-10">
                    {painPoints.closingLine}
                </p>
            </div>
        </section>
    );
}
