import { content } from '@/content.config';
import { Search, Clock, FileX, Calendar } from 'lucide-react';

export default function PainPoints() {
    const { painPoints } = content;

    const icons = [Search, FileX, Clock, Calendar];
    const iconColors = ['text-blue-600', 'text-red-600', 'text-amber-600', 'text-purple-600'];

    return (
        <section className="py-20 bg-white">
            <div className="utility-container">
                <h2 className="text-center mb-12">{painPoints.title}</h2>

                {/* 2x2 Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {painPoints.points.map((point, idx) => {
                        const Icon = icons[idx];
                        return (
                            <div
                                key={idx}
                                className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`${iconColors[idx]} flex-shrink-0`}>
                                        <Icon size={32} strokeWidth={2} />
                                    </div>
                                    <p className="text-left text-slate-700 leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-xl md:text-2xl font-bold text-slate-900 max-w-2xl mx-auto">
                    {painPoints.closingLine}
                </p>
            </div>
        </section>
    );
}
