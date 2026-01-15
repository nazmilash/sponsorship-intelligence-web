import { content } from '@/content.config';

export default function WorkWithMe() {
    const { workWithMe } = content;

    return (
        <section className="py-16 bg-white">
            <div className="utility-container max-w-3xl">
                <div className="utility-card-glass p-8 md:p-10 text-center border-2 border-blue-200">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{workWithMe.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {workWithMe.text}
                    </p>
                    <a
                        href={workWithMe.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        {workWithMe.ctaText}
                    </a>
                </div>
            </div>
        </section>
    );
}
