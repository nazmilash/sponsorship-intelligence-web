"use client";

import { User } from "lucide-react";

export default function MentorBio() {
    return (
        <section className="py-20 bg-background-alt border-y border-utility-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                    {/* Headshot Placeholder */}
                    <div className="shrink-0 relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                            <User className="w-16 h-16 text-gray-400" />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-brand-purple text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Mentor
                        </div>
                    </div>

                    {/* Bio Copy */}
                    <div className="text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">The "Ruthless Mentor" Story</h2>

                        <div className="space-y-3 text-lg text-foreground-muted leading-relaxed">
                            <p>
                                "I was an international student just like you. I wasted months applying to non-sponsors, receiving rejection after rejection."
                            </p>
                            <p className="font-medium text-foreground">
                                "Then I built a system."
                            </p>
                            <p>
                                "Now I’m a Payroll Administrator managing 1500+ employees. I’m sharing my exact targeting system so you don't repeat my mistakes."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
