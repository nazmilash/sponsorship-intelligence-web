import { content } from '@/content.config';
import Image from 'next/image';

export default function SneakPeek() {
    const { sneakPeek } = content;

    return (
        <section className="py-20 bg-slate-50">
            <div className="utility-container">
                <h2 className="text-center mb-12">{sneakPeek.title}</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Card A: CV Template Preview */}
                    <div className="utility-card p-6">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold mb-2">{sneakPeek.cvCard.label}</h3>
                            <p className="text-sm text-slate-600">{sneakPeek.cvCard.subtext}</p>
                        </div>

                        <div className="blur-bottom relative bg-slate-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                            <div className="p-8">
                                <div className="bg-white shadow-sm rounded-lg p-6 mb-4">
                                    <div className="text-center border-b pb-4 mb-4">
                                        <h4 className="text-2xl font-bold mb-1">Your Name</h4>
                                        <p className="text-sm text-slate-600">LinkedIn • Email • Phone • Location</p>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="font-bold text-sm uppercase tracking-wide mb-2 text-blue-600">Professional Summary</h5>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            Results-driven [Your Role] with [X] years of experience in [Industry/Field].
                                            Proven track record of [Key Achievement]. Seeking a Skilled Worker visa-sponsored
                                            role in the UK to leverage expertise in [Skills].
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="font-bold text-sm uppercase tracking-wide mb-2 text-blue-600">Experience</h5>
                                        <div className="mb-3">
                                            <div className="flex justify-between items-start mb-1">
                                                <p className="font-semibold text-sm">Job Title</p>
                                                <p className="text-xs text-slate-600">Month Year – Present</p>
                                            </div>
                                            <p className="text-xs text-slate-600 mb-2">Company Name, Location</p>
                                            <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                                <li className="list-disc">Achievement using action verb + metric + impact</li>
                                                <li className="list-disc">Project description with quantifiable results</li>
                                                <li className="list-disc">Responsibility highlighting relevant skills</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="font-bold text-sm uppercase tracking-wide mb-2 text-blue-600">Education</h5>
                                        <p className="font-semibold text-sm">Degree Name</p>
                                        <p className="text-xs text-slate-600">University Name • Graduation Year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card B: Database Preview */}
                    <div className="utility-card p-6">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold mb-2">{sneakPeek.databaseCard.label}</h3>
                            <p className="text-sm text-slate-600">First 4 companies from 179+ verified sponsors</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-slate-300">
                                        {sneakPeek.databaseCard.columns.map((col, idx) => (
                                            <th key={idx} className="text-left py-3 px-2 font-semibold text-slate-700">
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {sneakPeek.databaseCard.sampleData.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition">
                                            <td className="py-3 px-2">
                                                <span className="filter blur-sm select-none">{row.company}</span>
                                            </td>
                                            <td className="py-3 px-2 text-slate-700">{row.sector}</td>
                                            <td className="py-3 px-2 text-slate-600 text-xs">{row.roles}</td>
                                            <td className="py-3 px-2">
                                                <span className="text-blue-600 text-xs">🔗 Link</span>
                                            </td>
                                            <td className="py-3 px-2">
                                                <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                    ✓ {row.verified}
                                                </span>
                                            </td>
                                            <td className="py-3 px-2 text-slate-500 text-xs">{row.lastUpdated}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Unlock overlay */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 text-center">
                            <p className="text-sm font-semibold text-blue-900">🔒 Unlock 175+ more companies</p>
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <p className="text-center text-lg md:text-xl font-semibold text-slate-800 max-w-2xl mx-auto">
                    {sneakPeek.bottomLine}
                </p>
            </div>
        </section>
    );
}
