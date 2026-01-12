"use client";

import { Lock } from "lucide-react";

const sampleCompanies = [
    { name: "Barclays", sector: "Finance", status: "Active" },
    { name: "Deloitte", sector: "Consulting", status: "Active" },
    { name: "KPMG", sector: "Accounting", status: "Active" },
    { name: "HSBC", sector: "Banking", status: "Active" },
    { name: "PwC", sector: "Auditing", status: "Active" },
];

export default function DatabasePreview() {
    return (
        <div className="w-full max-w-4xl mx-auto my-16">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">The Data You Need.</h3>
                <p className="text-utility-subtext">Stop searching. Start applying.</p>
            </div>

            <div className="utility-card rounded-xl overflow-hidden relative">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-utility-gray text-utility-text uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Sector</th>
                                <th className="px-6 py-4">Hiring Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sampleCompanies.map((company, index) => (
                                <tr key={index} className={index >= 2 ? "blur-sm opacity-50 select-none" : ""}>
                                    <td className="px-6 py-4 font-medium">{company.name}</td>
                                    <td className="px-6 py-4 text-utility-subtext">{company.sector}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {company.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Blur Overlay & CTA */}
                <div className="absolute inset-0 top-24 bg-gradient-to-b from-transparent to-white/90 flex flex-col items-center justify-end pb-12">
                    <button className="px-8 py-3 bg-utility-accent text-white font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Unlock The Full List - £15
                    </button>
                    <p className="text-xs text-utility-subtext mt-4">Includes verified sponsor list & access to community.</p>
                </div>
            </div>
        </div>
    );
}
