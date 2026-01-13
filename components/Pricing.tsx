"use client";

import { Check, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Will this guarantee a job?",
        answer: "No. Any 'guru' who guarantees a job is lying to you. However, this GUARANTEES you stop wasting time applying to companies that cannot sponsor you, and ensures your CV actually passes the ATS filters."
    },
    {
        question: "Is it for my sector?",
        answer: "Yes. The list and template work across Tech, Finance, Data, Health, Engineering, and Marketing. If you need a skilled worker visa, this system applies."
    }
];

import { content } from "@/content.config";

export default function Pricing() {
    return (
        <section className="py-20 px-4 bg-background-alt border-t border-utility-border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Stop Wasting Time.<br />Start Getting Interviews.</h2>
                    <p className="text-lg text-foreground-muted">The price of a few coffees for a career-changing toolkit.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-utility-border overflow-hidden max-w-lg mx-auto mb-20 relative">
                    <div className="absolute top-0 inset-x-0 h-2 bg-brand-purple"></div>
                    <div className="p-8 md:p-12 text-center">
                        <div className="text-sm font-bold text-brand-purple mb-2 uppercase tracking-wider">Complete Access</div>
                        <div className="flex items-center justify-center gap-1 mb-6">
                            <span className="text-2xl text-foreground-muted line-through">£49</span>
                            <span className="text-5xl font-extrabold text-foreground">£39</span>
                            <span className="text-lg text-foreground-muted font-medium">/ One-Time</span>
                        </div>

                        <a
                            href={content.payhip.embedUrl}
                            className="payhip-buy-button block w-full py-4 bg-brand-purple hover:bg-brand-purple-hover text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all mb-8 cursor-pointer"
                            data-payhip
                        >
                            Get Instant Access
                        </a>

                        <div className="space-y-3 text-left max-w-xs mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-brand-green" />
                                </div>
                                <span className="text-sm text-foreground">Instant PDF & Excel Download</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-brand-green" />
                                </div>
                                <span className="text-sm text-foreground">No subscription required</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-brand-green" />
                                </div>
                                <span className="text-sm text-foreground">Includes lifetime updates</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-utility-border rounded-lg bg-white overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-foreground">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-brand-purple" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <div className={`px-4 text-foreground-muted bg-gray-50/50 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                {answer}
            </div>
        </div>
    );
}
