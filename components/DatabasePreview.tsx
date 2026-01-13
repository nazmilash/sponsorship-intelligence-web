"use client";

import { Lock } from "lucide-react";

const sampleCompanies = [
    { name: "Barclays", role: "Graduate Analyst", sector: "Finance" },
    { name: "Deloitte", role: "Consultant", sector: "Consulting" },
    { name: "KPMG", role: "Audit Associate", sector: "Accounting" },
    { name: "HSBC", role: "Commercial Banking", sector: "Banking" },
    { name: "PwC", role: "Tax Associate", sector: "Auditing" },
];

import { content } from "@/content.config";

export default function DatabasePreview() {
    return (
        <section className="py-20 bg-background-alt border-y border-utility-border">
            <div className="w-full max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold mb-2">Sneak Peek: The Database</h3>
                    <p className="text-utility-subtext">Real companies. Real roles. Real sponsorship.</p>
                </div>

                <div className="utility-card rounded-xl overflow-hidden relative shadow-md">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-utility-gray text-foreground font-semibold border-b border-utility-border">
                                <tr>
                                    <th className="px-6 py-4 w-1/3">Company</th>
                                    <th className="px-6 py-4 w-1/3">Role</th>
                                    <th className="px-6 py-4 w-1/3">Sector</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {sampleCompanies.map((company, index) => (
                                    <tr key={index} className={`transition-opacity ${index >= 2 ? "opacity-40 blur-[2px] select-none" : ""}`}>
                                        <td className="px-6 py-4 font-medium text-foreground">{company.name}</td>
                                        <td className="px-6 py-4 text-foreground-muted">{company.role}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                {company.sector}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Gradient Lock Overlay */}
                    <div className="absolute inset-0 top-16 bg-gradient-to-b from-transparent via-white/60 to-white flex flex-col items-center justify-end pb-12">
                        <div className="text-center">
                            <a
                                href={content.payhip.embedUrl}
                                className="payhip-buy-button px-8 py-3 bg-foreground text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto mb-3 cursor-pointer"
                                data-payhip
                            >
                                <Lock className="w-4 h-4" /> Unlock Full List of 50+ Companies
                            </a>
                            <p className="text-xs text-foreground-muted font-medium">Join other students getting interviewed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
