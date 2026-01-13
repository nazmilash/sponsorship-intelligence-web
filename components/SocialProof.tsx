import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sneha Kumar",
        role: "MSc Management",
        quote: "Results were immediate... led to multiple interview invites. I finally stopped questioning if my CV was the problem."
    },
    {
        name: "Toyin Chaytor",
        role: "Data Analyst",
        quote: "Difference was clear right away... knew exactly how to present my experience to UK employers."
    },
    {
        name: "Ashin Cherian",
        role: "Software Engineer",
        quote: "Transformed my CV into a highly effective tool. The template is actually ATS friendly unlike others."
    },
    {
        name: "Mathangi Vijayakumar",
        role: "Marketing Grad",
        quote: "Optimized my CV in a very short span... amazing teacher! The sponsorship list is a goldmine."
    },
    {
        name: "Ronak Desai",
        role: "Finance Professional",
        quote: "Advice was clear, practical and directly aligned with recruiters. No fluff, just results."
    },
    {
        name: "Syeda Umme",
        role: "International Student",
        quote: "Empowered me to regain my confidence. I know exactly which companies to target now."
    }
];

export default function SocialProof() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Don't take my word for it.</h2>
                    <p className="text-foreground-muted">Join students landing jobs at Deloitte, Barclays, and more.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="utility-card p-6 rounded-xl break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 text-orange-400 fill-orange-400" />
                                ))}
                            </div>
                            <p className="text-foreground mb-6 font-medium leading-relaxed">"{t.quote}"</p>
                            <div className="flex items-center gap-3 border-t border-utility-border pt-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-xs font-bold text-brand-purple">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="text-sm">
                                    <div className="font-bold text-foreground">{t.name}</div>
                                    <div className="text-xs text-foreground-muted">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
