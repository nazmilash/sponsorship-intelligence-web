import { FileCheck, ListFilter } from "lucide-react";

export default function Deliverables() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What's Inside</h2>
                    <p className="text-foreground-muted">Two tools designed to solve the two biggest problems: Targeting & Formatting.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: The Strategy */}
                    <div className="utility-card p-8 rounded-xl flex flex-col items-start hover:border-brand-purple/50 transition-colors group">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                            <ListFilter className="w-6 h-6 text-brand-purple" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">The Strategy</h3>
                        <p className="text-foreground-muted mb-4">Verified Jan 2026 List. Filtered for real hiring signals.</p>
                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-center gap-2">✓ 50+ Verified Companies</li>
                            <li className="flex items-center gap-2">✓ Filtered by Sector</li>
                            <li className="flex items-center gap-2">✓ Direct Career Page Links</li>
                        </ul>
                    </div>

                    {/* Card 2: The Tool */}
                    <div className="utility-card p-8 rounded-xl flex flex-col items-start hover:border-blue-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                            <FileCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">The Tool</h3>
                        <p className="text-foreground-muted mb-4">The exact Word doc format that got me hired.</p>
                        <ul className="space-y-2 text-sm text-foreground-muted">
                            <li className="flex items-center gap-2">✓ Applicant Tracking System (ATS) Friendly</li>
                            <li className="flex items-center gap-2">✓ Clean, No-Nonsense Formatting</li>
                            <li className="flex items-center gap-2">✓ Commentary on "Why This Works"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
