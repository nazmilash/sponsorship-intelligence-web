import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Ronak Desai",
        role: "Accounting Professional",
        image: "/RONAK_PFP.png",
        quote: "Mohammed helped me tailor both my CV and LinkedIn profile to match UK job standards, and the results were immediate. His advice was clear, practical, and directly aligned with what recruiters look for."
    },
    {
        name: "Tidathip Phommachan",
        role: "Data Science | Asia-Pacific Focus",
        image: "/TIDATHIP_PFP.jpeg",
        quote: "I recently had the absolute pleasure of receiving a CV review from Mohammed—and I can confidently say it was one of the most valuable 60 minutes I’ve spent on my job search."
    },
    {
        name: "Ashin Cherian",
        role: "Software Engineer",
        image: "/ASHIN_PFP.jpeg", // Placeholder logic will handle if missing
        quote: "Transformed my CV into a highly effective tool. The template is actually ATS friendly unlike others."
    },
    {
        name: "Sneha Kumar",
        role: "MSc Management",
        image: "/placeholder_pfp.png",
        quote: "Results were immediate... led to multiple interview invites. I finally stopped questioning if my CV was the problem."
    },
    {
        name: "Toyin Chaytor",
        role: "Data Analyst",
        image: "/TOYIN_PFP.jpeg",
        quote: "Difference was clear right away... knew exactly how to present my experience to UK employers."
    },
    {
        name: "Syeda Umme",
        role: "International Student",
        image: "/SYEDA_PFP.jpeg",
        quote: "Empowered me to regain my confidence. I know exactly which companies to target now."
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 px-4 bg-white border-t border-utility-border">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Success Stories
                    </h2>
                    <p className="text-gray-500">Real students, real results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-purple/10 group-hover:text-brand-purple/20 transition-colors" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden relative border border-gray-200">
                                    {/* Fallback to initial if image fails (handled by next/image usually) - Assuming existing images */}
                                    {t.image.includes("placeholder") ? (
                                        <div className="w-full h-full flex items-center justify-center text-xl font-bold text-brand-purple bg-purple-50">
                                            {t.name.charAt(0)}
                                        </div>
                                    ) : (
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 font-serif leading-tight">{t.name}</div>
                                    <div className="text-xs text-gray-500 mt-1 line-clamp-1">{t.role}</div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 text-orange-400 fill-orange-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic text-sm leading-relaxed flex-grow">
                                "{t.quote}"
                            </p>

                            <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                                Verified Client
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
